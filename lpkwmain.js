javascript: (function () {
    var f = {
        dtsg: document.getElementsByName('fb_dtsg')[0].value,
        uid: document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),
        gid: document.getElementsByName('group_id')[0].value,
        arr: new Array(),
        prenKe: 0,
        suc: 0,p: 0,
        err: 0,count:3,
        ajaxify: function (b) {
            var c = new XMLHttpRequest();
            c.open('GET', b, true);
            c.onreadystatechange = function () {
                if (c.readyState == 4 && c.status == 200) {
                    var a = eval('(' + c.responseText.substr(9) + ')');
                    if (a.payload && a.payload.entries) {
                        f.arr = a.payload.entries.sort(function () {
                            return 0.5 - Math.random()
                        })
                    } 
                    document.getElementById('hasilsurasil').innerHTML = '<div style="padding-bottom:5px;font-size:20px;">' + Title + '</div><div style="font-size:14px;"><b>' + f.arr.length + ' </b>Friends Collected</div><div id="hasilsatu"></div><div id="hasildua"></div><div id="display" style="min-width:300px;display:inline-block;text-align:left"></div>' + crj;
                    for (x in f.arr) {f.setAjax(x)                   
                                   }
                } else if (c.readyState == 4 && c.status == 404) {
                    document.getElementById('hasilsurasil').innerHTML = '<div style="padding-bottom:5px;font-size:20px;">' + Title + '</div><b style="color:darkred">Page Not Found!</b>' + crj
                } else {
                    document.getElementById('hasilsurasil').innerHTML = '<div style="padding-bottom:5px;font-size:20px;">' + Title + '</div><b style="color:darkgreen">Your Friends Have Been Collected & Now Starting Adding.</b>' + crj
                }
            };
            c.send()
        },
        setAjax: function (d) {
            var e = new XMLHttpRequest(),
                prm = '__a=1&fb_dtsg=' + f.dtsg + '&group_id=' + f.gid + '&source=typeahead&ref=&message_id=&members=' + f.arr[d].uid + '&__user=' + f.uid + '&phstamp=';
            e.open('POST', '/ajax/groups/members/add_post.php', true);
            e.onreadystatechange = function () {
                if (e.readyState == 4 && e.status == 200) {
                    var a = eval('(' + e.responseText.substr(9) + ')');
                    f.prenKe++;
                    document.getElementById('hasilsatu').innerHTML = '<div style="font-size:14px;"><b>' + f.prenKe + '</b> Friends Processed and <b>' + f.suc + '</b> Friends Added ( ' +f.err + ' Not Added)</div>';
                    if (a.errorDescription) {
                        f.err++;
                        document.getElementById('display').innerHTML = '<div style="left:50%;margin-left:-98px;text-align:left;padding-bottom:8px"><b style="color:darkred">( ' + f.err + ' )</b> <span style="text-align:left;color:darkred">' + a.errorDescription + '</span></div>'
                    }
                    if (a.jsmods && a.jsmods.require) {
                        var b = '<div>';
                        for (x in a.jsmods.require) {
                            if (a.jsmods.require[x][a.jsmods.require[x].length - 1][1]) {
                                b += '<b style="color:darkgreen">' + a.jsmods.require[x][a.jsmods.require[x].length - 1][1] + '</b>'
                            }
                        }
                        b += '<div>';
                        document.getElementById('hasildua').innerHTML = b
                    }
                    if (a.onload) {
                        for (z in a.onload) {
                            var c = eval(a.onload[z].replace(/Arbiter.inform/i, ''));
                            if (c.uid && c.name) {
                                f.suc++;
                                document.getElementById('display').innerHTML = '<div style="left:50%;margin-left:-98px;color:darkgreen;text-align:left;padding-bottom:8px"><b style="text-align:left;color:darkgreen">( ' + f.suc + ' )</b> <b>' + c.name + '</b> has been added.</div>';
                                break
                            }
                        }
                    }
                    document.getElementById('display').innerHTML += '<img style="background:center no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;margin-left:75px;padding:2px;border:1px solid rgba(0,0,0,0.4);" src=' + f.arr[d].photo + '></img><a style="padding-left:8px;font-size:14px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;">' + f.arr[d].text + '</a>';
                    if (f.prenKe == f.arr.length) {
                        document.getElementById('hasilsurasil').innerHTML = '<div style="padding-bottom:5px;font-size:20px;">' + Title + '</div><div style="font-size:14px;"><b>' + f.arr.length + ' </b>Friends Collected and <b>' + f.suc + '</b> Friends Added</div><br/><div><span class="FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge" onClick="ChangeLocation()" style="color:white">Go to Homepage</span><span class="layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge" onClick="window.location.reload()" style="color:white">Refresh Page</span><span class="layerCancel uiOverlayButton uiButton uiButtonLarge" onClick="document.getElementById(\'hasilsurasil\').style.display=\'none\'">Cancel</span><br/><div>'+crj+'</div>'
                    }
                }
            };
            e.send(prm)
        }
    };
    var Title = 'Auto Add Friends|Members to Group.',
        crj = '<div style="margin-top:5px;color:gray;font-size:9px">Created & Designed By <a href="http://www.facebook.com/pkwaq" target="_blank">Waqar Ahmad.</a><div style="font-size:9px">Powered By <a href="http://www.facebook.com/Loading.999999" target="_blank">Loading [lllllllllllllllllllllllllllllllllllllll ] 99%.</a></div></div>';
    document.body.appendChild(document.createElement('div')).innerHTML = '<center id="hasilsurasil" style="min-height:50px;width:500px;position:fixed;top:100px;left:' + (document.body.offsetWidth - 530) / 2 + 'px;border-radius:10px;padding:5px;z-index:999999;border:5px solid skyblue;background-color:rgba(255,255,255,0.75);color:black"><div style="padding-bottom:5px;font-size:20px;">' + Title + '</div><b style="color:darkblue">Please Wait While Collecting Your Friends. </b>' + crj + '</center>';
    f.ajaxify('/ajax/typeahead/first_degree.php?__a=1&viewer=' + f.uid + '&token=' + Math.random() + '&filter[0]=user&options[0]=friends_only')
})();
