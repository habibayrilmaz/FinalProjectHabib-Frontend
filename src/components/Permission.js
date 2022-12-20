import React from "react"
import { Container, Paper, Button } from '@mui/material';
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


export default function Permission() {


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

  const [permissionType,setPerType] = React.useState('') 
  const [totalPermissionDay, setPerTotal] = React.useState('')
  const [startDatePermission, setPerStartDate] = React.useState('')
  const [endDatePermission,setPerEndDate] =React.useState('')
  const [permissionDetail,setPerDetail] =React.useState('')
  const [dateOfReturn,setPerRetDate] =React.useState('')



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
    alert("Permission is saved ! Well Done !")
    e.preventDefault()
    const permission = {permissionType,totalPermissionDay,startDatePermission,endDatePermission,permissionDetail,dateOfReturn}

    console.log(permission )
    fetch("http://localhost:8080/permission/add",{
        method:"POST",
        body:JSON.stringify({...permission, userId: idd}),
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
            <h1 style={{color:"lab()", fontSize:11, marginLeft:10,paddingTop:10}} >
                    İZİN OLUŞTUR  
            </h1>
            <br></br>


      <Box
      className='textUser2'
      component="form"
      sx={{
      '& > :not(style)': { m: 2, width: '70ch'}, marginLeft:5
      }}
      noValidate
      autoComplete="off"
      >
             

             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label='İzin Türü'  variant="outlined"  sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={permissionType}
                  onChange={(e)=>setPerType(e.target.value) } />              

              <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Toplam İzin Günü" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                value={totalPermissionDay}
                  onChange={(e)=>setPerTotal(e.target.value) } />

             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Başlangıç Tarihi" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={startDatePermission}
                  onChange={(e)=>setPerStartDate(e.target.value) } />

             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Bitiş Tarihi" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={endDatePermission}
                  onChange={(e)=>setPerEndDate(e.target.value) } />


            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Dönüş Tarihi" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={dateOfReturn}
                  onChange={(e)=>setPerRetDate(e.target.value) } />
            
            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="İzin Açıklaması" variant="outlined" sx={{ '& > :not(style)': { width: '70ch'},"& .MuiInputBase-root": {height: 70}}} //fullWidth 
              value={permissionDetail}
              onChange={(e)=>setPerDetail(e.target.value) } />

                  

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



                  <div>
                  <Button className='buton1' variant="contained" color="info" onClick={handleClick} sx={{width:"80ch", marginLeft:82, marginTop:-23, height:50}} >
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