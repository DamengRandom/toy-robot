import {
  render,
  screen,
  cleanup
} from "@testing-library/react";
import Dropdown from "../../components/atoms/Dropdown";

describe("<Dropdown /> component test", () => {
  beforeEach(() => {
    const props = {
      id: 'testDropdown',
      dataTestid: 'testDropdown',
      classes: 'dropdown-css',
      onChange: jest.fn(),
      children: <option>MOVE</option>,
      disabled: false,
    };
  
    render(<Dropdown {...props} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the dropdown attribute "class"', () => {
    expect(
      screen.getByTestId('testDropdown')
    ).toHaveAttribute('class', 'dropdown-css');
  });

  it('renders the dropdown children DOM element', () => {
    const DOMElement = '<option>MOVE</option>';

    expect(
      screen.getByTestId('testDropdown').innerHTML
    ).toBe(DOMElement);
  });
});
