import React from "react"
import { Container, Paper, Button } from '@mui/material';
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';


export default function Adverts() {
      

  const [advertPosition,setAdvertPosition] = React.useState('') 
  const [advertDepartment, setAdvertDepart] = React.useState('')
  const [advertType, setAdvertType] = React.useState('')
  const [advertDetail,setAdvertDetail] =React.useState('')
  const [advertHeader,setAdvertHeader] =React.useState('')

  
  const handleClick=(e)=>{
    alert(" Advert is saved ! Well Done !")
    e.preventDefault()
    const advert = {advertPosition,advertDepartment,advertType,advertDetail,advertHeader}

    console.log(advert )
    fetch("http://localhost:8080/advert/add",{
        method:"POST",
        body:JSON.stringify({...advert}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        }).then((res) => res.json()).then((res)=> { 
            console.log(`user added id: ${JSON.stringify(res?.id)}`)  })

    }


    return(


    <Container>



        <Paper className='ilans' elevation={10}
        sx={{width:900, height:400  ,backgroundImage:"url(https://previews.123rf.com/images/1stchoice/1stchoice1602/1stchoice160200037/53541125-white-background-soft-light-grey-texture.jpg)"}} >      
        <h1 style={{color:"lab()", fontSize:11, marginLeft:10,paddingTop:10}} > İLAN BİLGİLERİNİ GİRİNİZ </h1>
        <br></br>

      <Box
      className='textUser2'
      component="form"
      sx={{
      '& > :not(style)': { m: 2, width: '44ch'}, marginLeft:5
      }}
      noValidate
      autoComplete="off"
      >
             
             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="İlan Başlığı" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                value={advertHeader}
                  onChange={(e)=>setAdvertHeader(e.target.value) } />

             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Pozisyon" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={advertPosition}
                  onChange={(e)=>setAdvertPosition(e.target.value) } />

             <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Çalışma Şekli" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={advertType}
                  onChange={(e)=>setAdvertType(e.target.value) } />

            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="Departman" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 50}}} //fullWidth 
                  value={advertDepartment}
                  onChange={(e)=>setAdvertDepart(e.target.value) } />
                  
            <TextField InputLabelProps={{className:"textfield_label"}} id="outlined-basic" label="İlan Açıklaması" variant="outlined" sx={{ width: { sm: 10, md: 30 },"& .MuiInputBase-root": {height: 80}}} //fullWidth 
                  value={advertDetail}
                  onChange={(e)=>setAdvertDetail(e.target.value) } />

                

                  <div>
                  <Button className='buton1' variant="contained" color="info" onClick={handleClick} sx={{width:"40ch", marginLeft:55, marginTop:-20, height:50}} >
                        Save
                  </Button></div>
                  
                    
      </Box>
    
      </Paper>
      </Container>


       
       

        

    )
}