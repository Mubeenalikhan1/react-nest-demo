const TextArea = ({ show, value }) => {
  return (
    <textarea
      disabled={show ? show : false}
      value={value}
      className="text-area"
      rows="4"
      cols="50"
    />
  );
};
export default TextArea;
