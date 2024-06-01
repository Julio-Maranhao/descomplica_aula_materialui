import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
//import MenuIcon from '@mui/icons-material/Menu';

import FazerLogin from '../pages/tarefa/FazerLogin';
 
function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [logged, setLogged] = useState(false);
  
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleLogout = () => setLogged(false);
  const handleLogin = () => setLogged(true);

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/*  
              <MenuIcon />
              */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gerenciamento de Projetos
            </Typography>
              {logged 
              && <Button color="inherit" variant="outlined" onClick={handleLogout}>Logout</Button> 
              }
              {!logged 
              && <Button color="success" variant="contained" onClick={handleOpenLogin}>Login</Button> 
              }
          </Toolbar>
        </AppBar>
        <div>
          <Modal
            open={openLogin}
            onClose={setOpenLogin}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
              <FazerLogin handleCloseLogin={handleCloseLogin} handleLogin={handleLogin}/>
            </div>
          </Modal>  
        </div>
      </Box>
    );
}
 
export default Header;