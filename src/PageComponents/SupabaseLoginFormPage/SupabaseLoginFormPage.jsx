import { useForm } from 'react-hook-form';
import supabase from '../../Utils/Supabase/supabaseClient.js';

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ email, password }) => {
    console.log(123);
    
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
console.log(error);

      console.log("User logged in:", await supabase.auth.getUser());
    } catch (err) {
      console.error("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Brugernavn/Email:</label>
        <input {...register('email', { required: true })} />
        {errors.email && <span>Du skal skrive din email</span>}
      </div>
      <div>
        <label htmlFor="password">Adgangskode:</label>
        <input type="password" {...register('password', { required: true })} />
        <button>Login</button>
        </div>
    </form>
  );
};