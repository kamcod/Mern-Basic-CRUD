import { useEffect, useState } from "react";
import axios from 'axios';

const Dashboard = () => {
    const [name, setName] = useState();

    const getDashboardStats = async () => {
        console.log("api call")
        await axios.get('http://localhost:5002/getDashboardStats')
        .then((response)=>{
            setName(response.data.name);
        })
        .catch((err)=>{
            console.log(err)
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
                <p> Name: {name}</p>
            </div>
        </div>
    );
}

export default Dashboard;