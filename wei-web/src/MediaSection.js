//@flow
import * as React from 'react';
import Title from './Title';

export default function MediaSection(): React.Node {
  const containerStyle = {
    marginTop: 20,
  };
  return (
    <div style={containerStyle}>
      <Title text='Media' marginTop={60} />
    </div>
  );
}
