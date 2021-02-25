import { render, screen, cleanup } from "@testing-library/react";
import App from "../../pages/index";

describe("Test App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(cleanup);

  it("renders the main title", () => {
    expect(
      screen.getByText("Toy Robot")
    ).toBeInTheDocument();
  });

  it('renders the heading text', () => {
    expect(
      screen.getByText("Please write down the query of start location (x,y) and direction (NORTH | SOUTH | EAST | WEST), eg: PLACE 0,0,NORTH")
    ).toBeInTheDocument();
  });
});
