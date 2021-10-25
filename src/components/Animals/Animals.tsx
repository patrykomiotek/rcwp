// import { Fragment } from 'react';
// import type { MouseEventHandler } from "react";
import { useState } from 'react';

const data = [
  '🐕 dog',
  '🐕 dog',
  '🐈 cat',
  '🐐 goat',
  '🐹 hamster'
];

function Animals() {
  const [animals, setAnimals] = useState<string[]>(data);
  const handleRemove = (index: string) => {
    setAnimals(animals.filter((elem) => elem !== index));
  }
  // const handleRemove: MouseEventHandler<HTMLSpanElement> = (event) => {
  //   console.log(event.currentTarget.dataset);
  //   // console.log('`My index is: ', event.target.dataset.index);
  // }
  // const handleRemove = (index: number) => (event: MouseEvent) => {
  //   console.log('`My index is: ', index);
  // }
  return (
    <>
      {animals.map((elem) => (
        <div key={elem}>
          {elem}{' '}
          <span
            // data-index={index}
            style={ { cursor: 'pointer' }}
            onClick={() => handleRemove(elem)}>⛔</span>
        </div>
      ))}
    </>
  );
}

export { Animals };
