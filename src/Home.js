import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">

            <div className="home__container">

                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="63738290" 
                        title="Jabra Evolve2 85 UC Wireless Headphones with Link380c, Stereo, Black – Wireless Bluetooth Headset for Calls and Music, 37 Hours of Battery Life, Advanced Noise Cancelling Headphones"
                        price={449.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/81IDZFkzjeL._AC_SL1500_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="93402123"
                        title="Alienware AW3420DW NEW Curved 34 Inch WQHD 3440 X 1440 120Hz, Monitor, Lunar Light"
                        price={1048.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71NJAl4Jz0L._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>  

                <div className="home__row">
                    <Product 
                        id="12748938"
                        title="KitchenAid KSM180QHSD 100 Year Limited Edition Queen of Hearts Stand Mixer, Passion Red"
                        price={399.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81LBhCVGIPL._AC_SL1500_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="74930213"
                        title="(24x36) World War II Military Aircraft Educational Chart Poster"
                        price={10.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/714rv1dOsNL._AC_SL1000_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="84653029"
                        title="John Psarris Iron Man Printed Canvas Art | Decoration Poster | Framed and Ready to Hang | Wall Decor Posters Made with Oil | 5 Pieces"
                        price={67.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/41I81SLRC3L._AC_.jpg"
                        rating={5}
                    />
                </div>     

                <div className="home__row">
                    <Product 
                        id="589431356"
                        title="Shoei X-14 Marquez Black Concept 2 Men's Street Motorcycle Helmet - TC-1 / X-Large"
                        price={889.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61%2BDkDTZ4KL._AC_SL1000_.jpg"
                        rating={5}
                    />
                </div>     

            </div> 

        </div>
    )
}

export default Home
