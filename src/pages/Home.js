import React from 'react';
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
    marginBottom: 12,
    fontSize: 20,
  },
  subTitle2: {
    marginBottom: 12,
    fontSize: 20,
    marginLeft: 200,
  },

  divisor: {
    borderBottom: '1px solid #d8bfd8',
  },
});

function Home() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.title}>
        <Typography className={classes.pos}>Imagens</Typography>
        <div>
          <TextField id='standard-basic' label='Procurar'></TextField>
          <Button>
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
      <CardContent className={classes.title}>
        <div>
          <Button>
            <CloseIcon />
          </Button>

          <Button>
            <AddBoxIcon />
          </Button>
        </div>
        <Typography className={classes.subTitle}>titulo</Typography>
        <Typography className={classes.subTitle2}>id</Typography>
      </CardContent>
    </Card>
  );
}

export default Home;
