import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [arrData, seTarrData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("http://localhost:3005/posts")
      .then((res) => seTarrData(res.data))
      .catch((err) => console.log(err));
  };

  const backHandler = () => {
    navigate("/");
  };
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:3005/posts/${id}`).then((res) => getData());
  };
  useEffect(() => {
    getData();
  }, []);
const editHandler = (id,title,author) =>{
    localStorage.setItem("id",id)
    localStorage.setItem('title',title)
    localStorage.setItem('author',author)
    navigate('/edit')
}

  return (
    <div>
      <button type="button " onClick={backHandler} className="btn btn-warning">
        ADD DATA
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {arrData.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <button type="button" onClick={()=>editHandler(item.id,item.title,item.author)} class="btn btn-info">
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteHandler(item.id)}
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
