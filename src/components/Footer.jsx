import { Box, Typography } from '@mui/material'
import logo from '../assets/imgs/CCC.jpg'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div>
      <Box display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="15vh"
        backgroundColor='#1D66C0'>
        <div className='contact-box'>
          <div style={{margin:'40px'}}>
            <p>
              <FmdGoodIcon sx={{fontSize:'large', marginRight:'3px'}}/>
              <b>Office:</b> 1S450 Summit Ave, Oakbrook Terrace, IL 60181</p>
          </div>
          <div style={{margin:'40px'}}>
            <p>
              <CallIcon sx={{fontSize:'large', marginRight:'3px'}}/>
              <b>Call</b> 708-232-3275</p>
          </div>
          <div style={{margin:'40px'}}>
            <p>
              <EmailIcon sx={{fontSize:'large', marginRight:'3px'}}/>
              <b>Email:</b> cworkhappen@gmail.com</p>
          </div>
        </div>
      </Box>
      <div className="footer">
        <a className="navbar-brand" href="/">
          <img src={logo} 
            alt="Logo" 
            width="120" 
            height="114" 
            className="d-inline-block align-text-top"/>
        </a>
      <Typography variant='h7' 
        style={{color:'white', fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI', padding:'10px'}}>
          &copy;2024 All Rights Reserved</Typography>
    </div>
  </div>
  )
}

export default Footer