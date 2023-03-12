import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { useForm, useFormState } from "react-hook-form";
import { AuthContext } from "../../contexts/auth";

const AuthForm = () => {
  const [submitAttempt, setSubmitAttempt] = useState(false);
  const { handleSignIn, loadingAuth, setDisableAuthSubmit, disableAuthSubmit } =
    useContext(AuthContext);

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

  const onError = () => setSubmitAttempt(true);

  const onSubmit = (data) => {
    setDisableAuthSubmit(true);

    const { email, password } = data;

    handleSignIn({ body: { email, password } });
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Group className="mb-4">
        <Form.Control
          type="email"
          placeholder="E-mail"
          {...register("email", {
            required: { value: true, message: "E-mail obrigatório" },
          })}
          isInvalid={(submitAttempt || touchedFields?.email) && errors?.email}
          disabled={loadingAuth || disableAuthSubmit}
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
          isInvalid={
            (submitAttempt || touchedFields?.password) && errors?.password
          }
          disabled={loadingAuth || disableAuthSubmit}
        />

        <Form.Control.Feedback type="invalid">
          {errors?.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        className="px-5 py-2 w-100"
        variant="primary"
        type="submit"
        disabled={loadingAuth || disableAuthSubmit}
      >
        Entrar
        {loadingAuth && (
          <Spinner
            className="ms-2"
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
      </Button>
    </Form>
  );
};

export default AuthForm;
