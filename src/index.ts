import {autocomplete as ac,destroy as acDestroy, Options as AutoCompleteOptions} from "getaddress-autocomplete"; 
import {typeahead as t,destroy as tDestroy ,SearchOn} from "getaddress-typeahead";
import {location as l, destroy as lDestory, Options as LocationOptions} from "getaddress-location";
import {SetupOptions as FindOptions,find as f} from "getaddress-find"

function autocomplete(id:string,api_key:string, options: Partial<AutoCompleteOptions>)
{
    ac(id, api_key,options);
}

function typeahead(id:string, search_on:SearchOn,api_key:string){
    t(id,search_on,api_key);
}

function location(id:string,api_key:string, options: Partial<LocationOptions>){
     l(id, api_key,options);
}

function find(id:string,api_key:string, options:FindOptions = new FindOptions()){
    f(id,api_key,options);
}

function destroy()
{
    acDestroy();
    tDestroy();
    lDestory();
}

export {AutoCompleteOptions,autocomplete, destroy, typeahead, SearchOn, LocationOptions,location, find, FindOptions}