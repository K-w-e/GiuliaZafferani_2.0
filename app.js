function toggleDark() {
    var divs = document.getElementsByTagName("div");

    for (let item of divs){
        item.classList.toggle("dark")
        item.classList.toggle("light")
    }


    if (document.body.style.backgroundColor == "black"){
        document.getElementById("mode").innerHTML = "-> Dark Mode"
        document.getElementsByTagName("text")[0].style.fill = "#853cf4"
        document.body.style.backgroundColor = "white"
    }
    else{
        document.getElementById("mode").innerHTML = "-> Light Mode"
        document.getElementsByTagName("text")[0].style.fill = "white"
        document.body.style.backgroundColor = "black"
    }
}