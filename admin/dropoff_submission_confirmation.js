function confirmDropoff()
{
    var dropoffData = {};

    dropoffData["date"] = document.getElementById("date").value;
    dropoffData["city"] = document.getElementById("city").value;it 
    dropoffData["state"] = document.getElementById("state").value;
    dropoffData["zipcode"] = document.getElementById("zipcode").value;
    // holder[water] = document.getElementById("water").value;

    let response = await fetch("http://localhost:8000/Request/",
    {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
    }).then(response => response.json());

    console.log(response)
}