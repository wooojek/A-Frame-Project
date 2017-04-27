let bufor = '';
let bufor2 = '';

AFRAME.registerComponent('handle-events', {
    init: function() {
        const el = this.el;
        let buforElement = '';
        let buforMixin = '';

        el.addEventListener('click', function () {
            if(buforElement === '') {
                console.log('entered ', buforElement, buforMixin);                
                buforElement = el;
                buforMixin = el.getAttribute('mixin');
                bufor2 = bufor;
                bufor = el;
            } else {

            }

            console.log(bufor, bufor2);
        });

        buforElement = '';
    }
});

function screamToMe(element) {
    console.log(element);
}