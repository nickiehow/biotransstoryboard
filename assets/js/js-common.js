// Make sure jQuery has been loaded
var pg = "";
if (typeof jQuery === 'undefined') {
	throw new Error('requires jQuery')
}

var msgStr = "This website is best viewed using Google Chrome/FireFox /MS Internet Explorer 10 or higher. \r\n\r\nThank you.";
var isIOS = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
    },
    dataBrowser: [
            {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
            {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
            {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
            {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
    ],
	dataOS: [
			{string: navigator.platform,subString: "Win",identity: "Windows"},
			{string: navigator.platform,subString: "Mac",identity: "Mac"},
			{string: navigator.userAgent,subString: "iPhone",identity: "iPhone/iPod"},
			{string: navigator.platform,subString: "Linux",identity: "Linux"}
	]
};
BrowserDetect.init();
if(BrowserDetect.version <= 8 && BrowserDetect.browser == "Explorer"){
	alert(msgStr);
}	
/*if (isIOS) {
	if (!navigator.userAgent.match(/crios/i)) {
		alert(msgStr);
	}
} else if (!navigator.userAgent.match(/Chrome/i)) {
	alert(msgStr);
} else if (!navigator.userAgent.match(/Firefox/i) {
}*/
if (!window.console) {
	window.console = {};
    window.console.log = function () {};
}

function getQueryString(strParaName) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	var strQS=location.search.substring(1,location.search.length);
	var strArgs = "";
	var strName = "";
	var strValue = "";
	var strTemp = "";
	if (strQS!="") {
		strArgs = strQS.split('&');
		for (var i=0;i<strArgs.length;i++){
			var pair = strArgs[i].split('=');
			// Fix broken unescaping
			strTemp = unescape(pair[0]).split('+');
			strName = strTemp.join(' ');
			strTemp = unescape(pair[1]).split('+');
			strValue = strTemp.join(' ');
			if (strParaName==strName) return strValue;
		}
	}
	return -1;
}

function trimLeadingZero(str) {
if (str.charAt(0) == "0")
	return trimLeadingZero(str.substr(1))
else
	return str
}
function LZ(x) {return(x<0||x>9?"":"0")+x}
//Detects if browser is mobile which affects if how-start-container is being hidden - needed for slidebars
isAMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i) !== null;
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i) !== null;
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPod/i) !== null;
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i) !== null;
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i) !== null || navigator.userAgent.match(/WPDesktop/i) !== null;
	},
	check: function() {
		return (isAMobile.Android() || isAMobile.BlackBerry() || isAMobile.iOS() || isAMobile.Opera() || isAMobile.Windows());
	}
};
/* Hides sidebar from showing on desktops with small widths that resemble mobile devices */
if (!isAMobile.check()) {
	
}