// console.log(document)

var textContent;

var getText = () => {
  textContent = document.getElementById('text-box').value;
  var wordArray = textContent.split(' ');
  console.log(wordArray);
};

var button = document.getElementById('button');
if(button) {
  button.addEventListener('click', getText);
}
