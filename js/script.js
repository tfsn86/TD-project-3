/* Set focus on the first the first text field on page load. 
When the page first loads, the first text field should be in focus by default. */
$('#name').focus();

//Hide the other job role input field
$('#other-title').hide();

//Show the other job role text field if "other" is selected in the dropdown. 
$('#title').on('change', function () {
    if( $(this).val() === 'other' ) {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});



/* -------------------------------------- T-shirt info section. --------------------------------------------
When a t-shirt design is selected it controls the t-shirt color options. */

$('#design').on('change', function() { 
    if ($(this).val() === 'js puns') {
        $('#colors-js-puns').show();
        $('#color option[value="cornflowerblue"]').show().attr('selected', '');
        $('#color option[value="darkslategrey"]').show();
        $('#color option[value="gold"]').show();
        $('#color option[value="tomato"]').hide().removeAttr('selected');
        $('#color option[value="steelblue"]').hide();
        $('#color option[value="dimgrey"]').hide();

    } else if ($(this).val() === 'heart js') {
        $('#colors-js-puns').show();
        $('#color option[value="cornflowerblue"]').hide().removeAttr('selected');
        $('#color option[value="darkslategrey"]').hide();
        $('#color option[value="gold"]').hide();
        $('#color option[value="tomato"]').show().attr('selected', '');
        $('#color option[value="steelblue"]').show();
        $('#color option[value="dimgrey"]').show();

    } else {
        $('#color').children().show();
    };
});



/* ---------------------------------- ”Register for Activities” section -----------------------------------------
Events at the same day and time should not be able to be checked at the same time.
When the user checks activities information with the total costs should display beneath the checkboxes.
 */

$('.activities').on('change', function (){
    
});