import { render, screen, cleanup } from "@testing-library/react";
import Button from "../../components/atoms/Button";

describe("<Button /> component test", () => {
  beforeEach(() => {
    const props = {
      id: 'testButton',
      dataTestid: 'testButton',
      type: 'text',
      classes: 'button-css',
      clickEvent: jest.fn(),
      children: 'Button Text'
    };
  
    render(<Button {...props} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the button text content as children', () => {
    expect(
      screen.getByText("Button Text")
    ).toBeInTheDocument();
  });

  it('renders the button attribute "class"', () => {
    expect(
      screen.getByTestId('testButton')
    ).toHaveAttribute('class', 'button-css');
  });

  it('renders the button attribute "type"', () => {
    expect(
      screen.getByTestId('testButton')
    ).toHaveAttribute('type', 'text');
  });
});
