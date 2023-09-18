<template>
<div>
    <NavbarSidebarFooterComponent />

    <div class="container h-75 animate__animated animate__fadeInLeftBig animate__delay ">
        <div class="row h-75 justify-content-center ">
            <div class="col-md-12 my-auto text-center ">
                <i class=" fa fa-check" aria-hidden="true"></i>
                <h1 class="p-1 px-5 txt1"> Thank You For Submitting KYC Form. </h1>
                <h1 class="txt1" style="font-size: 25px;"> Your Form Has Been Successfully Submitted from email {{ myData.email }}.</h1>
                <p class="txt1" style="font-size: 20px;"> A print of form has been send to your email of {{ myData.email }} </p>
                <div class="row">
                    <div class="col-md-12">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

    
<script>
import NavbarSidebarFooterComponent from "../components/NavbarSidebarFooterComponent.vue";
import axios from "axios";

export default {
    components: {
        NavbarSidebarFooterComponent,
    },
    data() {
        return {
            result:{},
            myData: "",
        }
    },

    mounted() {
        this.myData = JSON.parse(localStorage.getItem("myData"));
        console.log("mounted() called.......");

        var token = localStorage.getItem('token')
        axios.defaults.headers.common["Authorization"] = "Bearer" + token
        axios.defaults.headers.common["Accept"] = "*/*"
    },
}
</script>

    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.txt1 {
    color: white;
    font-size: 40px;
    font-family: "Fira Sans", sans-serif;
}

.fa-check {
    color: green;
    font-size: 80px;
}
</style>
