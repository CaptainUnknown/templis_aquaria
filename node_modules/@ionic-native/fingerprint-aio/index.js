var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FingerprintAIOOriginal = /** @class */ (function (_super) {
    __extends(FingerprintAIOOriginal, _super);
    function FingerprintAIOOriginal() {
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
    FingerprintAIOOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIOOriginal.prototype.registerBiometricSecret = function (options) { return cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIOOriginal.prototype.loadBiometricSecret = function (options) { return cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIOOriginal.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    FingerprintAIOOriginal.pluginName = "FingerprintAIO";
    FingerprintAIOOriginal.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIOOriginal.pluginRef = "Fingerprint";
    FingerprintAIOOriginal.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIOOriginal.platforms = ["Android", "iOS"];
    return FingerprintAIOOriginal;
}(IonicNativePlugin));
var FingerprintAIO = new FingerprintAIOOriginal();
export { FingerprintAIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbmdlcnByaW50LWFpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtSHBDLGtDQUFpQjs7O1FBQ25EOzs7V0FHRztRQUNILDZCQUF1QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQy9COzs7V0FHRztRQUNILDJCQUFxQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzdCOzs7V0FHRztRQUNILHFDQUErQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3ZDOzs7V0FHRztRQUNILGlDQUEyQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ25DOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILDRCQUFzQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzlCOzs7V0FHRztRQUNILHFDQUErQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3ZDOzs7V0FHRztRQUNILHlCQUFtQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzNCOzs7V0FHRztRQUNILHdDQUFrQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzFDOzs7V0FHRztRQUNILHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDOzs7V0FHRztRQUNILDBCQUFvQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzVCOzs7V0FHRztRQUNILG9DQUE4QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RDOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsR0FBRyxDQUFDOzs7SUFPbEMsb0NBQVc7SUFVWCxnREFBdUIsYUFBQyxPQUFpQztJQVV6RCw0Q0FBbUIsYUFBQyxPQUEyQjtJQVUvQyw2QkFBSSxhQUFDLE9BQTJCOzs7Ozs7eUJBL05sQztFQW9Ib0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaW5nZXJwcmludE9wdGlvbnMge1xuICAvKipcbiAgICogVGl0bGUgaW4gYmlvbWV0cmljIHByb21wdCAoYW5kcm9pZCBvbmx5KVxuICAgKiBAZGVmYXVsdCB7QVBQX05BTUV9IEJpb21ldHJpYyBTaWduIE9uXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogU3VidGl0bGUgaW4gYmlvbWV0cmljIFByb21wdCAoYW5kcm9pZCBvbmx5KVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBzdWJ0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gaW4gYmlvbWV0cmljIFByb21wdFxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogVGl0bGUgb2YgZmFsbGJhY2sgYnV0dG9uLlxuICAgKiBAZGVmYXVsdCBcIlVzZSBQaW5cIlxuICAgKi9cbiAgZmFsbGJhY2tCdXR0b25UaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGl0bGUgZm9yIGNhbmNlbCBidXR0b24gb24gQW5kcm9pZFxuICAgKiBAZGVmYXVsdCBcIkNhbmNlbFwiXG4gICAqL1xuICBjYW5jZWxCdXR0b25UaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGlzYWJsZSAndXNlIGJhY2t1cCcgb3B0aW9uLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZUJhY2t1cD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zIGV4dGVuZHMgRmluZ2VycHJpbnRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFN0cmluZyBzZWNyZXQgdG8gZW5jcnlwdCBhbmQgc2F2ZSwgdXNlIHNpbXBsZSBzdHJpbmdzIG1hdGNoaW5nIHRoZSByZWdleCBbYS16QS1aMC05XFwtXStcbiAgICovXG4gIHNlY3JldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAgc2VjcmV0IHdpbGwgYmUgZGVsZXRlZCB3aGVuIGJpb21ldHJ5IGl0ZW1zIGFyZSBkZWxldGVkIG9yIGVucm9sbGVkXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBpbnZhbGlkYXRlT25FbnJvbGxtZW50PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBGaW5nZXJwcmludCBBSU9cbiAqIEBkZXNjcmlwdGlvblxuICogVXNlIHNpbXBsZSBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBvbiBBbmRyb2lkIGFuZCBpT1MuXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvLiBGb3IgbW9yZSBpbmZvIGFib3V0IHBsdWdpbiwgdmlzdDogaHR0cHM6Ly9naXRodWIuY29tL05pa2xhc01lcnovY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaW5nZXJwcmludEFJTyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmluZ2VycHJpbnQtYWlvL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmYWlvOiBGaW5nZXJwcmludEFJTykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5mYWlvLnNob3coKS50aGVuKChyZXN1bHQ6IGFueSkgPT4gY29uc29sZS5sb2cocmVzdWx0KSkuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogIE9SIHdpdGggb3B0aW9ucy4uLlxuICpcbiAqIHRoaXMuZmFpby5zaG93KHtcbiAqICAgICB0aXRsZTogJ0Jpb21ldHJpYyBBdXRoZW50aWNhdGlvbicsIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBEZWZhdWx0OiBcIjxBUFBfTkFNRT4gQmlvbWV0cmljIFNpZ24gT25cIlxuICogICAgIHN1YnRpdGxlOiAnQ29vbGVzdCBQbHVnaW4gZXZlcicgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcbiAqICAgICBkZXNjcmlwdGlvbjogJ1BsZWFzZSBhdXRoZW50aWNhdGUnIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxuICogICAgIGZhbGxiYWNrQnV0dG9uVGl0bGU6ICdVc2UgQmFja3VwJywgLy8gb3B0aW9uYWwgfCBXaGVuIGRpc2FibGVCYWNrdXAgaXMgZmFsc2UgZGVmYXVsdHMgdG8gXCJVc2UgUGluXCIuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGRpc2FibGVCYWNrdXAgaXMgdHJ1ZSBkZWZhdWx0cyB0byBcIkNhbmNlbFwiXG4gKiAgICAgZGlzYWJsZUJhY2t1cDp0cnVlLCAgLy8gb3B0aW9uYWwgfCBkZWZhdWx0OiBmYWxzZVxuICogfSlcbiAqIC50aGVuKChyZXN1bHQ6IGFueSkgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZhaW8ucmVnaXN0ZXJCaW9tZXRyaWNTZWNyZXQoe1xuICogICAgICBkZXNjcmlwdGlvbjogXCJTb21lIGJpb21ldHJpYyBkZXNjcmlwdGlvblwiLCAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcbiAqICAgICAgc2VjcmV0OiBcIm15LXN1cGVyLXNlY3JldFwiLCAvLyBtYW5kYXRvcnlcbiAqICAgICAgaW52YWxpZGF0ZU9uRW5yb2xsbWVudDogdHJ1ZSwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBmYWxzZVxuICogICAgICBkaXNhYmxlQmFja3VwOiB0cnVlLCAvLyAoQW5kcm9pZCBPbmx5KSB8IG9wdGlvbmFsIHwgYWx3YXlzIGB0cnVlYCBvbiBBbmRyb2lkXG4gKiB9KVxuICogLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqICAuLi5cbiAqXG4gKiB0aGlzLmZhaW8ubG9hZEJpb21ldHJpY1NlY3JldCh7XG4gKiAgICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgYmlvbWV0cmljIGRlc2NyaXB0aW9uXCIsIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxuICogICAgICBkaXNhYmxlQmFja3VwOiB0cnVlLCAvLyBhbHdheXMgZGlzYWJsZWQgb24gQW5kcm9pZFxuICogfSlcbiAqIC50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBGaW5nZXJwcmludE9wdGlvbnNcbiAqIEZpbmdlcnByaW50U2VjcmV0T3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbmdlcnByaW50QUlPJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvJyxcbiAgcGx1Z2luUmVmOiAnRmluZ2VycHJpbnQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL05pa2xhc01lcnovY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbmdlcnByaW50QUlPIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19VTktOT1dOX0VSUk9SID0gLTEwMDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfVU5BVkFJTEFCTEUgPSAtMTAxO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19BVVRIRU5USUNBVElPTl9GQUlMRUQgPSAtMTAyO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19TREtfTk9UX1NVUFBPUlRFRCA9IC0xMDM7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0hBUkRXQVJFX05PVF9TVVBQT1JURUQgPSAtMTA0O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19QRVJNSVNTSU9OX05PVF9HUkFOVEVEID0gLTEwNTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfTk9UX0VOUk9MTEVEID0gLTEwNjtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfSU5URVJOQUxfUExVR0lOX0VSUk9SID0gLTEwNztcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfRElTTUlTU0VEID0gLTEwODtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfUElOX09SX1BBVFRFUk5fRElTTUlTU0VEID0gLTEwOTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfU0NSRUVOX0dVQVJEX1VOU0VDVVJFRCA9IC0xMTA7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0xPQ0tFRF9PVVQgPSAtMTExO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19MT0NLRURfT1VUX1BFUk1BTkVOVCA9IC0xMTI7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1NFQ1JFVF9OT1RfRk9VTkQgPSAtMTEzO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGF1dGhlbnRpY2F0aW9uIGRpYWxvZ3VlIGFuZCByZWdpc3RlciBzZWNyZXRcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludFNlY3JldE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZ2lzdGVyQmlvbWV0cmljU2VjcmV0KG9wdGlvbnM6IEZpbmdlcnByaW50U2VjcmV0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWUgYW5kIGxvYWQgc2VjcmV0XG4gICAqIEBwYXJhbSB7RmluZ2VycHJpbnRPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHBsYXRmb3JtIHNwZWNpZmljIGZpbmdlcnByaW50IEFQSVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhdXRoZW50aWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2FkQmlvbWV0cmljU2VjcmV0KG9wdGlvbnM6IEZpbmdlcnByaW50T3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWVcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3cob3B0aW9uczogRmluZ2VycHJpbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==