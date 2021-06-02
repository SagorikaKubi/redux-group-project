import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setProducts} from '../Redux/actions/productActions'
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
        .get('https://restcountries.eu/rest/v2/all')
        .catch((err) => {
            console.log("err", err)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts()
    }, [])
    console.log('products', products)

    return (
        <div className="ui grid container">
            <ProductComponent></ProductComponent>
        </div>
    );
};

export default ProductListing;