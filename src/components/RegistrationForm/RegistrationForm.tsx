import { FormEvent } from "react";
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email("To nie jest prawidłowy email").required(),
  password: yup.string().required(),
  agree: yup.boolean(),
}).required();

export type DataType = {
  email: string;
  password: string;
  agree: boolean;
}

type RegistrationFormProps = {
  onSubmit: SubmitHandler<FormEvent<HTMLFormElement>>
}

function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const { register, handleSubmit, formState } = useForm<DataType>({
    resolver: yupResolver(schema)
  });
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
