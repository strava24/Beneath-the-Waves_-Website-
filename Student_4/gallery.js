const image = document.querySelectorAll(".gallery_images img");
const total_images = image.length;
let displaying_image = 0;

function openPopup(event) {
    if (event.target.tagName === "IMG") {
        const clickedIndex = Array.from(image).indexOf(event.target);
        displaying_image = clickedIndex;
        updatePopupImage(displaying_image);
        document.getElementById("expand_image").style.display = "flex";
    }
}

function closePopup() {
    document.getElementById("expand_image").style.display = "none";
}

function changeImage(direction) {
    displaying_image += direction;
    if (displaying_image >= total_images) {
        displaying_image = 0;
    } else if (displaying_image < 0) {
        displaying_image = total_images - 1;
    }
    updatePopupImage(displaying_image);
}

function updatePopupImage(index) {
    const lightboxImg = document.getElementById("Expanded_img");
    const descriptionElement = document.getElementById("picture_description");

    lightboxImg.src = image[index].src;
    descriptionElement.innerText = image[index].dataset.description;
}

image.forEach(img => {
    img.addEventListener("click", openPopup);
});

const colorButtons = document.querySelectorAll(".color_button");

colorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const selectedColor = event.target.getAttribute("data-color");
        document.getElementById("expand_image").style.backgroundColor = selectedColor;
    });
});

document.getElementById("reset_button").addEventListener("click", () => {
    document.getElementById("expand_image").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    document.getElementById("font_design").value = "Poppins";
    document.getElementById("picture_description").style.fontFamily = "Poppins";
});

document.getElementById("font_design").addEventListener("change", (event) => {
    document.getElementById("picture_description").style.fontFamily = event.target.value;
});

