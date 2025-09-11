const text = "𝐌𝐲 𝐭𝐫𝐚𝐜𝐞 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐬𝐚𝐧𝐜𝐭𝐢𝐟𝐢𝐞𝐝 𝐞𝐯𝐞𝐧 𝐢𝐟 𝐢𝐭 𝐢𝐬 𝐚 𝐬𝐜𝐚𝐫...";
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
