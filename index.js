const list = document.querySelectorAll(".list");
function activate(index) {
    list.forEach((item) => item.classList.remove("active"));
    list[index].classList.add("active");
    document.getElementById("indicator").style.transform = `translateX(calc(${index} * 90px))`
}
list.forEach((item, index) => item.addEventListener('click', () => activate(index)));