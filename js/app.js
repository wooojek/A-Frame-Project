let bufor = null;
let bufor2 = '';

AFRAME.registerComponent('handle-events', {
    init: function() {
        let el = this.el;


        el.addEventListener('click', function () {
                let buforMixin = '';
                buforMixin = el.getAttribute('mixin');
                bufor2 = bufor;
                bufor = el;
                console.log(buforMixin, bufor2 ? bufor2.getAttribute('mixin'): null);
                el.setAttribute('mixin', bufor2 ? bufor2.getAttribute('mixin'): buforMixin);
        });
    }
});
