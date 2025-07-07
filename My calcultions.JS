const text = "𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗺𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹 𝗽𝗮𝗴𝗲";
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