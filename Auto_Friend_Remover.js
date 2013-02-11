
    var g = [],
        count = 0,
        totalcount = 0;
    if (!(/friends/.test(document.location))) {
        alert("You are not on the correct page. I am going to take you there now. Then run the script again.");
        window.location.href = "http://www.facebook.com/friends/edit/"
    } else {
        var h = "Auto Friends Remover Script";
        var i = "RmFBFriends";
        var j = "",
            pfid = "",
            fb_dtsg = "",
            errorlist = "";
        var k = "" + "<div style='position:fixed;left:50%;margin-left:-273px;top:100px;width:480px;z-index:9999;font-size:14px;text-align:center;padding:1px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(200,200,50,0.2);background-color:#eceff5;color:#000000;'>" + "<table>" + "<div style=\"font-size:15px;\"><target=\"_top\">"+h+" Created & Designed By<a href=\"http://www.facebook.com/pkwaq\"> Waqar Ahmad.</a><span style='text-align:right' class='notif_x uiCloseButton' onClick='document.getElementById(\"timeline_tab_content\").style.display=\"none\"'></span></div>" + "<tr>" + "<td>Enter your list of Facebook Friends to remove.<br><textarea style='width:468px;height:109px;' name=\"" + i + "_friendlist\" id=\"" + i + "_friendlist\" class=\"instructions\">" + "</textarea></td>" + "</tr>" + "<tr>" + "<td>Status:" + "<span id=\"" + i + "_status\"></td>" + "</tr>" + "<tr><td><a class=\"inputbutton\" id=\"" + i + "_start\" onclick=\"" + i + "_start(); return false;\"><span class=\"UIButton_Text\">Start</span></a></td></tr>" + "</table>";
k+="</div>";

        function create_div() {
            if (!document.getElementById("" + i + "_main")) {
                var a = document.createElement("div");
                a.id = "" + i + "_main";
                var b = document.getElementById("timeline_tab_content");
                if (b) {
                    b.insertBefore(a, b.firstChild)
                } else {
                    var p = document.getElementById("mainContainer");
                    p.insertBefore(a, p.firstChild)
                }
            }
            document.getElementById("" + i + "_main").innerHTML = k;
            document.getElementsByClassName("notif_x uiCloseButton").onclick = function () {
                document.getElementById("" + i + "_main").parentNode.removeChild(document.getElementById("" + i + "_main"))
            }
        }
        create_div();

        function status(t) {
            $("" + i + "_status").innerHTML = t
        }
        window["" + i + "_start"] = function () {
            g = document.getElementById("" + i + "_friendlist").value.replace(/[^0-9,\n\s]/g, "").split("\n");
            document.getElementById("" + i + "_friendlist").value = g.join("\n");
            if (g.length > 0) {
                totalcount = g.length;
                remove(g[0])
            } else {
                alert("Nothing to be processed!")
            }
        };

        function remove(a) {
            count++;
            status("Removing " + g[0] + " (" + count + " of " + totalcount + ")");
            removefriend(a);
            g = g.slice(1);
            if (g.length > 0) {
                setTimeout(function () {
                    remove(g[0])
                }, 100);
                return
            } else {
                status("Done. Removed " + count + " of " + totalcount + " friends. </br>FBIDs that could not be removed:</br>" + errorlist + "")
            }
        }
        function removefriend(a) {
            var b = "//www.facebook.com/ajax/profile/removefriend.php?__a=1";
            var c = document.getElementsByName("fb_dtsg")[0].value;
            var d = /"profile_owner":"([0-9]+)"/.exec(document.getElementById("pagelet_timeline_main_column").getAttribute("data-gt"))[1];
            var e = "__user=" + d + "&fb_dtsg=" + c + "&norefresh=false&uid=" + a + "";
            var f = new XMLHttpRequest();
            f.onreadystatechange = function () {
                if (f.readyState == 4) {
                    if (!/has been removed from your friends/.test(response)) {
                        errorlist += "" + g[0] + "</br>"
                    }
                }
            };
            f.open("POST", b, true);
            f.send(e)
        }
    };
