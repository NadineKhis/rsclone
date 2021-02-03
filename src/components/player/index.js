import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';
import PropTypes from 'prop-types';


export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.propTypes = {
  children: PropTypes.node,
  restProps: PropTypes.node
}

Player.Video = function PlayerVideo({ src }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
        <Inner>
          <video id="netflix-player" controls>
            <source src={src} type="video/mp4" />
          </video>
          <Close />
        </Inner>
      </Overlay>,
      document.body
    )
    : null;
};

Player.Video.propTypes = {
  src: PropTypes.string,
}

Player.Button = function PlayerButton({ ...restProps }) {
  const {  setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};

Player.Button.propTypes = {
  restProps: PropTypes.node
}
