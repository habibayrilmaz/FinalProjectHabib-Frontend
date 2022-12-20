import * as React from 'react';
import { Paper } from '@mui/material';


export default function ExpenseList() {
    const [users,setUsers] = React.useState([]);
    const [expense, setExpense] = React.useState([]);

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
            const response = await fetch("http://localhost:8080/user-expense/all")
            const json = await response.json()   
            console.log(response.ok)
            if (response.ok) {
              setExpense(json)
            }
            console.log(json)
            }
            fetchProducts()
            }, [])
    

  return (
    
    <Paper className='p-3 mb-2 bg-dağk text-white' elevation={5} style ={{margin: "-150px 50px 0px 250px" ,position: "relative", textAlign:"center", backgroundColor:"grey"}}>
  <div className='d-flex justify-content-center align-items-center h-100'>
   <div className='text-white'>              
   <h3 className='mb-3' style={{textAlign:"center", backgroundImage:"/images/icons/school.png"}}>Kullanıcı Harcamaları</h3>
   </div>
   </div>

                <div className='container p-3 mb-2 bg-light text-dark' >
                <table  className="table table-bordered table-hover ">
                <caption >Harcamalar Listesi</caption>
                <thead className="table-dark">
                    <tr >
                    <th style={{textAlign:"left" }} scope="col">Kullanıcı ID</th>
                    <th scope="col">Kullanıcı Adı</th>
                    <th scope="col">Harcama Türü</th>
                    <th scope="col">Harcama Detayı</th>
                    <th scope="col">Harcama Miktarı</th>
                    <th scope="col">Vergi Oranı</th>
                    <th scope="col">Fiş Tarihi</th>
                    <th scope="col">Harcama ID</th>
                    </tr>
                </thead>
                <tfoot className="table-secondary">
                <tr>
                <th style={{textAlign:"left" }} scope="col">Kullanıcı ID</th>
                <th scope="col">Kullanıcı Adı</th>
                    <th scope="col">Harcama Türü</th>
                    <th scope="col">Harcama Detayı</th>
                    <th scope="col">Harcama Miktarı</th>
                    <th scope="col">Vergi Oranı</th>
                    <th scope="col">Fiş Tarihi</th>
                    <th scope="col">Harcama ID</th>


                </tr>
                </tfoot>
                {expense.map((expense, index) => {

                    const user = users.filter(user =>{
                        return [user] ? expense.userId === user.id : "Unknown"
                    })

                    return(
                <tbody key={expense.id}>
                    <tr >
                    <td style={{textAlign:"left" }}>{user.map((item,index) => {return item.id})}</td>
                    <td >{user.map((item,index) => {return item.userName})}</td>
                    <td>{expense.expenseType}</td>
                    <td>{expense.expenseDetail}</td>
                    <td>{expense.expenseAmount}</td>
                    <td>{expense.taxRate}</td>
                    <td>{expense.voucherDate}</td>
                    <td>{expense.id}</td>
                    </tr>
                </tbody> 
                )})}
                </table>
                </div>
    </Paper>
            )
}