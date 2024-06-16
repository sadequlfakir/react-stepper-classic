import React, { useState } from 'react';
import Stepper from '../src/index.js';

const App = () => {
  const [steps] = useState([
    {
      title: 'Step One',
      href: 'http://example1.com',
      onClick: (e) => {
        e.preventDefault();
        console.log('onClick', 1);
      },
    },
    {
      title: 'Step Two',
      href: 'http://example2.com',
      onClick: (e) => {
        e.preventDefault();
        console.log('onClick', 2);
      },
    },
    {
      title: 'Step Three (Disabled)',
      href: 'http://example3.com',
      onClick: (e) => {
        e.preventDefault();
        console.log('onClick', 3);
      },
    },
    {
      title: 'Step Four',
      href: 'http://example4.com',
      onClick: (e) => {
        e.preventDefault();
        console.log('onClick', 4);
      },
    },
  ]);

  const [currentStep, setCurrentStep] = useState(0);

  const onClickNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const buttonStyle = {
    background: '#E0E0E0',
    width: 200,
    padding: 16,
    textAlign: 'center',
    margin: '0 auto',
    marginTop: 32,
    cursor: 'pointer',
  };

  return (
    <div>
      <Stepper steps={steps} activeStep={currentStep} disabledSteps={[2]} />
      <div style={buttonStyle} onClick={onClickNext}>
        Next
      </div>
    </div>
  );
};

export default App;
