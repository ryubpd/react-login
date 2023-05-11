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

import background from "./pic/abBanner.jpg";
import shabu from "./pic/about.jpg";

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
                sx={{ height: '500px', width: '100%', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            </Box>

            <Box sx={{ bgcolor: '#b9a950' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6} textAlign='center'><br />

                        <img src={shabu} />

                    </Grid>
                    <Grid xs={6} align='left' sx={{ color: 'white' }}><br />
                        <Typography variant='h4' sx={{ color: '#e1341e' }}>ประวัติความเป็นมา</Typography> <br />
                        <Typography variant='h6' sx={{ color: 'white' }}>Ninja Shabu ถือกำเนิดขึ้นในปี 2023 เราคำนึงอยู่เสมอว่าต้องทำอย่างไร<br />
                            ถึงจะทำให้ลูกค้าสามารถสัมผัสได้ถึงความอร่อยที่มากขึ้น และมีความสุขจากการรับประทานได้มากขึ้น <br />
                            เราเชื่อว่าหากลูกค้าสามารถค้นพบความอร่อย ก็จะพบความสุขที่มากขึ้นอย่างไม่มีสิ้นสุด <br />
                            เรามุ่งมั่นที่จะเป็นร้านชาบูชาบู อันดับ 1 ของโลก ภายใต้แนวความคิด <br />
                            The best shabu in the world</Typography><br />
                        <Typography variant='h4' sx={{ color: '#e1341e' }}>Our History</Typography> <br />
                        <Typography variant='h6' sx={{ color: 'white' }}>
                            Ninja Shabu was born in 2023. We always keep in mind how to do it. <br />
                            so that customers can experience the deliciousness and enjoy eating even more <br />
                            We believe that if customers discover deliciousness, they will find endless happiness. <br />
                            We aim to be the world's number 1 Shabu Shabu restaurant under the concept of <br />
                            The best shabu in the world.
                        </Typography>
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