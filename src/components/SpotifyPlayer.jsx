import React, { useEffect, useRef } from "react";

const SpotifyPlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      let options = {
        uri: "spotify:album:0wlsxZ1YPKwtrQ26zGxPjW",
      };
      let callback = (EmbedController) => {};
      IFrameAPI.createController(playerRef.current, options, callback);
    };
  }, []);

  return <iframe id="embed-iframe" ref={playerRef} />;
};

export default SpotifyPlayer;
