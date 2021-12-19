//@flow
import * as React from 'react';

type Props = {
  paddingLeft?: number,
  texts: Array<string>,
};
export default function AboutDescription(props: Props): React.Node {
  const divStyle = {
    paddingLeft: props.paddingLeft,
  };
  const paragraphStyle = {
    color: 'white',
    fontSize: 20,
  };
  const texts = props.texts.map((text) => {
    return (
      <p style={paragraphStyle}>
        {text}
      </p>
    );
  })
  return (
    <div style={divStyle}>
      {texts}
    </div>
  );
}
