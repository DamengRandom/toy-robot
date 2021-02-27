import React from "react";
import PropTypes from "prop-types";
// constants
import { actionCommands } from "../../constants";
// components
import Button from "../atoms/Button";
import Dropdown from "../atoms/Dropdown";

export default function InputGroup({
  index,
  actions,
  handleActionSelect,
  handleRemoveAction,
  handleAddAction,
  isResultShown,
}) {
  return (
    <>
      <div className="columns box-margin">
        <Dropdown
          id={`actionInput-${index}`}
          classes={`column ${ actions.length - 1 === index ? 'is-two-thirds' : 'is-full'} button is-fullwidth auto-height initial-line-height`}
          handleChange={(event) => handleActionSelect(event.target.value, index)}
          isDisabled={isResultShown}
        >
          {actionCommands.map((actionCommand) => (
            <option key={actionCommand} value={actionCommand}>
              {actionCommand}
            </option>
          ))}
        </Dropdown>
        {(actions.length - 1 === index && actions.length !== 1) && (
          <Button
            id={`action-remove-${index}`}
            classes="column button is-fullwidth auto-height initial-line-height"
            clickEvent={() => handleRemoveAction(index)}
            isDisabled={isResultShown}
          >
            (&#45;)
          </Button>
        )}
        {actions.length - 1 === index && (
          <Button
            id={`action-add-${index}`}
            classes="column button is-fullwidth auto-height initial-line-height"
            clickEvent={handleAddAction}
            isDisabled={isResultShown}
          >
            (&#43;)
          </Button>
        )}
      </div>
    </>
  );
}

InputGroup.propTypes = {
  index: PropTypes.number,
  actions: PropTypes.array,
  handleActionSelect: PropTypes.func,
  handleRemoveAction: PropTypes.func,
  handleAddAction: PropTypes.func,
};
