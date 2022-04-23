function sender(){
    var z = document.getElementById("zipcode").value;
    var zipfile = {};
    zipfile[zipcode] = z
    var info = fetch.then("http://128.62.16.135", zipfile)
}