import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AppButton from "../components/AppButton";
import { useNavigate } from "react-router-dom"; 
type FormValues = {
  username: string;
  email: string;
  password: string;
};

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

// YupForm.tsx
export const YupForm = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('user') || '{}');

  const form = useForm<FormValues>({
    defaultValues: {
      username: userData.username || "",
      email: userData.email || "",
      password: userData.password || "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    if (data.username !== userData.username || data.email !== userData.email || data.password !== userData.password) {
      alert('Введенные данные не совпадают');
      return;
    }
    console.log(data);
    navigate('/home');
  };

;
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label> {/* 4. Добавляем новый элемент ввода */}
          <input type="text" id="username" {...register("username")} />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
        </div>
      <AppButton
       type="submit"
       path="/home"
       buttonLabel="Home"
       disabled={!formState.isValid}
       onClick={handleSubmit(onSubmit)}
        />
      </form>
    </div>
  );
};

export default YupForm;
