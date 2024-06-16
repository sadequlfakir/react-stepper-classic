# react-stepper-classic

A customizable and modern stepper component for React.

## Features

- Fully customizable styles
- Supports active, completed, and disabled steps
- Custom click handlers for steps
- Horizontal layout

## Installation

```
npm install react-stepper-classic --save
```

```
yarn add react-stepper-classic --save
```

Then just add `import Stepper from 'react-stepper-classic';` into your file.

## Screenshot

<img src="https://raw.githubusercontent.com/mu29/react-stepper/master/example/example.png" width="600" />

## Usage

```
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Stepper from 'react-stepper-classic';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { title: 'Step One', onClick: () => console.log('Step One Clicked') },
    { title: 'Step Two', onClick: () => console.log('Step Two Clicked') },
    { title: 'Step Three', onClick: () => console.log('Step Three Clicked') },
    { title: 'Step Four', onClick: () => console.log('Step Four Clicked') },
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  return (
    <div>
      <Stepper
        steps={steps}
        activeStep={currentStep}
        disabledSteps={[2]}
        activeColor="#4caf50"
        completeColor="#4caf50"
        defaultColor="#e0e0e0"
        circleFontColor="#fff"
        activeTitleColor="#000"
        completeTitleColor="#000"
        defaultTitleColor="#757575"
        size={32}
        circleFontSize={16}
        titleFontSize={16}
        circleTop={24}
        titleTop={64}
        defaultOpacity="0.5"
        completeOpacity="1"
        activeOpacity="1"
        barStyle="solid"
        defaultBorderColor="#e0e0e0"
        completeBorderColor="#4caf50"
        activeBorderColor="#4caf50"
        defaultBorderStyle="solid"
        completeBorderStyle="solid"
        activeBorderStyle="solid"
        defaultBarColor="#e0e0e0"
        completeBarColor="#4caf50"
        lineMarginOffset={4}
        defaultBorderWidth={1}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


```

See full example [here](https://github.com/sadequlfakir/react-stepper-classic/blob/dev/example/App.js)

## API

### Main Component

| name                 | description                                    | default | type   |
| -------------------- | ---------------------------------------------- | ------- | ------ |
| activeStep           | Active step index, starts at 0                 | 0       | number |
| steps                | List of step objects (see below)               |         | array  |
| activeColor          | Active circle color                            | #5096FF | string |
| completeColor        | Completed circle color                         | #5096FF | string |
| defaultColor         | Default circle color - not active or completed | #E0E0E0 | string |
| activeTitleColor     | Active title color                             | #000    | string |
| completeTitleColor   | Completed title color                          | #000    | string |
| defaultTitleColor    | Default title color - not active or completed  | #757575 | string |
| circleFontColor      | Circle text color (for index)                  | #FFF    | string |
| size                 | Circle size                                    | 32      | number |
| circleFontSize       | Circle text size                               | 16      | number |
| titleFontSize        | Title text size                                | 16      | number |
| circleTop            | Top margin of `Stepper` component              | 24      | number |
| titleTop             | Space between circle and title                 | 8       | number |
| defaultOpacity       | Default circle opacity                         | 1       | string |
| completeOpacity      | Completed circle opacity                       | 1       | string |
| activeOpacity        | Active circle opacity                          | 1       | string |
| defaultTitleOpacity  | Default title opacity                          | 1       | string |
| completeTitleOpacity | Completed title opacity                        | 1       | string |
| activeTitleOpacity   | Active title opacity                           | 1       | string |
| barStyle             | Style of bar separating steps                  | solid   | string |
| defaultBorderColor   | Default color of border surrounding circle     |         | string |
| completeBorderColor  | Color of border surrounding completed circle   |         | string |
| activeBorderColor    | Color of border surrounding active circle      |         | string |
| defaultBorderStyle   | Default style of border surrounding circle     | solid   | string |
| completeBorderStyle  | Style of border surrounding completed circle   | solid   | string |
| activeBorderStyle    | Style of border surrounding active circle      | solid   | string |
| defaultBarColor      | Default color of bar separating circles        | #E0E0E0 | string |
| completeBarColor     | Color of bar connected to a completed step     | #E0E0E0 | string |
| lineMarginOffset     | Offset for line margin                         | 4       | number |
| defaultBorderWidth   | Default Border Width                           | 3       | number |

### Step Objects

| name    | description                                 | default   | type         |
| ------- | ------------------------------------------- | --------- | ------------ |
| title   | Displayed text of the step below the number | undefined | string       |
| icon    | Displayed icon of the step                  | undefined | image/object |
| href    | Link to send them to on click               | undefined | string       |
| onClick | Event handler for when the step is clicked  | undefined | function     |

## Author

Sadequl Islam / [@sadequlfakir](https://devsadeq.vercel.app/)

## License

[MIT](./LICENSE)
