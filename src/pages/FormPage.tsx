import { RegistrationForm } from 'components/RegistrationForm';
import type { DataType } from 'components/RegistrationForm';

function FormPage() {

  // const handleSubmit = (data: DataType) => {
  const handleSubmit = (data: any) => {
    console.log('data: ', data);
    // console.dir(event.target[0].value);
  }

  return (
    <div>
      <h1>Registration form</h1>
      <div>
        <RegistrationForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export { FormPage };
