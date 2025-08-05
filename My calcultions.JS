const text = "🇸🇦🧑🏻‍💻🇯🇴";
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