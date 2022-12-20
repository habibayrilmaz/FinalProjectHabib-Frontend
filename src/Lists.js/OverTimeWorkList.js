import * as React from 'react';
import { Paper } from '@mui/material';


export default function OverTimeWorkList() {
    const [users,setUsers] = React.useState([]);
    const [overTime, setOverTime] = React.useState([]);

            React.useEffect(() => {
            const fetchProducts = async () => {
            const response = await fetch('http://localhost:8080/user/all')
            const json = await response.json()   
            console.log(response.ok)
            if (response.ok) {
            setUsers(json)
            }
            console.log(json)
            }
            fetchProducts()
            }, [])

         React.useEffect(() => {
            const fetchProducts = async () => {
            const response = await fetch("http://localhost:8080/over-time-work/all")
            const json = await response.json()   
            console.log(response.ok)
            if (response.ok) {
              setOverTime(json)
            }
            console.log(json)
            }
            fetchProducts()
            }, [])
    

  return (
    
    <Paper className='p-3 mb-2 bg-dağk text-white' elevation={5} style ={{margin: "-150px 50px 0px 250px" ,position: "relative", textAlign:"center", backgroundColor:"grey"}}>
     <div className='d-flex justify-content-center align-items-center h-100'>
   <div className='text-white'>              
   <h3 className='mb-3' style={{textAlign:"center", backgroundImage:"/images/icons/school.png"}}>Kullanıcı Mesaileri</h3>
   </div>
   </div>

                <div className='container p-3 mb-2 bg-light text-dark' >
                <table  className="table table-bordered table-hover ">
                <caption >Mesai Listesi</caption>
                <thead className="table-dark">
                    <tr >
                    <th style={{textAlign:"left" }} scope="col">Kullanıcı ID</th>
                    <th scope="col">Kullanıcı Adı</th>
                    <th scope="col">Mesai Tarihi</th>
                    <th scope="col">Mesai Süresi</th>
                    <th scope="col">Açıklama</th>
                    <th scope="col">Mesai ID</th>


                    </tr>
                </thead>
                <tfoot className="table-secondary">
                <tr>
                <th style={{textAlign:"left" }} scope="col">Kullanıcı ID </th>
                <th scope="col">Kullanıcı Adı</th>
                    <th scope="col">Mesai Tarihi</th>
                    <th scope="col">Mesai Süresi</th>
                    <th scope="col">Açıklama</th>
                    <th scope="col">Mesai ID</th>


                </tr>
                </tfoot>
                {overTime.map((overTime, index) => {

                    const user = users.filter(user =>{
                        return [user] ? overTime.userId === user.id : "Unknown"
                    })

                    return(
                <tbody key={overTime.id}>
                    <tr >
                    <td style={{textAlign:"left" }}>{user.map((item,index) => {return item.id})}</td>
                    <td >{user.map((item,index) => {return item.userName})}</td>
                    <td>{overTime.dateOfOverTimeWork}</td>
                    <td>{overTime.timeOfOverTimeWork}</td>
                    <td>{overTime.detailOfOverTimeWork}</td>
                    <td>{overTime.id}</td>
                    </tr>
                </tbody> 
                )})}
                </table>
                </div>
    </Paper>
            )
}