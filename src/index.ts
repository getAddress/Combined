import {autocomplete as acV2,destroy as acV2Destroy, Options as AutoCompleteOptionsV2} from "getaddress-autocomplete"; 
import {typeahead as t,destroy as tDestroy ,SearchOn} from "getaddress-typeahead";
import {location as l, destroy as lDestory, Options as LocationOptions} from "getaddress-location";
import {SetupOptions as FindOptions,find as f} from "getaddress-find";
import {location as ln, destroy as lnDestory, Options as LocationNativeOptions} from "getaddress-location-native";
import {autocomplete as acn,destroy as acnDestroy, Options as AutoCompleteNativeOptions} from "getaddress-autocomplete-native"; 
import {modal as m, Options as ModalOptions, destroy as mDestroy} from "getaddress-autocomplete-modal";
import {autocomplete as acV3,destroy as acV3Destroy, Options as AutoCompleteOptionsV3} from '@getaddress/autocomplete';

function modal(id:string,api_key:string,options:Partial<ModalOptions>)
{
    return m(id,api_key,options);
}

function autocomplete(id:string,api_key:string, options: Partial<AutoCompleteOptionsV2>)
{
    return acV2(id, api_key,options);
}

function autocompleteV2  (id:string,api_key:string, options: Partial<AutoCompleteOptionsV2>)
{
    return acV2(id, api_key,options);
}

const autocompleteV3 = async(id:string,api_key:string, options: Partial<AutoCompleteOptionsV3>)=>
{
    return await acV3(id, api_key,options);
}

function autocompleteNative(id:string,api_key:string, options: Partial<AutoCompleteNativeOptions>)
{
    return acn(id, api_key,options);
}

function typeahead(id:string, search_on:SearchOn,api_key:string){
    return t(id,search_on,api_key);
}

function location(id:string,api_key:string, options: Partial<LocationOptions>){
     return l(id, api_key,options);
}

function locationNative(id:string,api_key:string, options: Partial<LocationNativeOptions>){
     return ln(id, api_key,options);
}

function find(id:string,api_key:string, options:FindOptions = new FindOptions()){
    return f(id,api_key,options);
}

function destroy()
{
    acV2Destroy();
    acV3Destroy();
    tDestroy();
    lDestory();
    lnDestory();
    mDestroy();
}

export {
AutoCompleteOptionsV2,
autocomplete, 
autocompleteV2,
destroy, 
typeahead, SearchOn, 
location ,LocationOptions,
find, FindOptions,
LocationNativeOptions,locationNative,
autocompleteNative,AutoCompleteNativeOptions, 
modal,ModalOptions,
AutoCompleteOptionsV3,
autocompleteV3}