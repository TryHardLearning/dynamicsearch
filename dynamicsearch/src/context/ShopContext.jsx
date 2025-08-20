import { createContext, use, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
    const corrency = '$';
    const deliveryFee = 10;

    const navigate = useNavigate();

    const [search, setSearch] = useState('');

    const [showSearch, setShowSearch] = useState(false);

    const [shoppingBag, setShoppingBag] = useState({});

    const addToShoppingBag = (productId, size) => {
        
        if(!productId || !size) {
            console.error('Product ID and size are required to add to shopping bag.');
            toast.error('Select Product Size');
            return;
        }
        
        setShoppingBag(shoppingBag => {
            const updatedBag = { ...shoppingBag };

            if (!updatedBag[productId]) {
                updatedBag[productId] = {};
            }

            if (!updatedBag[productId][size]) {
                updatedBag[productId][size] = 0;
            }

            updatedBag[productId][size] += 1;
            console.log(updatedBag[productId][size])
            return updatedBag;
        });
    };

    const getShoppingBagCount = () => {
        let count = 0;
        for(const products in shoppingBag){
            for(const product in shoppingBag[products]){

                try {
                    if (shoppingBag[products][product] > 0) {
                        count += shoppingBag[products][product];
                    }
                } catch (error) {
                    console.error(`Error processing product ${products} with size ${product}`);
                }
            }
        }
        return count;
    }

    const updateQuantity = async (productId, size, quantity) => {
        if (!productId || !size) {
            console.error('Product ID, size, and valid quantity are required to update shopping bag.');
            return;
        }
        let copyShoppingBag = structuredClone(shoppingBag);

        copyShoppingBag[productId][size] = quantity;

        setShoppingBag(copyShoppingBag);
    }

    const getCartAmount = () =>{
        let amount = 0;
        try{
            
            for(const productId in shoppingBag){
                const productData = products.find(item => item._id === productId);
                if (!productData) continue; // Ensure productData exists
                for(const size in shoppingBag[productId]){
                    if(shoppingBag[productId][size] > 0){
                        amount += productData.price * shoppingBag[productId][size];
                    }
                }
            }

        }catch(error){
            console.error('Error calculating cart amount');
        }
        
        return amount;
    }

    useEffect(() => {
        console.log('Shopping Bag Updated');
    },[shoppingBag]);

    const value = {
        products, corrency, deliveryFee, 
        search, setSearch, showSearch, setShowSearch, 
        shoppingBag, addToShoppingBag, getShoppingBagCount, updateQuantity, 
        getCartAmount, navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;