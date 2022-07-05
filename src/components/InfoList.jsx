import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';
import EditInfo from './EditInfo';

const InfoList = ({ info, deleteInfo, editInfo }) => {
  const [edititem, setEdititem] = useState("");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <div className="list-container">
      <table className="table table-striped">
        <thead>
          <tr className="table-header">
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>

        <tbody>
          {info?.map((item) => {
            const { id, title, description } = item;
            // console.log(item)
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                <FaEdit
                    className='cursor-pointer'
                    onClick={()=>{setEdititem(item) 
                      handleShow()}}
                  />
                  <AiFillDelete
                    className="text-danger cursor-pointer"
                    onClick={()=>deleteInfo(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditInfo editInfo={editInfo} edititem={edititem} show={show} setShow={setShow} />
    </div>
  );
};

export default InfoList;
