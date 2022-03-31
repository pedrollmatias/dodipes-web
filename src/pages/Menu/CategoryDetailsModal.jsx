import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ModalActionButton from "../../components/UI/ModalActionButton";
import SlideToggle from "../../components/UI/SlideToggle";
import Spinner from "react-bootstrap/Spinner";
import { useForm, useFormState } from "react-hook-form";
import { useApi } from "../../hooks/use-api";
import { addCategory } from "../../services/category-service";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../contexts";

const CategoryDetailsModal = ({
  show,
  onHide: handleHide,
  isEditing = false,
}) => {
  const { store } = useContext(StoreContext);
  const [{ result: addCategoryResult, loading }, addCategoryApiCall] = useApi({
    service: addCategory,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      active: false,
    },
  });
  const { touchedFields } = useFormState({ control });

  const onSubmit = async (data) => {
    if (!isEditing) {
      addCategoryApiCall({ storeId: store._id, body: data });
    }
  };

  useEffect(() => {
    if (addCategoryResult) {
      handleHide();
    }
  }, [addCategoryResult, handleHide]);

  return (
    <Modal show={show} onHide={handleHide} size="lg" centered>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
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
              isInvalid={touchedFields?.name && errors?.name}
            />

            <Form.Control.Feedback type="invalid">
              {errors?.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="active">
            <SlideToggle
              label="Ativa"
              formRegistration={{ ...register("active") }}
              isInvalid={touchedFields?.active && errors?.active}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <ModalActionButton variant="light" onClick={handleHide} type="button">
            Cancelar
          </ModalActionButton>

          <ModalActionButton
            variant="primary"
            onClick={handleHide}
            type="submit"
            disabled={loading}
          >
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
