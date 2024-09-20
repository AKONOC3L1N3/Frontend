<template>
  <div class="map" id="map"></div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import Geolocation from "ol/Geolocation";
import feature from "ol/Feature";
import point from "ol/geom/Point";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import icon from "ol/style/Icon";

export default {
  name: "MapComponent",
  mounted() {
    const view = new View({
      center: [0, 0],
      zoom: 4,
      constrainResolution: true,
    });
    const accuracyFeature = new feature();
    const positionFeature = new feature({
      style: new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({ color: "#3399CC" }),
          stroke: new Stroke({ color: "#fff", width: 2 }),
        }),
      }),
    });
    const position = [0, 0];

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [
              new feature({
                geometry: new point([]),
              }),
              accuracyFeature,
              positionFeature,
            ],
          }),
          style: new Style({
            image: new icon({
              src: "https://img.icons8.com/?size=30&id=85149&format=png&color=000000",
              anchor: [0.5, 1],
              "fill-color": "rgba(255, 255, 255, 0.2)",
              "stroke-color": "#ffcc33",
              "stroke-width": 2,
              "circle-radius": 7,
              "circle-fill-color": "#ffcc33",
            }),
          }),
        }),
      ],
      view: view,
    });

    const geolocation = new Geolocation({
      tracking: true,
      projection: map.getView().getProjection(),
    });

    geolocation.on("change:position", () => {
      const coordinates = geolocation.getPosition();
      position.value = coordinates;
      positionFeature.setGeometry(coordinates ? new point(coordinates) : null);
      map.getView().setCenter(coordinates);
    });
  },
};
</script>

<style>
.map {
  height: 100%;
  width: 100%;
}
</style>