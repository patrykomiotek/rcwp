import { Component } from 'react';

interface GenericListProps<T> {
  items: T[];
  itemRenderer: (item: T) => JSX.Element;
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
