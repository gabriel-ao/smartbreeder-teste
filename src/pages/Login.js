import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../store/actions/user';

// import api from '../services/api';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '120vh',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    backgroundColor: 'white',
  },
  div3: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
  },

  login: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    paddingTop: '50px',
    // backgroundColor: "green",
  },

  RegisterUser: { display: 'flex', justifyContent: 'center', height: '50vh' },

  dadosLogin: {
    paddingTop: '60px',
  },
}));

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  async function handleLogon(e) {
    // e.preventDefault();
    try {
      const user = { email, password };
      dispatch(logIn(user));
      history.push('/home');
    } catch (err) {
      alert(err);
      history.push('/login');
    }
  }

  let history = useHistory();
  function RegisterUser() {
    history.push(`/registerUser`);
  }

  return (
    <Container maxWidth='sm-12' className={classes.container}>
      <Grid item xs={12}>
        <div className={classes.dadosLogin}>
          <Grid item xs={12} className={classes.div3}>
            <TextField
              className={classes.input}
              required
              id='outlined-required'
              variant='outlined'
              placeholder='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>

          <Grid
            xs={12}
            className={classes.div3}
            // style={{ paddingTop: "10px" }}
          >
            <TextField
              className={classes.input}
              required
              id='outlined-required'
              variant='outlined'
              placeholder='senha'
              value={password}
              type='password'
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>

          <Grid item xs={12} className={classes.div3}>
            <Button
              variant='contained'
              color='primary'
              onClick={() => handleLogon()}
            >
              logar
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.div3}>
            <Button style={{ color: '#6967da' }} onClick={() => RegisterUser()}>
              Se não possui cadastro! Clique aqui
            </Button>
          </Grid>
        </div>
      </Grid>
    </Container>
  );
}

export default Login;

// style={{ backgroundColor: "black" }}
