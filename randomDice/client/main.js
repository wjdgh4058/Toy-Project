import {
  diceAnimation,
  disableElement,
  enableElement,
  getNode,
  getNodes,
} from "./lib/index.js";

// const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");
// const recordButton = getNode(".buttonGroup > button:nth-child(2)");
const [rollingDiceButton, recordButton, resetButton] = getNodes(
  ".buttonGroup > button"
);

const handlerRollingDice = (() => {
  let isRolling = false;
  let stopAnimation;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 100);
      // recordButton.disabled = true;
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      clearInterval(stopAnimation);
      // recordButton.disabled = false;
      enableElement(recordButton);
      enableElement(resetButton);
    }
    isRolling = !isRolling;
  };
})();

rollingDiceButton.addEventListener("click", handlerRollingDice);
