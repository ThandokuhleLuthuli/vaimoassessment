import React from 'react';
import Heading from '../heading/heading';
import ShippingInfo from '../shipping-info/shippingInfo';
import Banner from '../banner/banner';
import Options from '../options/options';
import Counter from '../counter/counter';
import Price from '../price/price';
import drone from '../../assets/images/drone.jpg';
import axios from 'axios';
import {useEffect,useState} from 'react';


function Main() {
    const [isLoading,setLoading] = useState(true);
    const [prod,getProd] = useState('');
    const url = 'https://fe-assignment.vaimo.net/';

    const getData = async () => {
        try {
             const returnData = await axios.get(url);
                getProd(returnData.data.product);
                setLoading(false)
            
        } catch (error){
            console.log(error);
        }
    }

    //fetch data from API
    useEffect(()=> {
      getData();
    },[]);

    //if loading 
//     if (isLoading) {
//         return <h1>Product is loading...</h1>
//     }

    return (
        <div className="main">  
        <div className="main_column">
            <img src={prod.gallery[0].main} alt=""/>
        </div> 
        
        <div className="main_column">
         <Heading prod={prod}/>
         <Price currentPrice="R 78.50 - R 895.31" oldPrice="R 98.12 - R 1,119.14"/>
         <Banner shipping="Free shipping (up to $40)" delivery="On-time delivery guaranteed"/>
         <Counter prod={prod}/>
         <Options prod={prod}/>

        </div>

        <div className="main_column">
            <ShippingInfo prod={prod}/>
        </div>
    </div>
    )
}

export default Main;
