import "./Hero.css"
import Crypto from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            { /* Left Side */ }
            <div className="left">
                <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                <h1>Invest in Cryptocurrency with Your IRA</h1>
                <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                <div className="input-container">
                    <input type="email" placeholder="Enter your email" />
                    <div className="btn">Learn More</div>
                </div>
            </div>


            { /* Right side */}

            <div className="right">
                <div className="img-container">
                    <img src={Crypto} alt="crypto image" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero