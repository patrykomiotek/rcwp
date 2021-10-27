import { useState, useEffect, useRef } from 'react';
import type { ChangeEventHandler } from 'react';

type RegistrationFormProps = {
  defaultEmail: string;
}


function RegistrationForm({ defaultEmail }: RegistrationFormProps) {
  const [email, setEmail] = useState<string>(defaultEmail);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const passwordDefaultValue = "razdwatrzy";
  const nameInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []); // try to remove en array
  useEffect(() => {
    if (password?.toLocaleLowerCase() === 'brzydkieslowo') {
      setPassword('***');
      setIsValid(false);
    } else {
      console.log('Haslo ok');
    }
    // if (name === "") {

    // }
  // }, [password, name]); // componentDidUpdate
  }, [password]); // componentDidUpdate
  useEffect(() => {
    if (!email.includes('@')) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email]);
  useEffect(() => {
    if (name === "aaa") {
      // bbb
      // setName("bbb")
      // event?.target.value
      if (nameInputRef.current) {
        nameInputRef.current.style.borderColor = '#ff0000';
        nameInputRef.current.style.color = '#ff0000';
        console.log(
          'Here: ',
          nameInputRef.current.value
        );
      }
    }
  }, [name]);

  const handleNameChange:
    ChangeEventHandler<HTMLInputElement> = (event) => {
      setName(event.target.value);
  }

  return (
    <div>
      <div>
        <p>E-mail: {email}, Password: {password}</p>
        <p>Name: {name}</p>
        <hr />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError && <p style={{ color: 'red' }}>Invalid e-mail</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" defaultValue={passwordDefaultValue} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          ref={nameInputRef}
          defaultValue=""
          onChange={handleNameChange}
        />
        {}
      </div>
    </div>
  );
}

export { RegistrationForm };
