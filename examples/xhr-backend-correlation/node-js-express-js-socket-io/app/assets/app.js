(() => {
  'use strict';

  const targetOrigin = 'http://127.0.0.1:62000';

  const socket = io(targetOrigin);

  document
    .querySelectorAll('.cross-origin-fetch')
    .forEach(e => e.addEventListener('click', executeCrossOriginFetchCall, false));

  document
    .querySelector('form')
    .addEventListener('submit', onSubmit, false);

  socket.on('echo', msg => {
    console.log('got', msg);
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = msg;
    ul.appendChild(li);
  });

  function executeCrossOriginFetchCall(e) {
    fetch(`${targetOrigin}/api/randomValues`, {
      method: e.target.dataset.method
    }).then(v => console.log('Received the following from the server', v));
  }

  function onSubmit(e) {
    e.preventDefault();

    const textarea = document.querySelector('textarea');
    socket.emit('echo', textarea.value);
    textarea.value = '';
  }
})();
