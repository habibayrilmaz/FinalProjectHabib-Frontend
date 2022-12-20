import * as React from 'react';
import { Paper } from '@mui/material';


export default function PermissionList() {
    const [users,setUsers] = React.useState([]);
    const [permission, setPermission] = React.useState([]);

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
            const response = await fetch("http://localhost:8080/permission/all")
            const json = await response.json()   
            console.log(response.ok)
            if (response.ok) {
              setPermission(json)
            }
            console.log(json)
            }
            fetchProducts()
            }, [])
    

  return (
    
    <Paper className='p-3 mb-2 bg-dağk text-white' elevation={5} style ={{margin: "-150px 50px 0px 250px" ,position: "relative", textAlign:"center", backgroundColor:"grey"}}>
 
  <div className='d-flex justify-content-center align-items-center h-100'>
   <div className='text-white'>              
   <h3 className='mb-3' style={{textAlign:"center", backgroundImage:"/images/icons/school.png"}}>Kullanıcı İzinleri</h3>
   </div>
   </div>

                <div className='container p-3 mb-2 bg-light text-dark' >
                <table  className="table table-bordered table-hover ">
                <caption >İzin Listesi</caption>
                <thead className="table-dark">
                    <tr >
                    <th style={{textAlign:"left" }} scope="col">Kullanıcı ID</th>
                    <th scope="col">Kullanıcı Adı</th>
                    <th scope="col">İzin Türü</th>
                    <th scope="col">Toplam İzin Günü</th>
                    <th scope="col">İzin Başlangıç Tarihi</th>
                    <th scope="col">İzin Bitiş Tarihi</th>
                    <th scope="col">İzin Açıklaması</th>
                    <th scope="col">Dönüş Tarihi</th>
                    <th scope="col">İzin ID</th>

                    </tr>
                </thead>
                <tfoot className="table-secondary">
                <tr>
                <th style={{textAlign:"left" }} scope="col">Kullanıcı ID</th>
                <th scope="col">Kullanıcı Adı</th>
                <th scope="col">İzin Türü</th>
                <th scope="col">Toplam İzin Günü</th>
                <th scope="col">İzin Başlangıç Tarihi</th>
                <th scope="col">İzin Bitiş Tarihi</th>
                <th scope="col">İzin Açıklaması</th>
                <th scope="col">Dönüş Tarihi</th>
                <th scope="col">İzin ID</th>

                </tr>
                </tfoot>
                {permission.map((permission, index) => {

                    const user = users.filter(user =>{
                        return [user] ? permission.userId === user.id : "Unknown"
                    })

                    return(
                <tbody key={permission.id}>
                    <tr >
                    <td style={{textAlign:"left" }}>{user.map((item,index) => {return item.id})}</td>
                    <td >{user.map((item,index) => {return item.userName})}</td>
                    <td>{permission.permissionType}</td>
                    <td>{permission.totalPermissionDay}</td>
                    <td>{permission.startDatePermission}</td>
                    <td>{permission.endDatePermission}</td>
                    <td>{permission.permissionDetail}</td>
                    <td>{permission.dateOfReturn}</td>
                    <td>{permission.id}</td>
                    </tr>
                </tbody> 
                )})}
                </table>
                </div>
    </Paper>
            )
}