//@flow
import * as React from 'react';
import titleBackground from './images/titleBackground.png';
import './App.css';

type Props = {
  text: string,
};
export default function Title(props: Props): React.Node {
  const divStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    //border: 'solid red',
  };
  const imgContainerStyle = {
    flex: 1,
    display: 'flex',
    //border: 'solid yellow',
  };
  const imgStyle = {
    display: 'flex',
    width: '100%',
    objectFit: 'fill',
    //border: 'solid cyan',
  };
  const textDivStyle = {
    position: 'absolute',
    color: 'white',
    fontSize: 30,
    //border: 'solid red',
    fontFamily: 'MyFont',
  };
  return (
    <div style={divStyle}>
      <div style={imgContainerStyle}>
        <img style={imgStyle}  src={titleBackground} alt='titleBackground' />
      </div>
      <div style={textDivStyle}>{props.text}</div>
    </div>
  );
}
