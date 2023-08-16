"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */
function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

//** Reveals submit form when user clicks */
<<<<<<< HEAD
function navSubmitClick(evt) {
  console.debug("navSubmitClick", evt);
  $storyForm.show();
}

$navSubmit.on("click", navSubmitClick);

=======
function navSubmitClick() {
  $storyForm.show();
}

$navSubmit.on("click", navSubmitClick);
>>>>>>> 3d579adbc9f47e1dad9de270c2ae4183ea9ecf9d
