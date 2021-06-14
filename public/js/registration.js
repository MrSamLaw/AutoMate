// const { doc } = require("prettier");

async function newFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector('#firstName').value;
  const last_name = document.querySelector('#lastName').value;
  const phone = document.querySelector('#phoneNumber').value;
  const email = document.querySelector('#email').value;
  const dob = document.querySelector('#DoB').value;
  const address = document.querySelector('#address').value;
  const suburb = document.querySelector('#suburb').value;
  const postcode = document.querySelector('#postcode').value;
  const password = document.querySelector('#inputPassword').value;
  const password2 = document.querySelector('#inputPassword2').value;


  if (first_name && last_name && phone && email && dob && address &&
    suburb && postcode && password && password2) {

    if (password === password2) {

      const customerResponse = await fetch(`/api/customer`, {
        method: 'POST',
        body: JSON.stringify({
          first_name,
          last_name,
          phone,
          email,
          dob,
          address,
          suburb,
          postcode,
          password,
          password2
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (customerResponse.ok) {
        document.location.replace('/customerLogin');
      } else {
        alert('Failed to add client response bad');
      }
    } else {
      alert('Passwords must match');
    }
  } else {
    alert('Please complete all fields');
  }
};
document
  .querySelector('.new-client-form')
  .addEventListener('submit', newFormHandler);