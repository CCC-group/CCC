import { Link } from '@mui/material'
import logo from '../imgs/CCC-logo.png'

const Header = () => {
  
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
        <Link href="/">Home</Link>
        <Link href="/about">Our Team</Link>
        <Link href="/budgeting">Services</Link>    
        <Link href="/Events">Events</Link>
      </div>
  </div>
    </nav>
      </ul>
    </div>
  );
};



export default Header;