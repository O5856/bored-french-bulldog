import logo from './assets/logo.png'
import bulldog from './assets/Bulldog.png'
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [advice, setAdvice] = useState("Simply tap the button and instantly receive a fresh idea to entertain yourself.")

  const getAdvice = async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity)
  }


  return (
    <div>
      <div className="container logo-img-bgd">
        <h1>
          <img src={logo} width='500px' />
        </h1>
        <h2>
          Your antidote to <br /> boredom
        </h2>
        <img src={bulldog} width='400px' />

      </div>

      <div className='container btn-bgd'>
        <div className='advice'>
          <p className='advice-style'>{advice}</p>
        </div>

        <div className='copy-container'>

        </div>


        <button onClick={getAdvice} className='btn'>
          <p className='btn-copy-style'>GET IDEA</p>
        </button >
      </div>
    </div>
  );
}

export default App;
