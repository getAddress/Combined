import { autocomplete as ac, destroy as acDestroy, Options as AutoCompleteOptions } from "getaddress-autocomplete";
import { typeahead as t, destroy as tDestroy } from "getaddress-typeahead";
import { location as l, destroy as lDestory, Options as LocationOptions } from "getaddress-location";
import { SetupOptions as FindOptions, find as f } from "getaddress-find";
import { location as ln, destroy as lnDestory, Options as LocationNativeOptions } from "getaddress-location-native";
import { autocomplete as acn, Options as AutoCompleteNativeOptions } from "getaddress-autocomplete-native";
function autocomplete(id, api_key, options) {
    ac(id, api_key, options);
}
function autocompleteNative(id, api_key, options) {
    acn(id, api_key, options);
}
function typeahead(id, search_on, api_key) {
    t(id, search_on, api_key);
}
function location(id, api_key, options) {
    l(id, api_key, options);
}
function locationNative(id, api_key, options) {
    ln(id, api_key, options);
}
function find(id, api_key, options = new FindOptions()) {
    f(id, api_key, options);
}
function destroy() {
    acDestroy();
    tDestroy();
    lDestory();
    lnDestory();
}
export { AutoCompleteOptions, autocomplete, destroy, typeahead, LocationOptions, location, find, FindOptions, LocationNativeOptions, locationNative, autocompleteNative, AutoCompleteNativeOptions };
//# sourceMappingURL=index.js.map