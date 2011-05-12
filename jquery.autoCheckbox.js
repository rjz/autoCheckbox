/**
 *	Generates a styleable link to replace each form element in the matched set. 
 *
 *	@author   RJ Zaworski <rj.zaworski@gmail.com>
 *	@link     https://github.com/rjz/autoCheckbox
 */
;(function($){
$.fn.autoCheckbox = function(settings){

	// set up default settings
	settings = settings || {};

	var o = $.extend({
			defaultClass: 'autocheckbox'
		}, settings);

	/**
	 *	Update the mask/input pair to reflect the current state
	 */
	var update = function(name) {

		$( '.' + name + '-mask' ).each(function(){
			if( $(this).prev().is(':checked') ) {
				$(this).addClass('checked')
					.attr('aria-checked','aria-checked')
					.prev().attr('checked','checked');
			}
			else {
				$(this).removeClass('checked')
					.removeAttr('aria-checked')
					.prev().removeAttr('checked');
			}
		});
	}

	/**
	 *	Create a mask for each input and set it up
	 */
	$(this).each(function(){

		var $input = $(this);

		var name = $input.attr('name'),
			mask = $('<a href="#"></a>'), // use focusable element
			attributes = {
				'role': $input.attr('type'),
				'aria-labelledby': $('label[for='+$input.attr('id')+']').id,
				'aria-checked': "false"
			};
		
		var onClick = function() {
			$input.click();
			update(name);
			return false;			
		}

		for(keys in attributes) mask.attr(keys, attributes[keys]);
	
		mask.addClass(name + '-mask ' + o.defaultClass)
			.click(onClick)
			.insertAfter($input.hide());

		$('label[for=' + $input.attr('id') + ']').click(onClick);

		// update with the current state of the state
		update(name);
	});
	
	return this;
}; // jquery.autoCheckbox

})(jQuery);
/* fini */