//@flow
import * as React from 'react';

export default function AboutDescription(): React.Node {
  const divStyle = {
    paddingLeft: 60,
  };
  const paragraphStyle = {
    color: 'white',
    fontSize: 20,
  };
  return (
    <div style={divStyle}>
      <p style={paragraphStyle}>
        1. jeifoewjifejwiofjewo
      </p>
      <p style={paragraphStyle}>
        2. jeifoewjifejwiofjewo
      </p>
      <p style={paragraphStyle}>
        3. jeifoewjifejwiofjewo
      </p>
    </div>
  );
}
