$(document).ready(function() {

	$("#questionList").hide();
	$("#results").hide();
	$("display").hide();

	var intervalid;
	var number = 25;
	var correct = 0;
	var wrong = 0;
	var noAnswer = 0;

	function run() {
		intervalid = setInterval(decrement, 1000);
	}

	function stop() {
		clearInterval(intervalid);
		$("#questionList").hide();
		$("display").hide();
		$("#results").show();
	}

	function decrement() {
		number--;
		$("#display").html("<h2>" + "Time Remaining: " + number + "</h2>");

		if (number <=0) {
			stop();
		}
	}




































};