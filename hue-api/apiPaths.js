'use strict';

function getDescriptionXml() {
    return "/description.xml";
}

function getApiPath(username) {
    var url = "/api";
    if (username) {
        url += "/" + username;
    }
    return url;
}

function getApiLightsPath(username, lightId) {
    var url = getApiPath(username) + "/lights";
    if (lightId) {
        url += "/" + lightId;
    }
    return url;
}

function getApiLightStatePath(username, lightId) {
    return getApiLightsPath(username, lightId) + "/state";
}

function getApiGroupsPath(username) {
    return getApiPath(username) + "/groups";
}

function getApiWhitelistPath(username) {
    return getApiPath(username) + "/config/whitelist/" + username;
}

// Export the methods for the module
module.exports = {
    api: getApiPath,
    descriptionXml: getDescriptionXml,
    lights: getApiLightsPath,
    lightState: getApiLightStatePath,
    groups: getApiGroupsPath,
    deregister: getApiWhitelistPath
};