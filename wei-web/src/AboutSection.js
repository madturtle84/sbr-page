//@flow
import * as React from 'react';
import Title from './Title';
import TextDescription from './TextDescription';


export default function AboutSection(): React.Node {
  const containerStyle = {
    marginTop: 20,
  };
  return (
    <div style={containerStyle}>
      <Title text='About' />
      <TextDescription
        paddingLeft={60}
        texts={[
          '1. jweifejwfewijo',
          '2. wjeiofjweoifjowiefiowe'
        ]}
      />
    </div>
  );
}
