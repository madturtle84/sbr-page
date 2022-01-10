//@flow
import * as React from 'react';
import titleBackground from './images/titleBackground.png';
import './App.css';

type Props = {
  text: string,
};
export default function Title(props: Props): React.Node {
  const style = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${titleBackground})`,
    //backgroundSize: 'cover',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 200,
  };
  const textDivStyle = {
    color: 'white',
    fontSize: 30,
    border: 'solid red',
    fontFamily: 'MyFont',
  };
  return (
    <div style={style}>
      <div style={textDivStyle}>{props.text}</div>
    </div>
  );
}
