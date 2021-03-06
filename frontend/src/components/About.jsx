import axios from "axios";
import { useState } from "react";
const About = () => {

    const [employee, setEmployee] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');


    const addData = async () => {
        const data = {
            name: employee,
            designation,
            salary
        };
        await axios.post('http://localhost:5002/addNewEmployee', data)
        .then((response) =>{
            console.log("data is successfully inserted in DB")
        })
        .catch((err) => {
            console.log(err.message);
        })

    };
    return(
        <div>
            <h1>About</h1>
            <form>
                <label htmlFor="name"> Name: </label>
                <input type="text" id="name" name="name" value={employee} onChange={(e)=> setEmployee(e.target.value)}/>
                <label htmlFor="designation" > Designation: </label>
                <input type="text" id="designation" name="designation" value={designation} onChange={(e)=> setDesignation(e.target.value)}/>
                <label htmlFor="salary"> Salary</label>
                <input type="number" id="salary" name="salary" value={salary} onChange={(e)=> setSalary(e.target.value)}/>
                <button type="button" onClick={addData}>Add</button>
            </form>
        </div>
    );
}

export default About;