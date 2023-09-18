<template>
<navbar-sidebar-footer-component />

<div class="container h-100" id="allform">
    <div class="row my-auto">
        <div class="col-md-12 pt-5 text-center">
            <h1 class="txt1">View Students Forms.</h1>
        </div>

        <div class="col-md-12">
            <table style="width: 100%; color: white">
                <tr>
                    <th>Student ID</th>
                    <th>Country</th>
                    <th>View All</th>
                </tr>
                <tr v-for="(form, index) in scholarships" :key="index" >
                    <td>{{ form.studentid }}  </td>
                    <td>{{ form.country }}</td>
                    <td style="text-align: center;"><button class="px-3" @click="fullform()">View </button></td>
                </tr>
            </table>
        </div>
    </div>
</div>
<!-- 
<div class="container h-100  " id="fullform">
    <div class="row my-auto">
        <div class="col-md-12">
            <h1 class="txt1"> This form belongs to <span v-for="(form, index) in scholarships" :key="index"> {{ form.studentid }} </span></h1>
        </div>

        <div class="col-md-12">
            <table style="width: 100%; color: white">
                <tr>
                    <th>Name</th>
                    <th>hello{{ form.fname }} </th>
                </tr>
                <tr v-for="(form, index) in scholarships" :key="index">
                    <td>{{ form.fname }} {{ form.lname }} {{ form.studentid }} </td>
                    <td>{{ form.country }}</td>
                    <td style="text-align: center;"><button class="px-3" @click="fullform()" >View </button></td>
                </tr>
            </table>
        </div>
    </div>
</div> -->

<div class="container h-100 d-none pt-5 " id="fullform" > 
  <div class="row my-auto ">
    <div class="col-md-12 text-center">
      <h1 class="txt1" >Data Will Be Shared Soon.....</h1>
    </div>
  </div>
</div>

<div></div>
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
            result: {},
            myData: "",
            scholarships: [],
            form: {
                fname: "",
                lname: "",
                studentid: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zipcode: "",
                country: "",
                areacode: "",
                phonenumber: "",
                email: "",
                birthdate: "",
                gender: "",
                actmodel: "",
                yearact: "",
                scoreact: "",
                comexam: "",
                comexamselect: "",
                essay: "",
                termsandcondition: "",
                user_id:"",
            },
        };
    },
    mounted() {
        this.myData = JSON.parse(localStorage.getItem("myData"));
        this.studentform();

        var token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = "Bearer" + token;
        axios.defaults.headers.common["Accept"] = "*/*";
    },

    name: "PrincipalPageComponent",
    created() {},

    methods: {
        studentform() {
            axios
                .get("http://127.0.0.1:8000/api/studentformpost")
                .then(({
                    data
                }) => {
                    console.log(data);
                    try {
                        this.scholarships = data;
                        // this.studentform()
                    } catch (err) {
                        alert("Error, please try again");
                    }
                });
        },
        fullform() {
            document.getElementById("allform").classList.add("d-none");
            document.getElementById("fullform").classList.remove("d-none");
        },
    },

};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.txt1 {
    font-size: 30px;
    color: white;
    font-family: "Fira Sans", sans-serif;
}

table,
th,
td {
    border: 1px solid white;
}
</style>
