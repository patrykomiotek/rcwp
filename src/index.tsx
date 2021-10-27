import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { UsersListConnected } from 'components/User/UsersListConnected';
import { UsersList } from 'components/User/UsersList';
import reportWebVitals from './reportWebVitals';
import { GenericUserList } from 'components/Patterns';
import { MouseProviderComponent, NameProviderComponent } from 'components/Patterns';
import { ConsoleGreeting } from 'components/Patterns';
import { Toggle, ToggleOn, ToggleOff, ToggleButton } from 'components/Patterns/Toggle';

import { store } from './store';

// Start the mocking conditionally.
// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser');
//   worker.start();
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Profiler id="RWCP" onRender={(id, phase) => console.log('id: ', id, ' phase: ', phase)}>
        <ConsoleGreeting name="Patryk" />
        <GenericUserList />
        <NameProviderComponent />
        <MouseProviderComponent />
        <Toggle>
          <ToggleOn>The button is on</ToggleOn>
          <ToggleOff>The button is off</ToggleOff>
          <ToggleButton />
        </Toggle>
      </Profiler>
      {/* <UsersList />
      <hr />
      <UsersListConnected /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
