import { insertLast, tiger, xhrData } from "./lib/index.js";

const rendingUserList = async () => {
  let response = await tiger.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  let userData = response.data;
  console.log(response.data);
};

rendingUserList();
