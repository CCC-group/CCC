// import { Link } from '@mui/material'
import logo from '/imgs/CCC.jpg'
import {AppBar, Toolbar, Tab, Tabs, useMediaQuery, useTheme} from '@mui/material';
import { useState } from 'react';
import MenuDrawer from './MenuDrawer';

const Pages = [
  { name: 'Home', link:'/'},
  { name: 'Our Team', link:'/about'},
  { name: 'Services', link: '/budgeting'},
  { name: 'Events', link: '/events'},
];

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
   console.log(theme);
   const isMatch = useMediaQuery(theme.breakpoints.down('md'));
   console.log(isMatch);
return (
  <div>
    <AppBar sx={{background: 'black'}}>
      <Toolbar>
        <a className="navbar-brand" href="/">
            <img src={logo} 
              alt="Logo" 
              width="120" 
              height="114" 
              className="d-inline-block align-text-top"/>
        </a>
            {
              isMatch ? (
                <>
                  <MenuDrawer/>

                </>
              ) : (
                <Tabs 
                textColor='inherit' 
                value={value} 
                onChange={(e, newValue)=> setValue(newValue)} 
                indicatorColor='primary'
              >
                { 
                  Pages.map((page, index) => (
                    <Tab key={index} label= {page.name} component='a' href={page.link}/>
                  ))
                }
              </Tabs> 
              )
            }
       
      </Toolbar>
    </AppBar>
  {/* // <div className="header"> */}
    
      {/* <a className="navbar-brand" href="/">
        <img src={logo} 
          alt="Logo" 
          width="120" 
          height="114" 
          className="d-inline-block align-text-top"/>
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  };
  return (
    <div className="header">
      <a className="navbar-brand" href="/">
        <img
          src={logo}
          alt="Logo"
          width="120"
          height="114"
          className="d-inline-block align-text-top"
        />
      </a>
      <ul>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            gri
            <div className="links">
              <Link href="/">Home</Link>
              <Link href="/about">Our Team</Link>
              <Link href="/budgeting">Services</Link>
              <Link href="/events">Events</Link>
              {isLoggedIn ? (
                <>
                  <Link href="/mailBox">Mailbox</Link>

                  <Button
                    onClick={handleSignOut}
                    style={{ marginLeft: "750px" }}
                  >
                    Logout
                  </Button>
                </>
              ) : null}
            </div>
          </div>
        </nav>
      </ul>
    </div>
  );
};

export default Header;
