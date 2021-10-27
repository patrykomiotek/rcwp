import { Component } from 'react';
import type { ReactNode } from 'react';

type NameProviderProps = {
  children: (state: NameProviderState) => ReactNode;
}

type NameProviderState = {
  readonly name: string;
}

export class NameProvider extends Component<NameProviderProps, NameProviderState> {
  readonly state: NameProviderState = { name: 'Patryk' };

  render() {
    return this.props.children(this.state);
  }
}