import { axisXGridValue, axisYGridValue } from '../constants';

const movementTrack = (query, commands) => {  
  // grid axis value
  const gridAxisX = axisXGridValue;
  const gridAxisY = axisYGridValue;

  if(!query) {
    query = 'PLACE 0,0,NORTH'
  };

  if(!commands) {
    commands = 'REPORT'
  };

  commands = commands.map(command => command.toUpperCase());
  var querySplit = query.split(' ')[1];
  const queryArray = querySplit.split(',');
  var axisX = queryArray[0] || 0;
  var axisY = queryArray[1] || 0;
  var direction = queryArray[2].toUpperCase() || 'NORTH'; // NORTH
  var stepsArray = [querySplit];
  var directions = [
    'NORTH',
    'EAST',
    'SOUTH',
    'WEST'
  ];
  
  const commandMove = () => {
    switch (direction) {
      case 'NORTH':
        if (parseInt(axisY) < gridAxisY) {
          axisY = Number(axisY) + 1;
          return axisY;
        }
        break;
      case 'SOUTH':
        if (parseInt(axisY) > 0) {
          axisY = Number(axisY) - 1;
          return axisY;
        }
        break;
      case 'EAST':
        if (parseInt(axisX) < gridAxisX) {
          axisX = Number(axisX) + 1;
          return axisX;
        }
        break;
      case 'WEST':
        if (parseInt(axisX) > 0) {
          axisX = Number(axisX) - 1;
          return axisX;
        }
        break;
      default:
        break;
    }
  }
  
  const getCurrentDirection = direction => {
    var currentIndex;
    
    for (var i = 0; i < directions.length; i++) {
      if (directions[i] === direction) {
        currentIndex = i;
      }
    }
  
    return currentIndex;
  }
  
  const commandLeft = () => {
    var index = getCurrentDirection(direction) - 1;
    if (index < 0) {
      index = directions.length - 1;
    }

    direction = directions[index];
  };
  
  const commandRight = () => {
    var index = getCurrentDirection(direction) + 1;
    if (index >= directions.length) {
      index = 0;
    }

    direction = directions[index];
  };
  
  const commandReport = () => {
    stepsArray.push(axisX.toString() + ',' + axisY.toString() + ',' + direction);
    return stepsArray.pop();
  };
  
  const robotMovementTrack = () => {
    for (var index = 0; index < commands.length; index++) {
      switch (commands[index]) {
        case 'MOVE':
          commandMove();
          break;
        case 'LEFT':
          commandLeft();
          break;
        case 'RIGHT':
          commandRight();
          break;
        case 'REPORT':
          commandReport();
          break;
        default:
          break;
      }
    }
  };

  robotMovementTrack(); // run the logics for tracking robot movements

  return commandReport();
};

export default movementTrack;
