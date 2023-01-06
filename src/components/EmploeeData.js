import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const EmpploeeData =()=> {

   const  [emplodata, changeEmData] = useState(null);
   const navigate = useNavigate();

  const LoadEdit=(id)=>{
    navigate("/employee/edit/" + id)
   }
   
   const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
        fetch("http://localhost:8000/emploee/" + id, {
            method: "DELETE"
        }).then((res) => {
            alert('Removed successfully.')
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
        }
    }

        useEffect( ()=>{
            fetch("http://localhost:8000/emploee").then((res)=>{
                return res.json();
            }).then((resp)=>{
                changeEmData(resp)
            }).catch((err)=>{
                console.log(err.message);
            })
        },[])
    
    return(
        <div className="container">
            <div className="card">
                <div className="card-title text-center">
                    <h2> Emploee All Data </h2>
                </div>
                    <div className="addbtn">
                        <Link to="employeecreate" className="btn btn-success" >Add User +</Link>
                    </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Department</td>
                                <td>Active</td>
                            </tr>
                        </thead>
                        <tbody>
                            { emplodata && 
                                emplodata.map((iteam) =>(
                                    <tr key={iteam.id}>
                                        <td>{iteam.id}</td>
                                        <td>{iteam.name}</td>
                                        <td>{iteam.department}</td>
                                        <td>
                                            <a onClick={() => { LoadEdit(iteam.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(iteam.id) }} className="btn btn-danger">Delete</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpploeeData;