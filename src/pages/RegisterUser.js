import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/actions/user';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import login from '../assets/Subscriber-bro.svg';

// mensagens de erro
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import validator from 'email-validator';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
  },

  cadastrar: { display: 'flex', justifyContent: 'center', height: '50vh' },

  dadosLogin: {
    paddingTop: '60px',
  },
}));

function RegisterUser() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleRegister() {
    try {
      const user = validationData(email, password);

      console.log(user);
      dispatch(addUser(user));
      toast.success('Cadastro realizado com sucesso');
      history.push('/');
    } catch (err) {
      toast.error(err);
    }
  }

  let history = useHistory();
  function ReturnLogin() {
    history.push(`/`);
  }

  function validationData(email, password) {
    if (password.length < 6) {
      toast.error('a senha deve ter pelomenos 6 digitos');
    }

    if (!validator.validate(email)) {
      toast.error('Para logar deve ser um tipo de email valido');
    }

    if (password.length > 6 && validator.validate(email))
      return { password, email };
  }

  return (
    <Container className={classes.container}>
      <Grid item xs={6}>
        <div className={classes.dadosLogin}>
          <Grid item xs={12} className={classes.login}>
            <img height='400' width='500' src={login} alt='logo' />
          </Grid>
          <Grid item xs={12} className={classes.div3}>
            <TextField
              fullWidth
              className={classes.input}
              required
              id='outlined-required'
              variant='outlined'
              placeholder='Email'
              type='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>

          <Grid item xs={12} className={classes.div3}>
            <TextField
              fullWidth
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
              onClick={() => handleRegister()}
            >
              Cadastrar
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.div3}>
            <Button style={{ color: '#6967da' }} onClick={() => ReturnLogin()}>
              Voltar para login
            </Button>
          </Grid>
        </div>
      </Grid>
    </Container>
  );
}

export default RegisterUser;
