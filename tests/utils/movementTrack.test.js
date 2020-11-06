import movementTrack from '../../utils/movementTrack';

describe('Test function of movementTrack', () => {
  it('Test case 1: PLACE 0,0,NORTH, MOVE, REPORT', () => {
    // Arrange
    const queryString = 'PLACE 0,0,NORTH';
    const commands = ['MOVE', 'REPORT'];
    // Act
    const result = movementTrack(queryString, commands);
    // Assert
    expect(result).toEqual('0,1,NORTH');
  });

  it('Test case 2: PLACE 0,0,NORTH, LEFT, REPRT', () => {
    // Arrange
    const queryString = 'PLACE 0,0,NORTH';
    const commands = ['LEFT', 'REPORT'];
    // Act
    const result = movementTrack(queryString, commands);
    // Assert
    expect(result).toEqual('0,0,WEST');
  });

  it('Test case 3: PLACE 1,2,EAST, MOVE, MOVE, LEFT, MOVE, REPORT', () => {
    // Arrange
    const queryString = 'PLACE 1,2,EAST';
    const commands = ['MOVE', 'MOVE', 'LEFT', 'MOVE', 'REPORT',];
    // Act
    const result = movementTrack(queryString, commands);
    // Assert
    expect(result).toEqual('3,3,NORTH');
  });
});
