import { FormEvent } from "react";
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

export type DataType = {
  email: string;
  password: string;
  agree: boolean;
}

type RegistrationFormProps = {
  onSubmit: SubmitHandler<FormEvent<HTMLFormElement>>
}

function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const { register, handleSubmit, formState } = useForm<DataType>();
  console.log('Form state: ', formState);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>E-mail</label>
        <input type="email" {...register("email")} />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password")} />
      </div>
      <div>
        <label>Agree</label>
        <input type="checkbox" {...register("agree")} />
      </div>
      <div>
        <input type="submit" value="Send me" />
      </div>
    </form>
  );
}

export { RegistrationForm };
