import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import GlobalLoader from "../GlobalLoader";

describe("GlobalLoader", () => {
  it("should render the component without crashing", () => {
    expect(
      render(<GlobalLoader />).container.querySelector(".MuiContainer-root")
    ).toBeInTheDocument();
    expect(
      render(<GlobalLoader />).container.querySelector(
        ".MuiCircularProgress-root"
      )
    ).toBeInTheDocument();
  });

  it("should display the circular progress indicator", () => {
    const { getByRole } = render(<GlobalLoader />);
    expect(getByRole("progressbar")).toBeInTheDocument();
  });
});
