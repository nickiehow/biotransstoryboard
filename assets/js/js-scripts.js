// Preloader 
$(window).on('load', function() {
	setTimeout(function() {
	$('body').addClass('loaded');
	}, 200);
});

$(function () {
   /*
    $('.sf-menu a').click(function () {
                    $this = $(this);
                    if ($this.hasClass('to-top')) {
                        $('html,body').animate({ scrollTop: 0 }, 1000);
                    } else {
                        $target = $this.attr('href');
                        if ($target.indexOf('#') == 0) {
                            $('html,body').animate({ scrollTop: $($target).offset().top }, 1000);
                        }
                    }
                })

    */
    // Fullscreen
	function toggleFullScreen() {
		if ((document.fullScreenElement && document.fullScreenElement !== null) ||
			(!document.mozFullScreen && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
			  document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
			  document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
			  document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		  } else {
			if (document.cancelFullScreen) {
			  document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
			  document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
			  document.webkitCancelFullScreen();
			}
		}
	}
	$('.toggle-fullscreen').click(function() {
		toggleFullScreen();
	});
	
	$('.view-actions-record').click(function() {
		$('#view-actions-data').toggle(); 
	});
	$('.open-datetimepicker').click(function(event){
		event.preventDefault();
		alert("test")
		$('#deadline').focus(); 
	});
	$( "#deadline" ).datepicker({ format: "dd/mm/yyyy", startDate: '-0d', changeMonth: true, autoclose: true, allowInputToggle: true });
	$( "#datepicker" ).datepicker({ dateFormat: "yy-mm-dd", minDate: 0 });
	var forbidden="";//['15/06/2018','24/06/2018'];
	$('#meeting_dt').datepicker({
		format: 'dd/mm/yyyy',
		autoclose: true,
		todayHighlight: true,
		startDate: '-0d',
		changeMonth: true,
		beforeShowDay:function(Date){
			var curr_day = Date.getDate();
			var curr_month = Date.getMonth()+1;
			var curr_year = Date.getFullYear();        
			var curr_date=LZ(curr_day)+'/'+LZ(curr_month)+'/'+curr_year;        
 			if (forbidden.indexOf(curr_date)>-1) return false;}
			  //startDate: '-3d'
	});
	/*
	$('#start_time').timepicker({
		//'timeFormat': 'H:i', //
		'timeFormat': 'h:i',
		'minTime': '09:00',
		'maxTime': '17:30',
		'showInputs': false,
		'showDuration': false
	});
	function showHideProjectList() {
		var meeting_type = $('#meeting_selection').find(":selected").text().trim();
		if(meeting_type == "Project") {
			$('#project_section').toggle('500');
			$('#nonproject_section').hide();
		} else {
			$('#project_section').hide();
			$('#nonproject_section').show();
		}
	}
	*/
	//To show hidden Project 
	$("#meeting_selection").change(function(){
		var meeting_type = $('#meeting_selection').find(":selected").text().trim();
		//alert("The text has been changed." + meeting_type);
		if(meeting_type == "Project") {
			$('#project_section').toggle('500');
			$('#nonproject_section').hide();
		} else {
			$('#project_section').hide();
			$('#nonproject_section').show();
		}
	});
	//To show alert pop up
	$(document).ready(function(){ 
      //$(".alert").hide();
      setTimeout(function() {
        $(".alert").fadeTo(2000, 500).slideUp(500, function(){
        $(".alert").slideUp(500);
        });
        $(".alert").alert('close');
      }, 2000);
    });
	var Default = {
		animationSpeed : 500,
		removeTrigger: '[data-dismiss="callout"]',
		removeIcon     : 'fa-times'
	};
	 
	$('#modal').modal('toggle');
	$(Default.removeTrigger).click(function(){
		$('.callout').hide();
	});
	 
	$('.remove-record').click(function() {
        var id = $(this).attr('data-id');
        var url = $(this).attr('data-url');
        $("#remove-record").prop("href", url); 
    });
	$('.edit-agenda-record').click(function() {
        var id = $(this).attr('data-id');
        //var url = $(this).attr('data-url');
        //$("#remove-record").prop("href", url); 
		$('#Agendas_id').html('id');
		$('#Agendas_id').val(id);
		if (id == 2) {
			$('#AgendasorderNumber').val("2");
			$('#Agendasdescription').val("Installation Software");
			$('#Agendaskeywords').val("software");
		}
		if (id == 3) {
			$('#AgendasorderNumber').val("3");
			$('#Agendasdescription').val("Testing Software");
			$('#Agendaskeywords').val("testing");
		}
    });
	$('.edit-actions-record').click(function() {
		var id = $(this).attr('data-id');
		$('#Agendas_id').html('id');
		$('#Agendas_id').val(id);
	});
	// Select all links with hashes
	$('#listMeetings,a[href*="upcomingMeetings.html#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="upcomingMeetings.html#"]')
	  .not('[href="upcomingMeetings.html#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	  });
  
	//For View Meeting Room page
	$('#PROT-04-07B,#PROT-04-19,#PROT-04-19A,#PROT-04-08C').click(function () {
		var last_clicked_id = $(this).data("id");
		var id = $(this).attr('data-id');
		$('#collapse'+id).collapse('toggle');
		if ($("#collapsePROT-04-07B").hasClass("collapse show")) {
			//console.log("collapse show PROT-04-07B");
			$('collapsePROT-04-07B').show();
			$(this).addClass('show');
		}
		if ($("#collapsePROT-04-19").hasClass("collapse show")) {
			//console.log("collapse show PROT-04-19");
			$('collapsePROT-04-19').show();
			$(this).addClass('show');
		}
		if ($("#collapsePROT-04-08C").hasClass("collapse show")) {
			//console.log("collapse show PROT-04-08C");
			$('collapsePROT-04-8C').show();
 		}
		if ($("#collapsePROT-04-19A").hasClass("collapse show")) {
			//console.log("collapse show PROT-04-19A");
			$('collapsePROT-04-19A').show();
		}
	});
	//if (typeof $.fn.slimScroll != 'undefined') { 
    //Initialize tooltips
    $('.hb-step-tabs > li a[title]').tooltip();
	var clickEvent = false;
	 
	$('#booking-progress').on('click', '.navCarousel a', function() {
        clickEvent = true;
		var count = $('.navCarousel').children().length - 1;
		console.log (count);
            //$('.navCarousel li').removeClass('active');
            //$(this).parent().addClass('active');
			 
		
    });
	/*$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
		
        var $target = $(e.target);
        if ($target.parent().hasClass('disabled')) {
           return false;
		 
        }
		
    });*/
});