async function sending(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var saddy = document.getElementById("saddy").value;
    var c = document.getElementById("city").value;
    var s = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var can = document.getElementById("can").value;
    var W = document.getElementById("Water").value;
    var nonp = document.getElementById("nonp").value;
    var aid = document.getElementById("aid").value;
    var sh = document.getElementById("shirt").value;
    var scks = document.getElementById("socks").value;
    var tp = document.getElementById("tp").value;
    var bat = document.getElementById("battery").value;

    var holder = {};
    console.log("WORKING  ------------------------------------------");

    holder["zip"] = zip;
    holder["canned"] = can;
    holder["water"] = W;
    holder["nonperish"] = nonp;
    //holder[firstaid] = aid;
    //holder[shirt] = sh;
    //holder[sock] = scks;
    //holder[toilet] = tp;
    //holder[battery] = bat

    //fetch("http://127.0.0.1:8000", holder)

    let response = await fetch("http://localhost:8000/Request/",
    {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(holder)
    }).then(response => response.json());

}



