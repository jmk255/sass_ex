//페이지 로드 이벤트
window.addEventListener("load", () => {
  //클릭할 버튼 요소와 gnb요소를 변수에 저장
  const btn = document.querySelector(".menu-toggle-btn");
  const gnb = document.querySelector(".gnb");

  //버튼에 클릭 이벤트 연결
  btn.addEventListener("click", () => {
    //gnb요소의 css속성인 height값을 구해서 height가 0이면 gnb를 펼쳐주고 0이 아니면 gnb를 접어주는 구문
    let compStyles = window.getComputedStyle(gnb);//gnb요소의 모든 css속성을 객체로 compStyles변수에 할당
    // console.log(compStyles)
    
    //compStyles변수에서 height값만 추출해서 height변수에 할당
    let height = compStyles.getPropertyValue("height");
    console.log(height)

    if(height === "0px"){//gnb의 height값이 0이면 gnb요소의 총높이를 maxHeight값으로 설정(scrollHeight = 보이지 않는 컨텐츠를 포함한 높이)
      gnb.style.maxHeight = gnb.scrollHeight + "px";
    }else{//gnb의 height가 0px이 아니면(gnb가 펼쳐져 있으면) maxHeight값을 0px으로 변경하여 메뉴를 접어줌
      gnb.style.maxHeight = "0px";
    }
  })
})