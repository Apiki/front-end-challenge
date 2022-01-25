import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const BlogPost = () => {
  const useStyles = makeStyles({
    media: {
      borderRadius: 10,
      height: 300,
    },
    card: {
      alignItems: "center",
      padding: 30,
    },
    link: {
      color: "#FFFFFF",
      textDecoration: "none",
    },
  });

  const { slug } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    const getPost = () => {
      fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
        .then((response) => response.json())
        .then((json) => setPost(json[0]));
    };

    getPost();
  }, [slug]);
  const classes = useStyles();

  return (
    <Grid
      container
      class={classes.media}
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {post && (
        <Card className={classes.card} xs={2} sm={8} md={8}>
          <CardMedia
            className={classes.media}
            component="img"
            image={post._embedded["wp:featuredmedia"][0].source_url}
          />
          <Typography variant="h3">{post.title["rendered"]}</Typography>
          <Box
            dangerouslySetInnerHTML={{ __html: post.content["rendered"] }}
          ></Box>
          <Button large variant="contained">
            <NavLink className={classes.link} to={`/`}>
              Voltar
            </NavLink>
          </Button>
        </Card>
      )}
    </Grid>
  );
};

export default BlogPost;
