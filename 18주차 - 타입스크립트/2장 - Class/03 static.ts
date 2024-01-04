class Grid {
    // origin 필드를 전역 멤버로 변경해주세요.
    static origin = { x:0, y:0 }
    
    // orign 필드 값을 출력할 수 있도록 아래 코드를 수정하세요.
    calculateDistance(): void {
      console.log(Grid.origin.x * Grid.origin.y);
    }
  }
  
  const grid = new Grid();
  
  // 외부에서 Grid origin 값 변경
  Grid.origin = { x:3, y:3 } 
  grid.calculateDistance(); // "9" 출력