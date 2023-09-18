<template>
<div class="container h-100" id="passwordCont">
    <div class="row h-100">
        <div class="col-md-6 my-auto text-center">
            <h1 class="txt1 animate__zoomInLeft animate__animated animate__delay-0.9s">
                <span style="color: red">Great</span>, You're Back!
            </h1>
            <p class="txt2 animate__zoomInRight animate__animated animate__delay-1s">
                Kindly fill all the details to access
                <span style="color: red; font-weight: bold">WEBSITE</span>.
            </p>
        </div>

        <div class="col-md-6 my-auto">
            <!-- <form @submit.prevent="onSubmit"> -->
            <div class="row justify-content-left">
                <div class="row">
                    <div class="col-md-10 my-auto pt-3">
                        <div class="input-icons">
                            <i class="fa fa-envelope icon"></i>
                            <input type="email" v-model="v$.student.email.$model" class="py-3 px-5 input-field" style="
                    border-radius: 12px;
                    background-color: rgba(37, 37, 37, 255);
                    color: white;
                    font-weight: 500;
                    border: 0;
                  " placeholder="Email Address..." />
                            <!-- Error Message -->
                            <div class="input-errors" v-for="(error, index) of v$.student.email.$errors" :key="index">
                                <div class="error-msg" style="color: white; font-size: 14px">
                                    <i class="fa fa-info icon1" title="Email can only contain letters (a-z), numbers (0-9), and periods (@)." style="text-align: center; min-width: 426px">
                                    </i>
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-10 my-auto pt-3">
                        <div class="input-icons">
                            <i class="fa fa-eye icon"></i>
                            <input type="password" v-model="student.password" class="py-3 px-5 input-field" style="
                    border-radius: 12px;
                    background-color: rgba(37, 37, 37, 255);
                    font-weight: 500;
                    color: white;
                    border: 0;
                  " placeholder="Password..." />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 py-2 pe-2 txt-2">
                        <button class="input-field py-2 px-5 text-center btn-1" type="submit" style="font-weight: 500; border: 0" v-if="!isHidden" v-on:click="isHidden = true" @click="toggle = !toggle">
                            <!-- @click=" prevstep1()" -->
                            Login
                        </button>

                        <div class="col-md-12 my-auto" v-show="toggle">
                            <div class="row justify-content-center">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 text-center my-auto pt-3">
                                        <h1 class="txt-fa">Enter 2FA Code</h1>
                                        <input v-model="student.facode1" id="codeBox1" style="
                          border-radius: 12px;
                          background-color: rgba(37, 37, 37, 255);
                          color: white;
                          border: 0;
                        " type="number" maxlength="1"   />
                                        <input v-model="student.facode2" id="codeBox2" style="
                          border-radius: 12px;
                          background-color: rgba(37, 37, 37, 255);
                          color: white;
                          border: 0;
                        " type="number" maxlength="1"   />
                                        <input v-model="student.facode3" id="codeBox3" style="
                          border-radius: 12px;
                          background-color: rgba(37, 37, 37, 255);
                          color: white;
                          border: 0;
                        " type="number" maxlength="1"  />
                                        <input v-model="student.facode4" id="codeBox4" style="
                          border-radius: 12px;
                          background-color: rgba(37, 37, 37, 255);
                          color: white;
                          border: 0;
                        " type="number" maxlength="1"  />
                                        <input v-model="student.facode5" id="codeBox4" style="
                          border-radius: 12px;
                          background-color: rgba(37, 37, 37, 255);
                          color: white;
                          border: 0;
                        " type="number" maxlength="1" />
                                        <input v-model="student.facode6" id="codeBox4" style="
                          border-radius: 12px;
                          background-color: rgba(37, 37, 37, 255);
                          color: white;
                          border: 0;
                        " type="number" maxlength="1"  />
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-12 py-3 pe-2 txt-2-p">
                                        <button type="submit" class="input-field py-2 px-5 text-center btn-1" style="color: white; border: 0" @click="LoginData()">
                                            <!-- @click="$router.push('../ThankYouComponent')" -->
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <p class="txt3" @click="$router.push('../register')">
                        Create An Account.
                    </p>
                </div>

                <div class="col-md-6">
                    <p class="txt3" @click="$router.push('../register')">
                        Forgot Password?
                    </p>
                </div>
                <!-- 
                <div class="row">
                    <div class="col-md-12">
                        <button @click="showdata()">Show All Data</button>
                    </div>
                </div> -->
                <!-- 
                <div class="col-md-12">
                    <div style="color: white" class="col-md-6 d-none" id="allinfo" v-for="(form, index) in details" :key="index">
                        <div class="container pt-5" >
                            <div class="row justify-content-center">
                                <div class="col-md-10 pt-3">
                                    <div class="post-cont p-5">
                                        <div style="color: white;">

                                            <div class="row">

                                                <div class="col-md-10">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <p>User Id: {{ form.id }}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="post-cont p-2 ">
                                                    <p class="p-3" > Name: {{ form.fname }}</p>
                                                </div>

                                                <button> <p  class="" > View More </p></button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <!-- </form> -->
        </div>
    </div>
</div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
    email
} from "@vuelidate/validators";
import axios from "axios";

export default {
    setup() {
        return {
            v$: useVuelidate(),
        };
    },

    validations() {
        return {
            student: {
                email: {
                    email,
                },
            },
        };
    },

    name: "ThankYouComponent",
    data() {
        return {
            isHidden: false,
            result: {},
            // details: [],
            student: {
                email: "",
                password: "",
                facode1: "",
                facode2: "",
                facode3: "",
                facode4: "",
                facode5: "",
                facode6: "",
                walletbalance: "",
                role: "",
            },
        };
    },
    created() {},
    mounted() {
        console.log("mounted() called.......");
    },
    methods: {
        LoginData() {
            axios
                .post("http://127.0.0.1:8000/api/login", {
                    data: this.student,
                })
                .then(({
                    data
                }) => {
                    console.log(data);
                    try {
                        if (data.status === true) {
                            alert("Login Successfully");
                            localStorage.setItem("myData", JSON.stringify(data.data));
                            localStorage.setItem("token", data.authorisation.token);
                            axios.defaults.headers.common["Authorization"] =
                                "Bearer" + data.authorisation.token;
                            axios.defaults.headers.common["Accept"] = "*/*";

                            {
                                this.$router.push({
                                    path: "/home",
                                });
                            }
                        } else {
                            alert(data.message);
                        }

                        if (this.student.role === 1) {
                            this.$router.push({
                                    path: "/principaldashboard",
                                });
                        }
                    } catch (err) {
                        alert("Error, please try again");
                    }
                });
        },

        // getdetails() {
        //     axios.get("http://127.0.0.1:8000/api/getdetails").then(({
        //         data
        //     }) => {
        //         console.log(data);

        //         try {
        //             this.details = data;
        //         } catch (err) {
        //             alert("Error, please try again");
        //         }
        //     });
        // },

        // showdata() {
        //     document.getElementById("allinfo").classList.remove("d-none");
        // },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.txt-fa {
    font-size: 20px;
    font-family: "Fira Sans", sans-serif;
    color: white;
}

input[type="number"] {
    height: 45px;
    width: 45px;
    font-size: 20px;
    text-align: center;
    font-family: "Fira Sans", sans-serif;
    border: 1px solid #000000;
}

.cont-first {
    height: 130px;
    border: 1px solid white;
    border-radius: 24px;
}

.post-cont {
    border: 1px solid white;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.txt1 {
    font-size: 40px;
    color: white;
    font-family: "Fira Sans", sans-serif;
}

.txt2 {
    font-family: "Fira Sans", sans-serif;
    font-size: 20px;
    text-align: center;
    color: white;
    font-weight: 500;
}

::placeholder {
    color: white;
}

.txt3 {
    color: white;
    font-family: "Fira Sans", sans-serif;
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.5s ease-in;
}

.txt3:hover {
    color: red;
}

.btn-1 {
    border-radius: 12px;
    font-family: "Fira Sans", sans-serif;
    background-color: rgba(37, 37, 37, 255);
    border: 0;
    color: white;
}

.btn-1:hover {
    background-color: black;
    color: white;
    border: 0;
    transition: 0.5s ease-in;
}

.inline {
    max-width: 400px;
    margin: auto;
}

.input-icons i {
    position: absolute;
}

.input-icons {
    width: 100%;
    margin-bottom: 10px;
}

.icon {
    padding: 20px;
    min-width: 40px;
    color: white;
}

.icon1 {
    padding: 8px;
    min-width: 187px;
    color: white;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 3px;
}
</style>
