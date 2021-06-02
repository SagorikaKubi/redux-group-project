import React from 'react';
import { useEffect } from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectedProduct} from '../Redux/actions/productActions'

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log("tushar",product)
    const { flag, name, population, capital, description } = product;
   

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://restcountries.eu/rest/v2/alpha/${productId}`)
        .catch((err) => {
            console.log("err", err)
        })
        dispatch(selectedProduct(response.data))
    }

    useEffect(()=>{
        if (productId && productId !== "") fetchProductDetail()
    }, [productId])
    

    return (
        <div>
      
        <div style={{ margin:'100px auto', border:'2px solid gray', width:'305px', backgroundColor:'lightgray', borderRadius:'5px'}}>
          <div>
              <img style={{width:'300px'}}  src={flag} alt="" />
          </div>
          <div>
              <h2>{name}</h2>
          </div>
          <div style={{display:'flex'}}>
              <h3><span style={{marginLeft:'5px'}}>City: {capital}</span>    <span style={{marginLeft:'5px'}}>population: {population}</span></h3>
          </div>
        </div>
     
    </div>
    );
};

export default ProductDetail;