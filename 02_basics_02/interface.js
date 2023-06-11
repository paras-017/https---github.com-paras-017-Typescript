var Instagram = /** @class */ (function () {
    function Instagram(camera_front, camera_back, camera_filter) {
        this.camera_front = camera_front;
        this.camera_back = camera_back;
        this.camera_filter = camera_filter;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube(camera_front, camera_back, camera_filter, camera_live) {
        this.camera_front = camera_front;
        this.camera_back = camera_back;
        this.camera_filter = camera_filter;
        this.camera_live = camera_live;
    }
    Youtube.prototype.nightMode = function () {
    };
    return Youtube;
}());
