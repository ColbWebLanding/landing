import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Video from './components/Video';
import Menu from './components/Menu';
import ColbLogo from './assets/colb_logo.png';
import Preloader from './components/Preloader';
// Pages
import Home from './views/Home';
import Welcome from './views/Welcome';
import Darwin from './views/Darwin';
import Blockchain from './views/Blockchain';
//import ContaBlack from './views/ContaBlack';
import Tokenization from './views/Tokenization';
import Contact from './views/Contact';
//import Pillars from './views/Pillars';
//import Stages from './views/Stages';
import Monnos from './views/Monnos';
import People from './views/People';
// Videos
import ThirdVideo from './assets/videos/third.mp4';

const App = () => {
  const [autoPlay, setAutoPlay] = useState(false);
  const [loading, setLoading] = useState(true);
  const _initPlayer = (currentIndex, nextIndex) => {
    if (loading) {
      setLoading(false);
    }
    if ([1, 8, 12].includes(nextIndex.index)) {
      setAutoPlay(true);
    } else {
      setAutoPlay(false);
    }
  };

  return (
    <>
      {loading && <Preloader />}
      <Menu />
      <ReactFullpage
        //fullpage options
        licenseKey={'4757BFC0-42BF436D-B3DCC2BD-D9AE55F1'}
        scrollOverflow
        anchors={[
          'page1',
          'page2',
          'page3',
          'page4',
          'page5',
          'page6',
          'page7',
          'page8',
          'page9',
          'page10',
          'page11',
          'page12',
          'page13',
          'page14'
        ]}
        afterLoad={_initPlayer}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Home />
              <Video
                autoPlay={autoPlay}
                srcMp4="https://res.cloudinary.com/colb/video/upload/v1583526276/Videos/video_boyrdo.mp4"
                backgroundImage="https://res.cloudinary.com/colb/image/upload/v1583877020/Videos/IMAGES/video.png"
              >
                <div className="content-box">
                  <img alt="Colb Logo" src={ColbLogo} width="140" />
                  <p style={{ fontSize: '20px' }}>Blockchain Experts</p>
                </div>
              </Video>
              <Welcome />
              <Darwin />
              <Blockchain />
             {/* <ContaBlack />
              <Pillars />
              <Stages /> */}
              <Video
                autoPlay={autoPlay}
                srcMp4="https://res.cloudinary.com/colb/video/upload/v1583527361/Videos/video2_oxtkp4.mp4"
                backgroundImage="https://res.cloudinary.com/colb/image/upload/v1583877019/Videos/IMAGES/video1.png"
              />
              <Tokenization />
              <Monnos />
              <People />
              <Video
                autoPlay={autoPlay}
                srcMp4={ThirdVideo}
                backgroundImage="https://res.cloudinary.com/colb/image/upload/v1583877019/Videos/IMAGES/video2.png"
              />
              <Contact />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default App;
