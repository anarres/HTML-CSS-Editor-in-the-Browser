/*

structureEdit.js

Provides functions for editing a Site (json) object 
which represents the strucure of a website


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

function updateTitle(Site, titleValue) {
    Site['title'] = titleValue;
    return Site;
}
function updateDescription(Site, descValue) {
    Site['description'] = descValue;
    return Site;
}
function updateFooter(Site, footerValue) {
    Site['footer'] = footerValue;
    return Site;
}
function pageUp(Site, menuID, pageID) {
    // For now assume menuID == 0
    if (pageID == 0) {
        return Site;
    }
    else {
        var fooIndex = pageID-1;
        var foo = Site['menus'][0]['pagesOrLinks'][fooIndex];
        Site['menus'][0]['pagesOrLinks'][fooIndex] = Site['menus'][0]['pagesOrLinks'][pageID];
        Site['menus'][0]['pagesOrLinks'][pageID] = foo;
        return Site;
    }
}
function pageDown(Site, menuID, pageID) {
    // For now assume menuID == 0
    var maxIndex = Site['menus'][0]['pagesOrLinks'].length - 1;
    if (pageID == maxIndex) {
        return Site;
    }
    else {
        var fooIndex = pageID+1;
        var foo = Site['menus'][0]['pagesOrLinks'][fooIndex];
        Site['menus'][0]['pagesOrLinks'][fooIndex] = Site['menus'][0]['pagesOrLinks'][pageID];
        Site['menus'][0]['pagesOrLinks'][pageID] = foo;
        return Site;
    }
}
function pageRemove(Site, menuID, pageID) {
    // For now assume menuID == 0
    var myArray = Site['menus'][0]['pagesOrLinks'];
    myArray = removeItemFromArray(myArray, pageID);
    Site['menus'][0]['pagesOrLinks'] = myArray;
    return Site;
}
function pageAdd(Site, menuID) {
    var newPage = {};
    newPage['title'] = 'New page';
    newPage['content'] = '';
    Site['menus'][menuID]['pagesOrLinks'].push(newPage);
    return Site;
}

