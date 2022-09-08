function toggleDark() {
    var divs = document.getElementsByTagName("div");

    for (let item of divs)
        item.classList.toggle("dark")

    document.body.classList.toggle("dark")

    if (document.body.classList[0] == "dark"){
        document.getElementById("mode").innerHTML = "-> Light Mode"
        document.getElementsByTagName("text")[0].style.fill = "red"
    }
    else{
        document.getElementById("mode").innerHTML = "-> Dark Mode"
        document.getElementsByTagName("text")[0].style.fill = "green"
    }

}