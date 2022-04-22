//@flow
import * as React from 'react';

export default function Header(): React.Node {
  const style = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    //border: 'solid red',
    paddingTop: '40px',
    justifyContent: 'flex-end',
    marginBottom: 8,
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
  const defaultColor = 'rgb(155,155,155)';
  const [color, setColor] = React.useState(defaultColor);
  function handleMouseEnter() {
    setColor('white');
  }
  function handleMouseLeave() {
    setColor(defaultColor);
  }
  function handleMouseDown() {
    setColor(defaultColor);
  }
  function handleMouseUp() {
    setColor('white');
  }
  const style = {
    display: 'flex',
    backgroundColor: 'inherit',
    fontSize: 20,
    color,
    border: 'none',
    //border: 'solid yellow',
    marginLeft: '20px',
    marginRight: '20px',
    cursor: 'pointer',
  };
  return (
    <button
      style={style}
      onClick={props.onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      >
        {props.text}
    </button>
  );
}
