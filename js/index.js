function toggle(bnum) {
    var x=0;

    if (bnum == 1) {
        x=1;
        var blur = document.getElementById('blur');
        blur.classList.toggle('active'); 
        var popup = document.getElementById('popup');
        popup.classList.toggle('active');
    }

    if (bnum == 3) {
        x=3;
        var blur = document.getElementById('blur');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popupregis');
        popupregis.classList.toggle('active');
    }

    if (bnum == 4) {
        x=4;
        var blur = document.getElementById('blur');
        blur.classList.toggle('active'); 
        var popupinfo = document.getElementById('popupinfo');
        popupinfo.classList.toggle('active');
    }

      if (bnum == 5) {
        x=5;
        var blur = document.getElementById('blur');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popupforgot');
        popupregis.classList.toggle('active');
    }

    if (bnum == 6) {
        x=6;
        var blur = document.getElementById('popupfaq');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popupinfo');
        popupregis.classList.remove('active');
    }

    if (bnum == 7) {
        x=7;
        var popupregis = document.getElementById('popupregis');
        popupregis.classList.toggle('active');
        var popup = document.getElementById('popup');
        popup.classList.remove('active');
  }

      if (bnum == 8) {
        x=8;
        var popupregis = document.getElementById('popupforgot');
        popupregis.classList.toggle('active');
        var popup = document.getElementById('popup');
        popup.classList.remove('active');
  }

      if (bnum == 9) {
        x=9;
        var blur = document.getElementById('popupcom');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popupinfo');
        popupregis.classList.remove('active');
    }

    if (bnum == 10) {
        x=10;
        var blur = document.getElementById('popupdescri');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popup');
        popupregis.classList.remove('active');
    }

        if (bnum == 11) {
        x=10;
        var blur = document.getElementById('popupdescri2');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popup');
        popupregis.classList.remove('active');
    }

        if (bnum == 12) {
        x=10;
        var blur = document.getElementById('popupdescri3');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popup');
        popupregis.classList.remove('active');
    }

        if (bnum == 13) {
        x=10;
        var blur = document.getElementById('popupregis');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popupdescri');
        popupregis.classList.remove('active');
        var popupregis = document.getElementById('popupdescri2');
        popupregis.classList.remove('active');
        var popupregis = document.getElementById('popupdescri3');
        popupregis.classList.remove('active');
        var popupregis = document.getElementById('popupdescri4');
        popupregis.classList.remove('active');
        var popupregis = document.getElementById('popupdescri5');
        popupregis.classList.remove('active');
        var popupregis = document.getElementById('popupdescri6');
        popupregis.classList.remove('active');
    }

        if (bnum == 14) {
        x=14;
        var blur = document.getElementById('popup');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popupcom');
        popupregis.classList.remove('active');
    }
    
        if (bnum == 15) {
        x=10;
        var blur = document.getElementById('popupdescri4');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popup');
        popupregis.classList.remove('active');
    }

        if (bnum == 16) {
        x=16;
        var blur = document.getElementById('popupdescri5');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popup');
        popupregis.classList.remove('active');
    }

        if (bnum == 17) {
        x=17;
        var blur = document.getElementById('popupdescri6');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popup');
        popupregis.classList.remove('active');
    }

        if (bnum == 18) {
        x=17;
        var blur = document.getElementById('popupdescri7');
        blur.classList.toggle('active');
        var popupregis = document.getElementById('popup');
        popupregis.classList.remove('active');
    }
}

function puggle() {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  e.target.className = "active";
}