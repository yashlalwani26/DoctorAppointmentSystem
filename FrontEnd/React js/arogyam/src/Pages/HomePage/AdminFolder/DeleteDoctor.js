import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DeleteDoctor() {
  const [Did, setDid] = useState("");
  const [DeleteUser, setDeleteUser] = useState({});
  const [Msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [ErrMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem("Aid") === null) {
      navigate("/AdminPage");
    }
  }, []);

  function getDoc(event) {
    event.preventDefault();
    console.log("Inside the get All New Doctors");
    const url = "http://localhost:8080/doctor/getOneDoc/" + Did;
    fetch(url)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        if (data !== null) {
          setDeleteUser(data);
          console.log(data);
          setErrMsg(""); // Clearing error message
        } else {
          setDeleteUser({}); // Resetting user data
          setErrMsg("Please Enter correct Doctor Id");
        }
      })
      .catch((err) => {
        setDeleteUser({}); // Resetting user data
        setErrMsg("Please Enter correct Doctor Id");
      });
  }

  function deleteDoc(event) {
    event.preventDefault();
    console.log("Inside the deleteDoc function");
    const url = "http://localhost:8080/doctor/DeleteMapping/" + Did;
  
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Success") {
          setMsg("Deleted Successfully");
        } else {
          setMsg("Already Deleted");
        }
      })
      .catch((err) => {
        setMsg("");
      });
  }
  

  return (
    <>
      <div className="text-center">
        <h3>Delete Doctor</h3>
      </div>

      <h1 className="text-danger text-center">{ErrMsg}</h1>
      <div className="container-sm p-3 w-25 text-center m-auto shadow mb-5 mt-5 bg-white rounded">
        <h5>{Msg}</h5>
        <form onSubmit={getDoc}>
          <input
            placeholder="Enter Doctor ID"
            className="form-control"
            type="text"
            onChange={(e) => setDid(e.target.value)}
          />
          <button className="m-3 btn btn-primary">Submit</button>
          <div className="d-flex justify-content-center">
            <button className="btn btn-warning m-3">
              <Link to={"/AdminPageLayout"}>Back</Link>
            </button>
          </div>
        </form>
      </div>
      <table className="table table-striped table-bordered border border-dark text-center">
        <thead className="table-dark">
          <tr>
            <th> Doctor </th>
            <th>City</th>
            <th>Area</th>
            <th>Pincode</th>
            <th>Fees</th>
            <th>Practicing Since</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {DeleteUser.first_name} {DeleteUser.last_name}</td>
            <td>{DeleteUser.city}</td>
            <td>{DeleteUser.area}</td>
            <td>{DeleteUser.pincode}</td>
            <td>{DeleteUser.fees}</td>
            <td>{DeleteUser.practice_start_year}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-danger m-3" onClick={deleteDoc}>
          Delete Doctor
        </button>
      </div>
    </>
  );
}

export default DeleteDoctor;
