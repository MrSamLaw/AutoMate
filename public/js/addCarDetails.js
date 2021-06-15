async function newFormHandler(event) {
  event.preventDefault();

  const rego = document.querySelector('#carRego').value;
  const make = document.querySelector('#carMake').value;
  const model = document.querySelector('#carModel').value;
  // const year = document.querySelector('#carYear').value;
  const kilometers = document.querySelector('#carKMs').value;


  // console.log(make, model, year);
  if (rego && make && model && kilometers) {
    const vehicleResponse = await fetch(`/api/vehicle`, {
      method: 'POST',
      body: JSON.stringify({
        rego,
        make,
        model,
        // year,
        kilometers
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (vehicleResponse.ok) {
      const vehicleRes = await vehicleResponse.json();
      document.location.replace(`/api/customer/${vehicleRes.customer_id}`);
    } else {
      alert('Failed to add vehicle');
    }
  }
};
document
  .querySelector('.vehicle-form')
  .addEventListener('submit', newFormHandler);