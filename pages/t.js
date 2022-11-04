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
    "https://edge-cdn1.manoto.click/live_1500.m3u8",
    "https://dev-live.livetvstream.co.uk/LS-63503-4/index.m3u8",
    "https://vs-cmaf-pushb-ww-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_persian_tv/pc_hd_abr_v2_akamai_dash_live.mpd",
    "https://hls.pmchd.live/hls/stream.m3u8",
    "https://stream.rjtv.stream/live/smil:rjtv.smil/chunklist_w365906041_b1992000.m3u8",
    "https://shls-mbcpersia-prod-dub.shahid.net/out/v1/bdc7cd0d990e4c54808632a52c396946/index.m3u8",
    "https://admdn2.cdn.mangomolo.com/nagtv/smil:nagtv.stream.smil/playlist.m3u8",
    "https://stmv1.srvif.com/retrotv/retrotv/playlist.m3u8",
    "https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8",
    "http://live-edge01.telecentro.net.ar/live/smil:musictop.smil/chunklist_w1417360698_b2028000_sleng.m3u8",
    "https://radio538.prd1.talpatvcdn.nl/22e9bbf9616547d7bc162c993009c533/index_1.m3u8",
    "https://playout.cdn.cartoonnetwork.com.br/playout_01/playlist-720p.m3u8",
    "https://playout.cdn.cartoonnetwork.com.br/playout_03/playlist.m3u8",
    "https://ott-linear-channels.stingray.com/hls/stirr/133.m3u8",
    "https://ott-linear-channels.stingray.com/hls/stirr/134.m3u8",
    "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2504",
    "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2516",
    "https://vid1.caltexmusic.com/hls/caltextv.m3u8",
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
