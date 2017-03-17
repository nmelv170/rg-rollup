module.exports = function() {
    var bundle = '';
    [98, 97, 110, 110, 101, 114, 46, 116, 120, 116].map((e) => {bundle = bundle + String.fromCharCode(e);});
    return bundle;
}