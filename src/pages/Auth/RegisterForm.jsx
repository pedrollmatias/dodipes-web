import { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm, useFormState } from "react-hook-form";
import { useApi } from "../../hooks/use-api";
import { addUser } from "../../services/user-serivce";
import { AuthContext } from "../../contexts/auth";
import { abort } from "../../lib/utils";

const emailRegex =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;

const RegisterForm = ({ onCancel: handleContentChange }) => {
  const { login } = useContext(AuthContext);
  const addUserApi = useApi(addUser);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { touchedFields } = useFormState({ control });

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password } = data;
    const body = {
      email,
      name: { firstName, lastName },
      password,
    };

    try {
      await addUserApi(body);
      await login({ body: { email, password } });
    } catch (error) {
      abort();
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Nome *"
          {...register("firstName", {
            required: { value: true, message: "Nome obrigatório" },
          })}
          isInvalid={touchedFields?.firstName && errors?.firstName}
        />

        <Form.Control.Feedback type="invalid">
          {errors?.firstName?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Sobrenome *"
          {...register("lastName", {
            required: { value: true, message: "Sobrenome obrigatório" },
          })}
          isInvalid={touchedFields?.lastName && errors?.lastName}
        />

        <Form.Control.Feedback type="invalid">
          {errors?.lastName?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          type="email"
          placeholder="E-mail *"
          {...register("email", {
            required: { value: true, message: "E-mail obrigatório" },
            pattern: { value: emailRegex, message: "E-mail inválido" },
          })}
          isInvalid={touchedFields?.email && errors?.email}
        />

        <Form.Control.Feedback type="invalid">
          {errors?.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          type="password"
          placeholder="Senha *"
          {...register("password", {
            required: { value: true, message: "Senha obrigatória" },
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 caractéres",
            },
            pattern: {
              value: passwordRegex,
              message: "A senha deve ter pelo menos uma letra e um número",
            },
          })}
          isInvalid={touchedFields?.password && errors?.password}
        />

        <Form.Control.Feedback type="invalid">
          {errors?.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          type="password"
          placeholder="Confirmar senha *"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirmação de senha obrigatória",
            },
            validate: (value) =>
              value === watch("password") || "Confirmação de senha incorreta",
          })}
          isInvalid={touchedFields?.confirmPassword && errors?.confirmPassword}
        />

        <Form.Control.Feedback type="invalid">
          {errors?.confirmPassword?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="mb-4">
        <Button className="px-5 py-2 w-100" variant="primary" type="submit">
          Cadastrar
        </Button>
      </div>
      <Button
        className="px-5 py-2 w-100"
        variant="light"
        onClick={handleContentChange}
      >
        Cancelar
      </Button>
    </Form>
  );
};

export default RegisterForm;
