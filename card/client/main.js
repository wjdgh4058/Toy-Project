import {
  createUserCard,
  getNode,
  insertLast,
  tiger,
  xhrData,
} from "./lib/index.js";

const userCardContainer = getNode(".user-card-inner");

const rendingUserList = async () => {
  let response = await tiger.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  let userData = response.data;

  console.log(userData);

  let newCard = createUserCard(userData);

  insertLast(userCardContainer, newCard);
};

rendingUserList();
