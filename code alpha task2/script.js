function showMore(button) {
    var moreInfo = button.nextElementSibling;
    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
        button.textContent = "Show More";
    } else {
        moreInfo.style.display = "block";
        button.textContent = "Show Less";
    }
}