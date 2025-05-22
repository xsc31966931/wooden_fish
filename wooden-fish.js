document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const woodenFish = document.getElementById('wooden-fish');
    const stick = document.getElementById('stick');
    const meritPopup = document.getElementById('merit-popup');
    const countElement = document.getElementById('count');
    const meritCount = document.getElementById('merit-count');
    const tapSound = document.getElementById('tap-sound');
    const resetBtn = document.getElementById('reset-btn');
    const saveBtn = document.getElementById('save-btn');
    
    // 初始化功德计数
    let count = localStorage.getItem('meritCount') ? parseInt(localStorage.getItem('meritCount')) : 0;
    countElement.textContent = count;
    
    // 敲击木鱼
    woodenFish.addEventListener('click', function() {
        // 播放音效
        tapSound.currentTime = 0;
        tapSound.play().catch(e => console.log('无法播放音效:', e));
        
        // 执行敲击动画
        stick.classList.add('animate-strike');
        woodenFish.classList.add('animate-scale');
        
        // 确保声音加载完成
        tapSound.load();
        
        // 显示+1动画
        meritPopup.textContent = '+1';
        meritPopup.classList.add('animate-popup');
        
        // 更新功德计数
        count++;
        countElement.textContent = count;
        
        // 移除动画类
        setTimeout(() => {
            stick.classList.remove('animate-strike');
            woodenFish.classList.remove('animate-scale');
        }, 300);
        
        // 隐藏+1动画
        setTimeout(() => {
            meritPopup.classList.remove('animate-popup');
        }, 800);
    });
    
    // 重置功德
    resetBtn.addEventListener('click', function() {
        if (confirm('确定要重置功德吗？')) {
            count = 0;
            countElement.textContent = count;
            localStorage.removeItem('meritCount');
            showToast('功德已重置');
        }
    });
    
    // 保存功德
    saveBtn.addEventListener('click', function() {
        localStorage.setItem('meritCount', count);
        showToast('功德已保存');
    });
    
    // 显示提示消息
    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = 'rgba(93, 64, 55, 0.9)';
        toast.style.color = 'white';
        toast.style.padding = '10px 20px';
        toast.style.borderRadius = '5px';
        toast.style.zIndex = '1000';
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 500);
        }, 2000);
    }
    
    // 键盘敲击支持
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            woodenFish.click();
        }
    });
});