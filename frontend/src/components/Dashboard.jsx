import { useEffect, useState } from "react";
import axios from 'axios';

const Dashboard = () => {
    const [name, setName] = useState();
    const [designation, setDesignation] = useState();
    const [salary, setSalary] = useState();

    const getDashboardStats = async () => {
        console.log("api call")
        await axios.get('http://localhost:5002/getDashboardStats')
        .then((response)=>{
            console.log("check this", response.data)
            setName(response.data.name);
            setDesignation(response.data.designation);
            setSalary(response.data.salary);
        })
        .catch((err)=>{
            console.log("In errorrrr", err.response)
        });
        
    };

    useEffect(()=>{
        getDashboardStats();
    }, []);

    return(
        <div>
            <h2>Dashboard</h2>
            <div>
                Dashboard Stats 
                <p> <b>Name</b>: {name}</p>
                <p> <b>Designation</b>: {designation}</p>
                <p> <b>Salary</b>: {salary}</p>
            </div>
        </div>
    );
}

export default Dashboard;