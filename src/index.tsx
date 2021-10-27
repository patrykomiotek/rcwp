import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { UsersListConnected } from 'components/User/UsersListConnected';
import { UsersList } from 'components/User/UsersList';
import reportWebVitals from './reportWebVitals';
import { FormPage } from 'pages/FormPage';
import { RegistrationForm } from './components/OldRegistrationForm/RegistrationForm';
import { NameProviderComponent, MouseProviderComponent } from 'components/Patterns';
import { GenericUsersList } from 'components/Patterns';
import { Switch } from 'components/Patterns';
import { store } from './store';

// Start the mocking conditionally.
// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser');
//   worker.start();
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Profiler id="myId" onRender={(id, phase, actualDuration) => {
        // console.info(`[${id}] ${phase}: ${actualDuration}`);
      }}>
        <Switch />

        {/* <Toggle>
          <ToggleOn>Toggle is on</ToggleOn>
          <ToggleOff>Toggle is off</ToggleOff>
          <ToggleButton />
        </Toggle> */}


        {/* <GenericUsersList /> */}
        {/* <NameProviderComponent />
        <MouseProviderComponent /> */}
        {/* <FormPage /> */}
        {/* <RegistrationForm defaultEmail="test@wp.pl" /> */}
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
