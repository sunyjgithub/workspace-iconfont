(function(window){var svgSprite='<svg><symbol id="icon-ditu" viewBox="0 0 1024 1024"><path d="M611.6 618.7l18.6-27.9c111-46.3 189.1-155.8 189.1-283.6C819.2 137.5 681.7 0 512 0S204.8 137.5 204.8 307.2c0 127.8 78.1 237.3 189.1 283.6l18.6 27.9C177.5 637.2 0 719.8 0 819.2 0 932.3 229.2 1024 512 1024s512-91.7 512-204.8c0-99.4-177.5-182-412.4-200.5zM358.4 307.2c0-84.8 68.8-153.6 153.6-153.6s153.6 68.8 153.6 153.6S596.8 460.8 512 460.8 358.4 392 358.4 307.2z m153.6 512c-197.9 0-358.4-45.8-358.4-102.4 0-46.6 109.6-85.7 258.9-98L512 768l99.5-149.2c149.3 12.4 258.9 51.4 258.9 98 0 56.6-160.5 102.4-358.4 102.4z" fill="#00a2ff" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)