import * as React from 'react';
import { Paper } from '@mui/material';
import { useReducer } from 'react';



export default function UsersContacts() {
    const [users,setUsers] = React.useState([]);
    const [contact, setContact] = React.useState([]);

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

            React.useEffect(() => {
            const fetchProducts = async () => {
            const response = await fetch('http://localhost:8080/user-contact/all')
            const json = await response.json()   
            console.log(response.ok)
            if (response.ok) {
              setContact(json)
            }
            console.log(json)
            }
            fetchProducts()
            }, [reducerValue])

            async function DeleteOperation(id){
                const fetchProducts = async () => {
                const response = await fetch('user-contact/'+id,{
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
                <div
                style={{ backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F330381322640158213%2F&psig=AOvVaw1rLYaEvt0txBSaK-Wj_IK6&ust=1671578958348000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKCk_oPrhvwCFQAAAAAdAAAAABAD')", height: '50px' }}
                > 
            <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>              
            <h3 className='mb-3' style={{textAlign:"center"}}>Kullanıcı İletişim Bilgileri</h3>
            </div>
            </div>
            </div>            
                <div className='p-3 mb-2 bg-light text-dark' >
                <table  className="table table-bordered table-hover ">
                <caption >List of User Contacts</caption>
                <thead className="table-dark">
                    <tr >
                    <th scope="col">Kullanıcı ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Adres Bilgisi</th>
                    <th scope="col">Şehir</th>
                    <th scope="col">Telefon Numarası</th>
                    <th scope="col">Ülke</th>
                    <th scope="col">Posta Kodu</th>
                    <th scope="col">Contact ID</th>
                    <th></th>


                    </tr>
                </thead>
                <tfoot className="table-secondary">
                <tr>
                <th scope="col">Kullanıcı ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Adres Bilgisi</th>
                    <th scope="col">Şehir</th>
                    <th scope="col">Telefon Numarası</th>
                    <th scope="col">Ülke</th>
                    <th scope="col">Posta Kodu</th>
                    <th scope="col">Contact ID</th>
                    <th></th>

                </tr>
                </tfoot>
                {contact.map((contact, index) => {

                    const user = users.filter(user =>{
                        return [user] ? contact.userId === user.id : "Unknown"
                    })

                    return(
                <tbody key={contact.id}>
                    <tr >
                    <td>{user.map((item,index) => {return item.id})}</td>
                    <td>{user.map((item,index) => {return item.userName})}</td>
                    <td>{user.map((item,index) => {return item.userSurname})}</td>
                    <td>{contact.userLocation}</td>
                    <td>{contact.userCity}</td>
                    <td>{contact.userMobileNumber}</td>
                    <td>{contact.userCountry}</td>
                    <td>{contact.userPostCode}</td>
                    <td >{contact.id}</td>
                    <td><span onClick={()=> 
                        DeleteOperation(contact.id)}
                        style={{"backgroundColor":"red","color":"white","borderRadius":"5px","padding":"5px","cursor":"pointer"}}>Delete</span></td>

                    </tr>
                </tbody> 
                )})}
                </table>
                </div>
    </Paper>
            )
}