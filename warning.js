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
        window.open('warning.html', '警告', `width=${width},height=${height},left=${left},top=${top}`);
    }
});
