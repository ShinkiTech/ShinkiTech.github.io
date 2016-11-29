$(document).ready(function(){
  if($(window).width() < 1300){
    $('header section[id="nav_links_expanded"]').attr('hidden', 'hidden');
    $('header section[id="nav_links_shrink"]').removeAttr('hidden', 'hidden');

  }
  else {
    $('header section[id="nav_links_expanded"]').removeAttr('hidden');
    $('header section[id="nav_links_shrink"]').attr('hidden', 'hidden');

  }

  $('a h5[class="nav-links"]').click(function() {
      link = this.parentElement.getAttribute('id');
      if (link == '#section-1') {
        $('html,body').animate({
            scrollTop: 0}, 'slow');
      }
      else {
        $('html,body').animate({
            scrollTop: $(link).offset().top}, 'slow');
      }
  });

  $('a i').click(function() {
    link = this.parentElement.getAttribute('id');
    $('html,body').animate({
        scrollTop: $(link).offset().top}, 'slow');
  });

  $(window).on('resize', function(){
    if($(window).width() < 1300){
      $('header section[id="nav_links_expanded"]').attr('hidden', 'hidden');
      $('header section[id="nav_links_shrink"]').removeAttr('hidden', 'hidden');

    }
    else {
      $('header section[id="nav_links_expanded"]').removeAttr('hidden');
      $('header section[id="nav_links_shrink"]').attr('hidden', 'hidden');

    }
  });

  $('button[type="button"] ').click(function(e){
    e.preventDefault(); // prevent the default action
    e.stopPropagation(); // stop the click from bubbling
    $('button[type="button"] ').toggleClass('is-active')
  });

});
