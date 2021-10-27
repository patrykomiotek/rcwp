import * as React from 'react'
import { isValidElement } from 'react';
import { Switch } from './Switch';

type ToggleSwitchProps = {
  on?: boolean;
  children: string;
}

// Wrap in fragments to return a string as a temporary fix for this issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
export function ToggleOn({ on, children }: ToggleSwitchProps) {
  return <>{on ? children : null}</>;
};

export function ToggleOff({ on, children }: ToggleSwitchProps) {
  return <>{on ? null : children}</>;
};

export type ToggleChildProps = ToggleSwitchProps | ToggleButtonProps;

type ToggleProps = {
  children: React.ReactElement<ToggleChildProps> | React.ReactElement<ToggleChildProps>[];
}

type ToggleButtonProps = {
  on?: boolean;
  toggle?: React.MouseEventHandler<HTMLInputElement>;
}

export function ToggleButton({ on, toggle, ...props }: ToggleButtonProps) {
  return <Switch on={on} onClick={toggle} {...props} />;
};

export function Toggle({ children }: ToggleProps) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  const newChildren = React.Children.map(
    children,
    (child: React.ReactElement<ToggleChildProps>) => {
      if (isValidElement(child)) {
        return typeof child.type === "string" ? child : React.cloneElement(child, { on, toggle });
      }
      return null;
    }
  );
  return <>{newChildren}</>;
};