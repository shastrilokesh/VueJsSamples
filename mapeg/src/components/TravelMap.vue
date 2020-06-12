<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyDnmoQYbx1vLroeFmFmru6EuqVKxpvY97E"
    style="width:900px; height:500px;"
  >
    // insert your google maps api key to render styled map
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
        @clickable="true"
      ></GoogleMapMarker>
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader";
import GoogleMapMarker from "./GoogleMapMarker";
//import GoogleMapLine from "./GoogleMapLine";

import { mapSettings } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker
  },

  data() {
    return {
      markers: [
        {
          id: "a",
          position: { lat: 19, lng: 72 }
        },
        {
          id: "b",
          position: { lat: 19.5, lng: 72.5 }
        }
      ]
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },

    mapCenter() {
      return this.markers[1].position;
    }
  }
};
</script>
