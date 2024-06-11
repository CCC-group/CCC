import logo from '/imgs/CCC.jpg';
import { AppBar, Toolbar, Tab, Tabs, useMediaQuery, useTheme, Grid, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import MenuDrawer from './MenuDrawer';
import { logOut } from '../redux/authSlice';

const Pages = [
  { name: 'Home', link: '/' },
  { name: 'Our Team', link: '/about' },
  { name: 'Services', link: '/budgeting' },
  { name: 'Events', link: '/events' },
];

const Header = () => {
  const [value, setValue] = useState(0);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleSignOut = () => {
    dispatch(logOut());
  };
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar sx={{ background: 'black' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <a className="navbar-brand" href="/">
              <img
                src={logo}
                alt="Logo"
                width="120"
                height="114"
                className="d-inline-block align-text-top"
              />
            </a>
          </Grid>
          {!isMatch && (
            <Grid item xs>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                indicatorColor="primary"
              >
                {Pages.map((page, index) => (
                  <Tab key={index} label={page.name} component="a" href={page.link} />
                ))}
                {isLoggedIn && (
                  <Tab key="mailbox" label="Mailbox" component="a" href="/mailbox" />
                )}
              </Tabs>
            </Grid>
          )}
          {isLoggedIn && (
            <Grid item>
              <Button onClick={handleSignOut} style={{ color: 'white' }}>
                Logout
              </Button>
            </Grid>
          )}
          {isMatch && (
            <Grid item>
              <MenuDrawer />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;