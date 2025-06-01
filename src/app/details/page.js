import Link from "next/link";

const getForm = async() =>{
    let data = await fetch("http://localhost:3000/api/forms")
    data = await data.json()
    console.log(data.result)

    return data.result;
}

export default async function Page(){
    const formmm = await getForm();
    return(
        <main>
            <h1>Forms Details</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>NAME :</td>
                        <td>PHONE NUMER :</td>
                        <td>DOB :</td>
                        <td>ADDRESS</td>
                        <td>JOB TITLE</td>
                        <td>Country/Religion</td>
                        
                     </tr>
                </thead>
                     <tbody>
                        {
                            formmm.map((item)=>(
                                <tr key={item._id}>
                                   <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.add}</td>
                                    <td>{item.job}</td>
                                     <td>{item.country}</td> 
                                     <Link href={"./form/editform"}>
                                        <td>UPDATE</td>
                                     </Link>
                                </tr>
                            ))
                        }
                    </tbody>   
                  
            </table>
         </main>   
    )
}