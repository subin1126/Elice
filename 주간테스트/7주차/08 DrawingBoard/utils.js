export const getDiff = (e, rect) => {
    const { pageX, pageY } = e;
    const { x: rectX, y: rectY } = rect;
  
    return {
      x: pageX - rectX,
      y: pageY - rectY,
    };
  };
  