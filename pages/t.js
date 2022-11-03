import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/lazy";

function App() {
  const urls = [
    "https://cnn-cnninternational-1-gb.samsung.wurl.com/manifest/playlist.m3u8",
    "https://live-hls-web-aje.getaj.net/AJE/index.m3u8",
    "http://ott-cdn.ucom.am/s24/index.m3u8",
    "https://smithsonianaus-samsungau.amagi.tv/playlist.m3u8",
    "https://live.corusdigitaldev.com/groupd/live/49a91e7f-1023-430f-8d66-561055f3d0f7/live.isml/.m3u8",
    "https://rt-doc-gd.secure2.footprint.net/1101.m3u8",
    "https://dh4wkqcyy8768.cloudfront.net/vod/2055304.m3u8",
    "https://edge-cdn1.manoto.click/live_1500.m3u8",
    "https://dev-live.livetvstream.co.uk/LS-63503-4/index.m3u8",
    "",
  ];
  const [channelNumber, setChannelNumber] = useState(0);
  const handleChannelUp = () => {
    if (channelNumber == urls.length) {
      setChannelNumber(0);
    } else {
      setChannelNumber(channelNumber + 1);
    }
  };
  return (
    <div onClick={handleChannelUp}>
      <ReactPlayer
        playing
        height={"100vh"}
        width={"100vw"}
        url={urls[channelNumber]}
      />
    </div>
  );
}

export default App;
