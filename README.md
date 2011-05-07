jquery.autoCheckbox
===================

ARIA-compatible styling for checkboxes and radiobuttons with jQuery

Quickstart
----------

Include the jQuery.autoCheckbox source files in your form and initialize:

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
<script type="text/javascript" src="jquery.autoCheckbox.min.js"></script>
<script type="text/javascript">//<![CDATA[
// kickstart!
jQuery(document).ready(function(){
	jQuery('input[type=checkbox]').autoCheckbox({defaultClass:'checkbox'});
	jQuery('input[type=radio]').autoCheckbox({defaultClass:'radio'});
})
//]]></script>```

Add Styling for the new element classes:

```html
<style type="text/css">
.checkbox,
.radio {
	display:inline-block;
	width:48px;
	height:48px; 
	background-color: #ccc; 
}
.checkbox.checked,
.radio.checked { background-color: #555; }
</style>```

And you're off!

License
-------

jquery.autoCheckbox is licensed under the MIT License. You can read the license [here](http://www.opensource.org/licenses/mit-license.php).