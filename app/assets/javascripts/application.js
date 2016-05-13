// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function () {
  // console.log('hello wisconsin');
  var el = null;
  var mousePosition = { 
    x: -1, 
    y: -1,
    last: {
      x: -1, 
      y: -1
    }
  };
  var elPosition = {
    x: -1,
    y: -1,
    last: {
      x: -1,
      y: -1
    }
  };

  $(document).mousemove(function (event) {
    mousePosition.last.x = mousePosition.x;
    mousePosition.last.y = mousePosition.y;
    mousePosition.x = event.pageX;
    mousePosition.y = event.pageY;
    // console.log('the cursor coordinates moved from { x: ' + mousePosition.last.x +
    //   ', y: ' + mousePosition.last.y + ' } >>> { x: ' + mousePosition.x +
    //   ', y: ' + mousePosition.y + ' }'
    // );

    if (el) {
      elPosition.last.x = elPosition.x;
      elPosition.last.y = elPosition.y;
      elPosition.x = elPosition.x + (mousePosition.x - mousePosition.last.x);
      elPosition.y = elPosition.y + (mousePosition.y - mousePosition.last.y);

      el.offset({ 
        left: elPosition.x,
        top: elPosition.y 
      });

      // console.log(
      //   'the element coordinates moved from { x: ' + mousePosition.last.x +
      //   ', y: ' + mousePosition.last.y + 
      //   ' } >>> { x: ' + mousePosition.x +
      //   ', y: ' + mousePosition.y + ' }'
      // );
    }
  });

  $('.nodes').on('mousedown', function (event) {
    event.stopPropagation();
    el = $(this);
    var position = el.offset();

    elPosition.x = position.left;
    elPosition.y = position.top;

    console.log('data-x == '+ el.data("x") + 
      ' && data-y == ' + el.data("y")
    );

    console.log('data-x > 0 >> ' + ( el.data("x") > 0 ));
    console.log('data-y > 0 >> ' + ( el.data("y") > 0 ));
    console.log('data-x >> ', el.data("x"));
    console.log('data-y >> ', el.data("y"));

  });

  $('.nodes').on('mouseup', function (event) {
    event.stopPropagation();

    elPosition = {
      x: -1,
      y: -1,
      last: {
        x: -1,
        y: -1
      }
    };

    el = null;
  });

  $('#add-node').on('click', function () {
    console.log('click works');
    $('#create-node').toggle();
  });

});
