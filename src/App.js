//@flow
import * as React from 'react';
import Header from './Header';
import PosterSection from './PosterSection';
import AboutSection from './AboutSection';
import PanelSection from './PanelSection';
import MediaSection from './MediaSection';

function App(): React.Node {
  const backgroundColor = 'rgb(5,5,5)';
  React.useEffect(() => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.style.backgroundColor = backgroundColor;
    }
  });
  const rootStyle = {
    minHeight: '100vh',
    background: backgroundColor,
    //border: 'solid cyan',
  }
  return (
    <div id='app' style={rootStyle}>
      <Header />
      <PosterSection />
      <Content />
    </div>
  );
}

function Content(): React.Node {
  const outerStyle = {
    display: 'flex',
    //border: 'solid yellow',
    justifyContent: 'center',
  };
  const innerStyle = {
    display: 'flex',
    width: '80%',
    //border: 'solid purple',
    flexDirection: 'column',
  };
  return (
    <div style={outerStyle}>
      <div style={innerStyle}>
        <AboutSection />
        <PanelSection />
        <MediaSection />
      </div>
    </div>
  );
}

export default App;
