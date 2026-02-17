const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

function createItem(text) {
  const li = document.createElement('li');

  const left = document.createElement('div');
  left.className = 'left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      span.classList.add('done');
    } else {
      span.classList.remove('done');
    }
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.textContent = '🗑';

  deleteBtn.addEventListener('click', function () {
    list.removeChild(li);
  });

  left.appendChild(checkbox);
  left.appendChild(span);

  li.appendChild(left);
  li.appendChild(deleteBtn);

  return li;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const value = input.value.trim();

  if (value === '') {
    return;
  }

  const item = createItem(value);
  list.appendChild(item);

  input.value = '';
});

list.appendChild(createItem('First item'));
list.appendChild(createItem('Second item'));
list.appendChild(createItem('Third item'));
