import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Cirsh from '../components/images/logo2.png';
import {SIDE_BAR} from '../enums'







const drawerWidth = 230;

export default function Sidebar() {

    return (

    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer       

        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundImage:"url(https://previews.123rf.com/images/1stchoice/1stchoice1602/1stchoice160200037/53541125-white-background-soft-light-grey-texture.jpg)"
          },
        }}
        variant="permanent"
        anchor="left"
>
        <Divider />
        <img backgroundimage="url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)" src={Cirsh} className="basLogo" alt="sidebar-ustu-logo"/>
   
        
        <Divider />


        <List >
          {SIDE_BAR.map((item, index) => (
            <ListItem  key={item.displayName} disablePadding>

              <ListItemButton component="a" href={item.route} >

                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>

                  <ListItemText primary={item.displayName} />

              </ListItemButton>
            </ListItem>
            
            
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1 }}
      >
        <Toolbar />
      </Box>
    </Box>


    
  );
}
