let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
};
//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
};
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 10000);
function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector(".slider .list .item.active");
    let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
    itemActiveOld.classList.remove("active");
    thumbnailActiveOld.classList.remove("active");

    // active new item
    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 10000);
}
function setPositionThumbnail() {
    let thumbnailActive = document.querySelector(".thumbnail .item.active");
    let rect = thumbnailActive;
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({
            behavior: "smooth",
            inline: "nearest"
        });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        itemActive = index;
        showSlider();
    });
});

// DUA
let items1 = document.querySelectorAll(".slider1 .list1 .item1");
let next1 = document.getElementById("next1");
let prev1 = document.getElementById("prev1");
let thumbnails1 = document.querySelectorAll(".thumbnail1 .item1");

// config param
let countItem1 = items1.length;
let itemActive1 = 0;
// event next click
next1.onclick = function (e) {
    itemActive1 = itemActive1 + 1;
    if (itemActive1 >= countItem1) {
        itemActive1 = 0;
    }
    showSlider1();
};
//event prev click
prev1.onclick = function () {
    itemActive1 = itemActive1 - 1;
    if (itemActive1 < 0) {
        itemActive1 = countItem1 - 1;
    }
    showSlider1();
};
// auto run slider
let refreshInterval1 = setInterval(() => {
    next1.click();
}, 10000);
function showSlider1() {
    // remove item active old
    let itemActiveOld1 = document.querySelector(
        ".slider1 .list1 .item1.active"
    );
    let thumbnailActiveOld1 = document.querySelector(
        ".thumbnail1 .item1.active"
    );
    itemActiveOld1.classList.remove("active");
    thumbnailActiveOld1.classList.remove("active");

    // active new item
    items1[itemActive1].classList.add("active");
    thumbnails1[itemActive1].classList.add("active");
    setPositionThumbnail1();

    // clear auto time run slider
    clearInterval(refreshInterval1);
    refreshInterval1 = setInterval(() => {
        next1.click();
    }, 10000);
}

function setPositionThumbnail() {
    let thumbnailActive = document.querySelector(".thumbnail .item.active");
    let rect = thumbnailActive;
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({
            behavior: "smooth",
            inline: "nearest"
        });
    }
}
// click thumbnail
thumbnails1.forEach((thumbnail1, index1) => {
    thumbnail1.addEventListener("click", () => {
        itemActive1 = index1;
        showSlider1();
    });
});
