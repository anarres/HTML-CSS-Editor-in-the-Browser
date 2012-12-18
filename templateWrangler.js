/*

templateWrangler.js

Provides all the functions for a simple templating system

*/


function getStartTag(id) {
    var tag = "<!--START";
    tag += id;
    tag += "-->";
    return tag;
}
function getEndTag(id) {
    var tag = "<!--";
    tag += id;
    tag += "END";
    tag += "-->";
    return tag;
} 
function stripHtmlComments(html) {
    html = html.replace(/<!--[\s\S]*?-->/g , "")
    return html;
}


/*
 Takes template, removes the section from startString to endString'  
 inclusive, replaces this with insertText, and returns the result 
*/
function doReplacement(template, startString, endString, insertText) {
    var stringArray = template.split(startString);
    if( stringArray.length == 2 ) { 
        var outputString = stringArray[0];
        outputString += startString;
        outputString += insertText;
        outputString += endString;
        var stringArray2 = stringArray[1].split(endString);
        if( stringArray2.length != 2 ) { alert('DEBUG 2'); } // DEBUG 2
        outputString += stringArray2[1];
        return outputString;
    }
    else {
        return template;
    }
}

function getSiteHtml(template, siteObj) {
    var html = doReplacement(template, "<!--STARTtitle-->", "<!--titleEND-->", siteObj['title']);
    html = doReplacement(html, "<!--STARTdescription-->", "<!--descriptionEND-->", siteObj['description']);
    html = doReplacement(html, "<!--STARTfooter-->", "<!--footerEND-->", siteObj['footer']);

    // Construct menus 
    for (var i=0; i<siteObj['menus'].length; i++) {
        var menuHtml = "<ul>";
        for (var j=0; j<siteObj['menus'][i]['pagesOrLinks'].length; j++) {
            menuHtml += "<li><a href=''>";
            menuHtml += siteObj['menus'][i]['pagesOrLinks'][j]['title'];
            menuHtml += "</a></li>";
        }
        menuHtml += "</ul>";
        // Deal with multiple menus later
        html = doReplacement(html, "<!--STARTmenu-->", "<!--menuEND-->", menuHtml);
    }
    return html;
}

function getHtml(template, obj) {

    var html = template;


    for (var i=0; i<obj.length; i++) {
        var startTag = getStartTag(obj[i]['name']);
        var endTag = getEndTag(obj[i]['name']);
        html = doReplacement(html, startTag, endTag, obj['value']);
    }
    return html;
}






