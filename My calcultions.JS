const text = "I am not a lonely person in life, but I chose this path...";
const typingElement = document.querySelector(".typing");
let i = 0;

function type() {
    if (i <= text.length) {
        typingElement.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 120); // سرعة الكتابة
    }
}

type();

