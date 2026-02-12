import { useState } from 'react';
import './App.css';
import valentineGift from './assets/valentine.png';

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noBtnStyle, setNoBtnStyle] = useState({});

  const handleNoHover = () => {
    // Generate random offset between -150px and +150px
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 300;

    setNoBtnStyle({
      transform: `translate(${x}px, ${y}px)`,
      transition: 'transform 0.3s ease',
    });
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  return (
    <div className="app-container">
      <div className="content-box">
        {yesPressed ? (
          <div className="success-container">
            <img src={valentineGift} alt="Happy Valentine" className="success-image" />
            <h1 className="success-text">A toi mon amour ,aussi belle et épineuse telle une rose ,Joyeux St Valentin Islamia</h1>
          </div>
        ) : (
          <>
            <h1>Veux-tu bien être ma valentine ?</h1>
            <div className="button-group">
              <button className="btn-yes" onClick={handleYesClick}>
                Oui
              </button>
              <button
                className="btn-no"
                style={noBtnStyle}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover} // For mobile support
              >
                Non
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
