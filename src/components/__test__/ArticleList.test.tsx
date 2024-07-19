import { render } from "@testing-library/react";
import ArticleList from "../ArticleList";

test("renders ArticleList component correctly", () => {
  const { asFragment } = render(<ArticleList articles={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
