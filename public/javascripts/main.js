$(function(){
		//function returns an object with label's for attribute values as keys and 
		//the label's text as the value.
		function LabelContent(formID){
			var labels = $(formID).find("label"),
			labelContent = {};
			$.each(labels, function(index, element){
				labelContent[$(element).attr("for")]=$(element).text(); 
			})

			return labelContent;
		}
		var labelContent = new LabelContent("#contactForm");
	//Email pattern we will use to validate email form fields 
	var emailRegex = (/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)


	$.validator.defaults.onfocusout = function(element, event){
		 this.element(element);
		 if ($(element).valid()){
		 	$("label[for="+ $(element).attr("id")+"]").text(labelContent[$(element).attr("id")]).removeClass("red-text");
		 	$(element).closest(".md-form").removeClass("has-error");
		 	
		}
	}
	// $.validator.defaults.onkeyup = function(element, event){
	// 	// code to validate only focused input
	// 	 // this.element(element);
	// }
	//custom email method defined
	$.validator.methods.email = function( value, element ) {
  		return this.optional( element ) || emailRegex.test( value );
	}

	$("#contactForm").validate({
		errorPlacement: function(error, element) {
			// //Store the labels original values
			//Field label text prepended to the error message.
			var fieldLabel = "<strong>" + labelContent[$(element).attr("id")] +"</strong> : ";
			$("label[for="+ $(element).attr("id")+"]").html(fieldLabel + error[0].textContent).addClass("red-text");
			// $(element).addClass("contact-error");
			$(element).closest(".md-form").addClass("has-error");

		}

	})
	//Mobile main nav functionality

	$("#mobile-menu-toggle").on("click", function(e){
		e.preventDefault();
		$("#main-navbar").toggleClass("open")
		if($("#mobile-menu-control").attr("xlink:href") === "#menu"){
			$("#mobile-menu-control").attr("xlink:href" , "#close")
		}else{
			$("#mobile-menu-control").attr("xlink:href", "#menu")
		}

	})

	// $("#slideshow > div:gt(0)").hide();

	// setInterval(function() { 
	//   $('#slideshow > div:first')
	//     .fadeOut(1000)
	//     .next()
	//     .fadeIn(1000)
	//     .end()
	//     .appendTo('#slideshow');
	// },  3000);




})

