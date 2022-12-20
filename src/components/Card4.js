import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { View } from 'react-native';
import { Avatar } from '@react-native-material/core';


export default function Card4() {
  
  return (

    <Card sx={{ width:350, height:90 ,maxWidth: 345 }} >
      <CardActionArea>

      <View style={{ flex: 1, marginLeft:"290px",marginTop:"20px", position:"absolute" }}>
      <Avatar size={45} 
        color="white"
        image={{ uri: "https://cdn-icons-png.flaticon.com/512/912/912267.png"}}

        />
        </View>
        
        <CardContent>
          <Typography gutterBottom variant="body3" component="div" color="text.secondary">
            ÇALIŞAN SAYISI
          </Typography>
          <Typography variant="body5" color="text.secondary">
          <h2 style={{fontSize:"2ch", color:"black"}}>83 Kişi</h2>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          83 Kişi
        </Button>
      </CardActions>
    </Card>

    
  );
}

