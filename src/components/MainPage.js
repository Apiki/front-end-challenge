import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Undefined from "../images/QuestionMark.png";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const MainPage = () => {
  const useStyles = makeStyles({
    card: {
      margin: 20,
    },
    link: {
      color: "#FFFFFF",
      textDecoration: "none",
    },
    media: {
      height: 100,
    },
    title: {
      color: "#188ECC",
      fontWeight: 500,
      paddingBottom: 5,
      "&:hover": {
        color: "#BA007C",
      },
    },
  });
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(1);
  const [pages, setPages] = useState(0);
  const [moreBtn, setMoreBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getBlogs = () => {
      fetch(
        "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=" +
          count
      )
        .then((response) => {
          setPages(response.headers.get("X-WP-TotalPages"));
          return response.json();
        })
        .then((json) => {
          console.log(json);
          setBlogs([...blogs, ...json]);
          setLoading(false);
        });
    };
    getBlogs();
  }, [count]);
  const classes = useStyles();

  const loadMore = () => {
    const pageNumber = pages - 1;
    console.log(pageNumber);
    if (count >= pageNumber) {
      setMoreBtn(true);
    } else {
      setMoreBtn(false);
    }
    setCount(count + 1);
  };
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#E5F6FF",
        }}
      >
        <Grid>
          <Typography variant="h3" color="#545454">
            Blog de Desenvolvimento
          </Typography>
        </Grid>
        <Grid>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            {blogs &&
              blogs.map((blog) => {
                return (
                  <Grid item xs={2} sm={4} md={4}>
                    <Card
                      key={blog.id}
                      className={classes.card}
                      xs={8}
                      sm={8}
                      md={12}
                    >
                      <CardMedia
                        className={classes.media}
                        component="img"
                        image={
                          blog["_embedded"]["wp:featuredmedia"]
                            ? blog["_embedded"]["wp:featuredmedia"][0]
                                .source_url
                            : Undefined
                        }
                      />
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          className={classes.title}
                        >
                          {blog.title["rendered"]}
                        </Typography>
                        <Button variant="contained">
                          <NavLink
                            className={classes.link}
                            to={`/${blog.slug}`}
                          >
                            Ler mais
                          </NavLink>
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>

          <Grid>
            <Button variant="contained" disabled={moreBtn} onClick={loadMore}>
              {loading ? "Carregando..." : "Carregar mais..."}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
