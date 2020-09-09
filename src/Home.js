import React from 'react'
import "./home.css"
import Product from './Product'

function Home() {
    return (
        <div className ="home">
            <div className ="home__container">
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='Amazon Prime' />

            <div className ="home__row">

                <Product 
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                price={19.99} 
                image="https://m.media-amazon.com/images/I/510AO7UjVPL._AC_UY218_.jpg" 
                rating={3} 
                />

                <Product
                title="Xiaomi Mi Electric Scooter, 18.6 Miles Long-range Battery, Up to 15.5 MPH, Easy Fold-n-Carry Design, Ultra-Lightweight Adult Electric Scooter (US Version with Warranty)"
                price={391.99}
                image="https://m.media-amazon.com/images/I/51Qtg4L+JmL._AC_UL320_.jpg"
                rating= {4} />
            </div>

            <div className ="home__row">
            <Product
                title="Hori Nintendo Switch Mario Kart Racing Wheel Pro Mini By - Officially Licensed By Nintendo - Nintendo Switch"
                price={67.80}
                image="https://m.media-amazon.com/images/I/61AZuzqio9L._AC_UL320_.jpg"
                rating= {5} />

            <Product 
            title= "Kai'Sa Tyler The Creator & Hornets Poster Art Print Posters,18''×24'' Unframed Poster Print"
            price= {14.99}
            image= "https://m.media-amazon.com/images/I/81ZhrZAkvoL._AC_UL320_.jpg"
            rating= {3}
             />

            <Product 
            title= "School Backpack,Vaschy Unisex Classic Water-resistant Backpack for Men Women."
            price= {29.89}
            image= "https://m.media-amazon.com/images/I/81UbNUfvstL._AC_UL320_.jpg"
            rating= {4}
             />
            </div>

            <div className ="home__row">
            <Product 
            title= "Sceptre 30-Inch 21: 9 Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI DisplayPort Up to 85Hz Mprt 1ms FPS-RTS Build-in Speakers, Machine Black 2020"
            price= {149.99}
            image= "https://m.media-amazon.com/images/I/81pv0g8bQhL._AC_UY218_.jpg"
            rating= {4}
             />
            
            </div>

            </div>
        </div>
    )
}

export default Home
