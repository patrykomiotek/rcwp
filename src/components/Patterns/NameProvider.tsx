import type { ReactNode } from 'react';
import { Component } from 'react';

type NameProviderProps = {
  children: (state: NameProviderState) => ReactNode;
}

type NameProviderState = {
  readonly name: string;
}

class NameProvider extends Component<NameProviderProps, NameProviderState> {
  state = {
    name: "Patryk"
  }
  render() {
    return this.props.children(this.state);
  }
}

export { NameProvider };
