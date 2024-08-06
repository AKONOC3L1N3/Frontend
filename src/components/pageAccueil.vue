<template>
    <div id="app" class="container">
        <div class="sidebar" v-if="isSidebarActive">
            <div class="sidebar-header">
                <h3>Dashboard</h3>
            </div>
            <ul class="sidebar-nav">
                <li><i class="fas fa-home"></i><a href="">HOME</a><i class="fas fa fa-arrow-right"></i></li>
                <li><i class="fas fa-car"></i><a href="">VEHICULE</a><i class="fas fa fa-arrow-right"></i></li>
                <li><i class="fas fa-users"></i><a href="">CHAUFFEURS</a><i class="fas fa fa-arrow-right"></i></li>
                <li><i class="fas fa-cogs"></i><a href="">SERVICE</a><i class="fas fa fa-arrow-right"></i></li>
                <li><i class="fas fa-chart-line"></i><a href="">ITINERAIRE</a><i class="fas fa fa-arrow-right"></i></li>
                <li><i class="fas fa-wrench"></i><a href="">MAINTENANCE</a><i class="fas fa fa-arrow-right"></i></li>
                <li><i class="fas fa-cog"></i><a href="">PARAMETRE</a><i class="fas fa fa-arrow-right"></i></li>

            </ul>
            <!-- <div class="sidebar-toggle" @click="toggleSidebar">
                <i style="color: red;" class="fas fa-bars"></i>
            </div> -->
        </div>

        <div class="main-content">
            <div class="in_container"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isSidebarActive: true
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarActive = false;
        }
    }
}
</script>
<style>
/* Global Styles */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    justify-content: space-between;
}

/* Sidebar Styles */
.sidebar {
    width: 15%;
    height: 100%;
    background-color: transparent;
    color: #092c52;
    position: fixed;
    top: 0;
    left: 0;
    }

.sidebar-header {
    padding: 20px;
    background-color: transparent;

    font-size: 30px;
}

.sidebar-nav {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

.sidebar-nav li {
    margin-top: 35px;
    color: rgba(0, 0, 0, 1);
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
}
.sidebar-nav li i{
    padding: 0 15px; 
    width: 10%;
}
.sidebar-nav li a {
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
    text-decoration: none;
    font-size: 23px;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: left;
    width: 80%;
}

.sidebar-nav li a:hover {
    background-color: #444;
}

/* Main Content Styles */
.main-content {
    width: 85%;
    margin-left: 15%;
    height: 100%;
    position: fixed;
    padding: 10px;
}

.in_container {
    width: 97%;
    margin: auto;
    height: 97%;
    border-radius: 10px;
    background-color: #4444442c;
}
.fa-arrow-right{
    color: #092c52;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    align-items: end;
    justify-content: end;
    text-align: right;
}
@media (max-width: 768px) {}
</style>