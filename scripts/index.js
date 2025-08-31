const profileEditBtn = document.querySelector(".profile__button-edit");

const profileEditBtnModal = document.querySelector("#edit-profile-modal");

const profileEditCloseBtn =
  profileEditBtnModal.querySelector(".modal__close-btn");

profileEditBtn.addEventListener("click", function () {
  console.log("Opening modal");
  profileEditBtnModal.classList.add("modal_is-opened");
});

profileEditCloseBtn.addEventListener("click", function () {
  console.log(".modal__close-btn");
  profileEditBtnModal.classList.remove("modal_is-opened");
});

const newPostBtn = document.querySelector(".profile__button-add");

const newPostModal = document.querySelector("#new-post-modal");

const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
