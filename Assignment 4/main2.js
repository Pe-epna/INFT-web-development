const imageFiles = ['https://tse4.mm.bing.net/th?id=OIP.ub0KyIt1KpF25h_Be3GWdwHaGN&pid=Api&P=0&h=180', 'https://www.goodfreephotos.com/albums/united-states/california/san-diego/sunset-over-the-ocean-seascape-in-san-diego-california.jpg', 'https://www.rd.com/wp-content/uploads/2021/12/GettyImages-1307728913.jpg', 'http://media.cntraveler.com/photos/554a497929d479ab28bfb03b/master/pass/spring_flowers_2015_longwood_cr_Longwood%20Gardens%20L%20Albee.jpg', 'https://up.yimg.com/ib/th?id=OIP.W_itMW5hTkkEcy7YvUwQsgHaE8&pid=Api&rs=1&c=1&qlt=95&w=141&h=94'];

//declares the alternative text for each image
const altTexts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'A beautiful sunset over the ocean',
  'pic3.jpg': 'A cute puppy with floppy ears',
  'pic4.jpg': 'Vibrant flowers in full bloom',
  'pic5.jpg': 'A breathtaking mountain landscape'
};

const thumbBar = document.querySelector('.thumb-bar');

for (let i = 0; i < imageFiles.length; i++) {
  //create new img element
  const newImage = document.createElement('img');
  newImage.src = 'images/' + imageFiles[i];
  newImage.alt = altTexts[imageFiles[i]];
  //adds new img element to thumb-bar div
  thumbBar.appendChild(newImage);

  //adds a click event listener to each thumbnail image
  newImage.addEventListener('click', function() {
    const displayedImg = document.querySelector('.displayed-img');
    displayedImg.src = this.src;
    displayedImg.alt = this.alt;

    //removes the previously applied 'selected' class from any other image
    const selectedImage = document.querySelector('.selected');
    if (selectedImage) {
      selectedImage.classList.remove('selected');
    }

    //adds 'selected' class to the clicked image
    this.classList.add('selected');
  });
}

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//adds click event listener to the button
btn.addEventListener('click', function() {
  const btnClass = btn.getAttribute('class');
  //if the class' name is "dark", lighten the image
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    //if the class' name is not "dark", darken the image
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});
