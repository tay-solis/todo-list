

$('ul').on('click','li', function(){
  $(this).toggleClass("completed");
});

$('ul').on('click', 'span', function(event){
  let clickedList = $(this).parent();
  clickedList.fadeOut(400, function(){
    $('<li class="completed">' + clickedList.text() + '</li>' ).appendTo("#archive");
  });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
  if(event.which === 13){
      let newToDo = $(this).val();
      $(this).val('');
      $('#current').append('<li><span class="archive"><i class="fas fa-minus"></i></span>' + newToDo + '</li>');
  }
});

$('.fa-bookmark').on("click", function(){
  $('#archive').fadeToggle({'display': 'block'});
});
