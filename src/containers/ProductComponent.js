import React from 'react';
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log("dhaka", products)
    const renderList = products.map((product)=> {
        const {alpha3Code, name, flag, price, category} = product;
        return(  <div style={{marginTop:'20px', marginLeft:'40px'}} className="ui grid" key={alpha3Code}>
            <div className="four column wide">
            <Link to={`/product/${alpha3Code}`}>
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img style={{height:"200px"}} src={flag} alt="" />
                </div>
                <div style={{height:'80px'}} className="content">
                    <div className="header">{name}</div>
                    <div className="meta price">${price}</div>
                    <div className="meta">{category}</div>
                </div>
            </div>
        </div>
        </Link>
        </div>
    </div>
    );
    })
    return (
      <>{renderList}</>
    );
};

export default ProductComponent;