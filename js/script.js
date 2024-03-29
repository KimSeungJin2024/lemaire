document.addEventListener(`DOMContentLoaded`, function () { 

    //햄버거 버튼 클릭하면 메인메뉴 나오면서 햄버거버튼 스위치되도록 처리
    const menuBtn = document.querySelector(`#hamburger`);
    const mainMenu = document.querySelector(`.main_menu`);
    
    menuBtn.addEventListener(`click`, function () { 
        this.classList.toggle(`active`);

        // contains 활용해서 메인메뉴를 메뉴 버튼 active가 있을때 추가 아니면 제거
        const hasClass = this.classList.contains(`active`);

        if (hasClass) {
            mainMenu.classList.add(`active`);
        } else {
            mainMenu.classList.remove(`active`);
        }
    });

    // 반응형 사이즈에서 sec_1에 ex_bottom subtext 과 bottom_image 위치바꾸기
    const subTextChange = () => {
        const windowWidth = window.innerWidth;
        // 윈도우에 너비값을 변수에 저장

        const subText = document.querySelector(`.sec_1 .ex_bottom .subtext`);
        const exBottomImage = document.querySelector(`.sec_1 .ex_bottom .bottom_image`);
        const exBottom = document.querySelector(`.sec_1 .ex_bottom`);

        if (windowWidth < 960) {
            exBottom.appendChild(subText);
            // subtext 이미지 하단으로 내림
        } else {
            exBottom.appendChild(exBottomImage);
        }

    }

    subTextChange();
    // 윈도우가 리사이즈 될때 객체이동 자동 반응 설정
    window.addEventListener(`resize`, () => {
        subTextChange();
    });


    // 마우스휠 이벤트 (헤더가 휠이 내려갈때는 안보이다가 올라갈때 보이게끔 설정)
    window.addEventListener(`wheel`, (event) => { 
        const headerArea = document.querySelector(`.header_area`);

        if (event.deltaY > 0) {
            // wheel down
            headerArea.classList.remove(`scroll`);
        } else {
            // wheel up
            headerArea.classList.add(`scroll`);
        }
    });

    // body bg
    const sec2 = document.querySelector(`.sec_2`);
    const sec3 = document.querySelector(`.sec_3`);

    window.addEventListener(`scroll`, () => { 
        const sec2Offset = sec2.offsetTop - 500;
        const sec3Offset = sec3.offsetTop;

        const scrollTop = window.scrollY;
        const body = document.querySelector(`body`);

        if (scrollTop > sec2Offset && scrollTop < sec3Offset) {
            body.classList.add(`bg`);
        } else {
            body.classList.remove(`bg`);
        }
    });


    // sec_4 swiper
    var swiper = new Swiper(".ceoSwiper", {
        direction: "vertical",
        loop: true,
        speed: 500,
        autoplay: {
            delay: 1500
        }
    });

    // sub-menu
    // 마우스 올리면 카테고리에 맞는 탭 활성화 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 다시 변경
    const submenuTab = document.querySelectorAll(`.main_menu li`);
    const submenuBox = document.querySelector(`.sub_menu_box`);

    for (const li of submenuTab) {
        li.addEventListener(`mouseenter`, function () { 
            submenuBox.classList.add(`active`);

            // 탭메뉴 연결
            const tab = this.getAttribute(`data-alt`);
            const subMenu = document.querySelectorAll(`.sub_menu`);

            for (const tabContent of subMenu) {
                tabContent.classList.remove(`active`);
            }

            // const changeTab = document.getElementById(tab);
            const changeTab = document.querySelector(`#${tab}`);
            changeTab.classList.add(`active`);
        });
    }

    // 서브메뉴박스에 마우스리브되면 서브메뉴박스 active 제거
    submenuBox.addEventListener(`mouseleave`, function () { 
        this.classList.remove(`active`);
    });


    // 상단이동버튼 300px 이상일때 top_btn이 보여지게끔(scroll 설정해놓음) / 최상단으로 올라가는 상단이동버튼 구현해보기 -> 클릭했을때 최상단으로 이동하는 부분까지!

    const topBtn = document.querySelector(`.top_btn`);

    window.addEventListener(`scroll`, function () { 
        const scrollTop = window.scrollY;

        if (scrollTop >= 300) {
            topBtn.classList.add(`scroll`);
        } else {
            topBtn.classList.remove(`scroll`);
        }
    });

    topBtn.addEventListener(`click`, () => { 
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        });
    });


}); /* end */