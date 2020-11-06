
import { render, screen, cleanup } from "@testing-library/react";
import InputField from "../../components/atoms/InputField";

describe("<InputField /> component test", () => {
  beforeEach(() => {
    const props = {
      id: 'testInput',
      type: 'text',
      classes: 'input-css',
      handleChange: jest.fn(),
      label: 'Input Text',
      placeholder: 'input placeholder'
    };
  
    render(<InputField {...props} />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders the input label', () => {
    expect(
      screen.getByText("Input Text")
    ).toBeInTheDocument();
  });

  it('renders the input field attributes', () => {
    expect(
      screen.getByTestId('testInput')
    ).toHaveAttribute('class', 'input-css');

    expect(
      screen.getByTestId('testInput')
    ).toHaveAttribute('type', 'text');

    expect(
      screen.getByTestId('testInput')
    ).toHaveAttribute('placeholder', 'input placeholder');
  });
});
