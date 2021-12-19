//@flow
import * as React from 'react';
import logo from './logo.svg';
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

export default App;
