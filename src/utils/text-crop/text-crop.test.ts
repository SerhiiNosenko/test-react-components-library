import { textCrop } from "./index";

describe("textCrop", () => {
  it("returns the correct object", () => {
    const result = textCrop(1.4, 2.1, 0.2);

    expect(result).toEqual({
      lineHeight: 1.4,
      "&::before, &::after": {
        content: "''",
        display: "block",
        height: 0,
        width: 0,
      },
      "&::before": {
        marginBottom: "-2.4222222222222225em",
      },
      "&::after": {
        marginTop: "-0.5222222222222221em",
      },
    });
  });
});
