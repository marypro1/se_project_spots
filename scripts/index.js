const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
const profileEditBtn = document.querySelector(".profile__edit-button");
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

const newPostBtn = document.querySelector(".profile__new-post-button");
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

function handleEditProfileSubmit(event) {
  event.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescription.value;
  profileEditBtnModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
function handleNewPostSubmit(event) {
  event.preventDefault();
  console.log("Submitting new post");
  console.log(newPostCaption.value);
  console.log(newPostLink.value);
  newPostModal.classList.remove("modal_is-opened");
}
newPostForm.addEventListener("submit", handleNewPostSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
