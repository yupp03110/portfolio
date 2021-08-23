/*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();



    /*=================================================
  画面読み込み時と画面幅変更時のイベント
  ===================================================*/
  $(window).on('load resize', function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();
  });



    // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function() {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });


  /*=================================================
    Accessの背景画像を表示
    ===================================================*/
    // 画面下から#contactまでの距離を取得
    // let works_position = $('#works').offset().top - $(window).height();
    let about_position = $('#about').offset().top - $(window).height();
    

    // #accessが表示された場合
    if(scroll > about_position){
      // #contactが表示されるまでの間は、背景画像をfadeInで表示する
      if(scroll < works_position){
        $('.bg').fadeIn(500);
      // } else {
      //   $('.bg').fadeOut(500);
      }
    // #accessが表示される前の場合
    } else {
      // 背景画像を表示しない
      $('.bg').fadeOut(500);
    }

     
  

  // /*=================================================
  // スムーススクロール
  // ===================================================*/
  // // ページ内リンクのイベント
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 100;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }



  $(function(){

    $("#hamburger").click(function(){
      $(this).toggleClass("open");
      $(".gnav").fadeToggle();
    });

    $('.gnav a').on('click', function() {
      $('.gnav').fadeOut();
      $('#hamburger').removeClass('open');
    });

    });

    $(document).on('ready', function() {
      $(".full-screen").slick({
        centerMode: true,
        centerPadding: '5%',
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
      });
    });