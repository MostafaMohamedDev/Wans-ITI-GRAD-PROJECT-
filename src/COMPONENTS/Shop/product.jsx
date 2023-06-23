import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Badge } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Shop.css";

import { constants } from '../../constants';
const URL = constants.API_HOST; 
// const Product = ({data}) => {

//   return (
//     <div>
//         {/* <h1>{data.id}</h1> */}
//         <div>
//             <div>
//                 <img src={image} alt='proImg' width={500}/>
//             </div>
//             <p>{name}</p>
//             <p>{price}</p>
//             <button onClick={()=>addToCart(id)}>Add To Cart
//             {cartItemCount > 0 && <span> ( {cartItemCount} ) </span>}</button>
//         </div>
//     </div>
//   )
// }

// export default Product;

export default function MultiActionAreaCard({ data }) {
  //Fake Data From  API

  const { id, name, price, image } = data;

  // console.log(id);

  // Cart items
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <Card
      sx={{
        maxWidth: 300,
        // maxHeight: 600,
        marginBottom: "25px",
        padding: 0,
        borderColor: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Added box shadow
        borderRadius: "30px 30px 10px 10px ", // Added border radius
      }}
    >
      <CardActionArea className="m-auto">
        <CardMedia
          component="img"
          height="400"
          image={URL+"/" + image}
          alt="green iguana"
          className="bg-dark imgShop"
          style={{
            borderRadius: "30px 30px 0 0",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        />

        <CardContent className="text-center line1" style={{ padding: "20px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="line-head"
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
            className="fw-bold"
            style={{ fontSize: "18px", color: "#ff642e" }}
          >
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="bottom-card" style={{ padding: "10px" }}>
        <IconButton
          size="large"
          style={{
            color: "#ff642e",
            margin: "auto",
            borderRadius: "30%",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 10px rgba(255, 100, 46, 0.3)",
            transition: "transform 0.3s ease-in-out",
          }}
          aria-label="show 17 new notifications"
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
    </Card>
  );
}
