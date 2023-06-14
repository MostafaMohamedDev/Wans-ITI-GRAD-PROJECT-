import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


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



export default function MultiActionAreaCard({data}) {

      //Fake Data From  API 

      const {id,name,price,image} = data

      // console.log(id);
      
      // Cart items 
      const {addToCart,cartItems} = useContext(ShopContext)
  
      const cartItemCount = cartItems[id];

  return (
    <Card sx={{ maxWidth: 300,maxheight:700 ,marginBottom:"25px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={""}>
        <Button size="small" color="primary" onClick={()=>addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <span> ( {cartItemCount} ) </span>}
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}