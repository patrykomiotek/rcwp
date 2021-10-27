import { useEffect, useCallback } from 'react';

type GreetingProps = {
  readonly name: string;
}

function ConsoleGreeting(props: GreetingProps) {
  const greet = useCallback(
    greeting => console.log(`${greeting} ${props.name}`),
    [props.name],
  )

  useEffect(() => {
    const helloGreeting = 'Hello';
    greet(helloGreeting);
  }, [greet])
  return <div>check the console</div>
}

export { ConsoleGreeting };
