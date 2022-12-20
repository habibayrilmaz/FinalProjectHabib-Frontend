import React from "react"
import { Container, Paper, Button } from '@mui/material';
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


export default function Expense() {

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 20,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

  const [expenseType,setExpenseType] = React.useState('') 
  const [expenseDetail, setExpenseDetail] = React.useState('')
  const [expenseAmount, setExpenseAmount] = React.useState('')
  const [taxRate,setTaxRate] =React.useState('')
  const [voucherDate,setVoucherDate] =React.useState('')


  const [idd, setidd] = React.useState('')



 
  const [users,setUsers] = React.useState([])

  React.useEffect(() => {
      const fetchProducts = async () => {
      const response = await fetch('http://localhost:8080/user/all')
      const json = await response.json()   
      console.log(response.ok)
      if (response.ok) {
        setUsers(json)
      }
      }

      fetchProducts()
      }, [])


  const handleClick=(e)=>{
    alert(" Expense is saved ! Well Done !")
    e.preventDefault()
    const expense = {expenseAmount,expenseDetail,taxRate,voucherDate,expenseType}

    console.log(expense )
    fetch("http://localhost:8080/user-expense/add",{
        method:"POST",
        body:JSON.stringify({...expense, userId: idd}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        }).then((res) => res?.json()).then((res)=>{ console.log(`userExpense added userid: ${JSON.stringify(res?.id)}`) })

    }





    return(
 
        <Container>
                <Paper className='expense' elevation={10}
            sx={{backgroundImage:"url(https://previews.123rf.com/images/1stchoice/1stchoice1602/1stchoice160200037/53541125-white-background-soft-light-grey-texture.jpg)"}} >      
            <h1 style={{color:"lab()", fontSize:11, marginLeft:20,marginTop:20}} >
                    HARCAMA OLUŞTUR  
            </h1>
            <br></br>


      <Box
      className='textUser2'
      component="form"
      sx={{
      '& > :not(style)': { m: 2, width: '49ch'}, marginLeft:5
      }}
      noValidate
      autoComplete="off"
      >
             
             <div>

             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label='Expense Type'  variant="outlined"  sx={{ '& > :not(style)': { width: '154ch'},"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={expenseType}
                  onChange={(e)=>setExpenseType(e.target.value) } />              </div>

              <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Expense Amount" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                value={expenseAmount}
                  onChange={(e)=>setExpenseAmount(e.target.value) } />

             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Voucher Date" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={voucherDate}
                  onChange={(e)=>setVoucherDate(e.target.value) } />

             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Tax Rate" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={taxRate}
                  onChange={(e)=>setTaxRate(e.target.value) } />
                  <br></br>
                  <br></br>

                   <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}}
                    select
                    label="Select a User"
                    value={idd}
                    onChange={(e) => setidd(e.target.value)}
                    helperText="Please select User !"
                    input={<BootstrapInput/>}
                    >
                    <option>--Select User--</option>
                    {users.map((user) => (
                        <MenuItem key={user.id} value={user.id}>{user.userName} </MenuItem>
                    ))}
                    </TextField> 

        

            
            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Expense Detail" variant="outlined" sx={{ '& > :not(style)': { width: '102ch'},"& .MuiInputBase-root": {height: 50}}} //fullWidth 
              value={expenseDetail}
              onChange={(e)=>setExpenseDetail(e.target.value) } />

                  

                  <div>
                  <Button className='buton1' variant="contained" color="info" onClick={handleClick} sx={{width:"115ch", marginLeft:60, marginTop:-5, height:50}} >
                        Save
                  </Button></div>
                  
                    
      </Box>
      
    
      </Paper>

      {/* <Paper>

        <div className="listeuser">
        <h3 style={{color:"red",textAlign:"center"}}>{clickedUserId}{}</h3>

        <UserList onClickHandle={handleUserClick}/>
        </div>
        </Paper> */}


        </Container>

       
       

        

    )
}