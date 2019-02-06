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
        $('#color option[value="cornflowerblue"]').show().attr('selected', '');
        $('#color option[value="darkslategrey"]').show();
        $('#color option[value="gold"]').show();
        $('#color option[value="tomato"]').hide().removeAttr('selected');
        $('#color option[value="steelblue"]').hide();
        $('#color option[value="dimgrey"]').hide();

    } else if ($(this).val() === 'heart js') {
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



// checkbox input variables
const $mainConfCheckBox = $('input[name="all"]');
const $jsFramworksCheckBox = $('input[name="js-frameworks"]');
const $jsLibrarysCheckBox = $('input[name="js-libs"]');
const $expressCheckBox = $('input[name="express"]');
const $nodeCheckBox = $('input[name="node"]');
const $buildToolsCheckBox = $('input[name="build-tools"]');
const $npmCheckBox = $('input[name="npm"]');

$jsFramworksCheckBox.on('change', function () {
    if ($(this).prop('checked')) {
        $expressCheckBox.prop('disabled', true);
        $expressCheckBox.parent().css('color', 'grey');
    }   else if ($(this).prop('checked', false)) {
        $expressCheckBox.prop('disabled', false);
        $expressCheckBox.parent().css('color', '#000');
    }
});

$jsLibrarysCheckBox.on('change', function () {
    if ($(this).prop('checked')) {
        $nodeCheckBox.prop('disabled', true);
        $nodeCheckBox.parent().css('color', 'grey');
    }   else if ($(this).prop('checked', false)) {
        $nodeCheckBox.prop('disabled', false);
        $nodeCheckBox.parent().css('color', '#000');
    }
});

$expressCheckBox.on('change', function () {
    if ($(this).prop('checked')) {
        $jsFramworksCheckBox.prop('disabled', true);
        $jsFramworksCheckBox.parent().css('color', 'grey');
    }   else if ($(this).prop('checked', false)) {
        $jsFramworksCheckBox.prop('disabled', false);
        $jsFramworksCheckBox.parent().css('color', '#000');
    }
});

$nodeCheckBox.on('change', function () {
    if ($(this).prop('checked')) {
        $jsLibrarysCheckBox.prop('disabled', true);
        $jsLibrarysCheckBox.parent().css('color', 'grey');
    }   else if ($(this).prop('checked', false)) {
        $jsLibrarysCheckBox.prop('disabled', false);
        $jsLibrarysCheckBox.parent().css('color', '#000');
    }
});


/* A running total should display below the list of checkboxes. 
A div for the total costs are created and appended to the register for activities section.
When a checkbox is checked, the value of the label text (price) is stored in variables.
If a checkbox is checked the running total is updated. 
*/

let $runningTotal = 0;
let $costDiv = $('<div><span>Total Cost: $'+ $runningTotal + '</span></div>');
$('.activities').append($costDiv);
 
$('.activities').on('change', function(){
    const $activityString = $(event.target).parent().text(); 
    const $activityPrice = parseInt($activityString.substring($activityString.length-3));
    if ($(event.target).is(':checked')) {
        $runningTotal += $activityPrice;
    } else { 
        $runningTotal -= $activityPrice;
    }
    $costDiv.html('<div><span>Total Cost: $'+ $runningTotal + '</span></div>');
});

// ------------------------- "Payment Info" section ---------------------------------------

// Add functionality that display the correct payments information. The default payment method is set to credit card.
// The event handler hides/shows the appropriate payment information. 
$('#credit-card').next().addClass('paypal');
$('.paypal').hide();

$('#credit-card').next().next().addClass('bitcoin');
$('.bitcoin').hide();

$('#payment').on('change', function() { 
        if ($(this).val() === 'credit card') {
        $('#credit-card').show();
        $('.paypal').hide();
        $('.bitcoin').hide();
        $('#payment option[value="select_method"]').hide();

    }   else if ($(this).val() === 'paypal') {
        $('#credit-card').hide();
        $('.paypal').show();
        $('.bitcoin').hide();
        $('#payment option[value="select_method"]').hide();

    }   else if ($(this).val() === 'bitcoin') {
        $('#credit-card').hide();
        $('.paypal').hide();
        $('.bitcoin').show();
        $('#payment option[value="select_method"]').hide();
    }   
});
