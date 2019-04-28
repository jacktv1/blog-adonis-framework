/* Add here all your JS customizations */

$(document).ready(function () {

    // init text editor
    $('.summernote').summernote({
        placeholder: 'Content must less than 2000 character',
        tabsize: 2,
        height: 500
    });

    // init date picker
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        zIndexOffset: 500
    });
})
