import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';


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

Player.Video = function PlayerVideo(props) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  console.log(props)

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return showPlayer
    ? ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
        <Inner>
          <YouTube videoId="gbcVZgO4n4E" opts={opts} />
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
  const { setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};

Player.Button.propTypes = {
  restProps: PropTypes.node
}
