// number showing a timer seconds on page
var number = 30;

// intercailid that use to setinterval later
var intervalId;


// function run
function run() {
    // setting interval to 1 second
    intervalId = setInterval(decrement, 1000);
}

// function decrement that runs every second 
function decrement() {
    // number is second getting decrement by 1 every second 
    number--;
    // displaying timer value on page
    $("#show-number").html("<h2> Time Left : " + number + "</h2>");
    // checking if timer is 0 then stop and display messages after that showing result for user
    if (number === 0) {

        stop();

        $("#timeup").html("<h3>Time's Up!!!!!!!!!!!!!!</h3>");
        check();
    }


}
// function stop that stops interval
function stop() {

    clearInterval(intervalId);
}
// calling function run
run();

// funtction that check results
function check() {
    // ans all storing value that click by users on radio buttons
    var ans1 = document.quiz.question1.value;
    // alert(ans1);
    var ans2 = document.quiz.question2.value;
    // alert(ans2);
    var ans3 = document.quiz.question3.value;
    // alert(ans3);
    var ans4 = document.quiz.question4.value;
    // alert(ans4);
    var ans5 = document.quiz.question5.value;
    // alert(ans5);
    // creating varaibles that sores vaules
    // correct answers set to 0
    var correct = 0;
    // wrong answers set to 0
    var wrong = 0;
    // unanswered set to 0
    var uns = 0;
    // checking if all answer are 0 then increase uns by 1 each time 
    if (ans1 == "") {
        uns++;
    }
    if (ans2 == "") {
        uns++;
    }
    if (ans3 == "") {
        uns++;
    }
    if (ans4 == "") {
        uns++;
    }
    if (ans5 == "") {
        uns++;
    }


    // checking if user selecting right answers then increase correct by 1 each time
    // else if not correct then increasing wrong by 1 each time
    if (ans1 == "50 meters") {
        correct++;
    }
    else {
        wrong++;
    }
    if (ans2 == "Greece") {
        correct++;
    }
    else {
        wrong++;
    }
    if (ans3 == "Atlanta") {
        correct++;
    }
    else {
        wrong++;
    }
    if (ans4 == "Tennis") {
        correct++;
    }
    else {
        wrong++;
    }
    if (ans5 == "Six players") {
        correct++;
    }
    else {
        wrong++;
    }
    // calling showdata that for showing data on page
    showdata();
    // document.getElementById("aftersubmit").style.visibility= "visible";


    function showdata() {
        // displaying results on page
        document.getElementById("correctans").innerHTML = "<h6> You got total " + correct + " answers correct.... </h6>" +
            "<h6> SorrY!! You got total " + wrong + " answers wrong.... </h6>" +
            "<h6> Total Unanswered Questions " + uns + "</h6>";
        // stop to timer
        stop();
        // hide those all questions once user submit results
        $("#quiz").hide();

        // creating array that stores messages to display user
        var msg = ["Great Job!!", "That's Just Okay!!", "You Really need to do better!!! "];
        // creating array that stores images 
        var pic = ["assets/images/success.gif", "assets/images/okay.gif", "assets/images/better.gif"];
        var r;
        // checking if user got more then 3 correct from 5 then Great job 
        if (correct > 3) {
            // document.getElementById("message").innerHTML="<h4>" + msg[0] + "</h4>";
            r = 0;
        }
        // checking if user got 2 or 3 right answer then Thats just okay! 
        if (correct >= 2 && correct < 4) {
            // document.getElementById("message").innerHTML="<h4>" + msg[1] + "</h4>";
            r = 1;
        }
        // checking if user got right less then 2 then he neeed to do better 
        if (correct < 2) {
            // document.getElementById("message").innerHTML="<h4>" + msg[2] + "</h4>";
            r = 2;
        }

        // displaying those messages and image on page 
        document.getElementById("message").innerHTML = "<h4>" + msg[r] + "</h4>";
        document.getElementById("pc").innerHTML = "<img src='" + pic[r] + "' / >";
    }
}






