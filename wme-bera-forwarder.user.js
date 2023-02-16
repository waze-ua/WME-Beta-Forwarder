// ==UserScript==
// @name         WME Beta forwarder
// @description  Forward to beta WME
// @version      0.0.2
// @author       Sapozhnik
// @namespace    https://greasyfork.org/ru/users/160654-waze-ukraine
// @match        https://www.waze.com/editor*
// @match        https://waze.com/editor*
// @match        https://www.waze.com/*/editor*
// @match        https://waze.com/*/editor*
// @grant        none
// ==/UserScript==


(function () {
  'use strict'
    let url = window.location.href;
    url = url.replace(/(www\.)?waze\.com/,"beta.waze.com");
    window.location.replace(url);
})()
