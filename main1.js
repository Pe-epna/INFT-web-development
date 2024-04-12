const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//the random varibles that can be in the story
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

//event listener
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  //makes varibles that are random from the list of possible things
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  //replaces the ":insertx:" and others to be what was just randomly selected
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertx:', xItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name); //replaces 'Bob' with custom name
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone'; //converts pounds to stone
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; //converts Fahrenheit to centigrade
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('94 Fahrenheit', temperature); //capitalize Fahrenheit
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}