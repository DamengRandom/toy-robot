import React from "react";
import PropTypes from 'prop-types';
// constants
import { actionCommands } from "../../constants";
// components
import Button from "../atoms/Button";
import Dropdown from '../atoms/Dropdown';

export default function InputGroup({
  index,
  actions,
  handleTypeAction,
  handleRemoveAction,
  handleAddAction,
}) {
  return (
    <>
      <div className="input-group mb-2">
        <Dropdown
          id={`actionInput-${index}`}
          classes={"form-control"}
          handleChange={(event) => handleTypeAction(event.target.value, index)}
        >
          {actionCommands.map((actionCommand) => (
            <option
              key={actionCommand}
              value={actionCommand}
            >
              {actionCommand}
            </option>
          ))}
        </Dropdown>
        <div className="input-group-append">
          {actions.length !== 1 && (
            <Button
              id={`action-remove-${index}`}
              classes="btn btn-danger"
              clickEvent={() => handleRemoveAction(index)}
            >
              (&#45;)
            </Button>
          )}
          {actions.length - 1 === index && (
            <Button
              id={`action-add-${index}`}
              classes="btn btn-success"
              clickEvent={handleAddAction}>
              (&#43;)
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

InputGroup.propTypes = {
  index: PropTypes.number,
  actions: PropTypes.array,
  handleTypeAction: PropTypes.func,
  handleRemoveAction: PropTypes.func,
  handleAddAction: PropTypes.func
};
