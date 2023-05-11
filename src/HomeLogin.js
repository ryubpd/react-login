import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { CardActionArea } from '@mui/material';

import background from "./pic/banner.png";
import shabu1 from './pic/1.png';
import shabu2 from './pic/3.png';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Mitr', 'sans-serif'
    ].join(','),
  },
});

export default function ButtonAppBar() {

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    window.location = './home'
  }
  
  const handleHome = (event) => {
    event.preventDefault();
    window.location = './homeLog'
  }
  const handleAbout = (event) => {
    event.preventDefault();
    window.location = './aboutLog'
  }
  const handleMenu = (event) => {
    event.preventDefault();
    window.location = './menuLog'
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('https://zany-cyan-viper-hose.cyclic.app/authen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
      },      
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok'){     
      } else {
        alert('Authen failed')
        localStorage.removeItem('token');
        window.location = '/login'
      }     
    })
    .catch((error) => {      
    });    
  }, []);
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
            <Button sx={{ bgcolor: '#F48FB1', color: 'white' }} onClick={handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>

        <Box
          sx={{ height: '700px', width: '100%', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        </Box>
        <Box sx={{ bgcolor: 'black', height: '550px', width: '100%' }}>
          <Typography variant="h4" sx={{ flexGrow: 1, color: '#cac185', textAlign: 'center' }}> <br></br>
            Standard buffet
            <Typography sx={{ position: 'absolute' }}>
              <img src={shabu1} />
            </Typography>

            <Typography variant="h2" sx={{ color: '#cac185' }}>
              Shabu pork and beef
            </Typography>

            <Typography sx={{ position: 'absolute', right: 0 }}>
              <img src={shabu2} />
            </Typography>

            <Typography variant="h6" sx={{ color: 'white' }}>
              นำเสนออาหารที่อร่อย สะอาด สด ปลอดภัย ใช้วัตถุดิบเกรด Premium และมีคุณภาพพร้อมทั้งบริการที่อบอุ่นประทับใจ <br></br>
              ภายใต้หลักการที่ว่า “เราจะสร้างความสุขกับการรับประทานให้กับลูกค้าไปทั่วโลกด้วยชาบูชาบู <br></br>
              และสุกี้ยากี้รสชาติต้นตำรับแท้จากญี่ปุ่น ที่อร่อยและมีคุณภาพ” <br></br>
            </Typography>

            <Typography variant="h2">
              499++ NET
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ bgcolor: '#b9a950', height: '860px' }}>
          <Typography variant="h4" sx={{ flexGrow: 1, color: '#e1341e', textAlign: 'center' }}> <br></br>
            Premium buffet

            <Typography variant="h2" sx={{ color: '#e1341e' }}>
              Shabu Premium and Japanese
            </Typography>

            <Typography variant="h6" sx={{ color: 'white' }}>
              เหนือระดับด้วยการคัดสรรวัตถุดิบชั้นดีและการบริการระดับ Premium เสิร์ฟเนื้อวากิว พรีเมี่ยม และเนื้อ USDA Prime <br></br>
              พร้อมด้วยซูชิและอาหารญี่ปุ่นมากมายหลายชนิดในระดับ Premium ที่เราสร้างสรรค์มาเพื่อคุณ <br></br>
            </Typography>

            <Typography variant="h2">
              899++ NET <br></br>
            </Typography><br></br>
            <Card sx={{ maxWidth: 345, position: 'absolute', left: 370 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://www.mo-mo-paradiseth.com/upload_file/restaurant/standard_pic_1.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ Align: 'center' }}>
                    SHABU
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, position: 'absolute', left: 770 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://www.mo-mo-paradiseth.com/upload_file/menu/soup_4.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ Align: 'center' }}>
                    PREMIUM
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, position: 'absolute', left: 1170 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://www.mo-mo-paradiseth.com/upload_file/restaurant/gold_pic_6.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ Align: 'center' }}>
                    JAPANESE
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Typography>
        </Box>
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