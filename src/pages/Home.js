import React, { useState } from 'react';

import './styles.css';

// mensagens de erro
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import TextField from '@material-ui/core/TextField';

import { useDispatch } from 'react-redux';
import { addImg } from '../store/actions/image';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as imagesId from '../store/actions/image';

import Lista from '../components/lista';

import api from '../services/api';

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

  pos: {
    marginBottom: 12,
    fontSize: 24,
  },

  title: {
    fontSize: 14,

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
    marginRight: 10,
  },

  divisor: {
    borderBottom: '1px solid #407BFF',
  },
});

function Home(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [find, setFind] = useState('');
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [add, setAdd] = useState(false);

  function HandleClickClearFind() {
    setFind('');
  }
  function HandleClickClearInputs() {
    setTitle('');
    setId('');
    setAdd(false);
  }
  function HandleClickAdd() {
    setAdd(true);
  }
  async function HandleClickAddImg() {
    try {
      const link = await api.get(`${id}`);
      const foto = link.data.thumbnailUrl;

      const data_img = { title, id, foto };

      title === '' || id === ''
        ? toast.warn('o campo de img e id são devem ser preenchidos')
        : dispatch(addImg(data_img));

      setTitle('');
      setId('');
      setAdd(false);
    } catch (err) {
      toast.error('Id deve ser um valor unico e ser de 0 a 5000');
    }
  }

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.title}>
          <Typography className={classes.pos}>Imagens</Typography>
          <div>
            <TextField
              label='Procurar'
              value={find}
              onChange={(event) => setFind(event.target.value)}
            ></TextField>
            <Button onClick={() => HandleClickClearFind()}>
              <CloseIcon />
            </Button>

            <Button onClick={() => HandleClickAdd()}>
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

        {/* listando todas imagens */}
        {/* {console.log('props.imageReturn ', props.imageReturn)} */}

        {props.imageReturn.map((images) => (
          <Lista key={images.id} image={images} />
        ))}

        <div className={`${add === false ? 'hide' : 'show'}`}>
          <CardContent className={classes.lista}>
            <div>
              <Button onClick={() => HandleClickAddImg()}>
                <DoneIcon />
              </Button>

              <Button>
                <CloseIcon onClick={() => HandleClickClearInputs()} />
              </Button>
            </div>

            <TextField
              className={classes.lista}
              label='Titulo'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              type='number'
              className={classes.lista}
              label='ID'
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </CardContent>
        </div>
      </Card>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(imagesId, dispatch);
};

const mapStateToProps = (state) => ({
  imageReturn: state.image,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
