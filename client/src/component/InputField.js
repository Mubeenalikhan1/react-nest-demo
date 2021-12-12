
const InputField = ({ value, handleChange, show, type, className }) => {
  return (
    <div >
      <input 
        type={type}
        className={className}
        placeholder="search"
        disabled={show ? show : false}
        value={value}
        onChange={(e)=> handleChange(e)}
      />
    </div>
  );
}

export default InputField;
