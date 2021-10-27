import { Component } from 'react';
import type { MouseEventHandler } from 'react';
import './switch.styles.css';

const noop = () => {}

type SwitchProps = {
  on?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>
  className?: string;
  "aria-label"?: string;
}

class Switch extends Component<SwitchProps> {
  render() {
    const {
      on,
      className = '',
      'aria-label': ariaLabel,
      onClick,
      ...props
    } = this.props
    const btnClassName = [
      className,
      'toggle-btn',
      on ? 'toggle-btn-on' : 'toggle-btn-off',
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <label aria-label={ariaLabel || 'Toggle'} style={{display: 'block'}}>
        <input
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={noop}
          onClick={onClick}
          data-testid="toggle-input"
        />
        <span className={btnClassName} {...props} />
      </label>
    )
  }
}

export { Switch };
