import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CloseIcon from '@material-ui/icons/Close';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 800,
    margin: 'auto',
    marginTop: 50,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontSize: 24,
  },

  title: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-around',
  },
  subTitle: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 12,
    fontSize: 20,
    margin: 0,
  },
  subTitle2: {
    marginBottom: 12,
    fontSize: 20,
    marginLeft: 100,
    marginRight: 100,
  },

  lista: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 12,
    fontSize: 20,
    marginLeft: 30,
    marginRight: 100,
  },

  divisor: {
    borderBottom: '1px solid #d8bfd8',
  },
});

function Home() {
  const classes = useStyles();

  const [find, setFind] = useState('');

  function HandleClickClearFind() {
    setFind('');
  }
  return (
    <Card className={classes.root}>
      <CardContent className={classes.title}>
        <Typography className={classes.pos}>Imagens</Typography>
        <div>
          <TextField
            id='standard-basic'
            label='Procurar'
            value={find}
            onChange={(event) => setFind(event.target.value)}
          ></TextField>
          <Button onClick={() => HandleClickClearFind()}>
            <CloseIcon />
          </Button>

          <Button>
            <AddBoxIcon />
          </Button>
        </div>
      </CardContent>

      <CardContent className={classes.title}>
        <Typography className={classes.subTitle}>Ações</Typography>
        <Typography className={classes.subTitle}>Titulo</Typography>
        <Typography className={classes.subTitle2}>IDImg</Typography>
      </CardContent>

      <div className={classes.divisor} />
      <CardContent className={classes.lista}>
        <div>
          <Button>
            <CloseIcon />
          </Button>

          <Button>
            <AddBoxIcon />
          </Button>
        </div>
        <Typography className={classes.lista}>titulo</Typography>
        <Typography className={classes.lista}>id</Typography>
      </CardContent>
    </Card>
  );
}

export default Home;
