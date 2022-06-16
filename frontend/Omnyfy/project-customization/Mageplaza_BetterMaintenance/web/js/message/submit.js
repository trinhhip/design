define(
    [
        'jquery'
    ], function ($) {
        "use strict";

        var form = $('.form.subscribe');

        form.submit(function (e) {
            var url = form.attr('action'),
                email = $("#newsletter").val();

            if (form.validation('isValid')) {
                e.preventDefault();
                $.ajax({
                    url: url,
                    dataType: 'json',
                    type: 'POST',
                    showLoader: true,
                    data: {email: email},
                    success:function(res){
                        if(res.msg != undefined) {
                            //alert(res.msg);
                            $('#mpbm-notice-msg_in').html('<p>' + res.msg + '</p>');
                            $('#mpbm-notice-msg_in').addClass('success-msg')
                        }
                    },
                    error: function (res) {
                        $('#mpbm-notice-msg_in').html('<p>'+ res.msg + '</p>');
                    }
                });
            } else {
                $('#mpbm-notice-msg_in').html('<p></p>');
            }
        });
    }
);
