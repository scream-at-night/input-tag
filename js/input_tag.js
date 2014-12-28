$.fn.extend({inputtag: function(){

	var self = this;
	var input_text = self.children('.input-text');

	self.click(function(){
		input_text.focus();
	});

	input_text.focus(function(){
		self.addClass('focus');
	}).blur(function(){
		self.removeClass('focus');
	});

	input_text.keydown(function(e){

		if(e.keyCode == 13){//enter key: to finish a tag
			var tag = $('<div class="tag">').text( $(this).val() );
			var tag_types = ['primary', 'success', 'info', 'warning'];
			var tag_type_index = Math.floor( Math.random()*(tag_types.length-1) );
			var tag_type = tag_types[tag_type_index];
			tag.addClass('tag-'+tag_type);
			$(this).before(tag);
			$(this).val('');
		}

		if(e.keyCode == 8){//delete key: to remove a tag
			if($(this).val().length == 0){
				$(this).siblings('.tag').last().remove();
			}
		}

	});

	//fit width of the input field
	input_text.keyup(function(){
		var width_helper = $('.width-helper');
		width_helper.text( $(this).val() );
		$(this).width( width_helper.width()+40 );
	});
}});