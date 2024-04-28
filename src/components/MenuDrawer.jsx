import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Pages = [
  { name: 'Home', link:'/'},
  { name: 'Our Team', link:'/abpit'},
  { name: 'Services', link: '/budgeting'},
  { name: 'Events', link: '/events'},
];

const MenuDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer}
        onClose={()=>setOpenDrawer(false)}>
        <List>
          {
            Pages.map((page, index) => ( 
              <ListItemButton key ={index} component='a' href={page.link} onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>
                      {page.name}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }
        </List>
      </Drawer>
      <div style={{position:'fixed', top:0, right: 0, padding:'38px'}}>
        <IconButton sx={{color:'white', display:'flex', justifyContent:'flex-end'}} onClick={()=> setOpenDrawer(!openDrawer)}>
          <MenuIcon sx={{color:'white', fontSize:'150%'}}/>
        </IconButton>
      </div>
    </div>
  )
}

export default MenuDrawer