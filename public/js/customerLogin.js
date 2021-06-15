// const { doc } = require("prettier");

async function newFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#inputPassword').value;

  if (email && password) {
    const response = await fetch('/api/customer/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const resBody = await response.json();
      document.location.replace(`/api/customer/${resBody.customer.id}`);
    } else {
      alert('Failed to log in.');
    }
  }
};
document
  .querySelector('.loginform')
  .addEventListener('submit', newFormHandler);
