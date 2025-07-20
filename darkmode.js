if (localStorage.darkmode === "enabled") {
    document.body.classList.add("darkmode");
}
function myFunction() {
    document.body.classList.toggle("darkmode");
    localStorage.darkmode = document.body.classList.contains("darkmode") ? "enabled" : "disabled";
}