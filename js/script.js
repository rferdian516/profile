$('.page-scroll').on('click',function(e){
  var tujuan = $(this).attr('href');
  //
  // var elemen = $(tujuan);
  //
  if(this.tujuan !== ''){
    e.preventDefault();
    const hash = this.tujuan;
  }
  $('html,body').animate({
    scrollTop:$(tujuan).offset().top
  },1000);
});
