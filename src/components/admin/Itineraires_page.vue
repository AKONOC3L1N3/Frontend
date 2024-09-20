<template>
    <div class="h-full w-full relative">
        <div class="w-full h-full">
            <MapContainer />
        </div>

        <button class="bg-blue-500 text-white p-2 rounded font-semibold absolute right-3 bottom-5"> Planifier un Itinéraire</button>
    </div>
</template>

<script>
// import axios from 'axios';
// import config from "../../config";
import MapContainer from "../map/MapContainer.vue";

export default {
    components: {
        MapContainer
    }
};
</script>