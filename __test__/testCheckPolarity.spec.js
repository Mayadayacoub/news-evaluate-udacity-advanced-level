import "babel-polyfill";

import { checkPolarity } from "../src/client/js/formHandler";

describe("Testing", () => {
  test(" checkPolarity()", () => {
    expect(checkPolarity("P+")).toBe("Strong positive");
  });

  test("checkPolarity()", () => {
    expect(checkPolarity("P")).toBe("Positive");
  });

  test("checkPolarity()", () => {
    expect(checkPolarity("NEU")).toBe("Neutral");
  });

  test("checkPolarity()", () => {
    expect(checkPolarity("N")).toBe("Negative");
  });

  test("checkPolarity())", () => {
    expect(checkPolarity("N+")).toBe("Strong negative");
  });

  test("checkPolarity()", () => {
    expect(checkPolarity("NONE")).toBe("No sentiment");
  });
  test("checkPolarity()", () => {
    expect(checkPolarity("NEW")).toBe("Neutral");
  });

  test("checkPolarity()", () => {
    expect(checkPolarity).toBeDefined();
  });
});
