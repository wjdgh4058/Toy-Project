import { getNode } from "./getNode.js";
import { insertLast } from "./insert.js";

export const createUserCard = ({
  id = "",
  name = "",
  email = "",
  website = "",
} = {}) => {
  // const { id, name, email, website = "사이트" } = user;
  return /* html */ `
  <article class="user-card" data-index="user-${id}">
  <h3 class="user-name">${name}</h3>
  <div class="user-resouce-info">
    <div>
      <a class="user-email" href="mailto:${email}"
        >${email}</a
      >
    </div>
    <div>
      <a
        class="user-website"
        href="http://${website}"
        target="_blank"
        rel="noopener noreferer"
        >${website}</a
      >
    </div>
  </div>
  <button class="delete">삭제</button>
</article>`;
};

export const renderUserCard = (target, data) => {
  insertLast(target, data);
};

// console.log(
//   createUserCard({
//     id: 1,
//     name: "tiger",
//     email: "tiget@naver.com",
//     // website: "tiger.com",
//   })
// );
