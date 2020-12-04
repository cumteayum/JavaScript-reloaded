let parent = document.getElementById("this");
parent.addEventListener('mouseover', function(e) {
    document.body.style.backgroundColor=`rgb(${e.offsetY}, ${e.offsetX}, ${e.offsetY})`
})