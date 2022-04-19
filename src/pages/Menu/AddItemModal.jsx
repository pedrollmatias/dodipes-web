import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import AvatarEditor from "react-avatar-editor";

import ModalActionButton from "../../components/UI/ModalActionButton";
import SlideToggle from "../../components/UI/SlideToggle";
import FileUploaderButton from "../../components/UI/FileUploaderButton";
import { useApi } from "../../hooks/use-api";
import { addItem } from "../../services/item-service";
import { useState, useContext, useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
import { AuthContext, StoreContext } from "../../contexts";

const AddItemModal = ({
  show,
  onHide: handleHide,
  isEditing = false,
  defaultValues = {},
  categories,
}) => {
  const { store } = useContext(StoreContext);
  const [{ result, loading, error }, addItemApiCall] = useApi({
    service: addItem,
  });
  const [validated, setValidated] = useState(false);
  const [submitAttempt, setSubmitAttempt] = useState(false);
  const [file, setFile] = useState();
  const [imageEditorScale, setImageEditorScale] = useState(1);
  const [editorRef, setEditorRef] = useState(null);
  const [media, setMedia] = useState();

  const initialFormValues = isEditing
    ? {
        categoryId: defaultValues.category?._id || "",
        active: defaultValues.active || true,
        name: defaultValues.name || "",
        price: defaultValues.price || "",
      }
    : {
        categoryId: defaultValues.category?._id,
        active: true,
        name: "",
        price: "",
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm({ mode: "all", defaultValues: initialFormValues });
  const { touchedFields } = useFormState({ control });

  const onError = () => setSubmitAttempt(true);

  const onSubmit = (formData) => {
    setValidated(true);

    let mediaValue;

    if (editorRef) {
      mediaValue = editorRef.getImageScaledToCanvas().toDataURL();

      setMedia(mediaValue);
    }

    const body = { ...formData, media: mediaValue };

    addItemApiCall({
      storeId: store?._id,
      categoryId: getValues("categoryId"),
      body,
    });
  };

  const handleEditorRef = (editor) => setEditorRef(editor);

  const handleImageEditorScale = (event) =>
    setImageEditorScale(Number(event.target.value));

  const handleFileChange = (event) => {
    const [file] = event.target.files;
    setFile(file);
  };

  const handleModalHide = () => {
    reset();
    handleHide();
  };

  useEffect(() => {
    if (!loading && (result || error)) {
      reset();
      handleHide();
    }
  }, [error, handleHide, loading, reset, result]);

  return (
    <Modal show={show} onHide={handleModalHide} size="xl" centered>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "Editar" : "Adicionar"} item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-start mb-2 w-100">
                <FileUploaderButton
                  label="Upload de imagem"
                  id="storeLogo"
                  btnClass="d-flex justify-content-center w-100"
                  onChange={handleFileChange}
                />
              </div>

              {file && (
                <>
                  <div className="d-flex justify-content-center mb-2">
                    <AvatarEditor
                      width={480}
                      height={320}
                      border={25}
                      borderRadius={15}
                      ref={handleEditorRef}
                      image={file}
                      color={[255, 255, 255, 0.6]}
                      scale={imageEditorScale}
                    />
                  </div>

                  <div className="d-flex">
                    <span className="me-4">Zoom</span>
                    <Form.Range
                      min={1}
                      max={2}
                      step={0.1}
                      value={imageEditorScale}
                      onChange={handleImageEditorScale}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="col-md-6 col-sm-12">
              <Form.Group className="mb-3" controlId="category">
                <Form.Label>Categoria *</Form.Label>

                <Form.Select aria-label="Category" {...register("categoryId")}>
                  {categories?.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Título *</Form.Label>
                <Form.Control
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Título obrigatório",
                    },
                  })}
                  isInvalid={
                    (submitAttempt || touchedFields?.titulo) && errors?.titulo
                  }
                  disabled={loading}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  type="text"
                  {...register("description")}
                  disabled={loading}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Preço *</Form.Label>
                <Form.Control
                  type="text"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Preço obrigatório",
                    },
                    min: {
                      value: 0,
                      message: "O preço deve ser maior que zero",
                    },
                  })}
                  isInvalid={
                    (submitAttempt || touchedFields?.price) && errors?.price
                  }
                  disabled={loading}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="active">
                <SlideToggle
                  label="Ativo"
                  checked={getValues("active")}
                  formRegistration={{ ...register("active") }}
                  isInvalid={
                    (submitAttempt || touchedFields?.active) && errors?.active
                  }
                />
              </Form.Group>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <ModalActionButton variant="light" onClick={handleHide} type="button">
            Cancelar
          </ModalActionButton>

          <ModalActionButton variant="primary" type="submit">
            Salvar
          </ModalActionButton>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddItemModal;
