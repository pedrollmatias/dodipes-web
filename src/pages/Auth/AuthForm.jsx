import { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm, useFormState } from "react-hook-form";
import { AuthContext } from "../../contexts/auth-context";
import { LoadingContext } from "../../contexts/loading-context";
import { abort } from "../../lib/utils";

const AuthForm = () => {
  const { isLoading } = useContext(LoadingContext);
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { touchedFields } = useFormState({ control });

  const onSubmit = async (data) => {
    const { email, password } = data;

    await login({ body: { email, password } }).catch(abort);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-4">
        <Form.Control
          type="email"
          placeholder="E-mail"
          {...register("email", {
            required: { value: true, message: "E-mail obrigatório" },
          })}
          isInvalid={touchedFields?.email && errors?.email}
          disabled={isLoading}
        />

        <Form.Control.Feedback type="invalid">
          {errors?.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          type="password"
          placeholder="Senha"
          {...register("password", {
            required: { value: true, message: "Senha obrigatória" },
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 caractéres",
            },
          })}
          isInvalid={touchedFields?.password && errors?.password}
          disabled={isLoading}
        />

        <Form.Control.Feedback type="invalid">
          {errors?.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        className="px-5 py-2 w-100"
        variant="primary"
        type="submit"
        disabled={isLoading}
      >
        Entrar
      </Button>
    </Form>
  );
};

export default AuthForm;
