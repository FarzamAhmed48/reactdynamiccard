import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from './ProductData';
import { Description } from '@mui/icons-material';
const Card_Navigate = () => {
    const par=useParams();
    
    const filt=ProductData.filter((arr)=>arr.id==par.id)
  return (
    <div>

        {
            filt.map((sim)=>{
                const {id,title,price,image,rating,description}=sim
                const {rate,count}=rating
                return <div style={{display:"flex",width:"500px", flexDirection:'column',justifyContent:"center",alignItems:"center",}}>
                    <h1>Product Details</h1>
                    <img src={image} alt="" style={{width:"500px",height:"250px",objectFit:"contain", border:"2px solid grey" }} />
                    <h2>{title}</h2>
                    <h2>
                        {description}
                    </h2>
                    <div style={{display:"flex", justifyContent:"space-between", width:"400px"}}>
                        <h2>`Price: ${price} `</h2>
                        <h2>`Rating: ${rate} by ${count}`</h2>
                    </div>

                </div>
                    
            })
            
        }
    </div>
  )
}

export default Card_Navigate