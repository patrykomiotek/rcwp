import { useState, isValidElement } from 'react';
import { Switch } from './Switch';

export function ToggleOn({ on, children }) {
  return <>{on ? children : null}</>
}
export function ToggleOff({ on, children }) {
  return <>{on ? null : children }</>
}

export function ToggleButton({ on, toggle, ...props }) {
  return <Switch on={on} onClick={toggle} {...props} />
}

export function Toggle({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  const newChildren = React.Children.map(
    children,
    (child) => { // <ToggleOn />, <ToggleOff />, <ToggleButton />
      if (isValidElement(child)) {
        return React.cloneElement(child, { on, toggle })
      }
      return null;
  });
}

