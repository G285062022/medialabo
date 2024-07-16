document.addEventListener('DOMContentLoaded', () => {
    // 5秒後に警告ページを表示する
    setTimeout(showWarning, 5000);

    function showWarning() {
        const placeholder = document.getElementById('warning-placeholder');
        const iframe = document.createElement('iframe');
        iframe.src = 'warning.html';
        iframe.style.width = '100%';
        iframe.style.height = '100vh';
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.zIndex = '1000';
        placeholder.appendChild(iframe);
        placeholder.classList.remove('hidden');

        // 10秒後に新しい警告ページを表示
        setInterval(() => {
            const newIframe = document.createElement('iframe');
            newIframe.src = 'warning.html';
            newIframe.style.width = '100%';
            newIframe.style.height = '100vh';
            newIframe.style.position = 'fixed';
            newIframe.style.top = '0';
            newIframe.style.left = '0';
            newIframe.style.zIndex = '1000';
            placeholder.appendChild(newIframe);
        }, 10000);
    }
});
