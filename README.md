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

## Example Usage

```
import Stepper from 'react-stepper-classic';

const steps = [
  { title: 'Step 1', href: '#', onClick: () => console.log('Step 1 clicked') },
  { title: 'Step 2', href: '#', onClick: () => console.log('Step 2 clicked') },
  { title: 'Step 3', href: '#', onClick: () => console.log('Step 3 clicked') },
];

const App = () => {
  return (
    <Stepper
      activeStep={1}
      steps={steps}
    />
  );
};

```

## Custom Styles Example

```
const customStepStyles = {
  step: { backgroundColor: 'lightblue' },
  circle: { borderColor: 'blue' },
  title: { color: 'darkblue' },
};

const steps = [
  { title: 'Step 1', customStyles: customStepStyles },
  { title: 'Step 2' },
  { title: 'Step 3' },
];

<Stepper steps={steps} customStyles={{ stepper: { backgroundColor: 'lightgray' } }} />


```

See full example [here](https://github.com/sadequlfakir/react-stepper-classic/blob/dev/example/App.js)

## API

### Props

| Prop Name              | Type   | Default Value | Description                                                              |
| ---------------------- | ------ | ------------- | ------------------------------------------------------------------------ |
| `width`                | number |               | The width of the step as a percentage of the total width of the stepper. |
| `activeColor`          | string | `'#5096FF'`   | The background color of the active step.                                 |
| `completeColor`        | string | `'#5096FF'`   | The background color of the completed steps.                             |
| `defaultColor`         | string | `'#E0E0E0'`   | The background color of the inactive steps.                              |
| `activeTitleColor`     | string | `'#000'`      | The text color of the active step title.                                 |
| `completeTitleColor`   | string | `'#000'`      | The text color of the completed step titles.                             |
| `defaultTitleColor`    | string | `'#757575'`   | The text color of the inactive step titles.                              |
| `circleFontColor`      | string | `'#FFF'`      | The font color of the step index or icon.                                |
| `size`                 | number | `32`          | The size of the step circle.                                             |
| `circleFontSize`       | number | `16`          | The font size of the step index or icon.                                 |
| `titleFontSize`        | number | `16`          | The font size of the step title.                                         |
| `circleTop`            | number | `24`          | The top margin for the step circle.                                      |
| `titleTop`             | number | `8`           | The top margin for the step title.                                       |
| `title`                | string |               | The title of the step.                                                   |
| `index`                | number |               | The index of the step.                                                   |
| `active`               | bool   | `false`       | Indicates if the step is active.                                         |
| `completed`            | bool   | `false`       | Indicates if the step is completed.                                      |
| `first`                | bool   | `false`       | Indicates if the step is the first step.                                 |
| `isLast`               | bool   | `false`       | Indicates if the step is the last step.                                  |
| `completeOpacity`      | string |               | The opacity of the completed step.                                       |
| `activeOpacity`        | string |               | The opacity of the active step.                                          |
| `defaultOpacity`       | string |               | The opacity of the inactive step.                                        |
| `completeTitleOpacity` | string |               | The opacity of the completed step title.                                 |
| `activeTitleOpacity`   | string |               | The opacity of the active step title.                                    |
| `defaultTitleOpacity`  | string |               | The opacity of the inactive step title.                                  |
| `barStyle`             | string | `'solid'`     | The style of the connecting bar.                                         |
| `defaultBarColor`      | string | `'#E0E0E0'`   | The color of the inactive connecting bar.                                |
| `completeBarColor`     | string |               | The color of the completed connecting bar.                               |
| `defaultBorderColor`   | string |               | The border color of the inactive step circle.                            |
| `completeBorderColor`  | string |               | The border color of the completed step circle.                           |
| `activeBorderColor`    | string |               | The border color of the active step circle.                              |
| `defaultBorderStyle`   | string | `'solid'`     | The border style of the inactive step circle.                            |
| `completeBorderStyle`  | string |               | The border style of the completed step circle.                           |
| `activeBorderStyle`    | string |               | The border style of the active step circle.                              |
| `lineMarginOffset`     | number | `4`           | The margin offset for the connecting lines.                              |
| `defaultBorderWidth`   | number | `3`           | The border width of the step circle.                                     |
| `href`                 | string |               | The URL to navigate to when the step is clicked.                         |
| `onClick`              | func   |               | The function to call when the step is clicked.                           |
| `customStyles`         | object | `{}`          | Custom styles to apply to various parts of the step.                     |

## Stepper Component

The `Stepper` component manages and displays a series of `Step` components.

### Props

| Prop Name       | Type                    | Default Value | Description                                                                                                                |
| --------------- | ----------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `activeStep`    | number                  | `0`           | The index of the currently active step.                                                                                    |
| `steps`         | arrayOf                 |               | An array of step objects. Each step object should contain `title`, `icon`, `href`, `onClick`, and optional `customStyles`. |
|                 | shape({                 |               |                                                                                                                            |
|                 | title:                  |               |                                                                                                                            |
|                 | icon:                   |               |                                                                                                                            |
|                 | href:                   |               |                                                                                                                            |
|                 | onClick:                |               |                                                                                                                            |
|                 | customStyles: object }) |               |                                                                                                                            |
| `disabledSteps` | arrayOf                 | `[]`          | An array of indices representing steps that are disabled.                                                                  |
| `customStyles`  | object                  | `{}`          | Custom styles to apply to the stepper container and the stepper.                                                           |

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
