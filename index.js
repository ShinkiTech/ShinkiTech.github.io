$(document).ready(function(){
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
    })
});
