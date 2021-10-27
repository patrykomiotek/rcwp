import { Component } from 'react';
import type { ReactNode } from 'react';

interface GenericListProps<T> {
  items: T[];
  itemRenderer: (item: T) => ReactNode;
}

class GenericList<T> extends Component<GenericListProps<T>> {
  render() {
    const { items, itemRenderer } = this.props;
    return (
      <div>{items.map(itemRenderer)}</div>
    );
  }
}

export { GenericList };
