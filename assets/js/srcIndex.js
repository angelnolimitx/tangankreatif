$(document).ready(function () {
    $("#src_filter").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $(".menu-list-img").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
