import { getNode } from "../dom/getNode.js";
import { isNumber } from "./typeOf.js";

const first = getNode(".first");

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

/* delay(() => {
  first.style.top = "-100px";
  delay(() => {
    first.style.transform = "rotate(360deg";
    delay(() => {
      first.style.top = "0px";
    });
  });
}); */
/* 
delayP()
  .then(() => {
    first.style.top = "-100px";
    return delayP();
  })
  .then(() => {
    first.style.transform = "rotate(360deg)";
    return delayP();
  })
  .then(() => {
    first.style.top = "0px";
  }); */

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

export function delayP(options = {}) {
  // const { shouldReject, data, errorMessage, timeout } = options;
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  config = { ...config, ...options };
  const { shouldReject, data, errorMessage, timeout } = config;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

// delayP()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/* delayP(3000).then((res) => {
  console.log(res);
});
 */

// async await
/* 
async function delayA() {
  return "완료";
}
let result = await delayA();

console.log(result);
 */
