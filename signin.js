const mobile = document.getElementById("mobile");
const signinButton = document.getElementById("signin-button");

const signIn = (e) => {
    e.preventDefault();
    const storedMobile = sessionStorage.getItem("mobile");
    if (mobile.value === storedMobile) {
        alert("Sign in successful!");
        window.location.assign('./index.html');
    } else {
        alert("Mobile number is incorrect.");
    }
};

signinButton.addEventListener("click", (e) => {
    signIn(e);
});