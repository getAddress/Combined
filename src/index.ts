import {autocomplete as ac,destroy as acDestroy, Options as AutoCompleteOptions} from "getaddress-autocomplete"; 
import {typeahead as t,destroy as tDestroy ,SearchOn} from "getaddress-typeahead";
import {location as l, destroy as lDestory, Options as LocationOptions} from "getaddress-location";
import {SetupOptions as FindOptions,find as f} from "getaddress-find";
import {location as ln, destroy as lnDestory, Options as LocationNativeOptions} from "getaddress-location-native";
import {autocomplete as acn,destroy as acnDestroy, Options as AutoCompleteNativeOptions} from "getaddress-autocomplete-native"; 

function autocomplete(id:string,api_key:string, options: Partial<AutoCompleteOptions>)
{
    ac(id, api_key,options);
}

function autocompleteNative(id:string,api_key:string, options: Partial<AutoCompleteNativeOptions>)
{
    acn(id, api_key,options);
}

function typeahead(id:string, search_on:SearchOn,api_key:string){
    t(id,search_on,api_key);
}

function location(id:string,api_key:string, options: Partial<LocationOptions>){
     l(id, api_key,options);
}

function locationNative(id:string,api_key:string, options: Partial<LocationNativeOptions>){
     ln(id, api_key,options);
}

function find(id:string,api_key:string, options:FindOptions = new FindOptions()){
    f(id,api_key,options);
}

function destroy()
{
    acDestroy();
    tDestroy();
    lDestory();
    lnDestory();
}

export {AutoCompleteOptions,
autocomplete, destroy, typeahead, 
SearchOn, LocationOptions,location, find, 
FindOptions,LocationNativeOptions,
locationNative,autocompleteNative,AutoCompleteNativeOptions}