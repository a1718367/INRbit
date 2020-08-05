import React from "react";
import "./style.css";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Card,
  CardBody,
  CardHeader
} from "reactstrap";

function InputForm(props) {
  return (
    <Card className="mt-3">
          <CardHeader>Enter INT Reading</CardHeader>
    <Form id="form" className="p-3">
      <FormGroup id="formGroup">
          <CardBody className="p-3">
        <Input id="input"
          type="text"
          name="Level"
          placeholder="INR Reading"
          {...props}
        />
        </CardBody>
      </FormGroup>
      <Button id="button" block onClick={props.add}>Submit</Button>
    </Form>
    </Card>
  );
}
export default InputForm;
