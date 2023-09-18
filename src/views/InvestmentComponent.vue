<template>
    <navbar-sidebar-footer-component />
    <h1>Investment Component</h1>
  </template>
  
  <script>
  import NavbarSidebarFooterComponent from '../components/NavbarSidebarFooterComponent.vue';
  
  export default {
    components: { NavbarSidebarFooterComponent },
    data() {
        return {
            myData: "",
        };
    },

    mounted() {
        this.myData = JSON.parse(localStorage.getItem("myData"));
    },
  }
  </script>
  
  <style>
  
  </style>