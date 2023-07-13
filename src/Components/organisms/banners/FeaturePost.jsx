import "./style.css";
import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button } from "@mui/material";

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <Box>
        <Card sx={{ display: "flex", width: '100%', height: '100%', boxShadow: 'none' }} className="FeaturePost">
          <CardContent sx={{ flex: 1 }}>
            <Typography component="div" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="description" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <Button variant="contained" color="primary">
                Leer más...
              </Button>
            </Typography>
          </CardContent>
          <CardMedia
            className="cardImg cardImgDim"
            component="img"
            sx={{
              width: 360,
              maxWidth: 360,
              display: { xs: "block", sm: "block", xl: "block" },
              transform: "translateY(-60px)",
            }}
            image={post.image}
            alt={post.imageLabel}
          />
          <CardMedia
            className="cardImg cardImgDim"
            component="img"
            sx={{
              width: 360,
              display: { xs: "none", sm: "block" },
              transform: "translateY(20px)",
            }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </Box>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
