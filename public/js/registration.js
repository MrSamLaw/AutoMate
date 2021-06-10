const { doc } = require("prettier");

async function newFormHandler(event) {
    console.log("got hereeeee");
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
    const password2 = document.querySelector('#inputPassword2')
    

    console.log(first_name, last_name, phone);

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

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add client');
    }
  }

  document
    .querySelector('.new-client-form')
    .addEventListener('submit', newFormHandler); 