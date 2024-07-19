import { render } from "@testing-library/react";
import ArticleDetail from "../ArticleDetails";

test("renders ArticleDetail component correctly", () => {
  const { asFragment } = render(<ArticleDetail />);
  expect(asFragment()).toMatchSnapshot();
});