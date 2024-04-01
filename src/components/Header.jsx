import { useSelector, useDispatch } from 'react-redux';
import { Link , Button } from '@mui/material';
import { logOut } from '../redux/authSlice';
import logo from '/imgs/CCC.jpg'

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  };
return (
  <div className="header">
      <a className="navbar-brand" href="/">
        <img src={logo} 
          alt="Logo" 
          width="120" 
          height="114" 
          className="d-inline-block align-text-top"/>
      </a>
          <ul>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <div className='links'>
        <Link href="s/">Home</Link>
        <Link href="/about">Our Team</Link>
        <Link href="/budgeting">Services</Link>    
        <Link href="/Events">Events</Link>
      {isLoggedIn ? (
            <Button onClick={handleSignOut} style={{ marginLeft: "750px" }}>Logout</Button>
          ) : null }
      </div>
  </div>
    </nav>
      </ul>
    </div>
  );
};



export default Header;