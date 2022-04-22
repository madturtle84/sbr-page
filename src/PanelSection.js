//@flow
import * as React from 'react';
import TextDescription from './TextDescription';
import panelContentImage from './images/panel_content.png';

export default function PanelSection(): React.Node {
  const containerStyle = {
    //border: 'solid green',
    background: '#455548',
    display: 'flex',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  };
  const leftDivStyle = {
    //border: 'solid white',
    flex: 1,
    display: 'flex',
    marginRight: 20,
  };
  const rightDivStyle = {
    //border: 'solid red',
    flex: 1.5,
    display: 'flex',
    flexDirection: 'column',
  };
  const imgStyle = {
    //flex: 1,
    //maxWdith: '100%',
    //maxHeight: '100%',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
  };
  const titleStyle = {
    color: 'white',
    fontSize: 40,
  };
  return (
    <div style={containerStyle}>
      <div style={leftDivStyle}>
        <div>
          <img style={imgStyle} src={panelContentImage} alt='panelImage' />
        </div>
      </div>
      <div style={rightDivStyle}>
        <span style={titleStyle}>Pushing VR to its Limit</span>
        <TextDescription
          texts={[
            'We\'re pushing VR locomotion to its limit. By using your own body to trigger movement, player become more immersive and less prone to VR sickness. You can now comfortably strafe to dodge incoming fire, or deflect bullets with your left hand while charging to a robot army.'
          ]}
        />
      </div>
    </div>
  );
}
