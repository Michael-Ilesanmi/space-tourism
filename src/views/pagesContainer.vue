<template>
    <div>
        <nav-bar></nav-bar>
        <div>
            <router-view  class="py-16 px-12 min-h-screen" />
        </div>
    </div>
</template>

<script>
import navBar from '../components/inc/Nav-Bar.vue'
export default {
    components: {
        navBar
    },
};
</script>
<style scoped>

</style>
