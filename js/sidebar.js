function openNav() {
    if (window.innerWidth <= 600) {
        document.getElementById("mySidebar").style.width = "250px";
    } else {
        document.getElementById("mySidebar").style.width = "500px";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

window.addEventListener('resize', function() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width !== "0px") {
        if (window.innerWidth <= 600) {
            sidebar.style.width = "250px";
        } else {
            sidebar.style.width = "500px";
        }
    }
});