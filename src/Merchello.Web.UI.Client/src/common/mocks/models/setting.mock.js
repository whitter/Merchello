angular.module('merchello.mocks')
    .factory('settingMock', ['mockHelper', function(mockHelper) {

        function setting() {
            return mockHelper.downCaseProperties(
            {"CurrencyCode":"USD","NextOrderNumber":1201,"NextInvoiceNumber":1201,"NextShipmentNumber":29,"DateFormat":"dd-MM-yyyy","TimeFormat":"am-pm","UnitSystem":"Imperial","GlobalShippable":false,"GlobalTaxable":false,"GlobalTrackInventory":false,"GlobalShippingIsTaxable":false}
            );
        }

        function allCurrencies() {
            return mockHelper.downCasePropertiesInObjectArray([{"$id":"7","CurrencyCode":"USD","Symbol":"$","Name":"US Dollar"},{"$id":"46","CurrencyCode":"GBP","Symbol":"£","Name":"UK Pound Sterling"},{"$id":"60","CurrencyCode":"NZD","Symbol":"$","Name":"New Zealand Dollar"},{"$id":"61","CurrencyCode":"GTQ","Symbol":"Q","Name":"Guatemalan Quetzal"},{"$id":"62","CurrencyCode":"RWF","Symbol":"RWF","Name":"Rwandan Franc"},{"$id":"63","CurrencyCode":"XOF","Symbol":"XOF","Name":"XOF Senegal"}]);
        }

        function usdCurrency() {
            return mockHelper.downCaseProperties({"$id":"7","CurrencyCode":"USD","Symbol":"$","Name":"US Dollar"});
        }

        function allCountries() {
            return mockHelper.downCasePropertiesInObjectArray(
                [{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SA","Name":"Saudi Arabia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BG","Name":"Bulgaria","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ES","Name":"Spain","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TW","Name":"Taiwan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CZ","Name":"Czech Republic","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"DK","Name":"Denmark","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"DE","Name":"Germany","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"GR","Name":"Greece","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"US","Name":"United States","ProvinceLabel":"Provinces","Provinces":[{"Name":"Alabama","Code":"AL"},{"Name":"Alaska","Code":"AK"},{"Name":"Arizona","Code":"AZ"},{"Name":"Arkansas","Code":"AR"},{"Name":"California","Code":"CA"},{"Name":"Colorado","Code":"CO"},{"Name":"Connecticut","Code":"CT"},{"Name":"Delaware","Code":"DE"},{"Name":"Florida","Code":"FL"},{"Name":"Georgia","Code":"GA"},{"Name":"Hawaii","Code":"HI"},{"Name":"Idaho","Code":"ID"},{"Name":"Illinois","Code":"IL"},{"Name":"Indiana","Code":"IN"},{"Name":"Iowa","Code":"IA"},{"Name":"Kansas","Code":"KS"},{"Name":"Kentucky","Code":"KY"},{"Name":"Louisiana","Code":"LA"},{"Name":"Maine","Code":"ME"},{"Name":"Maryland","Code":"MD"},{"Name":"Massachusetts","Code":"MA"},{"Name":"Michigan","Code":"MI"},{"Name":"Minnesota","Code":"MN"},{"Name":"Mississippi","Code":"MS"},{"Name":"Missouri","Code":"MO"},{"Name":"Montana","Code":"MT"},{"Name":"Nebraska","Code":"NE"},{"Name":"Nevada","Code":"NV"},{"Name":"New Hampshire","Code":"NH"},{"Name":"New Jersey","Code":"NJ"},{"Name":"New Mexico","Code":"NM"},{"Name":"New York","Code":"NY"},{"Name":"North Carolina","Code":"NC"},{"Name":"North Dakota","Code":"ND"},{"Name":"Ohio","Code":"OH"},{"Name":"Oklahoma","Code":"OK"},{"Name":"Oregon","Code":"OR"},{"Name":"Pennsylvania","Code":"PA"},{"Name":"Rhode Island","Code":"RI"},{"Name":"South Carolina","Code":"SC"},{"Name":"South Dakota","Code":"SD"},{"Name":"Tennessee","Code":"TN"},{"Name":"Texas","Code":"TX"},{"Name":"Utah","Code":"UT"},{"Name":"Vermont","Code":"VT"},{"Name":"Virginia","Code":"VA"},{"Name":"Washington","Code":"WA"},{"Name":"West Virginia","Code":"WV"},{"Name":"Wisconsin","Code":"WI"},{"Name":"Wyoming","Code":"WY"},{"Name":"American Samoa","Code":"AS"},{"Name":"District of Columbia","Code":"DC"},{"Name":"Federated States of Micronesia","Code":"FM"},{"Name":"Guam","Code":"GU"},{"Name":"Marshall Islands","Code":"MH"},{"Name":"Northern Mariana Islands","Code":"MP"},{"Name":"Palau","Code":"PW"},{"Name":"Puerto Rico","Code":"PR"},{"Name":"Virgin Islands","Code":"VI"},{"Name":"Armed Forces - Africa, Canada, Europe","Code":"AE"},{"Name":"Armed Forces Americas","Code":"AA"},{"Name":"Armed Forces Pacific","Code":"AP"}]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"FI","Name":"Finland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"FR","Name":"France","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IL","Name":"Israel","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"HU","Name":"Hungary","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IS","Name":"Iceland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IT","Name":"Italy","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"JP","Name":"Japan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KR","Name":"Korea","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NL","Name":"Netherlands","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NO","Name":"Norway","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PL","Name":"Poland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BR","Name":"Brazil","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CH","Name":"Switzerland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"RO","Name":"Romania","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"RU","Name":"Russia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"HR","Name":"Croatia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SK","Name":"Slovakia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AL","Name":"Albania","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SE","Name":"Sweden","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TH","Name":"Thailand","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TR","Name":"Turkey","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PK","Name":"Islamic Republic of Pakistan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ID","Name":"Indonesia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"UA","Name":"Ukraine","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BY","Name":"Belarus","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SI","Name":"Slovenia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"EE","Name":"Estonia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LV","Name":"Latvia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LT","Name":"Lithuania","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TJ","Name":"Tajikistan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IR","Name":"Iran","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"VN","Name":"Vietnam","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AM","Name":"Armenia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AZ","Name":"Azerbaijan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MK","Name":"Macedonia (FYROM)","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ZA","Name":"South Africa","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"GE","Name":"Georgia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"FO","Name":"Faroe Islands","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IN","Name":"India","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MT","Name":"Malta","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MY","Name":"Malaysia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KZ","Name":"Kazakhstan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KG","Name":"Kyrgyzstan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KE","Name":"Kenya","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TM","Name":"Turkmenistan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"UZ","Name":"Uzbekistan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MN","Name":"Mongolia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CN","Name":"People's Republic of China","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"GB","Name":"United Kingdom","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KH","Name":"Cambodia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LA","Name":"Lao P.D.R.","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SY","Name":"Syria","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LK","Name":"Sri Lanka","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CA","Name":"Canada","ProvinceLabel":"Provinces","Provinces":[{"Name":"Alberta","Code":"AB"},{"Name":"British Columbia","Code":"BC"},{"Name":"Manitoba","Code":"MB"},{"Name":"New Brunswick","Code":"NB"},{"Name":"Newfoundland and Labrador","Code":"NL"},{"Name":"Northwest Territories","Code":"NT"},{"Name":"Nova Scotia","Code":"NS"},{"Name":"Nunavut","Code":"NU"},{"Name":"Ontario","Code":"ON"},{"Name":"Prince Edward Island","Code":"PE"},{"Name":"Quebec","Code":"QC"},{"Name":"Saskatchewan","Code":"SK"},{"Name":"Yukon","Code":"YT"}]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ET","Name":"Ethiopia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NP","Name":"Nepal","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AF","Name":"Afghanistan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PH","Name":"Republic of the Philippines","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MV","Name":"Maldives","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NG","Name":"Nigeria","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BO","Name":"Bolivia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LU","Name":"Luxembourg","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"GL","Name":"Greenland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CL","Name":"Chile","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NZ","Name":"New Zealand","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"GT","Name":"Guatemala","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"RW","Name":"Rwanda","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SN","Name":"Senegal","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IQ","Name":"Iraq","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MX","Name":"Mexico","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BE","Name":"Belgium","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PT","Name":"Portugal","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CS","Name":"Serbia and Montenegro (Former)","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IE","Name":"Ireland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BN","Name":"Brunei Darussalam","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BD","Name":"Bangladesh","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"DZ","Name":"Algeria","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"EC","Name":"Ecuador","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"EG","Name":"Egypt","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"HK","Name":"Hong Kong S.A.R.","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AT","Name":"Austria","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AU","Name":"Australia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PE","Name":"Peru","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LY","Name":"Libya","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SG","Name":"Singapore","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BA","Name":"Bosnia and Herzegovina","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MO","Name":"Macao S.A.R.","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LI","Name":"Liechtenstein","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CR","Name":"Costa Rica","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MA","Name":"Morocco","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PA","Name":"Panama","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MC","Name":"Principality of Monaco","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TN","Name":"Tunisia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"DO","Name":"Dominican Republic","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"OM","Name":"Oman","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"JM","Name":"Jamaica","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"VE","Name":"Bolivarian Republic of Venezuela","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"YE","Name":"Yemen","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"029","Name":"Caribbean","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CO","Name":"Colombia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"RS","Name":"Serbia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BZ","Name":"Belize","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"JO","Name":"Jordan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TT","Name":"Trinidad and Tobago","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AR","Name":"Argentina","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ME","Name":"Montenegro","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LB","Name":"Lebanon","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ZW","Name":"Zimbabwe","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KW","Name":"Kuwait","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AE","Name":"U.A.E.","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"UY","Name":"Uruguay","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BH","Name":"Bahrain","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PY","Name":"Paraguay","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"QA","Name":"Qatar","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SV","Name":"El Salvador","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"HN","Name":"Honduras","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NI","Name":"Nicaragua","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PR","Name":"Puerto Rico","ProvinceLabel":"","Provinces":[]}]
            );
        }

        return {
            setting: setting,
            allCurrencies: allCurrencies,
            allCountries: allCountries,
            usdCurrency: usdCurrency
        };
    }]);