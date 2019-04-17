//JSON is text, any JavaScript can be converted into JSON and JSON to the server-->
//When exchanging data between a browser and a server, the data can only be text-->

//stroing data
myObj ={name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON",myJSON);

//Retrieving data
text = localStorage.getItem("testJSON");

