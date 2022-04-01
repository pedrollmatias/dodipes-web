import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ModalActionButton from "../../components/UI/ModalActionButton";
import SlideToggle from "../../components/UI/SlideToggle";
import Spinner from "react-bootstrap/Spinner";
import { useForm, useFormState } from "react-hook-form";
import { useApi } from "../../hooks/use-api";
import { addCategory } from "../../services/category-service";
import {  useState, useContext, useEffect } from "react";
import { StoreContext } from "../../contexts";

const CategoryDetailsModal = ({
  show,
  onHide: handleHide,
  isEditing = false,
  defaultValues,
}) => {
  const { store } = useContext(StoreContext);
  const [{ result: addCategoryResult, loading, error }, addCategoryApiCall] =
    useApi({ service: addCategory });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "all",
    defaultValues: defaultValues || {
      name: "",
      active: false,
    },
  });
  const { touchedFields } = useFormState({ control });
  const [submitAttempt, setSubmitAttempt] = useState(false);

  const onError = () => setSubmitAttempt(true);

  const onSubmit = (data) => {
    if (!isEditing) {
      addCategoryApiCall({ storeId: store._id, body: data });
    }
  };

  const handleModalHide = () => {
    reset();
    handleHide();
  };

  useEffect(() => {
    if (!loading && (addCategoryResult || error)) {
      reset();
      handleHide({ refresh: true });
    }
  }, [addCategoryResult, error, loading, reset, handleHide]);

  return (
    <Modal show={show} onHide={handleModalHide} size="lg" centered>
      <Form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditing ? "Editar" : "Adicionar"} categoria
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-4" controlId="name">
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome da categoria *"
              {...register("name", {
                required: {
                  value: true,
                  message: "Nome da categoria obrigatório",
                },
                maxLength: {
                  value: 30,
                  message: "Nome da categoria deve ter no máximo 30 caracteres",
                },
              })}
              isInvalid={(submitAttempt || touchedFields?.name) && errors?.name}
            />

            <Form.Control.Feedback type="invalid">
              {errors?.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="active">
            <SlideToggle
              label="Ativa"
              formRegistration={{ ...register("active") }}
              isInvalid={
                (submitAttempt || touchedFields?.active) && errors?.active
              }
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <ModalActionButton
            variant="light"
            onClick={handleModalHide}
            type="button"
          >
            Cancelar
          </ModalActionButton>

          <ModalActionButton variant="primary" type="submit" disabled={loading}>
            Salvar
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
          </ModalActionButton>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CategoryDetailsModal;
