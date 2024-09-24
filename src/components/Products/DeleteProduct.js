import React from "react";

import axios from "axios";


const DeleteProduct = ({show ,onHide , product ,onProductDeleted})=>{
    const handleDelete = async ()=>{
        const token = localStorage.getitem('token');
        console.log('product in delete',product );
        try{
            await axios.delete(`htttp://localhost:4000/api/products/delteProduct/${product.id}`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            });
            onProductDeleted();
            onHide();
        
        }catch(err){
            console.log('error delteing product ',err);

        }

        
    };

    return(
        <Model show={show} onHide={onhide}>
            <Model.Header closeButton>
                <Model.Title>Delete Product </Model.Title>
                </Model.Header>
                <Model.body>
                    Are you sure you want to delete {product.name}?
                    This action cannot be undone.       
                </Model.body>
                <Model.Footer>
                    <Button variant="secoundary" onclick={onhide}>
                        cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}></Button>
                </Model.Footer>
        </Model>
    )


}

export default DeleteProduct;