import './Signup.css'
import Trade from '../assets/trade.png'

const Signup = () => {
  return (
    <div className="signup">
        <div className="container">

            {/* left */}
            <div className="left">
                <img src={Trade} alt="trading mobile" />
            </div>

            {/* right */}
            <div className="right">
                <h2>Earn passive income with crypto.</h2>
                <p>Generate potential earnings of 12% per year on a 
                    diverse selection of 30+ digital assets. Just keep 
                    your assets stashed in the app, and you'll effortlessly 
                    accumulate rewards at the close of every month, all without 
                    any restrictions or commitments.
                </p>
                <div className="input-container">
                    <input type="email" placeholder='Enter Your Email' />
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup