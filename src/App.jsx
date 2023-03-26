import React from 'react';
import Button from './components/Button/Button';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='bg-info'>
      <Header></Header>
      <Cart></Cart>
    </div>
  );
};

export default App;