import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationList = ({handlePage}) => {
    const bookData = useSelector(state=>state.bookData)
    const totalPages = Math.ceil(bookData.length/30)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={totalPages} color="secondary" onClick={(e)=>handlePage(e.target.textContent)}/>
    </div>
  );
}

export {PaginationList}