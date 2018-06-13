function check()
{
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
    var correct=0;
    var wrong=0;
    if(ans1 == "50 meters")
    {
        correct++;
    }
    else{
        wrong++;
    }
    if(ans2 == "Greece")
    {
        correct++;
    }
    else{
        wrong++;
    }
    if(ans3 == "Atlanta")
    {
        correct++;
    }
    else{
        wrong++;
    }
    if(ans4 == "Tennis")
    {
        correct++;
    }
    else{
        wrong++;
    }
    if(ans5 == "Six players")
    {
        correct++;
    }  
    else{
        wrong++;
    }  
    // document.getElementById("aftersubmit").style.visibility= "visible";
    document.getElementById("correctans").innerHTML="<h4> You got total " + correct +" answers correct.... </h4>"+
                                                    "<h4> SorrY!! You got total " + wrong +" answers wrong.... </h4>";
}