import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FingerprintAIO = /** @class */ (function (_super) {
    __extends(FingerprintAIO, _super);
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
    FingerprintAIO.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIO.prototype.registerBiometricSecret = function (options) { return cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.loadBiometricSecret = function (options) { return cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    FingerprintAIO.pluginName = "FingerprintAIO";
    FingerprintAIO.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIO.pluginRef = "Fingerprint";
    FingerprintAIO.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIO.platforms = ["Android", "iOS"];
    FingerprintAIO.decorators = [
        { type: Injectable }
    ];
    return FingerprintAIO;
}(IonicNativePlugin));
export { FingerprintAIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbmdlcnByaW50LWFpby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtSHBDLGtDQUFpQjs7O1FBQ25EOzs7V0FHRztRQUNILDZCQUF1QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQy9COzs7V0FHRztRQUNILDJCQUFxQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzdCOzs7V0FHRztRQUNILHFDQUErQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3ZDOzs7V0FHRztRQUNILGlDQUEyQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ25DOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILDRCQUFzQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzlCOzs7V0FHRztRQUNILHFDQUErQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3ZDOzs7V0FHRztRQUNILHlCQUFtQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzNCOzs7V0FHRztRQUNILHdDQUFrQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzFDOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILDBCQUFvQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzVCOzs7V0FHRztRQUNILG9DQUE4QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RDOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsR0FBRyxDQUFDOzs7SUFPbEMsb0NBQVc7SUFVWCxnREFBdUIsYUFBQyxPQUFpQztJQVV6RCw0Q0FBbUIsYUFBQyxPQUEyQjtJQVUvQyw2QkFBSSxhQUFDLE9BQTJCOzs7Ozs7O2dCQTVHakMsVUFBVTs7eUJBbkhYO0VBb0hvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmdlcnByaW50T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaXRsZSBpbiBiaW9tZXRyaWMgcHJvbXB0IChhbmRyb2lkIG9ubHkpXG4gICAqIEBkZWZhdWx0IHtBUFBfTkFNRX0gQmlvbWV0cmljIFNpZ24gT25cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdWJ0aXRsZSBpbiBiaW9tZXRyaWMgUHJvbXB0IChhbmRyb2lkIG9ubHkpXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBpbiBiaW9tZXRyaWMgUHJvbXB0XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaXRsZSBvZiBmYWxsYmFjayBidXR0b24uXG4gICAqIEBkZWZhdWx0IFwiVXNlIFBpblwiXG4gICAqL1xuICBmYWxsYmFja0J1dHRvblRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaXRsZSBmb3IgY2FuY2VsIGJ1dHRvbiBvbiBBbmRyb2lkXG4gICAqIEBkZWZhdWx0IFwiQ2FuY2VsXCJcbiAgICovXG4gIGNhbmNlbEJ1dHRvblRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlICd1c2UgYmFja3VwJyBvcHRpb24uXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBkaXNhYmxlQmFja3VwPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5nZXJwcmludFNlY3JldE9wdGlvbnMgZXh0ZW5kcyBGaW5nZXJwcmludE9wdGlvbnMge1xuICAvKipcbiAgICogU3RyaW5nIHNlY3JldCB0byBlbmNyeXB0IGFuZCBzYXZlLCB1c2Ugc2ltcGxlIHN0cmluZ3MgbWF0Y2hpbmcgdGhlIHJlZ2V4IFthLXpBLVowLTlcXC1dK1xuICAgKi9cbiAgc2VjcmV0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCBzZWNyZXQgd2lsbCBiZSBkZWxldGVkIHdoZW4gYmlvbWV0cnkgaXRlbXMgYXJlIGRlbGV0ZWQgb3IgZW5yb2xsZWRcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGludmFsaWRhdGVPbkVucm9sbG1lbnQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEZpbmdlcnByaW50IEFJT1xuICogQGRlc2NyaXB0aW9uXG4gKiBVc2Ugc2ltcGxlIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8uIEZvciBtb3JlIGluZm8gYWJvdXQgcGx1Z2luLCB2aXN0OiBodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW9cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbmdlcnByaW50QUlPIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maW5nZXJwcmludC1haW8vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhaW86IEZpbmdlcnByaW50QUlPKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZhaW8uc2hvdygpLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKS5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiAgT1Igd2l0aCBvcHRpb25zLi4uXG4gKlxuICogdGhpcy5mYWlvLnNob3coe1xuICogICAgIHRpdGxlOiAnQmlvbWV0cmljIEF1dGhlbnRpY2F0aW9uJywgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IERlZmF1bHQ6IFwiPEFQUF9OQU1FPiBCaW9tZXRyaWMgU2lnbiBPblwiXG4gKiAgICAgc3VidGl0bGU6ICdDb29sZXN0IFBsdWdpbiBldmVyJyAvLyAoQW5kcm9pZCBPbmx5KSB8IG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxuICogICAgIGRlc2NyaXB0aW9uOiAnUGxlYXNlIGF1dGhlbnRpY2F0ZScgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXG4gKiAgICAgZmFsbGJhY2tCdXR0b25UaXRsZTogJ1VzZSBCYWNrdXAnLCAvLyBvcHRpb25hbCB8IFdoZW4gZGlzYWJsZUJhY2t1cCBpcyBmYWxzZSBkZWZhdWx0cyB0byBcIlVzZSBQaW5cIi5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gZGlzYWJsZUJhY2t1cCBpcyB0cnVlIGRlZmF1bHRzIHRvIFwiQ2FuY2VsXCJcbiAqICAgICBkaXNhYmxlQmFja3VwOnRydWUsICAvLyBvcHRpb25hbCB8IGRlZmF1bHQ6IGZhbHNlXG4gKiB9KVxuICogLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmFpby5yZWdpc3RlckJpb21ldHJpY1NlY3JldCh7XG4gKiAgICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgYmlvbWV0cmljIGRlc2NyaXB0aW9uXCIsIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxuICogICAgICBzZWNyZXQ6IFwibXktc3VwZXItc2VjcmV0XCIsIC8vIG1hbmRhdG9yeVxuICogICAgICBpbnZhbGlkYXRlT25FbnJvbGxtZW50OiB0cnVlLCAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IGZhbHNlXG4gKiAgICAgIGRpc2FibGVCYWNrdXA6IHRydWUsIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBhbHdheXMgYHRydWVgIG9uIEFuZHJvaWRcbiAqIH0pXG4gKiAudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogIC4uLlxuICpcbiAqIHRoaXMuZmFpby5sb2FkQmlvbWV0cmljU2VjcmV0KHtcbiAqICAgICAgZGVzY3JpcHRpb246IFwiU29tZSBiaW9tZXRyaWMgZGVzY3JpcHRpb25cIiwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXG4gKiAgICAgIGRpc2FibGVCYWNrdXA6IHRydWUsIC8vIGFsd2F5cyBkaXNhYmxlZCBvbiBBbmRyb2lkXG4gKiB9KVxuICogLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEZpbmdlcnByaW50T3B0aW9uc1xuICogRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmluZ2VycHJpbnRBSU8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxuICBwbHVnaW5SZWY6ICdGaW5nZXJwcmludCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmluZ2VycHJpbnRBSU8gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1VOS05PV05fRVJST1IgPSAtMTAwO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19VTkFWQUlMQUJMRSA9IC0xMDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0FVVEhFTlRJQ0FUSU9OX0ZBSUxFRCA9IC0xMDI7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1NES19OT1RfU1VQUE9SVEVEID0gLTEwMztcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfSEFSRFdBUkVfTk9UX1NVUFBPUlRFRCA9IC0xMDQ7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1BFUk1JU1NJT05fTk9UX0dSQU5URUQgPSAtMTA1O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19OT1RfRU5ST0xMRUQgPSAtMTA2O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19JTlRFUk5BTF9QTFVHSU5fRVJST1IgPSAtMTA3O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19ESVNNSVNTRUQgPSAtMTA4O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19QSU5fT1JfUEFUVEVSTl9ESVNNSVNTRUQgPSAtMTA5O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19TQ1JFRU5fR1VBUkRfVU5TRUNVUkVEID0gLTExMDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfTE9DS0VEX09VVCA9IC0xMTE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0xPQ0tFRF9PVVRfUEVSTUFORU5UID0gLTExMjtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfU0VDUkVUX05PVF9GT1VORCA9IC0xMTM7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIGlzIGF2YWlsYWJsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWUgYW5kIHJlZ2lzdGVyIHNlY3JldFxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50U2VjcmV0T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXJCaW9tZXRyaWNTZWNyZXQob3B0aW9uczogRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZSBhbmQgbG9hZCBzZWNyZXRcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvYWRCaW9tZXRyaWNTZWNyZXQob3B0aW9uczogRmluZ2VycHJpbnRPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZVxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdyhvcHRpb25zOiBGaW5nZXJwcmludE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19