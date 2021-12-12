import { Fragment } from "react";

const Button = ({ show, setShow, handleSearch, className }) => {
  const handleClose = () => {
    setShow(false)
  }
  return (
    <Fragment>
      <button
       className={className}
       onClick={show ? handleClose  : handleSearch}
      >
        {show ? "close" : "Search"}
      </button>
    </Fragment>
  );
};

export default Button;
