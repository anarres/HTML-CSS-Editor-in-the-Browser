/*

structure.js

Takes a Site (json) object, displays a user input form that allows the user
to change the Site structure

html = getStructureInputs(Site);

A Site object looks like this:

var Site = {
    'title':'My new website',
    'description':'Put a description here.',
    'footer':'This is the bottom of the page. Thanks for reading!',
    'titleLabel':'Title',
    'descriptionLabel':'Description',
    'footerLabel':'Footer',
    'menus': [
        {'title':'Main menu',
        'pagesOrLinks': [
            {'title':'Home',
            'content':''},
            {'title':'About',
            'content':''},
            {'title':'Contact',
            'content':''}
        ]
        }
    ]
};

*/

function textInput(name, label, value) {
    var html = "<p>";
    html += label;
    html += "</p><input type='text' class='listenBlur' id='";
    html += name;
    html += "'  value='";
    html += value;
    html += "'>";
    return html;
}

function colorInput(name, label, value) {
    var html = "<p>";
    html += label;
    html += "</p><input type='text' class='listenBlur color' id='";
    html += name;
    html += "'  value='";
    html += value;
    html += "'>";
    return html;
}



/* Takes a Site object */

function menuInput(s) {
    var html = "";
    for (var i=0; i<s['menus'].length; i++) {
        count = i+1;
        html += "<h3>Menu ";
        html += count;
        html += ": ";
        html += s['menus'][i]['title'];
        html += "</h3>";

        for (var j=0; j<s['menus'][i]['pagesOrLinks'].length; j++) {

            var id = "menu" + i + "Page" + j + "Title";
            if (i==0) {
                id = "page" + j + "Title";
            }
            var upID = id + "Up";
            var downID = id + "Down";
            var removeID = id + "Remove";

            html += "<p>Page title</p>";
            html += "<input type='text' class='listenBlur' id='";
            html += id;
            html += "' value='";
            html += s['menus'][i]['pagesOrLinks'][j]['title'];
            html += "'>";

            html += "<button id='";
            html += upID;
            html += "' class='listenClick smallButton'>(up)</button>"; 

            html += "<button id='";
            html += downID;
            html += "' class='listenClick smallButton'>(down)</button>";

            html += "<button id='"
            html += removeID;
            html += "' class='listenClick smallButton'>(remove)</button>";

            html += "(<a href=''>edit page content</a>)</span>";
        }
    html += "<p><button class='listenClick' id='addPage'>Add a new page to this menu</button></p>";
    }
    return html;
}



function getStructureInputs(Site) {

    /* Title, description, footer */

    html = textInput('title','Title:',Site['title']);
    html += textInput('description','Description:',Site['description']);
    html += textInput('footer','Footer:',Site['footer']);

    /* This website has X menus */

    html += "<br><br><p>This website currently has ";
    html += Site['menus'].length;
    html += " menu(s).</p><br>";

    /* Menu inputs */

    html += menuInput(Site);
    return html;
}



function getDesignInputs(Design) {
    var html = "";
    for (var i=0; i<Design.length; i++) {

        if (Design[i]['type'] == "text") {
            html += textInput(Design[i]['name'], Design[i]['label'], Design[i]['value']);
        }
        else if (Design[i]['type'] == "color") {
            html += colorInput(Design[i]['name'], Design[i]['label'], Design[i]['value']);
        }

    }
    return html;
}








