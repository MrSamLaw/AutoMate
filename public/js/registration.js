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
    const rego = document.querySelector('#carRSego').value;
    const make = document.querySelector('#carMake').value;
    const model = document.querySelector('#carModel').value;
    const year = document.querySelector('#carYear').value;
    const kms = document.querySelector('#carKMs').value;

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
        postcode
    }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const vehicleResponse = await fetch('/api/vehicle', {
        method: 'POST',
        body: JSON.stringify({
            rego,
        make,
        model,
        year,
        kms
    }),
        headers: {
         'Content-Type': 'application/json'
        }
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