$(function(){
    //********Inside App.js*********
	loadInstructions();    
    console.log('Inside App.js');
    $('.ryu').on('mouseenter', function(){
    	$('.ryu-still').hide();
    	$('.ryu-ready').show();
    }).on('mouseleave',function(){
    	$('.ryu-ready').hide();
    	$('.ryu-still').show();
    }).on('mousedown',function(){
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	showHadouken();
    	playHadouken();
    }).on('mouseup',function(){
		$('.ryu-ready').show();
    	$('.ryu-throwing').hide();
    });

    $(document).on('keydown',function(event){
    	if(event.which == 88){
    		$('.ryu-still').hide();
    		$('.ryu-ready').hide();
    		$('.ryu-throwing').hide();
    		$('.ryu-cool').show();    		
    	}
    }).on('keyup',function(){
    	$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
    });

    function showHadouken(){
    	$('.hadouken').finish()
    				  .show()
    				  .animate(
    				  	{'left':'1000px'},600,function(){
    				  		$(this).hide();
    				  		$(this).css({'left':'571px'});
    				  	});
    }

    function playHadouken(){
    	$('#hadouken-audio')[0].volume = 0.7;
    	$('#hadouken-audio')[0].load();
    	$('#hadouken-audio')[0].play();
    }

    function loadInstructions(){
    	$('#sf-logo').fadeIn(1000,function(){
    		$(this).fadeOut(1000,function(){
    			$('#brought-by').fadeIn(1000,function(){
    				$(this).fadeOut(1000,function(){
    					$('#jquery-logo').fadeIn(1000,function(){
    						$(this).fadeOut(1000,function(){
    							$('#text').fadeIn(500);
    						})
    					});
    				});
    			});
    		});
    	});
    }
});