import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AppButton from "../components/AppButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormValues = {
  username: string; // 1. Добавляем username
  email: string;
  password: string;
};

const schema = yup.object({
  username: yup.string().required("Username is required"), // 2. Добавляем валидацию для username
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const LoginForm = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const form = useForm<FormValues>({
    defaultValues: {
      username: "", // 3. Добавляем username в defaultValues
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/yupform");
    console.log(data);
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>{" "}
          {/* 4. Добавляем новый элемент ввода */}
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
          path="/yupform"
          buttonLabel="Login"
          disabled={!formState.isValid}
          onClick={handleSubmit(onSubmit)}
        />
      </form>
    </div>
  );
};

export default LoginForm;
