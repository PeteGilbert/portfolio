$(".showForm").click(function (e) {
    e.preventDefault
    $("form").removeClass("hidden")
})

$('body').on('touchmove', function (e) {
    if (!$('.scroll').has($(e.target)).length) e.preventDefault();
});

console.log('Hi there!👋 Thought you might come looking here! I am currently available for work. Feel free to email me at pete.gilbert16@gmail.com!')