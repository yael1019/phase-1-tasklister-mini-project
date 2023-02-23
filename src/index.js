const form = document.getElementById('create-task-form');
const input = document.getElementById('new-task-description');
const button = document.querySelector('input:nth-of-type(2n)');
const list = document.getElementById('tasks');
const body = document.getElementsByTagName('body');
const dropdown = document.getElementById('dropDown');
const dueDate = document.getElementById('due');


form.addEventListener("submit", (e) => {
  // your code here
  e.preventDefault();
  const li = document.createElement('li');
  list.append(li);
  li.innerText = input.value;
  li.append(dueDate);
  const del = document.createElement('button');
  li.append(del);
  del.innerText = 'x';
  del.addEventListener('click', () => {
    li.remove();
  })
    // target is targetting the entire select tag with the option childre
    // the value gives you each specific option value
  if (dropdown.value === 'high') {
      li.style.color = 'red';
  } else if(dropdown.value === 'medium') {
    li.style.color = 'orange';
  } else if(dropdown.value === 'low') {
    li.style.color = 'green';
  }

});

// const selectForm = document.createElement('form');
// body.append(selectForm);
// const label = document.createElement('label');
// form.append(label);
// label.innerText = 'Choose Color:';
// const select = document.createElement('select');
// form.append(select);
// const option1 = document.createElement('option');
// select.append(option1);
// option1.innerText = 'Please Choose A Color';
// const option2 = document.createElement('option');
// select.append(option2);
// option2.innerText = 'Red';
// const option3 = document.createElement('option');
// select.append(option3);
// option3.innerText = 'Blue';
// const option4 = document.createElement('option');
// select.append(option4);
// option4.innerText = 'Green';

// form.addEventListener('change', (event) => {
//     list.style.color = event.target.value;
// })



