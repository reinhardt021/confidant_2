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
  var nodes = $('.nodes');
  var ajaxNodes = [];

  for (var i = 0; i < nodes.length; i++) {
    var position_x = nodes[i].dataset.x;
    var position_y = nodes[i].dataset.y;
    ajaxNodes.push({
      id: nodes[i].dataset.id,
      title: nodes[i].dataset.title,
      content: nodes[i].dataset.content,
      type: nodes[i].dataset.type,
      x: nodes[i].dataset.x,
      y: nodes[i].dataset.y
    });

    if (position_x > 0 && position_y > 0) {
      $(nodes[i]).offset({ 
        left: position_x,
        top:  position_y
      });  
    }
  }

  // console.log(ajaxNodes); 
    // good that items are being stored here now
    // can then update each one as you go and then send update as a json 
    // one massive save

  // find a way to resize the div in order to change the size of the text inside of it

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

    // [_] update the ajaxNodes list as well
      // that way can just save and send in a JSON

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

  $('#save-nodes').on('click', function () {
    console.log('saving...not really yet lol');
    // need to run AJAX call to update the position of the node in the database
    // [_] create a save button to take care of this
    // $.ajax({
    //   url: '/nodes/' + el.data("id"),
    //   method: 'PUT',
    //   datatype: 'json',
    //   data: {
    //     position_x: elPosition.x,
    //     position_y: elPosition.y
    //   }
    // });
  });

});
