import { useState } from "react";
import {useNavigate} from "react-router-dom"

function AddProfilePic(){
    const[image,setImage]=useState()
    const[Pid,setPid]=useState(localStorage.getItem("Pid"))
    const navigate = useNavigate();
   
    const uploadimage = (event) => {
        event.preventDefault();
        console.log(image)
        console.log(Pid)
        const formData = new FormData();
        formData.append('file', image);
        fetch(`http://localhost:8080/patient/addimage/${Pid}`, {
          method: "POST",
          body:formData
        }).then((res) => {
          if (res.status == 200) {
            alert(" IMAGE ADDED..!");
            console.log("updated")
          }
        });
      };
    return(
    <>
    <div className="container">
                <div className="row">
                    <form onSubmit={uploadimage}>
                        <div className="form-group">
                            <input type="file"   encType="multipart/form-data" onChange={(e)=>setImage(e.target.files)} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
    </>
    )
}
export default  AddProfilePic;