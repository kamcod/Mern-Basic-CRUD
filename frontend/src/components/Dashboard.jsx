import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import EditModal from "./EditModal";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [editID, setEditID] = useState();
    const [editName, setEditName] = useState();
    const [editDesignation, setEditDesignation] = useState();
    const [editSalary, setEditSalary] = useState();

    const getDashboardStats = async () => {
        await axios.get('http://localhost:5002/getDashboardStats')
        .then((response)=>{
            setData(response.data)
        })
        .catch((err)=>{
            console.log("In error", err.response)
        });
        
    };

    const deleteThis = async (id) => {
        await axios.delete(`http://localhost:5002/getDashboardStats/${id}`)
        .then((response)=>{
            console.log("successfully deleted")
            getDashboardStats();
        })
        .catch((err)=>{
            console.log("In error", err.response)
        });
    }
    const editThis = (id, name, designation, salary) => {
        setEditModal(true);
        setEditID(id);
        setEditName(name);
        setEditDesignation(designation);
        setEditSalary(salary);
    }

    useEffect(()=>{
        getDashboardStats();
    }, []);

    return(
        <div>
           {!editModal && <div>
            <h2>Dashboard</h2>
                Dashboard Stats 
                
                {data.map(({_id, name: employeeName, designation, salary }) => {
                    return (<div key={_id} style={{width: "500px", margin: "10px", padding: "20px", textAlign: "center", border: "1px solid gray", borderRadius: "8px"}}>
                        <p><b>Name:</b> {employeeName}</p>
                        <p><b>Designation:</b> {designation}</p>
                        <p><b>Salary:</b> {salary}</p>
                        <div>
                            <button onClick={()=> deleteThis(_id)}> Delete </button>
                            <button onClick={()=> editThis(_id, employeeName, designation, salary)}> Edit</button>
                        </div>
                    </div>
                    )
                    
                })}
            </div>}
                {editModal && <EditModal closePopup={()=> setEditModal(false)} id={editID} name={editName} desig={editDesignation} sal={editSalary} refetchData={()=> getDashboardStats()}/> }
            
            
        </div>
    );
}

export default Dashboard;