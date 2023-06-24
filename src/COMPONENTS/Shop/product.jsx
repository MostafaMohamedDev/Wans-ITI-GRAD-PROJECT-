import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Shop.css";

export default function MultiActionAreaCard({ data }) {
  const { id, name, price, image } = data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <Card
      sx={{
        maxWidth: 300,
        marginBottom: "25px",
        padding: 0,
        borderColor: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "30px 30px 10px 10px",
      }}
    >
      <CardActionArea className="m-auto">
        <CardMedia
          component="img"
          height="400"
          image={"http://ah.khaledfathi.com/" + image}
          alt="product"
          className="bg-dark imgShop"
          style={{
            borderRadius: "30px 30px 0 0",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        />

        <CardContent
          className="text-center line1"
          style={{ backgroundColor: "#f5f5f5", padding: "20px" }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            class="line-head"
            style={{
              marginBottom: "10px",
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color=""
            class="fw-bold"
            style={{ fontSize: "18px", color: "#ff642e" }}
          >
            {price}
          </Typography>
        </CardContent>

        <CardActions
          className="bottom-card"
          style={{ backgroundColor: "#333", padding: "10px" }}
        >
          <IconButton
            size="large"
            style={{
              color: "#ff642e",
              marginLeft: "auto",
              borderRadius: "50%",
              backgroundColor: "#fff",
              boxShadow: "0px 0px 10px rgba(255, 100, 46, 0.3)",
              transition: "transform 0.3s ease-in-out",
            }}
            aria-label={`Add ${name} to cart`}
            color="inherit"
            onClick={() => addToCart(id)}
            className="cart-icon"
          >
            <AddShoppingCartIcon />
            {cartItemCount > 0 && (
              <span style={{ fontSize: "18px" }}> ( {cartItemCount} ) </span>
            )}
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
