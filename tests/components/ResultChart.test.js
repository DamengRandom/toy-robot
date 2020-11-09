import {
  render,
  screen,
  cleanup
} from "@testing-library/react";
import ResultChart from "../../components/molecules/ResultChart";

describe("<ResultChart /> component test", () => {
      beforeEach(() => {
          const result = "0,1,North";

          render( < ResultChart result = {
              result
            }
            />);
          });

        afterEach(() => {
          cleanup();
          jest.clearAllMocks();
        });

        it('renders the result text content', () => {
          const resultString = '<p class="pt-2">Result: [ axis: (0, 1) &amp; direction: <u><strong>North</strong></u> ]</p>';
          console.log('screen: ', screen.getByTestId("result").innerHTML);
          expect(
            screen.getByTestId("result").innerHTML
          ).toBe(resultString);

        });
      });