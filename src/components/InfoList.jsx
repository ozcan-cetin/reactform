import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

const InfoList = ({ info }) => {
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
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                <FaEdit
                    className="me-2 text-warning cursor-pointer"
                  />
                  <AiFillDelete
                    className="text-danger cursor-pointer"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InfoList;
