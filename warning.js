let countdown = 10; // カウントダウンの初期値

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

document.addEventListener('DOMContentLoaded', () => {
    startCountdown();

    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', openWarningWindows);

    function openWarningWindows() {
        const numWindows = 10; // 開くウィンドウの数
        for (let i = 0; i < numWindows; i++) {
            openWarningWindow();
        }
    }

    function openWarningWindow() {
        const width = 320;
        const height = 240;
        const left = Math.random() * (window.innerWidth - width);
        const top = Math.random() * (window.innerHeight - height);
        const newWindow = window.open('', '警告', `width=${width},height=${height},left=${left},top=${top}`);
        if (newWindow) {
            newWindow.document.write('<p>ウイルス警告！</p>');
            newWindow.document.write('<p>デバイスが危険にさらされています。</p>');
        }
    }
});
