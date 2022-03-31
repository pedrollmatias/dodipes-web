import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Spinner from "react-bootstrap/Spinner";
import { useForm, useFormState } from "react-hook-form";
import { useApi } from "../../hooks/use-api";
import { getAddressByZipCode } from "../../services/store-service";
import NumberFormat from "react-number-format";
import { brStates } from "../../lib/utils";

const AddressStep = ({ defaultValues, setDefaultValues, dispatch }) => {
  const [
    { result: zipCodeAddressResult, loading },
    getAddressByZipCodeApiCall,
  ] = useApi({
    service: getAddressByZipCode,
  });
  const [validated, setValidated] = useState(false);

  const [submitAttempt, setSubmitAttempt] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue: setFormValues,
    trigger: triggerFomrValidation,
    getValues: getFormValues,
  } = useForm({ mode: "all", defaultValues });
  const { touchedFields } = useFormState({ control });

  const handleOnChange = (event) => {
    const zipCode = event.target.value;
    const zipCodeNumber = zipCode
      .split("")
      .filter((char) => !isNaN(char))
      .join("");

    setFormValues("zipCode", zipCodeNumber);
    triggerFomrValidation("zipCode");

    const exactZipCodeLength = 8;

    if (zipCodeNumber.toString().length === exactZipCodeLength) {
      getAddressByZipCodeApiCall({ zipCode: zipCodeNumber });
    } else {
      setFormValues("street", "");
      setFormValues("neighborhood", "");
      setFormValues("city", "");
      setFormValues("state", "");
      setFormValues("complement", "");
      setFormValues("number", "");
    }
  };

  const onError = () => setSubmitAttempt(true);

  const handleBackward = () => {
    const partialFormData = getFormValues();
    setDefaultValues(partialFormData);

    dispatch({ type: "backward" });
  };

  const handleForward = (formData) => {
    setDefaultValues(formData);
    setValidated(true);

    dispatch({ type: "forward" });
  };

  useEffect(() => {
    if (zipCodeAddressResult) {
      const { street, neighborhood, city, state } = zipCodeAddressResult;
      setFormValues("street", street);
      setFormValues("neighborhood", neighborhood);
      setFormValues("city", city);
      setFormValues("state", state);

      triggerFomrValidation();
    }
  }, [setFormValues, triggerFomrValidation, zipCodeAddressResult]);

  return (
    <div className="py-5">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit(handleForward, onError)}
      >
        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="zipCode">
              <Form.Label>CEP *</Form.Label>

              <InputGroup>
                <NumberFormat
                  type="text"
                  as={FormControl}
                  defaultValue={getFormValues("zipCode")}
                  className="form-control"
                  format="#####-###"
                  mask="_"
                  {...register("zipCode", {
                    required: {
                      value: true,
                      message: "CEP obrigatório",
                    },
                    minLength: {
                      value: 8,
                      message: "CEP deve ter 8 dígitos",
                    },
                  })}
                  onChange={handleOnChange}
                  isInvalid={
                    (submitAttempt || touchedFields?.zipCode) && errors?.zipCode
                  }
                />
                {/* <Form.Control
                  type="text"
                  as={NumberFormat}
                  className="form-control"
                  format="#####-###"
                  mask="_"
                  {...register("zipCode", {
                    required: {
                      value: true,
                      message: "CEP obrigatório",
                    },
                    minLength: {
                      value: 8,
                      message: "CEP deve ter 8 dígitos",
                    },
                  })}
                  onChange={handleOnChange}
                  isInvalid={
                    (submitAttempt || touchedFields?.zipCode) && errors?.zipCode
                  }
                /> */}
                <Form.Control.Feedback type="invalid">
                  {errors?.zipCode?.message}
                </Form.Control.Feedback>

                {loading && (
                  <InputGroup.Text>
                    <Spinner animation="border" variant="primary" size="sm" />
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
          </div>
          <div className="col-md-8">
            <Form.Group className="mb-3" controlId="street">
              <Form.Label>Logradouro *</Form.Label>
              <Form.Control
                type="text"
                {...register("street", {
                  required: {
                    value: true,
                    message: "Logradouro obrigatório",
                  },
                })}
                isInvalid={
                  (submitAttempt || touchedFields?.street) && errors?.street
                }
                disabled={loading}
              />

              <Form.Control.Feedback type="invalid">
                {errors?.street?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="number">
              <Form.Label>Número *</Form.Label>
              <Form.Control
                type="text"
                {...register("number", {
                  required: {
                    value: true,
                    message: "Número obrigatório",
                  },
                })}
                isInvalid={
                  (submitAttempt || touchedFields?.number) && errors?.number
                }
                disabled={loading}
              />

              <Form.Control.Feedback type="invalid">
                {errors?.number?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="complement">
              <Form.Label>Complemento</Form.Label>
              <Form.Control
                type="text"
                {...register("complement")}
                disabled={loading}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="neighborhood">
              <Form.Label>Bairro *</Form.Label>
              <Form.Control
                type="text"
                {...register("neighborhood", {
                  required: {
                    value: true,
                    message: "Bairro obrigatório",
                  },
                })}
                isInvalid={
                  (submitAttempt || touchedFields?.neighborhood) &&
                  errors?.neighborhood
                }
                disabled={loading}
              />

              <Form.Control.Feedback type="invalid">
                {errors?.neighborhood?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>Cidade *</Form.Label>
              <Form.Control
                type="text"
                {...register("city", {
                  required: {
                    value: true,
                    message: "Cidade obrigatória",
                  },
                })}
                isInvalid={
                  (submitAttempt || touchedFields?.city) && errors?.city
                }
                disabled={loading}
              />

              <Form.Control.Feedback type="invalid">
                {errors?.city?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="state">
              <Form.Label>Estado *</Form.Label>
              <Form.Select
                type="text"
                {...register("state", {
                  required: {
                    value: true,
                    message: "Estado obrigatório",
                  },
                })}
                isInvalid={
                  (submitAttempt || touchedFields?.state) && errors?.state
                }
                disabled={loading}
              >
                <option></option>
                {brStates.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                {errors?.state?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-5">
          <div className="me-3">
            <Button className="px-5" variant="light" onClick={handleBackward}>
              Voltar
            </Button>
          </div>
          <Button type="submit" className="px-5" variant="primary">
            Avançar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddressStep;
