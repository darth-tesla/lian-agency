$(document).ready(function() {
  const childs = $(".grid__col-3 .grid__item");
  const childsArr = Array.from(childs);
  const colOne = $(".grid__col-1");
  const colTwo = $(".grid__col-2");
  const colThree = $(".grid__col-3");

  function spreading(arr) {
    return arr.forEach((item, position) => {
      if (position % 2 === 0) {
        $(colOne).append($(item).addClass(`appended appended-${position}`));
      } else {
        $(colTwo).append($(item).addClass(`appended appended-${position}`));
      }
    });
  }

  if ($(window).width() < 768) {
    spreading(childsArr);
  }

  $(window).on("resize", function() {
    if ($(this).width() < 768) {
      spreading(childsArr);
    } else if ($(this).width() > 768) {
      Array.from($(".appended")).forEach((item, position, arr) => {
        for(let i = 0; i < arr.length; i++) {
          const toGather = arr.find((item) => $(item).hasClass(`appended-${i}`));
          $(colThree).append(toGather).removeClass(`appended appended-${i}`)
        }
      });
    }
  });

});
