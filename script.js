function getComputerChoice(){
    const choice= Math.floor(Math.random()*3)+1

    if(choice==1){
        pick="Rock"
    }else if(choice==2){
        pick="Paper"
    }else{
        pick="Scissor"
    }
    return pick

}

function getHumanChoice(){
    console.log("1.Rock")
    console.log("2.Paper")
    console.log("3.Scissor")

    const choice= prompt("Choose one")

    if(choice==1){
        pick="Rock"
    }else if(choice==2){
        pick="Paper"
    }else{
        pick="Scissor"
    }
    return pick
}

console.log(getHumanChoice())
