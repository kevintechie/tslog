import "ts-jest";
import { Logger } from "../../src";
import { mockConsoleLog } from "./helper";

describe("Recursive", () => {
  beforeEach(() => {
    mockConsoleLog(true, false);
  });
  test("hidden", (): void => {
    const mainLogger = new Logger({ type: "hidden" });

    /*
     * Circular example
     * */
    function Foo() {
      /* @ts-ignore */
      this.abc = "Hello";
      /* @ts-ignore */
      this.circular = this;
    }
    /* @ts-ignore */
    const foo = new Foo();
    const logMsg = mainLogger.info("circular", foo);
    expect(logMsg?.["0"]).toBe("circular");
    expect(logMsg?.["1"]["circular"]).toBe(logMsg?.["1"]);
  });

  test("json", (): void => {
    const mainLogger = new Logger({ type: "json" });

    /*
     * Circular example
     * */
    function Foo() {
      /* @ts-ignore */
      this.abc = "Hello";
      /* @ts-ignore */
      this.circular = this;
    }
    /* @ts-ignore */
    const foo = new Foo();
    const logMsg = mainLogger.info("circular", foo);
    expect(logMsg?.["0"]).toBe("circular");
    expect(logMsg?.["1"]["circular"]).toBe(logMsg?.["1"]);
  });

  test("pretty", (): void => {
    const mainLogger = new Logger({ type: "pretty" });

    /*
     * Circular example
     * */
    function Foo() {
      /* @ts-ignore */
      this.abc = "Hello";
      /* @ts-ignore */
      this.circular = this;
    }
    /* @ts-ignore */
    const foo = new Foo();
    const logMsg = mainLogger.info("circular", foo);
    expect(logMsg?.["0"]).toBe("circular");
    expect(logMsg?.["1"]["circular"]).toBe(logMsg?.["1"]);
  });
});
