
/** Dynamic Tabs */
var tabID = 7;

$(document).ready(function () {
  $('#btn-add-tab').click(function () {
    tabID++;
    $('#myTab').append($('<a class="nav-item nav-link" href="#tab' + tabID + '" role="tab" data-toggle="tab"><span class="tab-txt this-new-tab">Step title</span><i title="Edit title" class="action fas fa-pen edit"></i> <i title="Remove" class="action fas fa-times close"></i></a>'));
    $('#myTabContent').append($('<div class="tab-pane fade mt-2" role="tabpanel" aria-labelledby="group-dropdown2-tab" aria-expanded="false" id="tab' + tabID + '"><div class="gridster custom-style m-h-0px"> <ul></ul></div><div class="add-card-gridster addNewBox"><img src="assets/images/add-widget.svg"><h6>Add New Card</h6></div></div>'));
    var LastFirst = $('#myTab a:last-child');
    LastFirst.tab('show');

    var totalWidth = 0;
    $('.dynamic-tabs a').each(function () {
      totalWidth += $(this).outerWidth(true);
    });

    if (totalWidth > ($('.dynamic-tabs-container').width())) {
      $('.scroller-right').fadeIn();
      $('.scroller-left').fadeOut();

      $('.list').animate({ left: "+=" + widthOfHidden() + "px" }, 'slow', function () {
        $('.scroller-left').fadeIn('slow');
        $('.scroller-right').fadeOut('slow');
      });
      //alert("width more");
    }
    else {
      //alert("width less"+"======" + totalWidth +"========="+ $('.dynamic-tabs-container').width());
      $('.scroller-right').fadeOut();
      $('.scroller-left').fadeOut();
    }

    reAdjust();

    $(".edit").click(editHandler);
    reAdjust();

    $('#manageSingleTabObject').modal({
      backdrop: 'static',
      keyboard: false
    });
  });

  $('#saveTabChanges').click(function () {
    $(".this-new-tab").text($("#TabNameInput").val());
    $(".this-new-tab").removeClass("this-new-tab");
  });

  $('#myTab').on('click', '.close', function () {
    var tabID = $(this).parents('a').attr('href');
    $(this).parents('a').remove();
    $(tabID).remove();



    $('.list').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow', function () {


      var totalWidth = 0;
      $('.dynamic-tabs a').each(function () {
        totalWidth += $(this).outerWidth(true);
      });


      if (totalWidth > ($('.dynamic-tabs-container').width())) {
        $('.scroller-right').fadeIn();
        $('.scroller-left').fadeOut();
        //alert("width more");
      }
      else {
        //alert("width less"+"======" + totalWidth +"========="+ $('.dynamic-tabs-container').width());
        $('.scroller-right').fadeOut();
        $('.scroller-left').fadeOut();
      }

    });

    //display first tab
    var tabFirst = $('#myTab a:first-child');
    tabFirst.tab('show');
    reAdjust();

  });

  var list = document.getElementById("myTab");
});

var editHandler = function () {
  var t = $(this);
  $('.tab-txt').removeAttr("contenteditable");

  $(this).parent('a').children('.tab-txt').attr("contenteditable", "true").focus();
  $(this).parent('a').children('.tab-txt').attr("contenteditable", "true").focusout(function () {
    reAdjust();
    $(this).removeAttr("contenteditable").off("focusout");
    t.css("visibility", "visible");
  });
};
$(".edit").click(editHandler);


/** Dynamic Tabs */
var hidWidth;
var scrollBarWidths = 40;

var widthOfList = function () {
  var itemsWidth = 0;
  $('.list a').each(function () {
    var itemWidth = $(this).outerWidth();
    itemsWidth += itemWidth;
  });
  return itemsWidth;
};

var widthOfHidden = function () {
  return (($('.wrapper').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
};

var getLeftPosi = function () {
  return $('.list').position()?.left;
};

var reAdjust = function () {
  if (($('.wrapper').outerWidth()) < widthOfList()) {
    $('.scroller-right').show().css('display', 'flex');
  }
  else {
    $('.scroller-right').hide();
  }

  if (getLeftPosi() < 0) {
    $('.scroller-left').show().css('display', 'flex');
  }
  else {
    $('.item').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow');
    $('.scroller-left').hide();
  }
}

reAdjust();

$(window).on('resize', function (e) {
  reAdjust();
});

$('.scroller-right').click(function () {

  $('.scroller-left').fadeIn('slow');
  $('.scroller-right').fadeOut('slow');

  $('.list').animate({ left: "+=" + widthOfHidden() + "px" }, 'slow', function () {

  });
});

$('.scroller-left').click(function () {

  $('.scroller-right').fadeIn('slow');
  $('.scroller-left').fadeOut('slow');

  $('.list').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow', function () {

  });
});
