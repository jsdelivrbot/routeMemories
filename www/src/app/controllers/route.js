angular.module('starter')
        .controller('RouteCtrl',
                function ($scope,
                        $rootScope,
                        $state,
                        $ionicModal,
                        $cordovaGeolocation,
                        mapFactory,
                        $stateParams,
                        uiGmapGoogleMapApi,
                        routeDetailsFactory) {

                    var route = routeDetailsFactory.getTempRouteDetails();
                    $scope.route = route;
                    $scope.routeId = $stateParams.routeId;

                    // uiGmapGoogleMapApi is a promise.
                    // The "then" callback function provides the google.maps object.
                    uiGmapGoogleMapApi.then(function (maps) {
                        showMap(maps);
                    });

                    var showMap = function (maps) {
                        // TODO change default center
                        // the center is the last position
                        var mapCenter = new maps.LatLng(42.000, 21.4333);
                        var mapElement = document.getElementById('route_map');

                        var latLngList = new Array();
                        var markerList = new Array();
                        if ($scope.route.latLngList !== undefined && $scope.route.latLngList !== null && $scope.route.latLngList !== "") {
                            var positonList = $scope.route.latLngList.split(";");
                            positonList.forEach(function (position, index) {
                                var latAndLng = position.split(",");
                                var latlng = new maps.LatLng(latAndLng[0], latAndLng[1]);
                                latLngList.push(latlng);

                                if (index === 0) {
                                    // add start point marker
                                    var startMarker = {
                                        "title": 'My location',
                                        "lat": latAndLng[0],
                                        "lng": latAndLng[1],
                                        "description": "Start position"
                                    }
                                    markerList.push(startMarker);
                                } else if (index === (positonList.length - 1)) {
                                    // add start point marker
                                    var endMarker = {
                                        "title": 'Final location',
                                        "lat": latAndLng[0],
                                        "lng": latAndLng[1],
                                        "description": "End position"
                                    }
                                    markerList.push(endMarker);
                                }
                            });
                        }

                        mapFactory.showMap(
                                maps, mapCenter, mapElement,
                                markerList,
                                $rootScope.imgList,
                                latLngList,
                                true);
                    }

                });