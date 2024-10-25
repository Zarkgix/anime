anime({
    targets: 'div.box',
    translateY: [
      { value: 200, duration: 500 },
      { value: 0, duration: 800 }
    ],
    rotate: {
      value: '1turn',
      easing: 'easeInOutSine'
    },
    delay: function(el, i) { return i * 1000; }
  });
  