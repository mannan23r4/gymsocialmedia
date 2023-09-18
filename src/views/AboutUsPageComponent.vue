<template>
<navbar-sidebar-footer-component />

<div class="container ">
    <div class="row ">
        <div class="col-md-1 pt-5" style="margin: auto;">
            <select class="px-2 p-1  " v-model="selected" style="border-radius: 12px; color: white; background-color: black; border: 0; ">
                <i class="fa fa-ellipsis-h icon "></i>
                <option style="border-radius: 24px;" v-for="option in options" v-bind:key="option.id">{{ option }}
                </option>
            </select>
        </div>
    </div>
</div>

<div class="container ">
    <div class="row pt-2  ">
        <div class="col-md-3 img-cont  text-center">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="img1 pt-2 img-cont " alt="profile-big-pic">
            <!-- <div class="txt-cont-name "> -->
            <h1 class="profile-name pt-3 ">{{ myData.lname }}</h1>
            <i>
                <h1 class="profile-username pt-2" style="font-weight: 400;"> @{{ myData.username }}</h1>
            </i>
            <h1 class="profile-username pt-2">{{ myData.email }}</h1>
            <!-- </div> -->
        </div>

        <div class="col-md-6  text-center">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="img1 pt-2 " alt="profile-big-pic">
        </div>

        <div class="col-md-3 txt-cont text-center">
            <div class="row">
                <div class="col-md-1 pt-1  ">
                    <MDBDropdown v-model="dropdown1">
                        <div style="color: white;" @click="dropdown1 = !dropdown1">
                            <i class="fa fa-cog p-2"></i>
                        </div>
                        <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
                            <MDBDropdownItem href="#">Change Details</MDBDropdownItem>
                            <MDBDropdownItem href="#">Update Documents</MDBDropdownItem>
                            <MDBDropdownItem href="#">Complete KYC</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
            </div>

            <div class="container" id="educationdiv">
                <div class="row">
                    <div class="col-md-12 pt-1">
                        <h1 class="detail-profile">Education : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 pt-3">
                        <h1 class="detail-profile">University : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 pt-3">
                        <h1 class="detail-profile">College : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 pt-3">
                        <h1 class="detail-profile">Skills : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div class="container d-none" id="experiencediv">
                <div class="row">
                    <div class="col-md-12 pt-1">
                        <h1 class="detail-profile">Working At : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>

                <div class="row ">
                    <div class="col-md-12 pt-3">
                        <h1 class="detail-profile">Current Project : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 pt-3">
                        <h1 class="detail-profile">Profession : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 pt-3">
                        <h1 class="detail-profile">KYC : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div class="container d-none " id="portfoliodiv">
                <div class="row">
                    <div class="col-md-12 pt-1">
                        <h1 class="detail-profile">Portfolio : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 pt-3">
                        <h1 class="detail-profile">Invested : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 pt-3">
                        <h1 class="detail-profile">Earned : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 pt-3">
                        <h1 class="detail-profile">Withdrawn : <span style="font-size: 18px;">Queen Mary High
                                School</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div class="row pt-5 ">
                <div class="col-md-4 pt-2 details-sub">
                    <button @click="showeducation()" class="details-sub-btn">Education</button>
                </div>

                <div class="col-md-4 pt-2 details-sub ">
                    <button @click="showexperience()" class="details-sub-btn">Experience</button>
                </div>

                <div class="col-md-4 pt-2 details-sub">
                    <button @click="showportfolio()" class="details-sub-btn">Portfolio</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- <div class="container pt-5 px-5 ">
    <div class="row">
        <div class="col-md-12">
            <h1 style="color: white;">My KYC Details</h1>
            <div class=" " v-for="(form, index) in kycforms" :key="index">
                <div style="color: white">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <i>
                                <p>
                                    Fname {{ form.user_id }}
                                </p>
                            </i>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>Fname {{ form.lname }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->
</template>

<script>
import axios from 'axios';
import NavbarSidebarFooterComponent from '../components/NavbarSidebarFooterComponent.vue';
import {
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownItem
} from "mdb-vue-ui-kit";
import {
    ref
} from 'vue';
// import {ref} from 'vue'
export default {

    components: {
        MDBDropdown,
        MDBDropdownMenu,
        MDBDropdownItem,
        NavbarSidebarFooterComponent,
    },

    data() {
        return {
            result: {},
            myData: "",
            options: ['Select', ' Change \u{1F4F7}', 'Change @', 'Copy \u{1F517} ', ],
            selected: '',
            // kycforms: [],
            // form: {
            //     fname: "",
            //     lname: "",
            //     aadharcardno: "",
            //     pancardno: "",
            //     address1: "",
            //     address2: "",
            //     city: "",
            //     state: "",
            //     zipcode: "",
            //     country: "",
            //     areacode: "",
            //     phonenumber: "",
            //     email: "",
            //     birthdate: "",
            //     gender: "",
            //     termsandcondition: "",
            // },
        };
    },

    setup() {
        const dropdown1 = ref(false);
        return {
            dropdown1
        }
    },

    mounted() {
        this.myData = JSON.parse(localStorage.getItem("myData"));
        console.log("mounted() called.......");
        this.selected = 'Select'
        var token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = "Bearer" + token;
        axios.defaults.headers.common["Accept"] = "*/*";
        // this.myKycDetails()
    },
    methods: {
        // myKycDetails() {
        //     axios.get("http://127.0.0.1:8000/api/submitkyc").then(({
        //         data
        //     }) => {
        //         console.log(data);
        //         try {
        //             this.kycforms = data.map((form) => ({
        //                 ...form,
        //             }));
        //         } catch (err) {
        //             alert("Error, please try again");
        //         }
        //     });
        // },
        showexperience() {
            document.getElementById("educationdiv").classList.add("d-none");
            document.getElementById("portfoliodiv").classList.add("d-none");
            document.getElementById("experiencediv").classList.remove("d-none");
        },

        showportfolio() {
            document.getElementById("educationdiv").classList.add("d-none");
            document.getElementById("experiencediv").classList.add("d-none");
            document.getElementById("portfoliodiv").classList.remove("d-none");
        },

        showeducation() {
            document.getElementById("educationdiv").classList.remove("d-none");
            document.getElementById("experiencediv").classList.add("d-none");
            document.getElementById("portfoliodiv").classList.add("d-none");
        },
    }

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

.txt1 {
    font-family: "Fira Sans", sans-serif;
    font-size: 40px;
    color: azure;
}

.img1 {
    width: 100%;
    /* max-width: 1px; */
    /* height: 100%; */
    /* max-height: 100%; */
    object-fit: cover;
    /* opacity: 0.8; */
}

.details-sub {
    color: white;
    border: 1px solid white;
}

.icon {
    font-size: 18px;
    color: black;
    text-align: right;
}

.img-cont {
    border-radius: 50%;
    max-width: 320px;
    height: 300px;
    /* border: 4px solid black; */
    /* background-color: gray; */
    /* opacity: 0.6; */
}

.smallimg1 {
    border-radius: 50%;
    width: 100%;
    max-width: 130px;
    height: 100%;
    object-fit: cover;
    opacity: 1;
}

/* .txt-cont-name {
    background-color: beige;
    border-radius: 24px;
} */

.profile-name {
    font-size: 25px;
    color: white;
    font-family: 'Krona One', sans-serif;
}

.profile-username {
    font-size: 18px;
    color: white;
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
}

.txt-cont {
    border: 1px solid white;
}

.detail-profile {
    font-size: 25px;
    color: white;
    font-family: "Fira Sans", sans-serif;
}

.details-sub-btn {
    font-size: 16px;
    border-radius: 24px;
    font-family: "Fira Sans", sans-serif;
    margin: auto;
}
</style>
