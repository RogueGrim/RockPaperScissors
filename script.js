let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    if(humanScore==5||computerScore==5){
        DeclareWinner(humanScore,computerScore)
    }else{

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

}


         
function getHumanChoice(){

    const rock = document.querySelector("#rock")
    rock.onclick= ()=>{
        playRound("Rock",computerChoice)
        computerChoice=getComputerChoice()
    }

    const scissor = document.querySelector("#scissor")
    scissor.onclick= ()=>{
        playRound("Scissor",computerChoice)
        computerChoice=getComputerChoice()
    }

    const paper = document.querySelector("#paper")
    paper.onclick = ()=>{
        playRound("Paper",computerChoice)
        computerChoice=getComputerChoice()
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();



const score = document.querySelector("#result")


function playRound(humanChoice,computerChoice){

    const text = document.createElement("p")

    if(humanChoice=="Rock" && computerChoice=="Scissor" || humanChoice=="Paper" && computerChoice=="Rock" || humanChoice=="Scissor" && computerChoice=="Paper"){
        
        text.textContent = ("You win, "+humanChoice+" beats "+computerChoice)
        humanScore++;

    }else if(humanChoice=="Paper" && computerChoice=="Scissor" || humanChoice=="Scissor" && computerChoice=="Rock" || humanChoice=="Rock" && computerChoice=="Paper"){
    
        text.textContent = ("You Lose, "+computerChoice+" beats "+humanChoice)
        computerScore++
    }else{

        text.textContent = ("Its a Draw!")
    }
    score.appendChild(text)
}

const result = document.querySelector("#score")

function DeclareWinner(computerScore,humanScore){

    const text = document.createElement("p") 

    if(humanScore>computerScore){
        text.textContent = ("You win!")
        result.appendChild(text)
    }else if(humanScore<computerScore){
        text.textContent = ("You Lose")
        result.appendChild(text)
    }else{
        text.textContent = ("Its a tie")
        result.appendChild(text)
    }
    
    const para = document.createElement("p")
    para.textContent = ("Your Score :"+humanScore)
    text.appendChild(para)

    const para2 = document.createElement("p")
    para2.textContent = ("Computer Score:"+computerScore)
    text.appendChild(para2)
}