import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';



export default function User() {


      const [userName,setName] = React.useState('') 
      const [userSurname, setSurname] = React.useState('')
      const [userSalary, setSalary] = React.useState('')
      const [userMailAddress,setMailAddress] =React.useState('')
      const [userIdentificationNumber,setIdentfNumber] =React.useState('')
      const [userStartDate,setStartDate] =React.useState('')
      const [userSeniority,setSeniority] =React.useState('')
      const [userSeniorityLevel,setSeniorityLevel] =React.useState('')
      const [userRole,setRole] =React.useState('')
      const [userDepartment,setDepartment] =React.useState('')
      const [userBirthDate,setBirthDate] =React.useState('')
      const [userLocation,setLocation] =React.useState('')
      const [userCity,setCity] =React.useState('')
      const [userMobileNumber,setUserMobileNo] =React.useState('')
      const [userCountry,setCountry] =React.useState('')
      const [userPostCode,setPostCode] =React.useState('')
     
      const handleClick=(e)=>{
            alert(" User is saved ! Well Done !")
        e.preventDefault()
        const user = {userName,userSurname,userSalary,userBirthDate,
            userDepartment,userIdentificationNumber,
            userMailAddress,
            userRole,userSeniority,userSeniorityLevel,userStartDate}

       const userContactInfo={ userCity,userCountry,userLocation,userMobileNumber,userPostCode}

        console.log(user )
        console.log("userid gelmiyor")
        fetch("http://localhost:8080/user/add",{
            method:"POST",
            body:JSON.stringify({...user}),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
        }).then((res) => res.json()).then((res)=> { 
            console.log(`user added userID: ${JSON.stringify(res?.id)}`) 

            fetch("http://localhost:8080/user-contact/add",{
            method:"POST",
            body:JSON.stringify({...userContactInfo, userId:res?.id}),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
        }).then((res) => res.json()).then((res)=>{ console.log(`user contact added id: ${JSON.stringify(res?.id)}`) })
      
      })


        
        
                        

      }
     

      return (
    
      <Container >
            <Paper className='userveri' elevation={10} 
            sx={{backgroundImage:"url(https://previews.123rf.com/images/1stchoice/1stchoice1602/1stchoice160200037/53541125-white-background-soft-light-grey-texture.jpg)"}} >

            <h1 style={{color:"lab()", fontSize:11, marginLeft:10,paddingTop:10}} >
                 KULLANICI BİLGİLERİ  
            </h1>
            <br></br>

      <Box
            className='textUser'
            component="form"
            sx={{
            '& > :not(style)': { m: 2, width: '75ch'}, marginLeft:5
            }}
            noValidate
            autoComplete="off"
            >
                  
            

            <TextField  InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label='Name' variant="outlined"  sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userName}
                  onChange={(e)=>setName(e.target.value) }   /> 

            {/* //focused  */}

            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Surname" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userSurname}
                  onChange={(e)=>setSurname(e.target.value) } />

            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="E-Mail Address" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
            value={userMailAddress}
            onChange={(e)=>setMailAddress(e.target.value) } />

            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Identification Number" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userIdentificationNumber}
                  onChange={(e)=>setIdentfNumber(e.target.value) } />

            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Salary" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userSalary}
                  onChange={(e)=>setSalary(e.target.value) } />

            <TextField type="date"  InputLabelProps={{  shrink: true}} id="date" label="Start Date of Employment" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userStartDate}
                  onChange={(e)=>setStartDate(e.target.value) } />

            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Seniority" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userSeniority}
                  onChange={(e)=>setSeniority(e.target.value) } />

            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Seniority Level" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userSeniorityLevel}
                  onChange={(e)=>setSeniorityLevel(e.target.value) } />

            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Role" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userRole}
                  onChange={(e)=>setRole(e.target.value) } />

            <TextField type="date"  InputLabelProps={{  shrink: true}} id="date" 
            label="Birth Date" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userBirthDate}
                  onChange={(e)=>setBirthDate(e.target.value) } />
            

            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Department" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
            value={userDepartment}
            onChange={(e)=>setDepartment(e.target.value) } />

            


            </Box>
            {userName}
            {userSurname}
            {userSalary}      
      </Paper>


      <Paper className='userveri3' elevation={10}
      sx={{backgroundImage:"url(https://previews.123rf.com/images/1stchoice/1stchoice1602/1stchoice160200037/53541125-white-background-soft-light-grey-texture.jpg)"}} >      
      <h1 style={{color:"lab()", fontSize:11, marginLeft:10,paddingTop:10}} >
            İLETİŞİM BİLGİLERİ  
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

             <TextField InputLabelProps={{style: { textSizeAdjust: '12' },className:"textfield_label"}} id="outlined-basic" label='Location Address'  variant="outlined"  sx={{ '& > :not(style)': { width: '154ch'},"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userLocation}
                  onChange={(e)=>setLocation(e.target.value) } />              </div>

              <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="City" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                value={userCity}
                  onChange={(e)=>setCity(e.target.value) } />
             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Country" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userCountry}
                  onChange={(e)=>setCountry(e.target.value) } />
             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Post Code" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userPostCode}
                  onChange={(e)=>setPostCode(e.target.value) } />
                  <br></br>
                  <br></br>

                  <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Mobile Phone Number" variant="outlined" sx={{ '& > :not(style)': { width: '49ch'},"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={userMobileNumber}
                  onChange={(e)=>setUserMobileNo(e.target.value) } />
                  
                  <div>
                  <Button className='buton1' variant="contained" color="info" onClick={handleClick} sx={{width:"115ch", marginLeft:60, marginTop:-16, height:50}} >
                        Save
                  </Button>
                  </div>
                    
      </Box>
    
      </Paper>
    
      

    
   
    
      </Container>
      
      
  );
}


