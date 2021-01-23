import {
  Container,
  Grid,
  Paper,
  CardMedia,
  Divider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookData } from "../../Redux/actionCreator";
import { makeStyles } from "@material-ui/core/styles";
import { PaginationList } from "./PaginationList";
import styles from "./BookList.module.css";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 260,
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

const BookList = () => {
  const dispatch = useDispatch();
  const [currentPage, setPage] = useState(1);
  useEffect(() => {
    dispatch(getBookData());
  }, []);
  const bookData = useSelector((state) => state.bookData);
  bookData.sort((a,b)=>a.average_rating-b.average_rating)
  console.log(bookData);
  const classes = useStyles();

  const handlePage = (pageNo) => {
    console.log(pageNo);
    setPage(pageNo);
  };
  return (
    <Container maxWidth="md">
      <div>
        <h3>Book List</h3>
      </div>
      <br />
      <Divider />
      <br />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {bookData
              ?.filter(
                (_, index) =>
                  index >= (currentPage - 1) * 30 && index < currentPage * 30
              )
              .map((item) => {
                return (
                  <Grid key={item.bookID} item>
                    <Link to={`/book/${item.bookID}`} style={{textDecoration:"none"}}>
                    <Paper className={classes.paper}>
                      <p>{item.title}</p>
                      <CardMedia
                        className={classes.media}
                        image="http://via.placeholder.com/300"
                        title="Contemplative Reptile"
                        style={{ objectFit: "contain" }}
                      />
                      <div>
                        <span>
                          Price:<strong>{item.price}</strong>
                        </span>
                      </div>
                      <div>
                        <span>
                          Author:<strong>{item.authors}</strong>
                        </span>
                      </div>
                      <div style={{ marginTop: "10px" }}>
                        <StarRatings
                          rating={item.average_rating}
                          starDimension="20px"
                          starSpacing="8px"
                          starRatedColor="orange"
                        />
                        <span style={{ margin: "5px" }}>
                          {item.ratings_count}
                        </span>
                      </div>
                    </Paper>
                    </Link>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
      <div className={styles.paginate}>
        <PaginationList handlePage={handlePage} />
      </div>
    </Container>
  );
};

export { BookList };
