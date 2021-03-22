import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';
import { deleteImg, updateImg } from '../../store/actions/image';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as imagesId from '../store/actions/image';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 800,
    margin: 'auto',
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
    marginRight: 10,
  },

  divisor: {
    borderBottom: '1px solid #407BFF',
  },
});

function Lista(images) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [listTitle, setListTitles] = useState('');
  const [listId, setListId] = useState('');

  const { title, id } = images.image;

  function handleClickDelete(id) {
    dispatch(deleteImg(id));
  }

  function handleClickUpdate() {
    const data_img = { listTitle, listId };

    dispatch(updateImg(data_img));
  }

  useEffect(() => {
    function getData() {
      setListTitles(title);
      setListId(id);
    }
    getData();
  }, []);

  return (
    <div className={classes.root}>
      <div className={'show'}>
        <ul className={classes.lista}>
          <div>
            <Button onClick={() => handleClickUpdate()}>
              <DoneIcon />
            </Button>

            <Button onClick={() => handleClickDelete(id)}>
              <DeleteIcon />
            </Button>
          </div>

          <TextField
            className={classes.lista}
            label='Titulo'
            value={listTitle}
            onChange={(event) => setListTitles(event.target.value)}
          />

          <TextField
            disabled
            className={classes.lista}
            label='ID'
            value={listId}
            onChange={(event) => setListId(event.target.value)}
          />
        </ul>
        <div className={classes.divisor} />
      </div>
    </div>
  );
}

export default Lista;
