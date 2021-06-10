async function newFormHandler(event) {
    console.log("got hereeeee");
    event.preventDefault();
  
    const client_name = document.querySelector('#client_name').value;
    const description = document.querySelector('#description').value;
    const address = document.querySelector('#address').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const dob = document.querySelector('#dob').value;
    const rego = document.querySelector('#rego').value;
    const make = document.querySelector('#make').value;
    const model = document.querySelector('#model').value;
    const year = document.querySelector('#year').value;
    const kms = document.querySelector('#kms').value;

    console.log(client_name, description, address, phone, dob);

    const response = await fetch(`/api/client`, {
      method: 'POST',
      body: JSON.stringify({
        client_name,
        description, 
        address,
        phone,
        dob
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