function confirmDropoff()
{
    var dropoffData = {};

    dropoffData["date"] = document.getElementById("date").value;
    dropoffData["city"] = document.getElementById("city").value;it 
    dropoffData["state"] = document.getElementById("state").value;
    dropoffData["zipcode"] = document.getElementById("zipcode").value;
    // holder[water] = document.getElementById("water").value;

    fetch("http://128.62.16.135/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: dropoffData
    })
}