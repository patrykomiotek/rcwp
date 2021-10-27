import { useEffect, useCallback, useMemo } from 'react';

type GreetingsType = {
  readonly name: string;
  readonly key: string;
}

function sum(a: number, b: number): number {
  return a + b;
}

// useMemo -> func
// useCallback -> func
function Greetings({ name, key }: GreetingsType) {
  // const result = useMemo(sum(4, 7), []);
  const greet = useCallback(
    () => {
      // run: Patryk, 1
      // run: Marcin, 2
      // run: Karol, 3
      // run: Marcin, 1
      // Patryk, 1
      console.log(`Hello ${name}`);
      const value = window.localStorage.getItem(key)
      if (!value) {
        window.localStorage.setItem(key, name);
      }
    },
    [name, key]
  );
  // const greeter = (name) => console.log(`Hello ${name}`)

  useEffect(() => {
    greet();
  }, [greet]);
  return (
    <div>check the console {key}:{name}</div>
  );
}

export { Greetings };
