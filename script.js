/* code written by Pardis Madad */
function updateProfilePicture(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profilePicture").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
