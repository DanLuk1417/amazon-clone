import React from 'react';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue ();


    return (
        <div className="checkout">

            <div className="checkout__left">

                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_LPHero_PDNonPrime_v2_en_US.jpg" alt="" />
                
                <div>

                    <h3 className="checkout__user">Hello, {user?.email}</h3>

                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                    ))}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}

                </div>
            </div>    

            <div className="checkout__right">
                <Subtotal />
            </div>

           
            
        </div>
    )
}

export default Checkout
