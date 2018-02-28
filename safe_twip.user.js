// ==UserScript==
// @name         SafeTwip
// @namespace    http://github.com/R3turn-Dev/SafeTwip
// @version      1.0 Release
// @description  Twip AlertBox에 영상도네 미리보기 기능을 추가해줍니다.
// @author       R3turn-Dev @return0927
// @match        https://twip.kr/widgets/alertbox/*
// @grant        none
// ==/UserScript==


!function(){"use strict";$("body").prepend("<div class='safe_twip'><div id='safe_twip_vid'><iframe id='ytplayer' style='display: none;'></iframe></div><label id='safe_twip_skip'>Skip&Pause</label><label id='safe_twip_label'>Safe Twip @2018</label></div>"),$("head").append("<style>.safe_twip{z-index:10000000;position:absolute;float:left;height:60vh;width:60vw;background:green;opacity:0.4;text-align:center;}#safe_twip_label{font-size:3vh;float:top;color:#ffffff;}#safe_twip_vid{height:55vh;width:auto;}#ytplayer{height:100%;width:100%}#safe_twip_skip{cursor:pointer;float: left;color: white;font-size: 2vh;margin: 1vh;}</style>");var e=$("iframe#ytplayer");var i=!1,t=null,a=!1;console.log("영상도네: "+i),$("#safe_twip_skip").on("click",function(){(a=!a)?($("#safe_twip_skip").html("Skip&Pause"),$("#safe_twip_vid").empty(),$("#safe_twip_vid").append("<iframe id='ytplayer' style='display: none;'></iframe>"),i=!1,!1,t=null):$("#safe_twip_skip").html("Resume")}),setInterval(function(){try{A.mediaInfo!==t&&(i=Boolean(A.mediaInfo),t=A.mediaInfo,console.log("영상도네: "+i))}catch(e){}},50),setInterval(function(){a||(i?"youtube"==A.mediaInfo.type&&54==$("#safe_twip_vid").html().length&&($("#safe_twip_vid").empty(),$("#safe_twip_vid").append("<iframe id='ytplayer' class='youtube-player' type='text/html' src='https://www.youtube.com/embed/"+A.mediaInfo.id+"?autoplay=1&rel=0'></iframe>"),console.log("Append "+$("#safe_twip_vid").html().length)):54!=$("#safe_twip_vid").html().length&&($("#safe_twip_vid").empty(),$("#safe_twip_vid").append("<iframe id='ytplayer' style='display: none;'></iframe>"),console.log("Empty")))},50),setInterval(function(){console.log(.6*window.innerWidth+" "+.6*window.innerWidth*.5625),console.log(e.width()+" "+e.height()),e.width(.6*window.innerWidth),e.height(.5625*e.width)},1e3)}();