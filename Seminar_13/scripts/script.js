var move_counter = 0;
var used_cells = [];
var chars = ["X", "O"];
var game_map = []
var game_over = false;
var winner = " "


for (let i = 0; i < 9; i++) {
    game_map.push("");
 }


 function sum(range_arr){
    let result = 0;
    for (let i = 0; i < range_arr.length; i++){
        result += range_arr[i];
    }
    return result;
}




function move(id){
    if(!used_cells.includes(id) && !game_over){
        document.getElementById(id).textContent = chars[move_counter % 2];
        game_map[Number(id) ] = chars[move_counter % 2];
        used_cells.push(id);
        move_counter++;

        if(     ((game_map[0] == game_map[1]) && (game_map[1] == game_map[2]) && (chars.includes(game_map[0])))
            ||  ((game_map[3] == game_map[4]) && (game_map[4] == game_map[5]) && (chars.includes(game_map[3])))
            ||  ((game_map[6] == game_map[7]) && (game_map[7] == game_map[8]) && (chars.includes(game_map[6])))
            ||  ((game_map[0] == game_map[4]) && (game_map[4]== game_map[8]) && (chars.includes(game_map[8])))
            ||  ((game_map[1] == game_map[4]) && (game_map[4]== game_map[7]) && (chars.includes(game_map[4])))
            ||  ((game_map[0] == game_map[3]) && (game_map[3]== game_map[6]) && (chars.includes(game_map[3])))
            ||  ((game_map[2] == game_map[5]) && (game_map[5]== game_map[8]) && (chars.includes(game_map[8]))) 
            ){

                winner = chars[(move_counter - 1 ) % 2];
                game_over = true;
                document.getElementById("win").textContent = `${winner} победили!`
                document.getElementById('stats').textContent = `Ходов сделано: ${move_counter}`;
            }
        else{
            if(! game_map.includes("")){

                document.getElementById("win").textContent = `Ничья!`
                document.getElementById('stats').textContent = `Ходов сделано: ${move_counter}`;

            }
        }
        console.log(`moves = ${move_counter}, game_map = ${game_map}, used_cells = ${used_cells}`);
    }else{
        return;
    }
}