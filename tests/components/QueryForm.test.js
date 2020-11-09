import {
  render,
  screen,
  cleanup,
  fireEvent
} from "@testing-library/react";
import QueryForm from "../../components/organisms/QueryForm";

// positive path
describe("<QueryForm /> component test", () => {
  beforeEach(async () => {
    render( < QueryForm / > );

    // Must input the valid string, otherwise will cost all tests failed, because query invlaid won't run the component JSX
    const queryInputDom = screen.getByTestId('queryInput');
    await fireEvent.change(queryInputDom, {
      target: {
        value: "PLACE 0,0,NORTH"
      },
    });
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  jest.clearAllMocks();

  it('renders the dropdown select button', () => {
    expect(
      screen.getByText("Please select an action here")
    ).toBeInTheDocument();
  });

  it('renders the dropdown Add button', () => {
    const addButton = screen.getByTestId("action-add-0");
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveTextContent('(+)');
  });

  it('renders the dropdown Remove button', async () => {
    // Arrange
    const addButton = screen.getByTestId("action-add-0");

    // Act
    await fireEvent.click(addButton);
    const removeButton = screen.getByTestId("action-remove-0");

    // Aseert
    expect(removeButton).toBeInTheDocument();
    expect(removeButton).toHaveTextContent('(-)');
  });

  it('renders the reset button when user selected an action', async () => {
    // Arrange
    const firstSelectDom = screen.getByTestId("actionInput-0");

    // Act
    await fireEvent.change(firstSelectDom, {
      target: {
        value: "REPORT"
      },
    });

    // Aseert
    expect(
      screen.getByText(/Reset/i)
    ).toBeInTheDocument();
  });

  it('renders the result grid axis when user typed "REPORT" text', async () => {
    // Arrange
    const firstSelectDom = screen.getByTestId("actionInput-0");

    // Act
    await fireEvent.change(firstSelectDom, {
      target: {
        value: "MOVE"
      },
    });

    const addButton = screen.getByTestId("action-add-0");
    await fireEvent.click(addButton);

    const secondSelectDom = screen.getByTestId("actionInput-1");

    await fireEvent.change(secondSelectDom, {
      target: {
        value: "REPORT"
      },
    });

    const resultDom = screen.getByTestId('result');

    // Aseert
    expect(resultDom).toBeInTheDocument();
    expect(resultDom.innerHTML.includes('axis: (0, 1)')).toBe(true);
    expect(resultDom.innerHTML.includes('NORTH')).toBe(true);
  });
});

// negative path
describe("<QueryForm /> component test invalid query", () => {
  it('should not render any action command buttons when user typed invalid query string', async () => {
    // Arrange
    render( < QueryForm / > );
    // Act
    const queryInputDom = screen.getByTestId('queryInput');
    await fireEvent.change(queryInputDom, {
      target: {
        value: "PLACE 0, 0, NORTH" // query with space which is invalid query
      },
    });
    // Assert
    const addButton = screen.queryByText("(+)");
    expect(addButton).toBeNull();

    const removeButton = screen.queryByText("(-)");
    expect(removeButton).not.toBeInTheDocument();
  });
});