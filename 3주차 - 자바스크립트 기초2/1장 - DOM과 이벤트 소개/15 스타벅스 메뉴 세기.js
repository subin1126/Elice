// 각 function마다 getElementById()와 getElementsByTagName()을 사용해서 index.html <body>내 각 div id에 해당하는 <p> 태그의 개수를 출력하세요.

function getAllParaElems() {
    var allpara = document.getElementsByTagName("p");
    var num = allpara.length;
    alert("전체 메뉴 종류는 " + num + " 개 입니다.");
  }
  
  function div1ParaElems() {
    var div1 = document.getElementById("coldbrew");
    var para = div1.getElementsByTagName("p");
    var num = para.length;
    alert("커피 음료 종류는 " + num + " 개 입니다.");
  }
  
  function div2ParaElems() {
    var div2 = document.getElementById("espresso");
    var para = div2.getElementsByTagName("p");
    var num = para.length;
    alert("에스프레소 음료 종류는 " + num + " 개 입니다. ");
  }
  