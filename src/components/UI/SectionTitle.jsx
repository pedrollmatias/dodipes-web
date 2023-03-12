const SectionTitle = ({ children, className = "mb-5" }) => {
  return (
    <h5 className={className}>
      <strong>{children}</strong>
    </h5>
  );
};

export default SectionTitle;
