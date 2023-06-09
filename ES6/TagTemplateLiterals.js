function modifier(strings, ...values){
    const m = strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr. " + values.shift(): "");
    }, "");
    return m;
}

var player1 = "Sakib";
 var player2 = "Tamim";

 console.log(modifier`we have ${player1} and ${player2} in our cricket team.`);