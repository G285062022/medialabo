// 初めのカウントダウン処理
let countdown = 20;

function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = countdown;

    if (countdown === 2) {
        darkenScreen();
    } else if (countdown > 0) {
        countdown--;
        setTimeout(startCountdown, 1000);
    }
}

// 画面を真っ暗にする処理
function darkenScreen() {
    window.location.href = "black.html";
}

// 初期処理を開始
startCountdown();

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const numWindows = 10; // 開くウィンドウの数
        for (let i = 0; i < numWindows; i++) {
            openWarningWindow();
        }
    }, 5000); // 5秒後に警告ウィンドウを開く

    function openWarningWindow() {
        const width = 320;
        const height = 240;
        const left = Math.random() * (window.innerWidth - width);
        const top = Math.random() * (window.innerHeight - height);
        window.open('', '警告', `width=${width},height=${height},left=${left},top=${top}`).document.write('<p>ウイルス警告！</p>');
    }
});
