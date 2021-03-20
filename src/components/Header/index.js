import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/actions/user';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header({ children }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  let history = useHistory();

  function handleLogout() {
    dispatch(logOut());
    history.push('/login');
  }

  async function verifyToken() {
    const token = localStorage.getItem('token');

    if (!token) {
      history.push('/login');
    }
  }
  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Smartbreeder
            </Typography>
            <Button color='inherit' onClick={() => handleLogout()}>
              Sair
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </>
  );
}

export default Header;
