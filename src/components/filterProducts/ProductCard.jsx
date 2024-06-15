import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,  Stack, useTheme } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { singleProduct } from '../../features/slices/ProductsSlice';

function ProductCard({text, id,img,colors,name, price}) {
  const theme = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {type} = useParams()
  return (
    <>
    <Card onClick={() => {
          dispatch(singleProduct(id))
          navigate(`/filterProducts/${type}/${id}`)
        }} 
        sx={{ maxWidth: "290px", width: "290px", zIndex:'-1', cursor:'pointer' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            // maxHeight:"300px",
            mt:'6px',
            borderRadius:'6px',
            mx:'auto',
            width:'90%',
            boxShadow:theme.shadows[5]
          }}
          loading='lazy'
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography align={'center'} variant="body2" color="text.secondary">
            {text}
          </Typography>
          <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant="body1" color="initial">price: {price}$</Typography>
          <Typography align={'right'} variant="body1" color="initial">color: {colors?.map( (item, index) => {
            return <CircleIcon fonsize={'medium'} key={index} sx={{color:item}} />
          })}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}

export default ProductCard
