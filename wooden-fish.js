document.addEventListener('DOMContentLoaded', function() {
    const woodenFish = document.getElementById('wooden-fish');
    const stick = document.getElementById('stick');
    const meritCount = document.getElementById('merit-count');
    const tapSound = document.getElementById('tap-sound');
    let count = 0;

    woodenFish.addEventListener('click', function() {
        // 播放音效
        tapSound.currentTime = 0;
        tapSound.play();

        // 执行敲击动画
        stick.style.transform = 'rotate(-30deg)';
        setTimeout(() => {
            stick.style.transform = 'rotate(0deg)';
        }, 100);

        // 更新功德计数
        count++;
        meritCount.textContent = `功德: ${count}`;
    });
});