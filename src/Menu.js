import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import background from "./pic/menu.jpg";

import ausbeef from "./pic/picmenu/std/ausbeef.png";
import usbeef from './pic/picmenu/std/usbeef.png';
import chicken from './pic/picmenu/std/chickenDump.png';
import porkkurobota from './pic/picmenu/std/porkkurobota.png';
import porkLoin from './pic/picmenu/std/porkLoin.png';
import duck from './pic/picmenu/std/duck.png';

import wagyu from './pic/picmenu/pm/wagyu.png';
import usprime from './pic/picmenu/pm/usprime.png';
import usplate from './pic/picmenu/pm/usplate.png';
import kurobotaSD from './pic/picmenu/pm/kurobotaSD.png';
import veget from './pic/picmenu/pm/vegetpm.png';


const theme = createTheme({    
    typography: {
        fontFamily: [
            'Mitr', 'sans-serif'
        ].join(','),
    },
});

export default function ButtonAppBar() {
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location = './login'
      }
      const handleSignUp = (event) => {
        event.preventDefault();
        window.location = './register'
      }
      const handleHome = (event) => {
        event.preventDefault();
        window.location = './home'
      }
      const handleAbout = (event) => {
        event.preventDefault();
        window.location = './about'
      }
      const handleMenu = (event) => {
        event.preventDefault();
        window.location = './menu'
      }
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <SoupKitchenIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography variant="h6" align="left" component="div" onClick={handleHome} sx={{ flexGrow: 1 }}>
                            NINJA SHABU
                        </Typography>
                        <Box sx={{ mr: 2 }}>
                            <Button color="inherit" onClick={handleHome}> Home </Button>
                            <Button color="inherit" onClick={handleAbout}> About us </Button>
                            <Button color="inherit" onClick={handleMenu}> Menu </Button>
                        </Box>
                        <Button href="Login" sx={{ bgcolor: '#F48FB1', color: 'white' }} onClick={handleSubmit}>Sing in</Button>
                        <Button href="Register" color="inherit" onClick={handleSignUp}>Sing up</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Box
                sx={{ height: '500px', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            </Box>

            <Box  sx={{ bgcolor:'black', color:'white' }}> <br/>
                <Typography variant='h2' align='center'>MENU</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>                
                    <Grid xs={6}>
                        <Typography sx={{ textAlign:'center' , fontSize:40 , color:'red'}}> Standard </Typography>
                        <Grid xs={5} textAlign='left'>
                            <img src={ausbeef}/> 
                            <img src={usbeef}/>
                            <img src={porkkurobota}/>
                            <img src={porkLoin}/>
                            <img src={duck}/>
                            <img src={chicken}/>
                        </Grid>                                          
                    </Grid>

                    <Grid xs={6}>                  
                    <Typography sx={{ textAlign:'center' , fontSize:40 , color:'#cac185'}}> Premium </Typography>     
                        <Grid xs={5} textAlign='left'>
                            <img src={wagyu}/> 
                            <img src={usprime}/>
                            <img src={usplate}/>
                            <img src={kurobotaSD}/>                            
                            <img src={veget}/>                        
                        </Grid>                        
                    </Grid>
                </Grid> <br/>
            </Box>
            
            <Box sx={{ bgcolor: '#e6e2c5', height: '150px', alignItems: 'center' }}>

                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                    <IconButton size='80' sx={{ fontSize: 80, position: 'relative', left: 750, top: 30 }}>
                        <FacebookIcon sx={{ fontSize: 80 }} />
                    </IconButton>
                </a>

                <a href='https://instagram.com/' target="_blank" rel="noopener noreferrer">
                    <IconButton size='80' sx={{ fontSize: 80, position: 'relative', left: 790, top: 30 }}>
                        <InstagramIcon sx={{ fontSize: 80 }} />
                    </IconButton>
                </a>

                <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer">
                    <IconButton size='80' sx={{ fontSize: 80, position: 'relative', left: 830, top: 30 }}>
                        <TwitterIcon sx={{ fontSize: 80 }} />
                    </IconButton>
                </a>
            </Box>
        </ThemeProvider>
    );
}