var arr = [
    [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
    [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
    [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
    [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
    [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
    [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
    [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
    [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
    [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
    [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
    var dojoDiv = document.querySelector("#the-dojo");
    
    // Creates the rows of buttons for this game
function render(arr) {
    var result = "";
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
        return result;
}
    
    
function howMany(i, j, element) {
    var num = 0
    if(i == 0 && j == 0){
        num += arr[i][j+1] + arr[i+1][j] + arr[i+1][j+1];
    
    }
    if(i == 9 && j == 0){
            num += arr[i][j+1] + arr[i-1][j] + arr[i-1][j+1];
    
        }
        if(i == 9 && j == 9){
            num += arr[i][j-1] + arr[i-1][j] + arr[i-1][j-1];
    
        }
        if(i == 0 && j == 9){
            num += arr[i][j-1] + arr[i+1][j] + arr[i+1][j-1];
    
        }
        if(i == 0 && j > 0 && j < 9 ){
            num += arr[i][j-1] + arr[i][j+1] + arr[i+1][j] + arr [i+1][j-1] + arr[i+1][j+1];
    
        }
        if(i == 9 && j > 0 && j < 9){
            num += arr[i][j-1] + arr[i][j+1] + arr[i-1][j] + arr [i-1][j-1] + arr[i-1][j+1];
    
        }
        if(i > 0 && i < 9 && j == 0){
            num += arr[i][j+1] + arr[i+1][j] + arr[i+1][j+1] + arr[i-1][j] + arr[i-1][j+1];
        }
        if(i > 0 && i < 9 && j == 9){
            num += arr[i][j-1] + arr[i+1][j] + arr [i+1][j-1] + arr[i-1][j] + arr [i-1][j-1];
        }
    
        if(i > 0 && i < 9 && j > 0 && j < 9){
            num += arr[i][j-1] + arr[i][j+1] + arr[i+1][j] + arr [i+1][j-1] + arr[i+1][j+1] + arr[i-1][j] + arr [i-1][j-1] + arr[i-1][j+1];
        }
        element.innerText = num;
        console.log({ i, j });
    
}
    var arr = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ]
    
function randomNin(){
    var count = 0;
    for(var y = 0; y < arr.length; y++){
        for(var x = 0; x < arr.length; x++){
            var nin = Math.round(Math.random())
            if (nin == 1){
                    count++;
                }
            if (count >= 10){
                    nin = 0;
                }
            arr[y].push(nin)
            }
        } 
        return arr;
    }
    
    
    
    console.log(randomNin())
    // BONUS CHALLENGES
    // 1. draw the number onto the button instead of alerting it
    // 2. at the start randomly place 10 ninjas into arr with at most 1 on each spot
    // 3. if you click on a ninja you must restart the game 
    //    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
    // start the game
    // message to greet a user of the game
    var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
    console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
    console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
    // shows the dojo for debugging purposes
    console.table(arr);
    // adds the rows of buttons into <div id="the-dojo"></div> 
    dojoDiv.innerHTML = render(arr);    