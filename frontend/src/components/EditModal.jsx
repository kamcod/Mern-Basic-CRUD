import { useState } from "react";
import axios from "axios";

const EditModal = ({closePopup, id, name, desig, sal, refetchData, }) => {
    const [employee, setEmployee] = useState(name);
    const [designation, setDesignation] = useState(desig);
    const [salary, setSalary] = useState(sal);


    const editRecord = async () => {
        await axios.patch(`http://localhost:5002/getDashboardStats/${id}`, {
            name: employee,
            designation,
            salary
        })
        .then((response)=>{
            console.log("successfully updated");
            refetchData();
        })
        .catch((err)=>{
            console.log("In error", err.response)
        });
    };

 
    return (
        <div>
            <form>
                <label htmlFor="name"> Name: </label>
                <input type="text" id="name" name="name" value={employee} onChange={(e)=> setEmployee(e.target.value)}/>
                <label htmlFor="designation" > Designation: </label>
                <input type="text" id="designation" name="designation" value={designation} onChange={(e)=> setDesignation(e.target.value)}/>
                <label htmlFor="salary"> Salary</label>
                <input type="number" id="salary" name="salary" value={salary} onChange={(e)=> setSalary(e.target.value)}/>
                <button type="button" onClick={editRecord}>Add</button>
            </form>
            <button onClick={()=>closePopup()}>Close</button>
        </div>
    );
}

export default EditModal;