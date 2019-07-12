/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let currentIndex = 0;

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.append(createCarousel());

function createCarousel() {
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const rightButton = document.createElement("div");
  const imageSrc = [
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg"
  ];

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  leftButton.textContent = ` < `;
  rightButton.textContent = ` > `;

  leftButton.style.zIndex = 2;

  carousel.append(leftButton);
  imageSrc.map((src, index) => {
    const image = document.createElement("img");
    image.src = src;
    if (index === 0) {
      image.style.display = "block";
    }
    carousel.append(image);
  });
  carousel.append(rightButton);

  leftButton.addEventListener("click", () => {
    const allImages = document.querySelectorAll(".carousel img");
    console.log("left button clicked");
    allImages[currentIndex].style.display = "none";
    allImages[currentIndex].classList.remove(
      "animated",
      "slideInLeft",
      "slideInRight",
      "faster"
    );
    if (currentIndex === 0) {
      currentIndex = allImages.length - 1;
      allImages[currentIndex].classList.add(
        "animated",
        "slideInLeft",
        "faster"
      );
      allImages[currentIndex].style.display = "block";
    } else {
      currentIndex -= 1;
      allImages[currentIndex].classList.add(
        "animated",
        "slideInLeft",
        "faster"
      );
      allImages[currentIndex].style.display = "block";
    }
  });

  rightButton.addEventListener("click", () => {
    const allImages = document.querySelectorAll(".carousel img");
    console.log("right button clicked");
    allImages[currentIndex].style.display = "none";
    allImages[currentIndex].classList.remove(
      "animated",
      "slideInRight",
      "slideInLeft",
      "faster"
    );
    if (currentIndex === allImages.length - 1) {
      currentIndex = 0;
      allImages[currentIndex].classList.add(
        "animated",
        "slideInRight",
        "faster"
      );
      allImages[currentIndex].style.display = "block";
    } else {
      currentIndex += 1;
      allImages[currentIndex].classList.add(
        "animated",
        "slideInRight",
        "faster"
      );
      allImages[currentIndex].style.display = "block";
    }
  });

  return carousel;
}
