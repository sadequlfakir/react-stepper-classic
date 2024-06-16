import React from 'react';
import PropTypes from 'prop-types';
import Step from './Step';

const Stepper = ({
  activeStep = 0,
  steps,
  disabledSteps = [],
  customStyles = {},
  ...stepProps
}) => {
  const styles = {
    root: {
      width: '100%',
      minHeight: 0,
      padding: 0,
      ...customStyles.root,
    },
    stepper: {
      display: 'table',
      width: '100%',
      margin: '0 auto',
      ...customStyles.stepper,
    },
  };

  return (
    <div style={styles.root}>
      <div style={styles.stepper}>
        {steps.map((step, index) => (
          <Step
            key={index}
            width={100 / steps.length}
            title={step.title}
            icon={step.icon}
            href={step.href}
            onClick={step.onClick}
            active={!disabledSteps.includes(index) && index === activeStep}
            completed={!disabledSteps.includes(index) && index < activeStep}
            first={index === 0}
            isLast={index === steps.length - 1}
            index={index}
            customStyles={step.customStyles || {}}
            {...stepProps}
          />
        ))}
      </div>
    </div>
  );
};

Stepper.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
      href: PropTypes.string,
      onClick: PropTypes.func,
      customStyles: PropTypes.object,
    })
  ).isRequired,
  disabledSteps: PropTypes.arrayOf(PropTypes.number),
  customStyles: PropTypes.object,
  activeColor: PropTypes.string,
  completeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  activeTitleColor: PropTypes.string,
  completeTitleColor: PropTypes.string,
  defaultTitleColor: PropTypes.string,
  circleFontColor: PropTypes.string,
  size: PropTypes.number,
  circleFontSize: PropTypes.number,
  titleFontSize: PropTypes.number,
  circleTop: PropTypes.number,
  titleTop: PropTypes.number,
  defaultOpacity: PropTypes.string,
  completeOpacity: PropTypes.string,
  activeOpacity: PropTypes.string,
  defaultTitleOpacity: PropTypes.string,
  completeTitleOpacity: PropTypes.string,
  activeTitleOpacity: PropTypes.string,
  barStyle: PropTypes.string,
  defaultBarColor: PropTypes.string,
  completeBarColor: PropTypes.string,
  defaultBorderColor: PropTypes.string,
  completeBorderColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  defaultBorderStyle: PropTypes.string,
  completeBorderStyle: PropTypes.string,
  activeBorderStyle: PropTypes.string,
  lineMarginOffset: PropTypes.number,
  defaultBorderWidth: PropTypes.number,
};

export default Stepper;
