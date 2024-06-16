declare module 'react-stepper-classic' {
  import { CSSProperties, ReactNode } from 'react';

  interface StepProps {
    active?: boolean;
    completed?: boolean;
    first?: boolean;
    isLast?: boolean;
    width: number;
    title?: string;
    icon?: ReactNode;
    index: number;
    href?: string;
    onClick?: () => void;
    customStyles?: {
      step?: CSSProperties;
      circle?: CSSProperties;
      title?: CSSProperties;
      activeCircle?: CSSProperties;
      completedCircle?: CSSProperties;
      activeTitle?: CSSProperties;
      completedTitle?: CSSProperties;
      leftBar?: CSSProperties;
      rightBar?: CSSProperties;
      completedBar?: CSSProperties;
    };
    [key: string]: any;
  }

  interface StepperProps {
    activeStep?: number;
    steps: Array<{
      title?: string;
      icon?: string;
      href?: string;
      onClick?: () => void;
      customStyles?: {
        step?: CSSProperties;
        circle?: CSSProperties;
        title?: CSSProperties;
        activeCircle?: CSSProperties;
        completedCircle?: CSSProperties;
        activeTitle?: CSSProperties;
        completedTitle?: CSSProperties;
        leftBar?: CSSProperties;
        rightBar?: CSSProperties;
        completedBar?: CSSProperties;
      };
    }>;
    disabledSteps?: number[];
    customStyles?: {
      root?: CSSProperties;
      stepper?: CSSProperties;
    };
    [key: string]: any;
  }

  const Step: React.FC<StepProps>;
  const Stepper: React.FC<StepperProps>;

  export default Stepper;
  export { Step };
}
