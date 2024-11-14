$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed')

})
$("ul").on("click", 'span', function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    })
    event.stopPropagation()

})
//  Take value from the input and display: 
$("input[type='text']").keypress(function (event) {
    let newlist = $(this).val()
    if (event.which === 13 & newlist !== '') {
        $(this).val('');
        let addlists = $("<li> <span> <i class='fa-solid fa-trash'></i> </span>" + newlist + '</li>').hide()
        $('ul').append(addlists)
        addlists.fadeIn(900)
        $("input[type='text']").addClass('hidden_input')
    }
})
// add button toggle 
$('.fa-plus').on('click', function () {

    $("input[type='text']").removeClass('hidden_input')
    $("input[type='text']").fadeToggle()

})