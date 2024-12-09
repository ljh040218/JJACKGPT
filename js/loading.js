document.addEventListener('DOMContentLoaded', () => {
    // 로딩바 애니메이션
    const loadingBar = document.querySelector('.loading-progress');
    let progress = 0;

    const updateProgress = () => {
        if (progress < 100) {
            progress += 1;
            loadingBar.style.width = `${progress}%`;
            setTimeout(updateProgress, 80); // 애니메이션 속도 조정
        }
    };

    updateProgress();

    // // 5초 후 페이지 이동
    // setTimeout(() => {
    //     console.log('5초 후 페이지 home.html로 이동.'); //디버그용이라 없애도 됨
    //     window.location.href = "home.html";
    // }, 5000); // 5초
});
