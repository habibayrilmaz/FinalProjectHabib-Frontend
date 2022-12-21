import * as React from 'react';
import { Paper } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';



export default function UsersList() {
    const [users,setUsers] = React.useState([]);

    const [reducerValue, forceUpdate] = useReducer(x=>x+1,0);

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
            }, [reducerValue])  

    async function DeleteOperation(id){
            const fetchProducts = async () => {
            const response = await fetch('user/'+id,{
                method: 'DELETE',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                    'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
                  }),
            })
            console.log(response.ok)
            console.log(response)
            if(response.ok){
              alert("Silme işleminiz gerçekleştirildi.")
              forceUpdate();
            }
            }
            fetchProducts()
    }        
    
  return (
    
    <Paper className='p-3 mb-2 bg-dağk text-white' elevation={5} style ={{margin: "-150px 50px 0px 250px" ,position: "relative", textAlign:"center", backgroundColor:"grey"}}>
            
            <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>              
            <h3 className='mb-3' style={{textAlign:"center"}}>Kullanıcı Listesi</h3>
            </div>
            </div>            
                <div className='p-3 mb-2 bg-light text-dark' >
                <table  className="table table-bordered table-hover ">
                <caption >List of users</caption>
                <thead className="table-dark">
                    <tr >
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Mail Adress</th>
                    <th scope="col">Tc No</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Seniority</th>
                    <th scope="col">SeniorityLevel</th>
                    <th scope="col">Role</th>
                    <th scope="col">Department</th>
                    <th scope="col">Birth Date</th>
                    <th></th>
                    </tr>
                </thead>
                <tfoot className="table-secondary">
                <tr>
                <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Mail Adress</th>
                    <th scope="col">Id No</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Seniority</th>
                    <th scope="col">SeniorityLevel</th>
                    <th scope="col">Role</th>
                    <th scope="col">Department</th>
                    <th scope="col">Birth Date</th>
                    <th></th>
                </tr>
                </tfoot>
                {users.map((user, index) => {



                    return(
                <tbody key={user.id}>
                    <tr >
                    <td >{user.id}</td>
                    <td>{user.userName}</td>
                    <td>{user.userSurname}</td>
                    <td>{user.userMailAddress}</td>
                    <td>{user.userIdentificationNumber}</td>
                    <td>{user.userSalary}</td>
                    <td>{user.userStartDate}</td>
                    <td>{user.userSeniority}</td>
                    <td>{user.userSeniorityLevel}</td>
                    <td>{user.userRole}</td>
                    <td>{user.userDepartment}</td>
                    <td>{user.userBirthDate}</td>
                    <td><span onClick={()=> 
                        DeleteOperation(user.id)}
                        style={{"backgroundColor":"red","color":"white","borderRadius":"5px","padding":"5px","cursor":"pointer"}}>Delete</span></td>
                    </tr>
                </tbody> 
                )})}
                </table>
                </div>
    </Paper>
            )
}