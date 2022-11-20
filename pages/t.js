import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { findDOMNode } from "react-dom";
import screenfull from "screenfull";

function App() {
  const urls = [
    "https://play.bazbin.xyz/can/Iranica/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9MTEvMjAvMjAyMiAxMTozNjoyOCBQTSZoYXNoX3ZhbHVlPTcrdHI3QnJQL0wrWHJKVzBTS2lmenc9PSZ2YWxpZG1pbnV0ZXM9NQ==",
    "https://edge-cdn1.manoto.click/live_1500.m3u8",
    "https://dev-live.livetvstream.co.uk/LS-63503-4/index.m3u8",
    "https://voa-ingest.akamaized.net/hls/live/2033876/tvmc07/playlist.m3u8",
    "https://vs-cmaf-pushb-ww-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_persian_tv/pc_hd_abr_v2_akamai_dash_live.mpd",
    "https://play.bazbin.xyz/live/AP%20Persiana%20Science/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9MTEvMjAvMjAyMiAxMTozOTo1NSBQTSZoYXNoX3ZhbHVlPXpIOHhDZXp5Tkd5d0hIcjFNTWtSOGc9PSZ2YWxpZG1pbnV0ZXM9NQ==",
    "https://play.bazbin.xyz/live/AP Kanal e Jadid HD/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9MTEvMjAvMjAyMiAxMTo1MTo1MyBQTSZoYXNoX3ZhbHVlPWJCKytnUUhVZUg5dkhpT2FJOGl5enc9PSZ2YWxpZG1pbnV0ZXM9NQ=="
    ///////
    // "https://cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master_8.m3u8",
    // "https://content-ausw1.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be/g.m3u8?pbs=4979bcce49e147ac82638b52bde516d1",
    // "https://shls-mbcpersia-prod-dub.shahid.net/out/v1/bdc7cd0d990e4c54808632a52c396946/index.m3u8",
    // "https://hls.pmchd.live/hls/stream.m3u8",
    // "http://live-edge01.telecentro.net.ar/live/smil:musictop.smil/chunklist_w1417360698_b2028000_sleng.m3u8",
    // "https://vid1.caltexmusic.com/hls/caltextv.m3u8",
    ///////
    // "https://radio538.prd1.talpatvcdn.nl/22e9bbf9616547d7bc162c993009c533/index_1.m3u8",
    // "https://ott-linear-channels.stingray.com/hls/stirr/133.m3u8",
    // "https://ott-linear-channels.stingray.com/hls/stirr/134.m3u8",
    // "https://playout.cdn.cartoonnetwork.com.br/playout_01/playlist.m3u8",
    // "https://playout.cdn.cartoonnetwork.com.br/playout_02/playlist.m3u8",
    // "https://playout.cdn.cartoonnetwork.com.br/playout_03/playlist.m3u8",
    // "https://live.corusdigitaldev.com/groupd/live/49a91e7f-1023-430f-8d66-561055f3d0f7/live.isml/.m3u8",
    // "https://cnn-cnninternational-1-gb.samsung.wurl.com/manifest/playlist.m3u8",
    // "https://smithsonianaus-samsungau.amagi.tv/playlist.m3u8",
    // "https://admdn2.cdn.mangomolo.com/nagtv/smil:nagtv.stream.smil/playlist.m3u8",
    // "https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8",
    // //////////
  ];
  const videoRef = useRef();
  const handleClickFullscreen = () => {
    screenfull.request(findDOMNode(videoRef.current));
  };
  // const escFunction = useCallback((event) => {
  //   if (event.key === "Escape") {
  //     screenfull.request(findDOMNode(videoRef.current));
  //   }
  // }, []);

  // useEffect(() => {
  //   document.addEventListener("keydown", escFunction, false);

  //   return () => {
  //     document.removeEventListener("keydown", escFunction, false);
  //   };
  // }, []);

  const [channelNumber, setChannelNumber] = useState(0);
  const handleChannelUp = () => {
    if (channelNumber == urls.length - 1) {
      setChannelNumber(0);
    } else {
      setChannelNumber(channelNumber + 1);
    }
  };
  // console.log(urls.length, channelNumber);
  return (
    <>
      <button
        onClick={handleClickFullscreen}
        style={{
          // position: "absolute",
          top: "10px",
          right: "10px",
          width: "30px",
          height: "30px",
          background: "white",
          borderRadius: "50%",
          border: "2px solid black",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        F
      </button>
      <div onClick={handleChannelUp}>
        <ReactPlayer
          playing
          ref={videoRef}
          volume={1}
          height={"100vh"}
          width={"100vw"}
          url={urls[channelNumber]}
        />
      </div>
    </>
  );
}

export default App;
