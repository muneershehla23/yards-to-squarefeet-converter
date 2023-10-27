function convert(event){
    event.preventDefault();

    console.log("function is running")

    let yards = document.querySelector("#inputYards").value;
    let squareFeet = yards * 9 

    document.querySelector("#resultWindow").innerHTML = `the yards in square feet is ${squareFeet}`;

    console.log(yards)
    console.log(squareFeet)

}