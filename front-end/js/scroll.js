var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({// the scene should last for a scroll distance of 100px
    offset: 50
})
.setClassToggle("#change", "navbar-change")
// .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
.addTo(controller);
