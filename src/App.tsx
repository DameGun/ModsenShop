import { useState } from 'react';
import modsenLogo from './assets/modsen-logo.jpeg';
import './styles.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='wrapper'>
      <h1>Modsen shop</h1>
      <img src={modsenLogo} alt='Modsen Logo' />
      <h2>Clicks count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Click on me!</button>
    </div>
  );
}
