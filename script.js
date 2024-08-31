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
    console.log("1.Rock")
    console.log("2.Paper")
    console.log("3.Scissor")

function getHumanChoice(){
    
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

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice,computerChoice){
    
    if(humanChoice=="Rock" && computerChoice=="Scissor" || humanChoice=="Paper" && computerChoice=="Rock" || humanChoice=="Scissor" && computerChoice=="Paper"){
        console.log("You win, "+humanChoice+" beats "+computerChoice)
        humanScore++;

    }else if(humanChoice=="Paper" && computerChoice=="Scissor" || humanChoice=="Scissor" && computerChoice=="Rock" || humanChoice=="Rock" && computerChoice=="Paper"){
        console.log("You Lose, "+computerChoice+" beats "+humanChoice)
        computerScore++
    }else{
        console.log("Its a Draw!")
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();


function playGame(){

        console.log("Round "+i)
        playRound(humanChoice,computerChoice);
        humanChoice=getHumanChoice()
        computerChoice=getComputerChoice()
        
}
for(i=1;i<=5;i++){
    playGame();
}
DeclareWinner(computerScore,humanScore)

function DeclareWinner(computerScore,humanScore){

    if(humanScore>computerScore){
        console.log("You win!")
    }else if(humanScore<computerScore){
        console.log("You Lose")
    }else{
        console.log("Its a tie")
    }

    console.log("Your Score :"+humanScore)
    console.log("Computer Score:"+computerScore)
}