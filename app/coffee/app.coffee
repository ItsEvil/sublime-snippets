# Инициатор, запускает все модули

app =
	init: ->
		# Инициализация модулей
		do Ajax.init
		# do Modal.init
		# do ImageZoom.init
		# do ImageGallery.init
		# do PhoneMask.init
		# do Validation.init
		# do SenderForm.init
		# do Timer.init
		# do ScrollToAnchor.init
		# do Accordeon.init
		# do Parallax.init
		# do Slider.init

window.onload = ->
	do app.init
