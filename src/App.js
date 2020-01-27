import React from 'react';
import AppForm from './components/AppForm';

import './App.css';
import hero from './undraw_business_shop_qw5t.svg'

function LandingPage() {
  return (
    <section className='wave'>
      <div className='flex-container'>
        <div className='introduction'>
          <div className='intro-text'>
            <h1>We are here for you</h1>
            <p>At CORFinancial we understand the cash-flow pressures that small to mid-sized businesses face every day. With over 40 years of knowledge and hands-on experience to draw from, we provide SMB’s with ALTERNATIVE growth financing and/or financial restructuring solutions.</p>
            <p>To get your business approved for one of our ABL solutions,  please complete the online credit application.</p>
          </div>
          <div className='cta'>
              <a href='#appForm' className='cta-select'>Credit application</a>
          </div>  
        </div>
        <div className='hero'>
          <img src={hero} alt={'hero'}/>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className='App'>
      <LandingPage />
      <br />
      <div id='appForm'>
      <AppForm />
      </div>
    </div>
  );
}
