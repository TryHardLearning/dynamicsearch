import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
    const corrency = '$';
    const deliveryFee = 10;

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

    useEffect(() => {
        console.log("Shopping Bag Updated:", shoppingBag);
    },[shoppingBag]);

    const value = {
        products, corrency, deliveryFee, 
        search, setSearch, showSearch, setShowSearch, 
        shoppingBag, addToShoppingBag, getShoppingBagCount, updateQuantity
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;