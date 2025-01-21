var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { autocomplete as acV2, destroy as acV2Destroy, Options as AutoCompleteOptionsV2 } from "getaddress-autocomplete";
import { typeahead as t, destroy as tDestroy } from "getaddress-typeahead";
import { location as l, destroy as lDestory, Options as LocationOptions } from "getaddress-location";
import { SetupOptions as FindOptions, find as f } from "getaddress-find";
import { location as ln, destroy as lnDestory, Options as LocationNativeOptions } from "getaddress-location-native";
import { autocomplete as acn, Options as AutoCompleteNativeOptions } from "getaddress-autocomplete-native";
import { modal as m, Options as ModalOptions, destroy as mDestroy } from "getaddress-autocomplete-modal";
import { autocomplete as acV3, destroy as acV3Destroy, Options as AutoCompleteOptionsV3 } from '@getaddress/autocomplete';
function modal(id, api_key, options) {
    return m(id, api_key, options);
}
function autocomplete(id, api_key, options) {
    return acV2(id, api_key, options);
}
function autocompleteV2(id, api_key, options) {
    return acV2(id, api_key, options);
}
const autocompleteV3 = (id, api_key, options) => __awaiter(void 0, void 0, void 0, function* () {
    return yield acV3(id, api_key, options);
});
function autocompleteNative(id, api_key, options) {
    return acn(id, api_key, options);
}
function typeahead(id, search_on, api_key) {
    return t(id, search_on, api_key);
}
function location(id, api_key, options) {
    return l(id, api_key, options);
}
function locationNative(id, api_key, options) {
    return ln(id, api_key, options);
}
function find(id, api_key, options = new FindOptions()) {
    return f(id, api_key, options);
}
function destroy() {
    acV2Destroy();
    acV3Destroy();
    tDestroy();
    lDestory();
    lnDestory();
    mDestroy();
}
export { AutoCompleteOptionsV2, autocomplete, autocompleteV2, destroy, typeahead, location, LocationOptions, find, FindOptions, LocationNativeOptions, locationNative, autocompleteNative, AutoCompleteNativeOptions, modal, ModalOptions, AutoCompleteOptionsV3, autocompleteV3 };
//# sourceMappingURL=index.js.map