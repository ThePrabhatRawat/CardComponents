import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats, theme }) => {
  return (
    <div className={`player-card ${theme}`}>
      <img src={image || 'https://via.placeholder.com/150'} alt={`${name}`} className="player-image" />
      <h2 className="player-name">{name || "PlayerName"}</h2>
      <p className="player-position">{position || "Not Assigned"}</p>
      <div className="player-stats">
        <p>
          Points per Game: <span>{stats.pointsPerGame || "nan"}</span>
        </p>
        <p>
          Assists per Game: <span>{stats.assistsPerGame || "nan"}</span>
        </p>
        <p>
          Rebounds per Game: <span>{stats.reboundsPerGame || "nan"}</span>
        </p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
