import { sayHello } from "./aaa";

describe("sayHello", () => {
  it("should return a greeting message for a given name", () => {
    const name = "John";
    const result = sayHello(name);
    expect(result).toBe("Hello, John!");
  });

  it("should return a greeting message for another name", () => {
    const name = "Jane";
    const result = sayHello(name);
    expect(result).toBe("Hello, Jane!");
  });

  it("should handle empty string", () => {
    const name = "";
    const result = sayHello(name);
    expect(result).toBe("Hello, !");
  });
});
