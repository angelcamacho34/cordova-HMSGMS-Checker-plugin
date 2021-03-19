var exec = require('cordova/exec');
var CLASS = 'HMSGMSChecker';

module.exports = {
    isHMSAvailable: function (onSuccess, onError) {
        exec(onSuccess, onError, CLASS, 'isHMSAvailable', []);
    },
    isGMSAvailable: function (onSuccess, onError) {
        exec(onSuccess, onError, CLASS, 'isGMSAvailable', []);
    }
}
