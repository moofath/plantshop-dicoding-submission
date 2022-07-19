$(document).ready(function(){
    $('#menu').click(function(){ //id menu saat di klik / tekan
        $(this).toggleClass('fa-times'); // merubah ikon menubar menjadi tanda silang saat id menu di tekan
        $('.navbar').toggleClass('nav-toggle'); //menampilkan isi navbar saat diklik id menu pada saat mode responsive
    });

    // fungsi saat melakukan scroll halaman
    $(window).on('load scroll',function(){ 
        if($(window).scrollTop() > 0){ //kondisi jika halaman melakukan scroll  dengan nilai lebih dari 0 (top)/ kebawah
            $('header').addClass('sticky'); //jika terpenuhi maka header akan di kasih kelas sticky
        } else {
            $('header').removeClass('sticky'); //jika tidak terpenuhi maka hapus kelas sticky dari header
        }
    });

    //fungsi dibawah untuk menampilkan carousel
    $(".carousel").owlCarousel({
        margin: 500,
        loop: true, //perulangan bernilai true (melakuakan perulangan dari awal card sampai akhir card dan kembali lagi ke awal card )
        autoplay: true, //slider akan berjalan sendirinya atau autoplay tanpa harus di geser
        autoplayTimeout: 2000, //waktu slider berjalan selama 2 detik
        autoplayHoverpause: true,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:1,
                nav: false
            },
            768:{
                items:1,
                nav: false
            },
            1000:{
                margin:10,
                items:2,
                nav: false
            }
        }
    });
});


function btnDropdown(){
    document.getElementById("dropdown").classList.toggle("show"); //menampilkan content dropdown ketika button di klik
}
