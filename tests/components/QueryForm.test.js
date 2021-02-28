import {
  render,
  screen,
  cleanup,
  fireEvent
} from "@testing-library/react";
import QueryForm from "../../components/organisms/QueryForm";

// positive path
describe("<QueryForm /> component test", () => {
  beforeEach(() => {
    render( <QueryForm /> );

    // Must input the valid string, otherwise will cost all tests failed, because query invalid won't run the component JSX
    const queryInputDom = screen.getByTestId('queryInput');
    fireEvent.change(queryInputDom, {
      target: {
        value: "PLACE 0,0,NORTH"
      },
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the dropdown select button', () => {
    expect(
      screen.getByText("Click to select an action")
    ).toBeInTheDocument();
  });

  it('renders the dropdown Add button', () => {
    const addButton = screen.getByTestId("action-add-0");
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveTextContent('(+)');
  });

  it('plus button is not clickable when dropdown value is "Click to select an action"', () => {
    // Arrange
    const addButton = screen.queryByText("(+)");
    const selector = screen.queryByText("Click to select an action");

    // Assert
    expect(selector).toBeInTheDocument();
    expect(addButton).toHaveAttribute("disabled", "");
  });

  it('renders the dropdown Remove button', () => {
    // Arrange
    const addButton = screen.getByTestId("action-add-0");

    // Act
    fireEvent.change(screen.getByTestId('actionInput-0'), { target: { value: 'MOVE' } });
    fireEvent.click(addButton);
    const removeButton = screen.getByTestId("action-remove-1");

    // Assert
    expect(removeButton).toBeInTheDocument();
    expect(removeButton).toHaveTextContent('(-)');
  });

  it('renders the reset button when user selected an action', () => {
    // Arrange
    const firstSelectDom = screen.getByTestId("actionInput-0");

    // Act
    fireEvent.change(firstSelectDom, {
      target: {
        value: "REPORT"
      },
    });

    // Assert
    expect(
      screen.getByText(/Reset/i)
    ).toBeInTheDocument();
  });

  it('renders the result grid axis when user typed "REPORT" text', () => {
    // Arrange
    const firstSelectDom = screen.getByTestId("actionInput-0");

    // Act
    fireEvent.change(firstSelectDom, {
      target: {
        value: "MOVE"
      },
    });

    const addButton = screen.getByTestId("action-add-0");
    fireEvent.click(addButton);

    const secondSelectDom = screen.getByTestId("actionInput-1");

    fireEvent.change(secondSelectDom, {
      target: {
        value: "REPORT"
      },
    });

    const resultDom = screen.getByTestId('result');

    // Assert
    expect(resultDom).toBeInTheDocument();
    expect(resultDom.innerHTML.includes('axis: (0, 1)')).toBe(true);
    expect(resultDom.innerHTML.includes('NORTH')).toBe(true);
  });
});

// negative path
describe("<QueryForm /> component test invalid query", () => {
  it('should not render any action command buttons when user typed invalid query string', () => {
    // Arrange
    render( <QueryForm /> );
    // Act
    const queryInputDom = screen.getByTestId('queryInput');
    fireEvent.change(queryInputDom, {
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
