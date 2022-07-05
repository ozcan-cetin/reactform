import AddInfo from './AddInfo';
import InfoList from './InfoList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [info, setInfo] = useState();
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials"

//! GET METHOD ***********
    const getInfo = async() =>{
        try {
           const {data} = await axios.get(url);
        setInfo(data) 
        } catch (error) {
            console.log(error);
        }
    }
// console.log(info);

    useEffect(()=>{
        getInfo()
    },[])

//! POST METHOD ********
    const postInfo = async(info) => {
        try {
        await axios.post(url, info)    
        } catch (error) {
        console.log(error);
        }
        getInfo()
    }

//! DELETE METHOD ********
    const deleteInfo = async(id) => {
        try {
            await axios.delete(`${url}/${id}`)
        } catch (error) {
            console.log(error);
        }
        getInfo();
    }

//! PUT(UPDATE) METHOD ********   
    const editInfo = async(id, title, desc) => {
        // const filtered = info.filter((element)=>element.id === id)
        // .map(()=>({title:title, description:desc}))
        try {
            await axios.put(`${url}/${id}`, { title, description: desc })
        } catch (error) {
            console.log(error);
        }
        getInfo();
    }

    return (
    <div>
        <AddInfo postInfo={postInfo} />
        <InfoList info={info} deleteInfo={deleteInfo} editInfo={editInfo} />
    </div>
  )
}

export default Home