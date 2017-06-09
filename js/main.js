require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/SceneLayer",
    "dojo/domReady!"
], function (Map, SceneView, SceneLayer) {
    //variable for esri map object
    let map;

    //variable for esri sceneview object
    let view;

    //method to create and config an esri map object
    let createMap = function () {
        map = new Map({
            "basemap": basemap,
            "ground": ground
        });
    }

    //method to create and config an esri sceneview object
    let createSceneView = function () {
        view = new SceneView({
            "container": container,
            "map": map,
            "center": center,
            "scale": scale
        });
    }

    //init method to initialize application
    let init = function () {
        createMap();
        createSceneView();
    }

    //fire the init function
    init();
});
