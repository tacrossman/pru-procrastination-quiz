$(function() {

	$('#compute-score').on('click', function() {
		computeForm(this.form);
	});

	$('#home').on('click', function(e){
		e.preventDefault();
		$('#score').html('');
		$('form')[0].reset();
	});

	$('#answer-a2').change (function(){
		$('#question-a-2').slideToggle(200);
		$('#answer-a2').attr('disabled', true);
		$('#answer-a1').attr('disabled', true);		
	});

	function test_it(entry) {
		var form = $('form');

		if (entry.value!=null && entry.value.length!=0) {
		entry.value=""+ eval(entry.value);
		}
		computeForm(entry.form);
		}

		function computeForm(form) {

		var total=0
		var numbers = [0,0,0,0,0,0]

		//question one
		for (var count=0; count<2; count++)
			{
				if (form.a[count].checked){
					var typeSelect = $(form.a[count]).data('answer');
					numbers[typeSelect] += 1;
				}
			}

		//question one-2
		for (var count=0; count<2; count++)
			{
				if (form.x[count].checked){
					var typeSelect = $(form.x[count]).data('answer');
					numbers[typeSelect] += 2;
				}
			}

		//question two
		for (var count=0; count<4; count++)
			{
				if (form.b[count].checked){
					var typeSelect = $(form.b[count]).data('answer');
					numbers[typeSelect] += 1;
				}
			}
		

		//question three
		for (var count=0; count<2; count++)
			{
				if (form.c[count].checked){
					var typeSelect = $(form.c[count]).data('answer');
					numbers[typeSelect] += 1;
			}
		}

		//question four
		for (var count=0; count<3; count++)
			{
				if (form.d[count].checked){
					var typeSelect = $(form.d[count]).data('answer');
					numbers[typeSelect] += 1;
			}
		}	

		//question five
		for (var count=0; count<2; count++)
			{
				if (form.e[count].checked){
					var typeSelect = $(form.e[count]).data('answer');
					numbers[typeSelect] += 1;
			}
		}	

		//question six
		for (var count=0; count<3; count++)
			{
				if (form.f[count].checked){
					var typeSelect = $(form.f[count]).data('answer');
					numbers[typeSelect] += 2;
			}
		}	

		//question seven
		for (var count=0; count<2; count++)
			{
				if (form.g[count].checked){
					var typeSelect = $(form.g[count]).data('answer');
					numbers[typeSelect] += 1;
			}
		}	

		//question eight
		for (var count=0; count<2; count++)
			{
				if (form.h[count].checked){
					var typeSelect = $(form.h[count]).data('answer');
					numbers[typeSelect] += 2;
			}
		}	

		//question nine
		for (var count=0; count<3; count++)
			{
				if (form.i[count].checked){
					var typeSelect = $(form.i[count]).data('answer');
					numbers[typeSelect] += 1;
			}
		}	

		//question ten
		for (var count=0; count<4; count++)
			{
				if (form.j[count].checked){
					var typeSelect = $(form.j[count]).data('answer');
					numbers[typeSelect] += 2;
			}
		}	

		//question eleven
		for (var count=0; count<2; count++)
			{
				if (form.k[count].checked){
					var typeSelect = $(form.k[count]).data('answer');
					numbers[typeSelect] += 1;
			}
		}	

		//question twelve
		for (var count=0; count<4; count++)
			{
				if (form.l[count].checked){
					var typeSelect = $(form.l[count]).data('answer');
					numbers[typeSelect] += 1;
			}
		}																				

		var largest = numbers.indexOf(Math.max.apply(Math, numbers));
		var item = numbers[Math.floor(Math.random()*numbers.length)];
		console.log(item);


		switch (largest)
			{
			case 0:
			$('#score').html('<h2 class="alert alert-info" disabled="disabled">You are a People Pleaser<h2><h6>People Pleaser: ' +numbers+'</h6>');
			  break;
			case 1:
			$('#score').html('<h2 class="alert alert-info" disabled="disabled">You are a Worrier<h2><h6>Worrier: ' +numbers+'</h6>');
			  break;
			case 2:
			$('#score').html('<h2 class="alert alert-info" disabled="disabled">You are an Unmotivated Tortoise<h2><h6>Unmotivated Tortoise: ' +numbers+'</h6>');
			  break;
			case 3:
			$('#score').html('<h2 class="alert alert-info" disabled="disabled">You are a Big Dreamer<h2><h6>Big Dreamer: ' +numbers+'</h6>');
			  break;
			case 4:
			$('#score').html('<h2 class="alert alert-info" disabled="disabled">You are a Buzzer Beater<h2><h6>Buzzer Beater: ' +numbers+'</h6>');
			  break;
			case 5:
			$('#score').html('<h2 class="alert alert-info" disabled="disabled">You are a Distracted Scatterbrain<h2><h6>Discarded Scatterbrain: ' +numbers+'</h6>');
			  break;
			}
	}
});
