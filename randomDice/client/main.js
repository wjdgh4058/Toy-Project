import { diceAnimation, getNode } from "./lib/index.js";

const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");

const handlerRollingDice = (() => {
  let stopAnimation;
  let isRolling = false;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 100);
    } else {
      clearInterval(stopAnimation);
    }
    isRolling = !isRolling;
  };
})();

rollingDiceButton.addEventListener("click", handlerRollingDice);
