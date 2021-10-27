import * as React from 'react';

import { NameProvider } from './NameProvider';
import { MouseProvider } from './MouseProvider';

export const NameProviderComponent = () => (
  <NameProvider>
    {({ name }) => (
      <div>{name}</div>
    )}
  </NameProvider>
);

export const MouseProviderComponent = () => (
  <MouseProvider
    render={mouse => (
      <p>The mouse position is {mouse.x}, {mouse.y}</p>
    )}
  />
);
