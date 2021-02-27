import React, { useState } from "react";
import * as immer from "immer";
// constants
import { queryErrorMessage } from "../../constants";
// helpers
import movementTrack from "../../utils/movementTrack";
import queryValidator from "../../utils/queryValidator";
// components
import Button from "../atoms/Button";
import InputField from "../atoms/InputField";
import ResultChart from "../molecules/ResultChart";
import InputGroup from "../molecules/InputGroup";

export default function QueryForm() {
  let result;
  const [queryText, setQueryText] = useState(""); // setup query (eg: PLACE 0,0,NORTH)
  const [actions, setActions] = useState([{ command: "" }]); // setup actions (eg: EAST|WEST|NORTH|SOUTH)
  const lastActionCommand = actions.length > 0 ? actions[actions.length - 1].command.toUpperCase() : "Default";
  const isResultShown = actions.length > 0 && lastActionCommand === "REPORT";

  // set query text string value and store the query text state
  const handleTypeQuery = (event) => {
    const { value } = event.target;
    setQueryText(value);
  };

  // set action command value and store inside action array
  const handleActionSelect = (value, index) => {
    let updatedActions = immer.produce(actions, (draft) => {
      draft[index].command = value;
    });
    setActions(updatedActions);
  };

  // remove current action command
  const handleRemoveAction = (index) => {
    setActions(
      immer.produce(actions, (draft) => {
        draft.splice(index, 1);
      })
    );
  };

  // add new action command
  const handleAddAction = () => {
    setActions(
      immer.produce(actions, (draft) => {
        draft.push({ command: "" });
      })
    );
  };

  // reset toy robot query and actions
  const handleResetActions = () => {
    setQueryText("");
    setActions(
      immer.produce((draft) => {
        draft = [{ command: "" }];
        return draft;
      })
    );
    document.getElementById("actionInput-0").value =
      `Click to select action`; // because I didn't use any library, so I have to use this way to reset the dropdown select value to default value
  };

  // get query result
  const handleResultDisplay = () => {
    const actionsArray = actions.map((action) => Object.values(action)[0]);
    result = movementTrack(queryText, actionsArray);
  };

  return (
    <div>
      <InputField
        id="queryInput"
        name={"query"}
        type="text"
        classes={"input is-primary mt-4 mb-1"}
        value={queryText}
        placeholder="eg: PLACE 0,0,NORTH"
        handleChange={handleTypeQuery}
        disabled={queryValidator(queryText)}
      />
      {!queryValidator(queryText) && queryText !== "" && (
        <p>{queryErrorMessage}</p>
      )}
      {queryValidator(queryText) && (
        <>
          {actions.map((action, index) => (
            <div key={`${action}-${index}`}>
              <InputGroup
                index={index}
                action={action}
                actions={actions}
                handleActionSelect={handleActionSelect}
                handleRemoveAction={handleRemoveAction}
                handleAddAction={handleAddAction}
                isResultShown={isResultShown}
              />
            </div>
          ))}
          {isResultShown && (
            <div className="columns is-full box-margin my-6">
              <Button
                type="button"
                classes={"column button is-danger is-outlined auto-height initial-line-height"}
                clickEvent={handleResetActions}
              >
                Reset
                {handleResultDisplay()}
              </Button>
            </div>
          )}
          {result && <ResultChart result={result} />}
        </>
      )}
    </div>
  );
}
