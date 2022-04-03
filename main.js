// References to DOM Element
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const book = document.getElementById("book");

const paper1 =  document.getElementById("p1");
const paper2 =  document.getElementById("p2");
const paper3 =  document.getElementById("p3");
const paper4 =  document.getElementById("p4");
const paper5 =  document.getElementById("p5");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numberOfPapers = 5;
let maxLocation = numberOfPapers + 1;

function openBook(){
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBiginning){
    if(isAtBiginning){
        book.style.transform = "translateX(0%)";
    }else{
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage(){
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                closeBook();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
    else
    alert("End of the ALBUM");
}

function goPrevPage() {
    if(currentLocation > 1){
        switch(currentLocation){
            case 2:
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                closeBook();
                book.style.transform = "translateX(0%)";
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                openBook();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
    else
        alert("Begining of the ALBUM");
}