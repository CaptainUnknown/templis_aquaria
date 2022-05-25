'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var FingerprintAIO = /** @class */ (function (_super) {
    tslib.__extends(FingerprintAIO, _super);
    function FingerprintAIO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_UNKNOWN_ERROR = -100;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_UNAVAILABLE = -101;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_AUTHENTICATION_FAILED = -102;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_SDK_NOT_SUPPORTED = -103;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_HARDWARE_NOT_SUPPORTED = -104;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_PERMISSION_NOT_GRANTED = -105;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_NOT_ENROLLED = -106;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_INTERNAL_PLUGIN_ERROR = -107;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_DISMISSED = -108;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_PIN_OR_PATTERN_DISMISSED = -109;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_SCREEN_GUARD_UNSECURED = -110;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_LOCKED_OUT = -111;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_LOCKED_OUT_PERMANENT = -112;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.BIOMETRIC_SECRET_NOT_FOUND = -113;
        return _this;
    }
    FingerprintAIO.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIO.prototype.registerBiometricSecret = function (options) { return core.cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.loadBiometricSecret = function (options) { return core.cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.show = function (options) { return core.cordova(this, "show", {}, arguments); };
    FingerprintAIO.pluginName = "FingerprintAIO";
    FingerprintAIO.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIO.pluginRef = "Fingerprint";
    FingerprintAIO.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIO.platforms = ["Android", "iOS"];
    FingerprintAIO.decorators = [
        { type: core$1.Injectable }
    ];
    return FingerprintAIO;
}(core.IonicNativePlugin));

exports.FingerprintAIO = FingerprintAIO;
