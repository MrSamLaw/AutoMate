// const { doc } = require("prettier");

async function newFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#inputPassword').value;

  if (username && password) {
    const response = await fetch(`/api/staff/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json', },
    });

    if (response.ok) {
      const resBody = await response.json();
      console.log(resBody);
      document.location.replace(`/api/staff/${resBody.staff_id}`);
    } else {
      alert('Failed to log in.');
    }
  }
};
document
  .querySelector('.loginform')
  .addEventListener('submit', newFormHandler);