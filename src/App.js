/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import landingImage from './images/landing.png';
import PricingTable from './pricingtable';
import Header from './Header';

function App() {
  return (
    <div className="App">
      {/* <header>
        <div class="head">
            <div class="CN"><a href="" id="ATP">AlgoTradePro</a></div>
            <div class="dtl"><a href="">SignUp</a></div>
            <div class="dtl"><a href="">About</a></div>
            <div class="dtl"><a href="">Products</a></div>
            <div class="dtl"><a href="">Support</a></div>
            <div class="L_in"><a href="">LogIn</a></div>
        </div>
      </header> */}
      <Header />
      <div className='hero_section'>
        <div className='hero_text'>
          <div className='hero_text_head'>
            Welcome to AlgoTradePro,
          </div>
          <div className='hero_text_body'>
            Your premier platform for algorithmic trading! Create, deploy, and manage trading strategies with ease using our user-friendly interface and robust tools. With live market data integration from TradingView and support for multiple brokers, you can execute trades seamlessly. Enjoy advanced features like backtesting, risk management, and customizable alerts to refine your strategies and maximize returns. Our dedicated customer support is always available to assist you. Join AlgoTradePro today and revolutionize your trading experience. Trade smarter, not harder, with AlgoTradePro.  
          </div>
        </div>
      </div>
      <div className='img_section'>
        <div className='image'>
          <img src={landingImage} alt="error" />  
        </div>
      </div>
      {/* <div className='pricing'>
        <div className='box'>
          <div className='box_content'>
            <p id='f_p'>Features / Plans</p>
            <p id='p'>Price</p>
            <ul id='ft'>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </div>
        </div>
      </div> */}
       <div className="pricing">
        <PricingTable /> 
      </div>
    </div>
  );
}

export default App;
