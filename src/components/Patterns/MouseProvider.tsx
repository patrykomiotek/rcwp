import { Component } from 'react';
import type { ReactNode, MouseEvent } from 'react';

type MouseProviderProps = {
  render: (state: MouseProviderState) => ReactNode
}

type MouseProviderState = {
  x: number;
  y: number;
}

class MouseProvider extends Component<MouseProviderProps, MouseProviderState> {

  constructor(props: MouseProviderProps) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

export { MouseProvider };
