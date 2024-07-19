import { renderHook } from "@testing-library/react";
import { useApiCall } from "../useApiCall";

jest.fn();

describe("useApiCall", () => {
  it("should return the initial values for data, error and loading", async () => {
    const { result } = renderHook(() => useApiCall());
    const { articles, error, loading } = result.current;

    expect(articles).toStrictEqual([]);
    expect(error).toStrictEqual(null);
    expect(loading).toStrictEqual(true);
  });
});
