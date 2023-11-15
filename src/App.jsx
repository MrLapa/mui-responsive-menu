import { useState } from 'react'
import './App.css'
import { AppBar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function App () {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          {drawerOpen ? (
            // Show the close icon when the drawer is open
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close menu"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            // Show the menu icon when the drawer is closed
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
        style={{ position: 'absolute', zIndex: 1 }}
      >
        <List>
          <ListItemButton>
            <ListItemText primary="Item 1" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Item 2" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Item 3" />
          </ListItemButton>
          {/* Add more ListItem components as needed */}
        </List>
      </Drawer>

      {/* Add a margin to the main content to avoid being covered by the fixed AppBar */}
      <div style={{ marginTop: '64px', padding: '20px' }}>
        <h1>Main Content</h1>
        {/* Add your content here */}
      </div>
    </div>
  );

}

export default App
