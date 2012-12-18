/*

remember.js

Provides functions to save and retrieve the 
state of a HTML-CSS-Editor-in-the-Browser
project in the browser's HTML5 LocalStorage

*/



function createProjectObj(projectName, template, SiteObject, DesignObject) {
    var Project = {
        'projectName': projectName,
        'template': template,
        'SiteObject': SiteObject,
        'DesignObject': DesignObject
    };
    return Project;
}

function saveCurrentSession(template, SiteObject, DesignObject) {
    var Project = createProjectObj('currentSession', template, SiteObject, DesignObject);
    var stringProj = JSON.stringify(Project); 

    // Check for local storage support
    if(typeof(Storage)!=="undefined") {
        localStorage.currentSession = stringProj;
    }
}

function getStorageKey(ProjectObj) {
    var key = ProjectObj['projectName'];
    return key;
}

function parseStorageObject(obj) {
    return JSON.parse(obj);
}

function getNames() {
    savedProjectNames = [];

    // Check for local storage support
    if(typeof(Storage)!=="undefined") {
        for (var key in localStorage) {
           savedProjectNames.push(key);
        }
    }
    return savedProjectNames;
}





