import { Button } from "./comp/Button";
import { throttle } from "lodash";

console.log(Button);

export const throttleFn = throttle(() => {
  console.log("throttle");
});

export const rollup = rollup;
