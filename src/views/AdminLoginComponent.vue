<template>
<div>
    <div class="container-fluid pt-5 h-100">
        <div class="row h-100 justify-content-center ">
            <div class="col-md-6 pt-5">
                <!-- <form @submit.prevent="onSubmit"> -->
                <div class="row ">
                    <div class="row  ">
                        <div class="col-md-12 pt-4" style="text-align: center;">
                            <span class="txt4  " style="color: white;  ">Welcome Back Admin</span>
                        </div>

                        <div class="login-cont px-5 pt-4 ">
                            <div class="txt4">
                                <span style="font-size: 13px;">Email Or Username</span>
                            </div>
                            <div class="col-md-12   ">
                                <div class="input-icons">
                                    <i class="fa fa-envelope icon" style="color: black; opacity: 0.5;"></i>
                                    <input type="email" v-model="v$.student.email.$model" class="py-3 px-5 input-field" placeholder="Johndoe@xan.com" />
                                    <!-- Error Message -->
                                    <div class="input-errors" v-for="(error, index) of v$.student.email.$errors" :key="index">
                                        <div class="error-msg" style="color: black;  font-size: 14px">
                                            <i class="fa fa-info icon1" title="Email can only contain letters (a-z), numbers (0-9), and periods (@)." style="text-align: center; min-width: 426px;">
                                            </i>
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="txt4">
                                <span style="font-size: 13px;">Password</span>
                            </div>
                            <div class="col-md-12 my-auto">
                                <div class="input-icons">
                                    <i class="fa fa-eye icon" style="color: black; opacity: 0.5;"></i>
                                    <input type="password" v-model="student.password" class="py-3 px-5 input-field" placeholder="Admin@23214" />
                                </div>
                            </div>

                            <div class="row pt-3 ">
                                <div class="col-md-6">
                                    <p class="txt3" @click="$router.push('../register')">
                                        Forgot Password?
                                    </p>
                                </div>

                                <div class="col-md-6">
                                    <p class="txt3" style="text-align: right;" @click="$router.push('../register')">
                                        Super Admin Login
                                    </p>
                                </div>
                            </div>

                            <div class="row justify-content-center ">
                                <div class="col-md-4 pb-3 txt-2">
                                    <button class="input-field py-2 px-5 text-center btn-1" type="submit" style="font-weight: 500; border: 0" v-if="!isHidden" v-on:click="isHidden = true" @click="toggle = !toggle">
                                        <!-- @click=" prevstep1()" -->
                                        Login
                                    </button>
                                </div>
                                <div class="col-md-12 " v-show="toggle">
                                    <div class="row justify-content-center">
                                        <div class="row justify-content-center">
                                            <div class="col-md-12 text-center ">
                                                <h1 class="txt-fa">Enter 2FA Code</h1>
                                                <input v-model="student.facode1" id="codeBox1" style="
                                                                border-radius: 12px;
                                                                background-color: rgba(37, 37, 37, 255);
                                                                color: white;
                                                                border: 0;
                                                                " type="number" maxlength="1" />
                                                <input v-model="student.facode2" id="codeBox2" style="
                                                                    border-radius: 12px;
                                                                    background-color: rgba(37, 37, 37, 255);
                                                                    color: white;
                                                                    border: 0;
                                                                    " type="number" maxlength="1" />
                                                <input v-model="student.facode3" id="codeBox3" style="
                                                                        border-radius: 12px;
                                                                        background-color: rgba(37, 37, 37, 255);
                                                                        color: white;
                                                                        border: 0;
                                                                        " type="number" maxlength="1" />
                                                <input v-model="student.facode4" id="codeBox4" style="
                                                                        border-radius: 12px;
                                                                        background-color: rgba(37, 37, 37, 255);
                                                                        color: white;
                                                                        border: 0;
                                                                        " type="number" maxlength="1" />
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
                                                                    " type="number" maxlength="1" />
                                            </div>
                                        </div>
                                        <div class="row justify-content-center">
                                            <div class="col-md-6 pt-2 pb-3 text-center txt-2-p">
                                                <button type="submit" class=" py-2 px-5 text-center btn-1" style="color: white; border: 0" @click="LoginData()">
                                                    <!-- @click="$router.push('../ThankYouComponent')" -->
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
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
            logingesutmodal: false,
            names: ['John', 'Carlos', 'Matt', 'James', 'Robert', 'Michael', 'David', 'William ', 'Richard', 'Markes', 'Potter', 'Johnyt', 'Christoper', 'Yawars'],
            names1: ['njnbas123', 'weq3ds', 'hebfhd7b', 'jbhjdsfg', 'lkjhi76tv', 'lkbhjyu567', 'mbnhgyuy3v', 'kh878vqw', 'h52bdigvb '],
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
    computed: {
        randomName() {
            let n = this.names.length
            let randomNumber = Math.floor(Math.random() * n)
            return this.names[randomNumber]
        },
        randomName1() {
            let n = this.names1.length
            let randomNumber = Math.floor(Math.random() * n)
            return this.names1[randomNumber]
        }
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
        reloadPage() {
            window.location.reload();
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
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

.randomname {
    font-weight: 500;
    font-size: 16px;
}

/* loginguestmodal */
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.6s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    transition: opacity 0.6s ease;
}

.uploading-image {
    display: flex;
}

.btn2 {
    border-radius: 12px;
    border: 1px solid black;
    font-size: 16px;
    transition: 0.7s ease;
    cursor: pointer;
}

.btn2:hover {
    background-color: black;
    color: white;
    transition: 0.7s ease;
    border: 1px solid white;
}

.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

/* loginguestmodal */
.circle {
    border-radius: 50%;
    /* border: 1px solid black; */
    width: 100%;
    max-width: 40px;
    height: 40px;
    background-color: black;
    color: black;
}

.login-cont {
    border: 1px solid white;
    background-color: white;
    border-radius: 48px;
    width: 70%;
    margin: auto;
}

.signtext {
    font-size: 16px;
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    text-align: center;
}

.txt4 {
    font-size: 32px;
    font-family: 'Krona One', sans-serif;
    color: black;

}

.txt5 {
    font-size: 15px;
    font-family: 'Krona One', sans-serif;
    color: black;
}

.logo {
    width: 100%;
    max-width: 200px;
}

.txt-fa {
    font-size: 20px;
    font-family: "Fira Sans", sans-serif;
    color: black;
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
    color: black;
    font-family: "Fira Sans", sans-serif;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.5s ease-in;
}

.btn-1 {
    border-radius: 36px;
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

.iconnew {
    padding: 8px;
    color: white;
    font-size: 25px;
}

.icon1 {
    padding: 8px;
    min-width: 187px;
    color: black;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 3px;
    border-radius: 36px;
    background-color: black;
    color: white;
    font-weight: 300;
    font-size: 14px;
    border: 0;
    opacity: 0.4;
}
</style>
