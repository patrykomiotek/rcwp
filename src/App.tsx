// import { Button, BGColors } from './Button';
// import { Counter } from 'components/Counter';
// import { Generator } from 'components/Generator';
import { RegistrationForm } from 'components/RegistrationForm';
import React, { useEffect, MouseEventHandler, useState, useRef, Component } from 'react';
import type { ErrorInfo, ReactNode } from "react";

import { Hello } from 'components/Hello';
import { Container } from 'components/Container';
import { Main } from 'components/Main';

import { UserProvider } from 'components/UserContext';
import { UserCard, LoginButton } from 'components/User';
import { Name } from 'components/Name';
import { Animals } from 'components/Animals';
import { Products, Product } from 'components/Products';
import { JsxElement } from 'typescript';
import { Clicker } from 'components/Clicker';
import { store } from './store';

type ErrorBoundaryProps = {
  FallbackComponent: React.ReactType;
  children: ReactNode;
}

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: string;
}

type FallbackComponentProps = {
  error: string;
}

function FallbackComponent({ error }: FallbackComponentProps): React.ReactElement {
  return <p>Oh no we have an error <pre>{error}</pre></p>
}
// type ErrorBoundaryProps = {
//   FallbackComponent: React.ReactElement
// }
// type ErrorBoundaryState = {
//   error: Error | null
// }

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: "",
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorInfo: error.message, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <this.props.FallbackComponent error={this.state.errorInfo} />;
    }

    return this.props.children;
  }
}

function App() {
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number>(0);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); // event.currentTarget
  }
  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setName(event.currentTarget.value);
  // };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setAge((_age) => _age + 1);
  }
  const loginHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsLogged((value) => !value);
  }
  useEffect(() => {
    console.log(store.getState());
    store.dispatch({
      type: 'users/fetch',
      payload: { id: "2", name: 'Test'}
    });
    console.log(store.getState());
  }, []);

  const contextValues = {
    isLogged,
    setIsLogged,
  }

  const handleMouseOver: MouseEventHandler = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = '#00f';
    }
  }

  return (
      // <UserProvider
      //   value={{
      //     isLogged: isLoggedIn,
      //     setIsLogged: () => {
      //       setIsLoggedIn(!isLoggedIn);
      //     },
      //   }}
      // >
      //   <UserCard email="karol.berezicki@rockwool.com" />
      // </UserProvider>

    <div>
      <UserProvider value={contextValues}>
        <Container>
          {/* <Clicker /> */}
          <ErrorBoundary FallbackComponent={FallbackComponent}>
            <Product />
          </ErrorBoundary>
          {/* <Products /> */}
          {/* <Animals /> */}
          {/* <RegistrationForm defaultEmail="test@wp.pl" /> */}
          <hr />
          {/* <Counter />
          <Generator />
          <RegistrationForm defaultEmail="test@test.pl" /> */}
          {/* <Container>
            <input type="text" onChange={handleInputChange} />
            <button onClick={handleClick}>+</button>
          </Container> */}
        </Container>
      </UserProvider>
      {/* <div>
        <LoginButton
          ref={buttonRef}
          handleMouseOver={handleMouseOver}
        />
      </div> */}
    </div>
  );
}

export default App;

          // <Container>
          //   <Container>
          //     <Main>
          //       <LoginButton />
          //       <UserCard
          //         email="patryk.omiotek@gmail.com"
          //         isLogged={isLogged}
          //       />
          //       {/* {isLogged ? <Hello name={name || ""} age={age} /> : null} */}
          //       {isLogged && <Hello name={name || ""} age={age} />}
          //     </Main>
          //   </Container>
          // </Container>