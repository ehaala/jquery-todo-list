var input;
var add;

$('#submit').on('click', function() {
	input = $("#task").val();
	add = $('<li>');
	add.append(input);
	add.append('<img src="img/bullet-point-02.png"/>');
	$('#list').append(add);
	clear();
	$('#task').focus();
});

//adds click event to 'add' button by pressing enter
//so user doesn't have to click button with mouse
$('#task').keypress(function(event){
	if(event.keyCode === 13){
		$('#submit').click();
		event.preventDefault();
	}
})

//clears text field
function clear() {
	$('#task').val("");
};

//double click function to remove items from list
$('ul').on('dblclick','img',function(e){
	$(e.target).parent().fadeOut();
})