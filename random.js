function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random_quote").html("<p id='random_quote' class='center' class='quoteText'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>").hide().fadeIn(2000);

    	}

	})
}

$(function() {
  randomQuote();
});

$(".btn").click(function(){
  randomQuote();
});