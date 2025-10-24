const profileEditBtn = document.querySelector(".profile__button-edit");
const profileEditBtnModal = document.querySelector("#edit-profile-modal");
const profileEditCloseBtn =
  profileEditBtnModal.querySelector(".modal__close-btn");
const editProfileForm = profileEditBtnModal.querySelector(".modal__form");
const editProfileNameInput = profileEditBtnModal.querySelector(
  "#profile-name-input"
);
const editProfileDescription = profileEditBtnModal.querySelector(
  "#profile-description-input"
);

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

profileEditBtn.addEventListener("click", function () {
  console.log("Opening modal");
  editProfileNameInput.value = profileName.textContent;
  editProfileDescription.value = profileDescription.textContent;
  profileEditBtnModal.classList.add("modal_is-opened");
});

profileEditCloseBtn.addEventListener("click", function () {
  console.log(".modal__close-btn");
  profileEditBtnModal.classList.remove("modal_is-opened");
});

const newPostBtn = document.querySelector(".profile__button-add");
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");

const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostLink = newPostForm.querySelector("#card-image-input");
const newPostCaption = newPostForm.querySelector("#card-caption-input");
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evet) {
  evet.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescription.value;
  profileEditBtnModal.classList.remove("modal_is-opened");
  
}
//what.addEventListener("for", whatAreWeGoingToDo)
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evet) {
  evet.preventDefault();
  console.log("Submitting new post");
  console.log(newPostCaption.value);
  console.log(newPostLink.value);
  newPostModal.classList.remove("modal_is-opened");
}

//what.addEventListener("for", whatAreWeGoingToDo)
newPostForm.addEventListener("submit", handleNewPostSubmit);
