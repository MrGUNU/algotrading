// /* eslint-disable no-unused-vars */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable jsx-a11y/anchor-is-valid */

// import './App.css';
// import landingImage from './images/landing.png';
// import PricingTable from './pricingtable';
// import Header from './Header';
// import LoginSection from './loginsection';
// import Footer from './Footer';
// // import MySvg from'./images/wave-haikei.svg';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <div className='hero_section'>
//         {/* <div className='mysvg'>
//           <img src={MySvg} />
//         </div> */}
//         <div className='hero_text'>
//           <div className='hero_text_head'>
//             Welcome to AlgoTradePro,
//           </div>
//           <div className='hero_text_body'>
//             Your premier platform for algorithmic trading! Create, deploy, and manage trading strategies with ease using our user-friendly interface and robust tools. With live market data integration from TradingView and support for multiple brokers, you can execute trades seamlessly. Enjoy advanced features like backtesting, risk management, and customizable alerts to refine your strategies and maximize returns. Our dedicated customer support is always available to assist you. Join AlgoTradePro today and revolutionize your trading experience. Trade smarter, not harder, with AlgoTradePro.  
//           </div>
//         </div>
//       </div><hr/>
//       <div className='img_section'>
//         <div className='image'>
//           <img src={landingImage} alt="error" />  
//         </div>
//       </div>
//       <div className="pricing">
//         <PricingTable /> 
//       </div>
//       <div className='loginsection'>
//         <LoginSection />
//       </div>
//       <div className='footer'>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;
import './App.css';
import PricingTable from './pricingtable';
import Header from './Header';
import LoginSection from './loginsection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
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
      <hr />
      <div className="pricing">
        <PricingTable /> 
      </div>
      <div className='loginsection'>
        <LoginSection />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;