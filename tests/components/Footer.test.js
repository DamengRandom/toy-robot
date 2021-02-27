import { render, screen, cleanup } from "@testing-library/react";
import Footer from "../../components/atoms/Footer";

describe("<Footer /> component test", () => {
  beforeEach(() => {
    const props = {
      id: 'footerId',
      classes: 'footer-css',
      children: '<p>Developed @ 2021</p>'
    };
  
    render(<Footer {...props} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the footer text content as children', () => {
    expect(
      screen.getByText("<p>Developed @ 2021</p>")
    ).toBeInTheDocument();
  });

  it('renders the footer attribute "class"', () => {
    expect(
      screen.getByTestId('footerId')
    ).toHaveAttribute('class', 'footer-css');
  });
});