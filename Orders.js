import React from "react";
import CategoryListing from "./NewOrder";


const ProductList=(props) =>{
    return (
        <div>
            <h1>Waiter's Dairy</h1>
            <h2>Table 1</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Table 1")
                 {   
                    return <CategoryListing productData={item} key="table1" deleteBtnHandler={props.deleteBtnHandler}/>
                 }
                 else{
                    return ;
                }
                })
            }
            <h2>Table 2</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Table 2")
                 {   
                    return <CategoryListing productData={item}  key="table2" deleteBtnHandler={props.deleteBtnHandler}/>
                 }
                 else{
                    return ;
                }
                })
            }
            <h2>Table 3</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Table 3")
                 {   
                    return <CategoryListing productData={item}  key="table3" deleteBtnHandler={props.deleteBtnHandler}/>
                 }else{
                return ;
            }
                })
            }
        </div>
    )
}

export default ProductList;