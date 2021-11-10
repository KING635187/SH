import { useState } from "react";
import { StyledComponent, StyledLogo, StyledMusic } from "./styled";

const Navbar = () => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio("/audio/sweet.mp3"));

  const handleMusicToogle = () => {
    if (!playing) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <StyledComponent>
      <StyledMusic onClick={handleMusicToogle}>
        {playing ? "music-pause" : "music-start"}
      </StyledMusic>
      <StyledLogo>SH</StyledLogo>
    </StyledComponent>
  );
};

export default Navbar;
