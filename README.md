# Javascript - Combined
Autocomplete, Typeahead, Find and Location JavaScript libraries. 

## Install

###  From NPM
```
npm install getaddress-combined
```
### Or CDN
```
<script src="https://cdn.getaddress.io/scripts/getaddress-1.0.0.min.js"></script>
```

## Usage
```
  <input type="text" id="autocomplete_input_id" > 
  <br/>

  <input type="text" id="find_input_id" > 
  <br/>

  <input type="text" id="typeahead_input_id" > 
  <br/>

  <input type="text" id="location_input_id" > 
  <br/>

  <input type="text" id="location_native_input_id" > 
  <br/>

  <input type="text" id="autocomplete_native_input_id" > 
  <br/>

  <script>

    getAddress.autocomplete("autocomplete_input_id","API Key or Domain Token");

    getAddress.find('find_input_id','API Key or Domain Token' );

    getAddress.typeahead('typeahead_input_id','postcode','API Key or Domain Token');

    getAddress.location('location_input_id','API Key or Domain Token' );

    getAddress.locationNative('location_native_input_id','API Key or Domain Token' );

    getAddress.autocompleteNative('autocomplete_native_input_id','API Key or Domain Token' );

  </script>