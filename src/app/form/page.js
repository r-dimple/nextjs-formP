"use client"
import { useState } from "react"
import "../form.css"

export default function Page(){
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [dob,setDob] = useState('');
    const [add,setAdd] = useState('');
    const [country,setCountry] = useState('');
    const [job,setJob] = useState('');

    const submitform = async (e) =>{
        e.preventDefault();
        console.log(name,phone,dob,add,country,job)
        let result = await fetch("http://localhost:3000/api/forms",{
            method:"POST",
            body:JSON.stringify({name,phone,dob,add,country,job})
            
        });
        console.log(result)
        result= result.json();
        if(result.success){
            alert("new product added")
        }
    }

    return(
        <div>
            <form className="formm">
                <h1>Fill the Form</h1> <br/>
                <input type="text" placeholder="enter your name" value={name} className="input" onChange={(e)=>setName(e.target.value)} /> <br/>
                <input type="number" placeholder="phone number" value={phone} className="input" onChange={(e)=>setPhone(e.target.value)} /> <br/>
                <input type="calender" placeholder="MM/DD/YY" value={dob} className="input" onChange={(e)=>setDob(e.target.value)} /> <br/>
                <input type="text" placeholder="Address" value={add} className="input" onChange={(e)=>setAdd(e.target.value)} /> <br/>
                <input type="text" placeholder="Job Title" value={job} className="input" onChange={(e)=>setJob(e.target.value)}/><br/>
                <input type="text" placeholder="Country/Region" value={country} className="input" onChange={(e)=>setCountry(e.target.value)}/> <br/>
                <button type="submit" className="submit" onClick={submitform}>Submit</button>
            </form>
        </div>
    )
}