function changeTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};

function bigImg(pic) {
    document.getElementById("largeImg").src = pic.src;
};

function normalImg() {
    document.getElementById("largeImg").src = '';
};
