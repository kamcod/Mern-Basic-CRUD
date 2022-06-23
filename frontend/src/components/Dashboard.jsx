import { useEffect, useState } from "react";
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState([]);

    const getDashboardStats = async () => {
        console.log("api call")
        await axios.get('http://localhost:5002/getDashboardStats')
        .then((response)=>{
            setData(response.data)
        })
        .catch((err)=>{
            console.log("In error", err.response)
        });
        
    };

    useEffect(()=>{
        console.log("useEffect")
        //getDashboardStats();
        return console.log("return")
    }, []);

    return(
        <div>
            <h2>Dashboard</h2>
                Dashboard Stats 
                {data.map(({_id, name: employeeName, designation, salary }) => {
                    return (<div key={_id} style={{width: "500px", margin: "10px", padding: "20px", textAlign: "center", border: "1px solid gray", borderRadius: "8px"}}>
                        <p><b>Name:</b> {employeeName}</p>
                        <p><b>Designation:</b> {designation}</p>
                        <p><b>Salary:</b> {salary}</p>
                    </div>)
                    
                })}
            
        </div>
    );
}

export default Dashboard;