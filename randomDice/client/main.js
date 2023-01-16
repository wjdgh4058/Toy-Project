import {
  diceAnimation,
  disableElement,
  enableElement,
  getNode,
  getNodes,
  invisibleElement,
  visibleElement,
} from "./lib/index.js";

// const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");
// const recordButton = getNode(".buttonGroup > button:nth-child(2)");
const [rollingDiceButton, recordButton, resetButton] = getNodes(
  ".buttonGroup > button"
);
let recordListWrapper = getNode(".recordListWrapper");

const handleRollingDice = (() => {
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

let handleRecord = () => {
  visibleElement(recordListWrapper);
};

let handleReset = () => {
  invisibleElement(recordListWrapper);
};

rollingDiceButton.addEventListener("click", handleRollingDice);
recordButton.addEventListener("click", handleRecord);
resetButton.addEventListener("click", handleReset);
