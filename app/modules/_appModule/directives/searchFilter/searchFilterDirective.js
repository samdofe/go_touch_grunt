'use strict';

/**
 * @ngdoc function
 * @name goTouchApp.directive:header
 * @description
 * # header
 * Directive of the goTouchApp
 */
ngModule.directive('searchFilterActorsModal', ['actorsService', function (actorsService) {
  return {
    restrict: 'EA',
    templateUrl: './modules/_appModule/directives/searchFilter/searchFilterDirectiveTemplate.html',
    link: function (scope, elem, attrs){

      scope.searchDirective = {};
      scope.searchDirective.locations = [
        {
          "name": "Alabama",
          "abbreviation": "AL"
        },
        {
          "name": "Alaska",
          "abbreviation": "AK"
        },
        {
          "name": "American Samoa",
          "abbreviation": "AS"
        },
        {
          "name": "Arizona",
          "abbreviation": "AZ"
        },
        {
          "name": "Arkansas",
          "abbreviation": "AR"
        },
        {
          "name": "California",
          "abbreviation": "CA"
        },
        {
          "name": "Colorado",
          "abbreviation": "CO"
        },
        {
          "name": "Connecticut",
          "abbreviation": "CT"
        },
        {
          "name": "Delaware",
          "abbreviation": "DE"
        },
        {
          "name": "District Of Columbia",
          "abbreviation": "DC"
        },
        {
          "name": "Federated States Of Micronesia",
          "abbreviation": "FM"
        },
        {
          "name": "Florida",
          "abbreviation": "FL"
        },
        {
          "name": "Georgia",
          "abbreviation": "GA"
        },
        {
          "name": "Guam",
          "abbreviation": "GU"
        },
        {
          "name": "Hawaii",
          "abbreviation": "HI"
        },
        {
          "name": "Idaho",
          "abbreviation": "ID"
        },
        {
          "name": "Illinois",
          "abbreviation": "IL"
        },
        {
          "name": "Indiana",
          "abbreviation": "IN"
        },
        {
          "name": "Iowa",
          "abbreviation": "IA"
        },
        {
          "name": "Kansas",
          "abbreviation": "KS"
        },
        {
          "name": "Kentucky",
          "abbreviation": "KY"
        },
        {
          "name": "Louisiana",
          "abbreviation": "LA"
        },
        {
          "name": "Maine",
          "abbreviation": "ME"
        },
        {
          "name": "Marshall Islands",
          "abbreviation": "MH"
        },
        {
          "name": "Maryland",
          "abbreviation": "MD"
        },
        {
          "name": "Massachusetts",
          "abbreviation": "MA"
        },
        {
          "name": "Michigan",
          "abbreviation": "MI"
        },
        {
          "name": "Minnesota",
          "abbreviation": "MN"
        },
        {
          "name": "Mississippi",
          "abbreviation": "MS"
        },
        {
          "name": "Missouri",
          "abbreviation": "MO"
        },
        {
          "name": "Montana",
          "abbreviation": "MT"
        },
        {
          "name": "Nebraska",
          "abbreviation": "NE"
        },
        {
          "name": "Nevada",
          "abbreviation": "NV"
        },
        {
          "name": "New Hampshire",
          "abbreviation": "NH"
        },
        {
          "name": "New Jersey",
          "abbreviation": "NJ"
        },
        {
          "name": "New Mexico",
          "abbreviation": "NM"
        },
        {
          "name": "New York",
          "abbreviation": "NY"
        },
        {
          "name": "North Carolina",
          "abbreviation": "NC"
        },
        {
          "name": "North Dakota",
          "abbreviation": "ND"
        },
        {
          "name": "Northern Mariana Islands",
          "abbreviation": "MP"
        },
        {
          "name": "Ohio",
          "abbreviation": "OH"
        },
        {
          "name": "Oklahoma",
          "abbreviation": "OK"
        },
        {
          "name": "Oregon",
          "abbreviation": "OR"
        },
        {
          "name": "Palau",
          "abbreviation": "PW"
        },
        {
          "name": "Pennsylvania",
          "abbreviation": "PA"
        },
        {
          "name": "Puerto Rico",
          "abbreviation": "PR"
        },
        {
          "name": "Rhode Island",
          "abbreviation": "RI"
        },
        {
          "name": "South Carolina",
          "abbreviation": "SC"
        },
        {
          "name": "South Dakota",
          "abbreviation": "SD"
        },
        {
          "name": "Tennessee",
          "abbreviation": "TN"
        },
        {
          "name": "Texas",
          "abbreviation": "TX"
        },
        {
          "name": "Utah",
          "abbreviation": "UT"
        },
        {
          "name": "Vermont",
          "abbreviation": "VT"
        },
        {
          "name": "Virgin Islands",
          "abbreviation": "VI"
        },
        {
          "name": "Virginia",
          "abbreviation": "VA"
        },
        {
          "name": "Washington",
          "abbreviation": "WA"
        },
        {
          "name": "West Virginia",
          "abbreviation": "WV"
        },
        {
          "name": "Wisconsin",
          "abbreviation": "WI"
        },
        {
          "name": "Wyoming",
          "abbreviation": "WY"
        }
      ];

      /*
      * Filter actors list with a call to Actors service
      * */
      scope.setActorsQueryParams = function (){

        var queryObject = {
          name: scope.searchDirective.name,
          location: scope.searchDirective.selectedLocation,
          isTop: scope.searchDirective.isTop,
          pty: scope.searchDirective.popularity
        };

        /*Call to filter the actors list passing the parameters from the modal*/
        actorsService.loadFilterActorsList(queryObject).then(function (serviceResponse){
          if(serviceResponse.code == 200){
            console.info("searchFilterActorsModal :: setActorsQueryParams : ok");
          }else{
            console.info("searchFilterActorsModal :: setActorsQueryParams : error in service response");
          }
        }, function error (){
          console.error("searchFilterActorsModal :: setActorsQueryParams execution error ");
        })
      };

    }
  }
}]);



