function toolbar(el) {
            el = typeof el == 'string' ? document.getElementById(el) : el;
            var elTop = el.offsetTop;
            var sTop = 0;
            window.onscroll = function () {
                sTop = document.body.scrollTop || document.documentElement.scrollTop;
                if (sTop > elTop) {
                    el.style.top = "0";
                    el.style.position = "fixed"
                } else {
                    el.style.top = elTop + 'px';
                    el.style.position = "absolute"
                }
            }
        }
    toolbar('nav');