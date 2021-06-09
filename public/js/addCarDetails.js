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