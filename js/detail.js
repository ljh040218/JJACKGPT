const category1Data = {
   "검은지빠귀": {
     name: "검은지빠귀",
     image: "img/검은지빠귀.jfif",
     description: "온몸이 검은색이며 노란 부리를 가진 중형 크기의 지빠귀류. 맑고 청아한 소리로 지저귀며, 숲속이나 정원에서 쉽게 발견된다.",
     location: "산림, 농촌, 도시 공원 등"
   },
   "까치": {
     name: "까치",
     image: "img/까치.jfif",
     description: "검은 깃털에 푸른빛이 도는 광택과 긴 꼬리가 특징인 새. 영리하고 사회성이 강하며, 한국에서 길조로 여겨진다.",
     location: "도시 주변, 농촌, 숲 가장자리"
   },
   "동고비": {
     name: "동고비",
     image: "img/동고비.jfif",
     description: "청회색 등과 주황색 배가 특징이며 나무를 거꾸로 내려오는 독특한 행동을 보인다. 주로 곤충과 씨앗을 먹는다.",
     location: "산림, 공원"
   },
   "박새": {
     name: "박새",
     image: "img/박새.jfif",
     description: "검은 머리와 목, 노란 배가 특징이며, 한국에서 가장 흔한 텃새 중 하나다. 다양한 곤충과 씨앗을 섭취한다.",
     location: "숲, 공원, 정원"
   },
   "비둘기": {
     name: "비둘기",
     image: "img/비둘기.jfif",
     description: "회색 깃털과 목의 반짝이는 색상이 특징인 도시 새. 사람과 가까이 지내며, 씨앗과 빵 조각 등 다양한 음식을 먹는다.",
     location: "도시, 건물 주변"
   },
   "쇠물닭": {
     name: "쇠물닭",
     image: "img/쇠물닭.jfif",
     description: "어두운 깃털과 붉은 이마 방패가 특징이며, 습지와 물가에서 생활한다. 수초와 곤충을 주로 먹는다.",
     location: "연못, 하천, 습지"
   }
};

const category2Data = {
   "수컷꿩": {
     name: "수컷꿩",
     image: "img/수컷꿩.jfif",
     description: "화려한 깃털과 긴 꼬리가 특징이며, 한국의 대표적인 토종 새 중 하나다. 농촌에서 쉽게 볼 수 있다.",
     location: "농경지, 숲 가장자리"
   },
   "암컷꿩": {
     name: "암컷꿩",
     image: "img/암컷꿩.jfif",
     description: "수컷에 비해 갈색과 회색의 소박한 깃털을 가지고 있으며, 보호색 덕분에 주변 환경과 잘 어우러진다.",
     location: "농경지, 숲 가장자리"
   },
   "올빼미": {
     name: "올빼미",
     image: "img/올빼미.jfif",
     description: "둥근 얼굴과 큰 눈을 가진 야행성 새로, 주로 작은 포유류를 사냥한다. 밤에 울음소리로 존재를 알린다.",
     location: "산림, 공원"
   },
   "참새": {
     name: "참새",
     image: "img/참새.jfif",
     description: "갈색 머리와 흰 뺨, 검은 점이 특징인 소형 새. 사람 가까이에서 군집 생활을 하며, 씨앗과 곤충을 먹는다.",
     location: "도시, 농촌, 공원"
   },
   "청호반새": {
     name: "청호반새",
     image: "img/청호반새.jfif",
     description: "푸른 등과 오렌지색 배가 화려한 물가 새로, 작은 물고기를 잡아먹는다. 빠르게 날며 화살처럼 물속으로 뛰어든다.",
     location: "하천, 호수, 습지"
   }
};

function getProductData() {
   const currentPage = window.location.pathname;
   if (currentPage.includes('total2.html')) {
       return category2Data;
   }
   return category1Data;
}

function updateDetailPage(birdName) {
   const allBirdData = {...category1Data, ...category2Data};
   const bird = allBirdData[birdName];
   if (!bird) return;

   // 헤더 제목 
   const headerElement = document.querySelector('.header1');
   if (headerElement) {
       headerElement.textContent = `[ ${bird.name} ]`;
   }

   // 이미지 
   const imageElement = document.querySelector('.section1 img');
   if (imageElement) {
       imageElement.src = bird.image;
       imageElement.alt = bird.name;
   }

   // 소개 
   const descElement = document.querySelector('.content1');
   if (descElement) {
       descElement.textContent = bird.description;
   }

   // 지역
   const locationElement = document.querySelector('.content2');
   if (locationElement) {
       locationElement.textContent = `주요 출몰 지역: ${bird.location}`;
   }
}

document.addEventListener('DOMContentLoaded', () => {
   // 버튼에 이벤트 리스너 추가
   const buttons = document.querySelectorAll('button[id]');
   buttons.forEach(button => {
       button.addEventListener('click', () => {
           const birdName = button.id;
           localStorage.setItem('selectedBird', birdName);
           window.location.href = 'detail.html';
       });
   });

   // detail.html 페이지인 경우 내용 업데이트
   if (window.location.pathname.includes('detail.html')) {
       const selectedBird = localStorage.getItem('selectedBird');
       if (selectedBird) {
           updateDetailPage(selectedBird);
           localStorage.removeItem('selectedBird');
       }
   }
});