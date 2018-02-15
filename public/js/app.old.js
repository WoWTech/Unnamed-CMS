$(document).ready(function(){
    $('a.method-link').click(function(event){
        event.preventDefault();

        let method = $(this).data('method') ? $(this).data('method') : 'GET';
        let token = $('meta[name="_token"]').attr('content');

        $form = $("<form method='POST'></form>");
        $form.attr('action', `${$(this).attr('href')}`);
        $form.append(`<input type='hidden' name='_method' value='${method}'>`);
        $form.append(`<input type='hidden' name='_token' value='${token}'>`);

        $(document.body).append($form);
        $form.submit();

    });

    $('.slider-dot').click(function() {
        let val = $(this).index() * 100;

        $('.slider-images')[0].style.transform = `translateX(-${val}%)`;
    });

    function validateImage(input) {
      let _URL = window.URL || window.webkitURL;
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        let img = new Image();
        let size = input.files[0].size;
        img.onload = function () {
          if ((this.width / this.height) != 1)
              return alert('Height and width must be equal (75x75, 100x100, 500x500 etc.)');

          if (Math.round(size / 1024) > 2048)
              return alert('Image size must be under 2MB');

          reader.readAsDataURL(input.files[0]);
        }
        reader.onload = function(e) {
          $('#avatar').attr('src', e.target.result);
        }

        img.src = _URL.createObjectURL(input.files[0]);
      }
    }

    $("#avatar-uploader").change(function() {
      validateImage(this);
    });
});
