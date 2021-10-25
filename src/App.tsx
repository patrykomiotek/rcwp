// import { Button, BGColors } from './Button';
// import { Counter } from 'components/Counter';
// import { Generator } from 'components/Generator';
import { RegistrationForm } from 'components/RegistrationForm';
import React, { MouseEventHandler, useState, useRef } from 'react';
import { Hello } from 'components/Hello';
import { Container } from 'components/Container';
import { Main } from 'components/Main';

import { UserProvider } from 'components/UserContext';
import { UserCard, LoginButton } from 'components/User';
import { Name } from 'components/Name';
import { Animals } from 'components/Animals';

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
          <Animals />
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