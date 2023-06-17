import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



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
    <Card sx={{ maxWidth: 300,maxheight:700 ,marginBottom:"25px",padding:0,}}>
      <CardActionArea className='m-auto'>
        <CardMedia
          component="img"
          height="400"
          image={"http://ah.khaledfathi.com/"+image}
          // http://ah.khaledfathi.com/" + product.image
          alt="green iguana"
          className='bg-dark'
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={()=>addToCart(id)}
            >
                <AddShoppingCartIcon/>
            {cartItemCount > 0 && <span> ( {cartItemCount} ) </span>}
            </IconButton>
      </CardActions>
    </Card>
  );
}