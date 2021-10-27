import { NameProvider } from './NameProvider';
import { MouseProvider } from './MouseProvider';

const NameProviderComponent = () => {
  return (
    <div>
      {/* <NameProvider /> */}
      {/* <NameProvider></NameProvider> */}

      <NameProvider>
        {({ name }) => (<h1>Hello {name}!</h1>)}
      </NameProvider>
    </div>
  );
}
type MouseInfoProps = { x: number; y: number };
const MouseInfo = ({ x, y }: MouseInfoProps) => <p>Mouse position is x={x}, y={y}</p>;
const MouseProviderComponent = () => {
  return (
    <div>
      <h2>Mouse provider</h2>
      <MouseProvider
        render={(state) => (
          <MouseInfo x={state.x} y={state.y} />
        )} />
    </div>
  );
}

export { NameProviderComponent, MouseProviderComponent };