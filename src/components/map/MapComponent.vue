<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

export default {
  name: "MapComponent",
  data() {
    return {
      start: null,
      end: null,
      lat: null,
    };
  },
  mounted() {
    const leafletMap = L.map("map").setView([0, 0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(leafletMap);
    var greenIcon = L.icon({
      iconUrl: "https://img.icons8.com/ios-filled/50/marker.png",
      iconSize: [20, 20], // size of the icon
      iconAnchor: [10, 24], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    var carIcon = L.icon({
      iconUrl: "https://img.icons8.com/ios-filled/50/hatchback.png",
      iconSize: [20, 20], // size of the icon
      iconAnchor: [10, 24], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    leafletMap.on("click", function (e) {
      console.log("bluuuuuuuuu", e);
      
      if (!this.start) {
        this.start = [e.latlng.lat, e.latlng.lng];
      } else if (!this.end) {
        this.end = [e.latlng.lat, e.latlng.lng];

        L.Routing.control({
          waypoints: [L.latLng(this.start), L.latLng(this.end)],
        })
          .on("routesfound", (e) => {
            // this.routingControl = e.routes;
            // const summary = this.routingControl[0].summary;
            // console.log(`Total distance:${summary.totalDistance} meters`);
            //console.log(`Total time:${summary.totalTime} seconds`);
            L.marker(this.end, { icon: greenIcon }).addTo(leafletMap);
            var loop = L.marker(this.end, {
              icon: carIcon,
            }).addTo(leafletMap);
            e.routes[0].coordinates.forEach(function (coord, index) {
              setTimeout(() => {
                loop.setLatLng([coord.lat, coord.lng]);
              }, 100 * index);
            });
          })
          .addTo(leafletMap);
      }
      L.marker(this.start, { icon: greenIcon }).addTo(leafletMap);
    });
  },
};
</script>

<style>
.map {
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
}
</style>
