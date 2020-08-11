function check(){
    var score=0;
    var q1_right_ans_2=document.getElementById("li");
    if(q1_right_ans_2.checked==true){
        score=score+10;
        alert("Your answer 1 is Correct!");
    }
    else{
        alert("Your answer 1 is Wrong!");
    }


    var q2_right_ans_1=document.getElementById("pun");
    if(q2_right_ans_1.checked==true){
        score=score+10;
        alert("Your answer 2 is Correct!");
    }
    else{
        alert("Your answer 2 is Wrong!");
    }


    var q3_right_ans_2=document.getElementById("K2");
    if(q3_right_ans_2.checked==true){
        score=score+10;
        alert("Your answer 3 is Correct!");
    }
    else{
        alert("Your answer 3 is Wrong!");
    }

    var q4_right_ans_3=document.getElementById("ai");;
    if(q4_right_ans_3.checked==true){
        score=score+10;
        alert("Your answer 4 is Correct!");
    }
    else{
        alert("Your answer 4 is Wrong!");
    }


    var q5_right_ans_3=document.getElementById("isl");
      if(q5_right_ans_3.checked==true){
        score=score+10;
        alert("Your answer 5 is Correct!");
    }
    else{
        alert("Your answer 5 is Wrong!");
    }
    alert ("Your total score is" +" "+ score+ " "+ "out of 50");
}