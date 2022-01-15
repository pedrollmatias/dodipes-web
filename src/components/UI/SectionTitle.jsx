const SectionTitle = ({ children, marginBottom = "mb-5" }) => {
  return (
    <h5 className={marginBottom}>
      <strong>{children}</strong>
    </h5>
  );
};

export default SectionTitle;
