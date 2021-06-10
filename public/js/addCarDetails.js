    const rego = document.querySelector('#carRego').value;
    const make = document.querySelector('#carMake').value;
    const model = document.querySelector('#carModel').value;
    const year = document.querySelector('#carYear').value;
    const kms = document.querySelector('#carKMs').value;

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

    const { doc } = require("prettier");

async function newFormHandler(event) {
    console.log("got hereeeee");
    event.preventDefault();

    const rego = document.querySelector('#carRego').value;
    const make = document.querySelector('#carMake').value;
    const model = document.querySelector('#carModel').value;
    const year = document.querySelector('#carYear').value;
    const kms = document.querySelector('#carKMs').value;
    

    console.log(make, model, year);

    const vehicleResponse = await fetch(`/api/vehicle`, {
      method: 'POST',
      body: JSON.stringify({
        rego,
        make,
        model,
        year,
        kms
    }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add vehicle');
    }
  }

  document
    .querySelector('.vehicle-form')
    .addEventListener('submit', newFormHandler); 