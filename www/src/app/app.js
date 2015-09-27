// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter',
        [
            'ionic',
            'ngCordova',
            'uiGmapgoogle-maps'
        ])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'src/app/views/menu.html',
                        controller: 'MenuCtrl'
                    })

                    .state('app.search', {
                        url: '/search',
                        views: {
                            'menuContent': {
                                templateUrl: 'src/app/views/search.html'
                            }
                        }
                    })

                    .state('app.home', {
                        url: '/home',
                        views: {
                            'menuContent': {
                                templateUrl: 'src/app/views/home.html',
                                controller: 'HomeCtrl'
                            }
                        }
                    })
                    .state('app.playlists', {
                        url: '/playlists',
                        views: {
                            'menuContent': {
                                templateUrl: 'src/app/views/playlists.html',
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })

                    .state('app.single', {
                        url: '/playlists/:playlistId',
                        views: {
                            'menuContent': {
                                templateUrl: 'src/app/views/playlist.html',
                                controller: 'PlaylistCtrl'
                            }
                        }
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('app/home');
            
//             uiGmapGoogleMapApiProvider.configure({
//                key: 'AIzaSyD1Gu7s2Eh1LcXGDd4-88DqAbijwYH-iBk',
//                v: '3.17',
//                language: 'en',
//                sensor: 'false',
//            })
        });
