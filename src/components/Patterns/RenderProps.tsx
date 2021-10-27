import { Fragment } from 'react';
import { NameProvider } from './NameProvider';
import { MouseProvider } from './MouseProvider';

const NameProviderComponent = () => {
  return (
    <>
      {/* <NameProvider /> 🐒 */}
      {/* <NameProvider></NameProvider> 🐒 */}
      <NameProvider>
        {({ name }) => (<h1>Hello {name}!</h1>)}
      </NameProvider>
    </>
  );
}
type MouseInfoProps = { x: number; y: number };
const MouseInfo = ({ x, y }: MouseInfoProps) => <p>Mouse position is x={x}, y={y}</p>;
const MouseProviderComponent = () => {
  return (
    <Fragment>
      <h2>Mouse provider</h2>
      <MouseProvider
        render={(state) => (
          <MouseInfo x={state.x} y={state.y} />
        )} />
    </Fragment>
  );
}

export { NameProviderComponent, MouseProviderComponent };