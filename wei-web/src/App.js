//@flow
import * as React from 'react';
import posterImage from './images/poster.png';
import './App.css';

function App(): React.Node {
  const rootStyle = {
    height: '100vh',
    background: 'black',
    //display: 'flex',
    border: 'solid cyan',
  }
  return (
    <div id='app' style={rootStyle}>
      <Header />
      <PosterSection />
    </div>
  );
}

function Header(): React.Node {
  const style = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    border: 'solid red',
    marginTop: '40px',
    justifyContent: 'flex-end',
  };
  return (
    <div style={style} >
      <HeaderButton
        text='Home'
        onClick={() => {
          console.log('Home onClick');
        }}
      />
      <HeaderButton
        text='Blog'
        onClick={() => {
          //TODO
        }}
      />
      <HeaderButton
        text='FAQ'
        onClick={() => {
          //TODO
        }}
      />
      <HeaderButton
        text='Newsletter'
        onClick={() => {
          //TODO
        }}
      />
    </div>
  );
}

type HeaderButtonProps = {
  text: string,
  onClick: () => void,
};
function HeaderButton(props: HeaderButtonProps): React.Node {
  const style = {
    backgroundColor: 'inherit',
    fontSize: 20,
    color: 'rgb(155,155,155)',
    border: 'solid yellow',
    marginLeft: '20px',
    marginRight: '20px',
    cursor: 'pointer',
  };
  return (
    <button style={style} onClick={props.onClick}>{props.text}  </button>
  );
}

function PosterSection(): React.Node {
  const divStyle = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    border: 'solid red',
  };
  const imgStyle = {
    border: 'solid green',
    maxWidth: '100%',
  };
  return (
    <div style={divStyle}>
      <img style={imgStyle} src={posterImage} alt='homeMain' />      
      <PosterSectionButton />
    </div>
  )
}

function PosterSectionButton(): React.Node {
  const style = {
    position: 'absolute',
    bottom: '40px',
    backgroundColor: '#455548',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    cursor: 'pointer',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    border: 'solid red',
  };
  function onClick() {

  }
  return (
    <button style={style} onClick={onClick}>Get Newsletter</button>
  );
}

export default App;
