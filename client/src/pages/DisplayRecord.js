import { Fragment } from "react";
import Button from "../component/Button";
import TextArea from "../component/TextArea";

const DisplayRecord = ({ show, setShow, data }) => {
  return (
    <Fragment>
      <div className="record-card">
        <h1>Selected Record</h1>
        <span>Title</span>
        <TextArea 
          value={data.title} 
          show={show}
        />
        <span>Body</span>
        <TextArea 
          value={data.body} 
          show={show} 
        />
        <Button 
          show={show} 
          setShow={setShow} 
          className="close-button"
        >
          Close
        </Button>
      </div>
    </Fragment>
  );
};

export default DisplayRecord;
