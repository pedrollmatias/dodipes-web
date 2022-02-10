import RegisterForm from "./RegisterForm";

const RegisterTitle = () => (
  <h2 className="mb-0">
    <strong>Registre-se</strong>
  </h2>
);

const RegisterContent = ({ onContentChange: handleContentChange }) => {
  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <RegisterTitle />
      </div>

      <RegisterForm onCancel={handleContentChange} />
    </>
  );
};

export default RegisterContent;
