// This function is for validate the user query input,
// the valid example could be: PLACE 0,0,NORTH

const queryValidator = queryString => {
  const queryStringUpperCase = queryString.toUpperCase();
  const queryRegex = /^(?:PLACE)\s(\d+),(\d+),(NORTH|SOUTH|EAST|WEST)+$/;
  return queryStringUpperCase.match(queryRegex);
};

export default queryValidator;
