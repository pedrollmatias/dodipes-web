import { FiUploadCloud } from "react-icons/fi";

const FileUploaderButton = ({
  id,
  icon: Icon = FiUploadCloud,
  label,
  iconMargin = "me-3",
  variant = "primary",
  btnClass = "px-4",
  onChange = () => {},
}) => {
  return (
    <label className={`btn btn-${variant} ${btnClass}`} htmlFor={id}>
      <input id={id} type="file" className="d-none" onChange={onChange} />
      <div className="d-flex align-items-center">
        <Icon className={iconMargin} size={30} />
        <span>{label}</span>
      </div>
    </label>
  );
};

export default FileUploaderButton;
