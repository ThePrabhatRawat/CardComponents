import React from 'react';
import BasketballPlayerCard from './components/BasketBallCard/BasketballPlayerCard.jsx';
import './App.css';

const player1 = {
  name: 'LeBron James',
  image: 'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/c5r52rbifxn2srhp9no0',
  position: 'Forward',
  stats: { pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 },
};

const player2 = {
  name: 'Stephen Curry',
  image: 'https://images.radio.com/aiu-media/usatsi-14142591-168386558-lowres-2.jpg?width=800',
  position: 'Guard',
  stats: { pointsPerGame: 27.3, assistsPerGame: 6.5, reboundsPerGame: 5.3 },
};
function App() {
  return (
    <div className="App">
      <div className="section light-bg">
        <div className="theme-label">Light Theme</div>
        <div className="card-container">
          <BasketballPlayerCard {...player1} theme="light" />
        </div>
      </div>
      <div className="section dark-bg">
        <div className="theme-label">Dark Theme</div>
        <div className="card-container">
          <BasketballPlayerCard {...player2} theme="dark" />
        </div>
      </div>
    </div>
  );
}

export default App;
