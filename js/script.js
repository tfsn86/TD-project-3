// On page load
$(document).ready(function() {

    // Sets focus on the first the first text field on page load. 
    $('#name').focus();

    //Hides the other job role input field.
    $('#other-title').hide();

    //Shows the other job role text field if "other" is selected in the job role dropdown. 
    $('#title').on('change', function () {
        if( $(this).val() === 'other' ) {
            $('#other-title').show();
        } else {
            $('#other-title').hide();
        }
    });

    // Turns off browser auto-validate. Makes it possible to customize form validation messages.
    $("form").attr("novalidate", "novalidate");

    // -------------------------------------- T-shirt info section --------------------------------------------
    
    $('#color').hide()
    $('#color').prev().text('Color: Please select a T-shirt theme');

    // The event handler controls the t-shirt selection options depending on the selected t-shirt design. 
    $('#design').on('change', function() { 
        if ($(this).val() === 'js puns') {
            $('#color').show();
            $('#color').prev().text('Color:');
            $('#color option[value="cornflowerblue"]').show().attr('selected', '');
            $('#color option[value="darkslategrey"]').show();
            $('#color option[value="gold"]').show();
            $('#color option[value="tomato"]').hide().removeAttr('selected');
            $('#color option[value="steelblue"]').hide();
            $('#color option[value="dimgrey"]').hide();

        } else if ($(this).val() === 'heart js') {
            $('#color').show();
            $('#color').prev().text('Color:');
            $('#color option[value="cornflowerblue"]').hide().removeAttr('selected');
            $('#color option[value="darkslategrey"]').hide();
            $('#color option[value="gold"]').hide();
            $('#color option[value="tomato"]').show().attr('selected', '');
            $('#color option[value="steelblue"]').show();
            $('#color option[value="dimgrey"]').show();

        } else {
            $('#color').hide();
            $('#color').prev().text('Color: Please select a T-shirt theme');
        };
    });



    /* ---------------------------------- ”Register for Activities” section -----------------------------------------
    Events at the same day and time can not be selected/checked at the same time.
    */

    // checkbox input variables
    const $jsFramworksCheckBox = $('input[name="js-frameworks"]');
    const $jsLibrarysCheckBox = $('input[name="js-libs"]');
    const $expressCheckBox = $('input[name="express"]');
    const $nodeCheckBox = $('input[name="node"]');

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

    /* A running total is displayed below the list of checkboxes. If a checkbox is checked the running total is updated.
    When a checkbox is checked, the value of the label text (price) is stored in variables.
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
    /* The credit card option is selected as default payment method. 
    The event handler hides/shows the appropriate payment information. */
    
    $('#payment').val('credit card');
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


    // Form validation
    $('form').submit(function (e){

        isValidName();
        isValidEmail();
        isValidActivities();
        isValidCreditCard();
        isValidZip();
        isValidCVV();

        if (
            isValidName() === false ||
            isValidEmail() === false ||
            isValidActivities() === false ||
            isValidCreditCard() === false ||
            isValidZip() === false ||
            isValidCVV() === false) {
                event.preventDefault();
            }
        
    });

    // Name validation.
    function isValidName () {
        let validateName = /[a-z]+/i.test($('#name').val());
        if (validateName === true) {
            $('#name').prev()
            .css("color", "black")
            .text("Name:");
            return true;
        } else {
            $('#name').prev()
            .css("color", "red")
            .text("Name: Please enter your name");
            return false;
        }
    }

    // Email validation.
    function isValidEmail () {
        let validateEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test($('#mail').val());
        if (validateEmail === true) {
            $('#mail').prev()
            .css("color", "black")
            .text("Email:");
            return true;
        } else {
            $('#mail').prev()
            .css("color", "red")
            .text("Email: Please enter valid email");
            return false;
        }
    }

    // Activites validation - at least one activity must be selected.
    function isValidActivities() {
        if ($("form input:checkbox:checked").length > 0) {
            $('.activities legend').css("color", "black");
            $('.activities legend').text("Register for Activities");
            return true;
        } else {
            $('.activities legend').css("color", "red");
            $('.activities legend').text("Register for Activities - Please select at least one activity");
            return false;
        }
    }

    // Credit card validation. - must be between 3-16 digits.
    function isValidCreditCard() {
        if ($('#payment option:selected').val() === "credit card") {
            let validateCreditcard = /^\d{13,16}$/.test($('#cc-num').val());
            if (validateCreditcard === false) {
                $('#cc-num').prev().css("color", "red");
                if ($('#cc-num').val() === "") {
                    $('#cc-num').prev().text("Please enter your credit card number").show();
                } else {
                    $('#cc-num').prev().text("Enter a number between 13-16 digits").show();
                }
                return false;
            } else {
                $('#cc-num').prev().text("Card Number:");
                $('#cc-num').prev().css("color", "black");
                return true;
            }
        }
        
    }

    // Zip validation - must be 5 digits.
    function isValidZip() {
        if ($('#payment option:selected').val() === "credit card") {
            let validate = /^\d{5}$/.test($('#zip').val());
            if (validate === false) {
                $('#zip').prev().css("color", "red");
                $('#zip').prev().text("Zip Code: 5 digits").show();
                return false;
            } else {
                $('#zip').prev().text("Zip Code:");
                $('#zip').prev().css("color", "black");
                return true;
            }
        }
    }

    // CVV validation - must be 3 digits.
    function isValidCVV() {
        if ($('#payment option:selected').val() === "credit card") {
            let validate = /^\d{3}$/.test($('#cvv').val());
            if (validate === false) {
                $('#cvv').prev().css("color", "red");
                $('#cvv').prev().text("CVV: 3 digits").show();
                return false;
            } else {
                $('#cvv').prev().text("CVV:");
                $('#cvv').prev().css("color", "black");
                return true;
            }
        }
    }
});