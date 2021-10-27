import { FormEvent } from "react";
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email("To nie jest prawidłowy email").required(),
  password: yup.string().required(),
  agree: yup.boolean().required(),
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
  const { register, watch, handleSubmit, formState } = useForm<DataType>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'ola@wp.pl',
      password: '',
      agree: false,
    }
  });
  const { errors } = formState;
  const watchAgree = watch('agree', false);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>E-mail</label>
        <input {...register("email")} />
        <p>{errors?.email?.message}</p>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password")} />
        <p>{errors?.password?.message}</p>
      </div>
      <div>
        <label>Agree</label>
        <input type="checkbox" {...register("agree")} />
        <p>{errors?.agree?.message}</p>
      </div>
      <div>
        <input type="submit" value="Send me" />
      </div>
      <div>
        {watchAgree ? "User agreed to the terms" : "You need to agree" }
      </div>
    </form>
  );
}

export { RegistrationForm };
