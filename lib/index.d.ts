import { Options as AutoCompleteOptions } from "getaddress-autocomplete";
import { SearchOn } from "getaddress-typeahead";
import { Options as LocationOptions } from "getaddress-location";
import { SetupOptions as FindOptions } from "getaddress-find";
import { Options as LocationNativeOptions } from "getaddress-location-native";
import { Options as AutoCompleteNativeOptions } from "getaddress-autocomplete-native";
import { Options as ModalOptions } from "getaddress-autocomplete-modal";
declare function modal(id: string, api_key: string, options: Partial<ModalOptions>): HTMLElement | undefined;
declare function autocomplete(id: string, api_key: string, options: Partial<AutoCompleteOptions>): HTMLInputElement | undefined;
declare function autocompleteNative(id: string, api_key: string, options: Partial<AutoCompleteNativeOptions>): HTMLInputElement | undefined;
declare function typeahead(id: string, search_on: SearchOn, api_key: string): void;
declare function location(id: string, api_key: string, options: Partial<LocationOptions>): void;
declare function locationNative(id: string, api_key: string, options: Partial<LocationNativeOptions>): void;
declare function find(id: string, api_key: string, options?: FindOptions): HTMLElement | null;
declare function destroy(): void;
export { AutoCompleteOptions, autocomplete, destroy, typeahead, SearchOn, location, LocationOptions, find, FindOptions, LocationNativeOptions, locationNative, autocompleteNative, AutoCompleteNativeOptions, modal, ModalOptions };
