const InfoButton = document.getElementById("InfoButton");



const paragraph =  [{
    id: 1,
    Words: "Im currently a high school student Studying Software Programing. I'm in my 3rd year of high school so far i've learned many programing languages like JavaScript , html , C++ ext."
},
]






const Printparagraph  = (paragraph) => {
    return paragraph[0].Words;
} 









InfoButton.addEventListener("click", ()=> {
    let message = Printparagraph(paragraph)
    instructions.innerText = message;
})