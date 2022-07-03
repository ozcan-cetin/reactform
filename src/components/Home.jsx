import AddInfo from './AddInfo';
import InfoList from './InfoList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [info, setInfo] = useState();
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials"

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

    return (
    <div>
        <AddInfo />
        <InfoList info={info} />
    </div>
  )
}

export default Home