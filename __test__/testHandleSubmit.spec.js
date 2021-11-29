import "babel-polyfill";

import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing ", () => {
  test("handleSubmit() ", () => {
    expect(handleSubmit).toBeDefined();
  });
});
