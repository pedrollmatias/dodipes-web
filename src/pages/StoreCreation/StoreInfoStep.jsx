import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "react-bootstrap/Spinner";
import { useForm, useFormState } from "react-hook-form";

import { useApi } from "../../hooks/use-api";
import { checkStorenameAvailability } from "../../services/store-service";

const storenameRegex =
  /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/;

const StoreInfoStep = ({ defaultValues, setDefaultValues, dispatch }) => {
  const [{ result, loading }, checkStorenameAvailabilityApiCall] = useApi({
    service: checkStorenameAvailability,
  });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    result?.available ? dispatch({ type: "forward" }) : setValidated(false);
  }, [dispatch, result]);

  const [submitAttempt, setSubmitAttempt] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "all", defaultValues });
  const { touchedFields } = useFormState({ control });

  const onError = () => setSubmitAttempt(true);

  const onSubmit = (formData) => {
    setDefaultValues(formData);
    checkStorenameAvailabilityApiCall({ storename: formData.storename });
    setValidated(true);
  };

  return (
    <div className="py-5">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Form.Group className="mb-4">
          <Form.Label>Nome do estabelecimento *</Form.Label>
          <Form.Control
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Nome do estabelecimento obrigatório",
              },
            })}
            isInvalid={(submitAttempt || touchedFields?.name) && errors?.name}
            disabled={loading}
          />

          <Form.Control.Feedback type="invalid">
            {errors?.name?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>
            <em>Storename</em> *
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>

            <Form.Control
              type="text"
              {...register("storename", {
                required: { value: true, message: "Storename obrigatório" },
                pattern: {
                  value: storenameRegex,
                  message:
                    "Storename inválido. Apenas letras, números, . (ponto) e _ (underscore) são permitidos",
                },
              })}
              isInvalid={
                (result && !result.available) ||
                ((submitAttempt || touchedFields?.storename) &&
                  errors?.storename)
              }
              disabled={loading}
            />

            {result && !result.available && (
              <Form.Control.Feedback type="invalid">
                Storename indisponível
              </Form.Control.Feedback>
            )}
            <Form.Control.Feedback type="invalid">
              {errors?.storename?.message}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <div className="d-flex justify-content-end mt-5">
          <Button
            className="px-5"
            variant="primary"
            type="submit"
            disabled={loading}
          >
            Avançar {loading}
            {loading && (
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
        </div>
      </Form>
    </div>
  );
};

export default StoreInfoStep;
