const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');
const imageTitle = document.querySelector('.image-details h2');
const imageDescription = document.querySelector('.image-details p');

const images = [
  { src: 'image1.jpg', title: 'Image 1', description: 'This is the first image.' },
  { src: 'image2.jpg', title: 'Image 2', description: 'This is the second image.' },
  { src: 'image3.jpg', title: 'Image 3', description: 'This is the third image.' },
  { src: 'image4.jpg', title: 'Image 4', description: 'This is the fourth image.' },
];

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = images[index].src;
    imageTitle.textContent = images[index].title;
    imageDescription.textContent = images[index].description;
    thumbnails.forEach(t => t.classList.remove('blurred'));
  });

  thumbnail.addEventListener('mouseenter', () => {
    thumbnail.style.transform = 'scale(1.1)';
    thumbnails.forEach(t => t.classList.remove('blurred'));
    thumbnail.classList.add('blurred');
  });

  thumbnail.addEventListener('mouseleave', () => {
    thumbnail.style.transform = 'scale(1)';
    thumbnails.forEach(t => t.classList.remove('blurred'));
  });
});
