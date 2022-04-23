function sender(){
    var z = document.getElementById("zipcode").value;
    var zipfile = {};
    zipfile[zipcode] = z
    //var info = fetch("http://128.62.16.135", zipfile).then

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