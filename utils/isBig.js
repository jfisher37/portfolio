const isBig = () => {
  let winWidth = window.innerWidth;

  window.onresize = () => {
    winWidth = window.innerWidth;
  };

  if (winWidth <= 790) {
    return false;
  } else {
    return true;
  }
};

export default isBig;
