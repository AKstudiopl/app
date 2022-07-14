const btnCrosshairCopy = document.querySelector('.crosshair-copy');
const btnViewmodelCopy = document.querySelector('.viewmodel-copy');
const btnBobCopy = document.querySelector('.bob-copy');
const btnLaunchOptionsCopy = document.querySelector('.launch_options-copy');
const cfgCrosshair = document.querySelector('.cfg-copy-clipboard .cfg-crosshair');
const cfgViewmodel = document.querySelector('.cfg-copy-clipboard .cfg-viewmodel');
const cfgBob = document.querySelector('.cfg-copy-clipboard .cfg-bob');
const cfgLaunchOptions = document.querySelector('.cfg-copy-clipboard .cfg-launch_options');

btnCrosshairCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(cfgCrosshair.textContent)
})
btnViewmodelCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(cfgViewmodel.textContent)
})
btnBobCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(cfgBob.textContent)
})
btnLaunchOptionsCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(cfgLaunchOptions.textContent)
})

$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		if (windscroll >= 100) {
			$('.player-info').each(function(i) {
        // The number at the end of the next line is how pany pixels you from the top you want it to activate.
				if ($(this).position().top <= windscroll - -100) {
					$('.navbar-horizontal li a.active').removeClass('active');
					$('.navbar-horizontal li a').eq(i).addClass('active');
				}
			});

		} else {

			$('nav li.active').removeClass('active');
			$('nav li:first').addClass('active');
		}

		}).scroll();
