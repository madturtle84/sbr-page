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
          'Experience fast-paced action in VR completely nausea-free using our innovative locomotion system -- with or without a controller!',
          'Dodge bullet, dodge bullet in mid-air, shoot fireballs, facepalm an robot or summon a rain of destruction. Becoming an action hero is physical, and user-friendly. '
        ]}
      />
    </div>
  );
}
