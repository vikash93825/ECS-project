import {
  Container,
  Grid,
  Paper,
  CardMedia,
  Divider,
  TextField,
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
  bookData.sort((a, b) => a.average_rating - b.average_rating);
  console.log(bookData);
  const classes = useStyles();

  const handlePage = (pageNo) => {
    console.log(pageNo);
    setPage(pageNo);
  };
  const [search, setSearch] = useState("");
  let data = bookData.filter((item) => {
    return item.authors.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  console.log(search);
  const cover = [
    "https://www.creativindie.com/wp-content/uploads/2012/07/stock-image-site-pinterest-graphic.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847",
    "https://images.squarespace-cdn.com/content/v1/54d262dde4b02fc9b49ecf9c/1522975869432-RRNG4FPX0LCJD205NT88/ke17ZwdGBToddI8pDm48kEuv4Y4t3q1rAAZ3bBSUazl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1US9-0cW5aPUUMJ-3sw1AVU3jPrGIyYMQT1mVx6iI98dTG6v6ULRah83RgHXAWD5lbQ/Atthegoingdownofthesun_mockup.png",
    "https://i0.wp.com/www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg",
    "https://images.unsplash.com/photo-1551300329-dc0a750a7483?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.pexels.com/photos/5095897/pexels-photo-5095897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];
  return (
    <Container maxWidth="md">
      <div>
        <h3>BOOK LIST</h3>
        <TextField
          variant="outlined"
          color="inherit"
          label="Search Book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />
      <Divider />
      <br />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {data
              ?.filter(
                (_, index) =>
                  index >= (currentPage - 1) * 30 && index < currentPage * 30
              )
              .map((item) => {
                return (
                  <Grid key={item.bookID} item>
                    <Link
                      to={`/book/${item.bookID}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Paper className={classes.paper}>
                        <p>{item.title}</p>
                        <CardMedia
                          className={classes.media}
                          image={cover[Math.floor(Math.random() * cover.length)]}
                          
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
