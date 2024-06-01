import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import "./estilos.css";

const FazerLogin = ({handleCloseLogin, handleLogin}) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function confirmarLogin() {
    handleLogin();
    handleCloseLogin();
  }

  return(
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Login"
          className="text-center"
        /> 
        <CardContent sx={{
          width: '95%',
          maxWidth: '100%',
        }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="login_name" aria-describedby="login_titulo_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
              <FormHelperText id="login_titulo_helper_text">Login.</FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <Input id="login_senha" aria-describedby="senha_titulo_helper_text" value={senha} onChange={e => { setSenha(e.target.value) }} />
              <FormHelperText id="senha_titulo_helper_text">Senha.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={4}>
                <Button size="small" variant="contained" color='success' onClick={confirmarLogin}>Fazer Login</Button>
              </Grid>  
            </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default FazerLogin;