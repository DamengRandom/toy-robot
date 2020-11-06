import queryValidator from '../../utils/queryValidator';

describe('Test function of queryValidator', () => {
  it('should display true when the query is valid', () => {
    // Arrange
    const queryString = 'PLACE 0,0,NORTH';
    // Act
    const isValid = queryValidator(queryString);
    // Assert
    expect(isValid).toBeTruthy();
  });

  it('should display false when the query is invalid', () => {
    // Arrange
    const queryString = 'PLACE Test';
    // Act
    const isValid = queryValidator(queryString);
    // Assert
    expect(isValid).toBeFalsy();
  });
});
