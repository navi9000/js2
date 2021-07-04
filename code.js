function hideMenu() {
    document.querySelector(".b-header__navMenu").classList.add("b-header__navMenu_hidden");
    console.log("hidden");
}

function showMenu() {
    document.querySelector(".b-header__navMenu").classList.remove("b-header__navMenu_hidden")
    console.log("visible");
}