// 1) Scroll Navigation
var aTags = document.querySelectorAll("header a");
//전체 a태그들을 다 들고올거야 => header a 안에있는 ㅇㅇ
for(var i = 0; i < aTags.length; i ++) {
    aTags[i].onclick = function(e) { //클릭하면 아래 함수 적용, 각 a태그마다 적용함
        e.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));
        /*this 이것이 현재 이벤트가 발생할때
        이벤트를 발생시킨 오브젝트를 가르킴 
        a태그 클릭했다면 a태그를 가르키게됨
        this.getAttribute("href") => a태그의 href를 가져와라라는뜻
        이떄 this는 a를 의미하게됨*/

        window.scrollTo ({
            'behavior': 'smooth',
            'top': target.offsetTop
            //scroll이 끝났을 때 어느 좌표값에 위치할지 정하는 것
        })
    }
}