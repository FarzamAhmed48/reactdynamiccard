import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductData from './ProductData';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Card_Template(props) {
    const navi = useNavigate()
    const goToCardNav = (id) => {
        navi(`/cardNav/${id}`)
        
    }
    const unpack = ProductData.map(({ id, title, price, description, category, image, rating }) => {
        return {
            id, title, price, description, category, image, rating
        };
    });

    return (
        <div >
            {unpack.map((product, index) => {
                const {id,title,price,description,category,image,rating}=product
                return <div>
                    <Card key={product.id} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={image}
                            title={title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {`${id}) ${title}`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={()=>goToCardNav(id)}>Details</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>

            })}
        </div>
        );
}
