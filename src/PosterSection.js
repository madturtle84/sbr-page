//@flow
import posterImage from './images/poster.png';
import * as React from 'react';

export default function PosterSection(): React.Node {
  const divStyle = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    //border: 'solid red',
  };
  const imgStyle = {
    //border: 'solid green',
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
    //border: 'solid red',
  };
  function onClick() {

  }
  return (
    <button style={style} onClick={onClick}>Get Newsletter</button>
  );
}