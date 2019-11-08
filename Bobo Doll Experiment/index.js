function dropdown1() {
    if (window.innerWidth < 1045) {
        if (document.getElementById("dropdownList").style.visibility == "visible")
        {
            document.getElementById("dropdownList").style.visibility = "hidden";
        } else {
            document.getElementById("dropdownList").style.visibility = "visible";
        }
    }
}

function dropdown2a () {
    document.getElementById("dropdownList").style.visibility = "visible";
}

function dropdown2b () {
    document.getElementById("dropdownList").style.visibility = "hidden";
}