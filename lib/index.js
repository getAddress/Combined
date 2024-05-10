import { autocomplete as ac, destroy as acDestroy, Options as AutoCompleteOptions } from "getaddress-autocomplete";
import { typeahead as t, destroy as tDestroy } from "getaddress-typeahead";
import { location as l, destroy as lDestory, Options as LocationOptions } from "getaddress-location";
import { SetupOptions as FindOptions, find as f } from "getaddress-find";
function autocomplete(id, api_key, options) {
    ac(id, api_key, options);
}
function typeahead(id, search_on, api_key) {
    t(id, search_on, api_key);
}
function location(id, api_key, options) {
    l(id, api_key, options);
}
function find(id, api_key, options = new FindOptions()) {
    f(id, api_key, options);
}
function destroy() {
    acDestroy();
    tDestroy();
    lDestory();
}
export { AutoCompleteOptions, autocomplete, destroy, typeahead, LocationOptions, location, find, FindOptions };
//# sourceMappingURL=index.js.map