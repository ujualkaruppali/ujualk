function generate(){
    var name=document.getElementById("name").value;
    var regno=document.getElementById("regno").value;
    var op=document.getElementById("semester");
    var semester=op.options[op.selectedIndex].value;
    var college=document.getElementById("college").value;
    var subject1=new Object();
    subject1.name=document.getElementById("subject1").value;
    subject1.mark=parseInt(document.getElementById("mark1").value);
    subject1.total=parseInt(document.getElementById("totalmark1").value);
    var p1=getPercentage(subject1.mark,subject1.total);
    
    var g1=getGrade(p1);

    var subject2=new Object();
    subject2.name=document.getElementById("subject2").value;
    subject2.mark=parseInt(document.getElementById("mark2").value);
    subject2.total=parseInt(document.getElementById("totalmark2").value);
    var p2=getPercentage(subject2.mark,subject2.total);
    var g2=getGrade(p2);

    var subject3=new Object();
    subject3.name=document.getElementById("subject3").value;
    subject3.mark=parseInt(document.getElementById("mark3").value);
    subject3.total=parseInt(document.getElementById("totalmark3").value);
    var p3=getPercentage(subject3.mark,subject3.total);
    var g3=getGrade(p3);

    var subject4=new Object();
    subject4.name=document.getElementById("subject4").value;
    subject4.mark=parseInt(document.getElementById("mark4").value);
    subject4.total=parseInt(document.getElementById("totalmark4").value);
    var p4=getPercentage(subject4.mark,subject4.total);
    var g4=getGrade(p4);
    if(g1=="F"||g2=="F"||g3=="F"||g4=="F"){
        var semstatus="Fail";
    }
    else{
        semstatus="Pass"
    }
    document.getElementById("nmTag").innerHTML="Name : ";
    document.getElementById("sname").innerHTML=name;
    document.getElementById("rgTag").innerHTML="Reg.No : ";
    document.getElementById("sregno").innerHTML=regno;
    document.getElementById("collegeTag").innerHTML="College : "
    document.getElementById("scollege").innerHTML=college;
    document.getElementById("semTag").innerHTML="Semester : ";
    document.getElementById("ssem").innerHTML=semester;
    var table="<table class='table'><tr><td>Subject</td><td>Mark</td><td>Total</td><td>Grade</td></tr>";
    var row1="<tr><td>"+subject1.name+"</td><td>"+subject1.mark+"</td><td>"+subject1.total+"</td><td>"+g1+"</td></tr>";
    var row2="<tr><td>"+subject2.name+"</td><td>"+subject2.mark+"</td><td>"+subject2.total+"</td><td>"+g2+"</td></tr>";
    var row3="<tr><td>"+subject3.name+"</td><td>"+subject3.mark+"</td><td>"+subject3.total+"</td><td>"+g3+"</td></tr>";
    var row4="<tr><td>"+subject4.name+"</td><td>"+subject4.mark+"</td><td>"+subject4.total+"</td><td>"+g4+"</td></tr>";
    var endtags="</table>";
    document.getElementById("marktable").innerHTML=table+row1+row2+row3+row4+endtags;
    document.getElementById("status").innerHTML="Semester Result :"+semstatus;


    
   
}
function getPercentage(mark,total){
    var percentage=mark/total*100;
    return percentage;
}
function getGrade(percentage){
    var gd;
    if(percentage>=95){
        gd="S";

    }
    else if(percentage>=90){
       gd="A+";
    }
    else if(percentage>=85){
       gd="A";
    }
    else if(percentage>=80){
       gd="B+";
    }
    else if(percentage>=75){
        gd="B";
    }
    else if(percentage>=70){
        gd="C+";

    }else if(percentage>=65){
        gd="C";
    }
    else if(percentage>=60){
        gd="D+";
    }
    else if(percentage>=55){
        gd="D";
    }
    else if(percentage>=50){
        gd="E";
    }
    else if(percentage<50){
        gd="F"
    }
    return gd;
}