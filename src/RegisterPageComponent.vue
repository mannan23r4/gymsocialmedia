<template>
<div class="container h-100" id="otherCont">
    <div class="row h-100">
        <div class="col-md-6 my-auto">
            <div class="">
                <h1 class="txt-1">
                    Hello There, <br />
                    Welcome to GYMSAGE FITNESS
                </h1>
                <h1 class="" style="color: lightslategray; font-size: 20px">
                    Please, enter your details.
                </h1>

                <h1 class="" style="color: red; font-size: 20px">
                    A Simple and Quick Brief.
                </h1>
                <h1 class="" style="color: lightgray; font-size: 16px; width: 80%">
                    Welcome to GymSage Fitness! We provide personalized meal plans, customized training programs, and expert
                    nutrition guidance. Our user-friendly app keeps you on track, with real-time feedback from certified
                    trainers. Join us today to fuel your body, unlock your potential, and achieve your fitness goals.
                    It's time to become your best self with GymSage Fitness!
                </h1>
            </div>
        </div>
        <div class="col-md-6 my-auto">
            <!-- <form > -->
            <div class="row justify-content-left">
                <div class="row">
                    <div class="col-md-5 text-center">
                        <div class="input-icons">
                            <i class="fa fa-user icon"></i>
                            <input v-model="v$.form.fname.$model" type="text" class="py-3 px-5 input-field" style="
                    border-radius: 12px;
                    background-color: rgba(37, 37, 37, 255);
                    color: white;
                    border: 0;
                  " placeholder="First Name..." name="fname" />
                            <!-- Error Message -->
                            <div class="input-errors" v-for="(error, index) of v$.form.fname.$errors" :key="index">
                                <div class="error-msg" style="color: white; text-align: left; font-size: 14px">
                                    <i class="fa fa-info icon1" title="Names can only contain letters (a-z)." style="text-align: center">
                                    </i>
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 text-center">
                        <div class="input-icons">
                            <i class="fa fa-user icon"></i>
                            <input v-model="v$.form.lname.$model" type="text" class="py-3 px-5 input-field" style="
                    border-radius: 12px;
                    background-color: rgba(37, 37, 37, 255);
                    color: white;
                    border: 0;
                  " placeholder="Last Name..." name="lname" />
                            <!-- Error Message -->
                            <div class="input-errors" v-for="(error, index) of v$.form.lname.$errors" :key="index">
                                <div class="error-msg" style="color: white; text-align: left; font-size: 14px">
                                    <i class="fa fa-info icon1" title="Names can only contain letters (a-z)." style="text-align: center">
                                    </i>
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-10 my-auto pt-3">
                        <div class="input-icons">
                            <i class="fa fa-envelope icon"></i>
                            <input v-model="v$.form.email.$model" type="email" class="py-3 px-5 input-field" style="
                    border-radius: 12px;
                    background-color: rgba(37, 37, 37, 255);
                    color: white;
                    border: 0;
                  " placeholder="Email Address..." name="email" />
                            <!-- Error Message -->
                            <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
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
                            <i class="fa fa-globe icon"></i>
                            <input v-model="v$.form.username.$model" type="text" class="py-3 px-5 input-field" style="
                    border-radius: 12px;
                    background-color: rgba(37, 37, 37, 255);
                    color: white;
                    border: 0;
                  " placeholder="@Username..." name="username" />
                            <!-- Error Message -->
                            <div class="input-errors" v-for="(error, index) of v$.form.username.$errors" :key="index">
                                <div class="error-msg" style="color: white; font-size: 14px">
                                    <i class="fa fa-info icon1" title="Usernames can only contain letters (a-z)." style="text-align: center; min-width: 235px">
                                    </i>
                                    {{ error.$message }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 py-2 px-3 txt-2">
                        <!-- <button type="submit" class="input-field py-2 px-5 text-center btn-1" :disabled="v$.form.$invalid" @click="$router.push('../EnterPasswordComponent')">
                                Next
                            </button> -->
                        <button type="button" @click="nextstep()" class="input-field py-2 px-5 text-center btn-1">
                            <!-- :disabled="v$.form.$invalid" -->
                            Next
                        </button>
                    </div>
                </div>

                <div class="col-md-6">
                    <p class="txt3 px-3" @click="$router.push('../loginnew')">
                        Log-In.
                    </p>
                </div>

                <div class="col-md-6 px-4">
                    <p class="txt3  px-5" @click="$router.push('../register')">
                        Admin Login
                    </p>
                </div>

            </div>
            <!-- </form> -->
        </div>
    </div>
</div>

<div class="container h-100 d-none" id="passwordCont">
    <div class="row h-100">
        <div class="col-md-6 my-auto">
            <div class="col-md-12">
                <h1 class="txt-1-p">Great,</h1>
                <h1 class="txt-1-p">Basic Details Entered Successfully.</h1>
                <h1 class="txt-1-p">
                    Now Choose A <span style="color: red">Strong Password</span>.
                </h1>
            </div>
        </div>
        <div class="col-md-6 my-auto">
            <!-- <form @submit.prevent="saveData"> -->
            <div class="row justify-content-left">
                <div class="row">
                    <div class="col-md-10 my-auto pt-3">
                        <div class="input-icons">
                            <i class="fa fa-eye icon"></i>
                            <input type="password" v-model="form.password" @input="validateForm" class="py-3 px-5 input-field" style="
                    border-radius: 12px;
                    background-color: rgba(37, 37, 37, 255);
                    color: white;
                    border: 0;
                  " placeholder="Password..." />
                        </div>
                    </div>

                    <div class="col-md-10 my-auto pt-3">
                        <div class="input-icons">
                            <i class="fa fa-eye icon"></i>
                            <input type="password" v-model="form.confirmpassword" @input="validateForm" class="py-3 px-5 input-field" style="
                    border-radius: 12px;
                    background-color: rgba(37, 37, 37, 255);
                    color: white;
                    border: 0;
                  " placeholder="Confirm password..." />
                            <p v-if="form.errorMessage" style="color: red; font-size: 15px; font-weight: bold">
                                {{ form.errorMessage }}
                            </p>
                        </div>
                    </div>

                    <div>
                        <input type="checkbox" name="active2fa" v-model="form.active2fa" id="active2fa" />
                        <label for="active2fa" style="color: white;"> Do you want to enable 2FA? </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 py-3 px-3 txt-2-p">
                        <button class="input-field py-2 px-5 text-center btn-1" @click="prevstep()">
                            Back
                        </button>
                    </div>
                    <div class="col-md-5 py-3 pe-2 txt-2-p">
                        <button type="submit" class="input-field py-2 px-5 text-center btn-1" style="color: white; border: 0" id="passwordSubmitbtn" disabled @click="saveData()">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <!-- </form> -->
        </div>
    </div>
</div>

<!-- <div class="container h-100 d-none" id="picCont">
    <div class="row h-100">
        <div class="col-md-6 my-auto">
            <div class="col-md-12">
                <h1 class="txt-1-p">Great,</h1>
                <h1 class="txt-1-p">Add A Identification</h1>
                <h1 class="txt-1-p">
                    Now Choose A <span style="color: red">Profile Pic</span>.
                </h1>
            </div>
        </div>
        <div class="col-md-6 my-auto">
            <div class="row justify-content-left">
                <div class="row">
                    <div class="col-md-12 my-auto pt-3">
                        <div class="row">
                            <div class="col-md-6  ">
                                <i class="fa fa-photo icon p-4" style="color: white" @click="showModalphoto = true"> <span class="px-3" style="font-size: 22px;">Choose A Profile Pic.</span> </i>
                            </div>
                        </div>
                        <div v-if="showModalphoto" style="color: black">
                            <transition name="modal">
                                <div class="modal-mask">
                                    <div class="modal-wrapper">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Select Images</h5>
                                                    <button type="button" style="border: 0; font-size: 25px" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span @click="showModalphoto = false">&times;</span>
                                                    </button>
                                                </div>
                                                <div>
                                                    <div class="imagePreviewWrapper" :style="{
                                                            'background-image': `url(${previewImage})`,
                                                        }"></div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn2 px-3 p-1">
                                                        <input type="file" v-on="form.profilepic" accept="image/*" ref="fileInput" @input="pickFile" class="" id="file-input" @change="uploadImage" />
                                                    </button>
                                                    <button @click="showModalphoto = false" type="button" class="btn2 px-3 p-1">
                                                        Add Image
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 py-3 px-3 txt-2-p">
                        <button class="input-field py-2 px-5 text-center btn-1" @click="nextstep()">
                            Back
                        </button>
                    </div>
                    <div class="col-md-5 py-3 pe-2 txt-2-p">
                        <button type="submit" class="input-field py-2 px-5 text-center btn-1" style="color: white; border: 0" @click="saveData()">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->

<div></div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
    email
} from "@vuelidate/validators";

import axios from "axios";

export function validName(name) {
    let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
    if (validNamePattern.test(name)) {
        return true;
    }
    return false;
}

export default {
    setup() {
        return {
            v$: useVuelidate(),
        };
    },

    data() {
        return {
            showModalphoto: false,
            previewImage: null,
            form: {
                fname: "",
                lname: "",
                email: "",
                username: "",
                password: "",
                confirmpassword: "",
                facode1: "",
                facode2: "",
                facode3: "",
                facode4: "",
                facode5: "",
                facode6: "",
                errorMessage: "",
                walletbalance: "",
                profilepic: "",
                role: "",
                active2fa: "",
            },
        };
    },

    validations() {
        return {
            form: {
                fname: {
                    name_validation: {
                        $validator: validName,
                        $message: "Invalid Name.",
                    },
                },
                lname: {
                    name_validation: {
                        $validator: validName,
                        $message: "Invalid Name.",
                    },
                },
                username: {
                    name_validation: {
                        $validator: validName,
                        $message: "Invalid Username. ",
                    },
                },
                email: {
                    email,
                },
            },
        };
    },

    name: "EnterNameComponent",
    data1() {
        return {
            result: {},
            student: {
                fname: "",
                lname: "",
                email: "",
                username: "",
                password: "",
                confirmpassword: "",
                facode1: "",
                facode2: "",
                facode3: "",
                facode4: "",
                facode5: "",
                facode6: "",
                errorMessage: "",
                walletbalance: "",
                profilepic: "",
                role: "",
                active2fa: "",
            },
        };
    },
    created() {},
    mounted() {
        console.log("mounted() called.......");
    },
    methods: {
        saveData() {
            axios
                .post("http://127.0.0.1:8000/api/register", this.form)
                .then(({
                    data
                }) => {
                    console.log(data);
                    try {
                        if (data.status === true) {
                            alert("Account Created.");
                            this.$router.push({
                                path: "/registered",
                            });
                        } else {
                            alert("Email or Username is Already in Use.");
                        }
                    } catch (err) {
                        alert("Error, please try again");
                    }
                });
        },

        selectImage() {
            this.$refs.fileInput.click();
        },
        pickFile() {
            let input = this.$refs.fileInput;
            let file = input.files;
            if (file && file[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.previewImage = e.target.result;
                };
                reader.readAsDataURL(file[0]);
                this.$emit("input", file[0]);
            }
        },
        nextstep() {
            document.getElementById("otherCont").classList.add("d-none");
            document.getElementById("passwordCont").classList.remove("d-none");
        },
        prevstep() {
            document.getElementById("otherCont").classList.remove("d-none");
            document.getElementById("passwordCont").classList.add("d-none");
        },
        nextsteppic() {
            document.getElementById("passwordCont").classList.add("d-none");
            document.getElementById("picCont").classList.remove("d-none");
        },

        validateForm() {
            if (this.form.password !== this.form.confirmpassword) {
                this.form.errorMessage = "Passwords do not match";
                return false;
            } else {
                document.getElementById("passwordSubmitbtn").disabled = false;
            }
            this.form.errorMessage = "";
            return true;
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

input[type="number"] {
    height: 45px;
    width: 45px;
    font-size: 20px;
    text-align: center;
    font-family: "Fira Sans", sans-serif;
    border: 1px solid #000000;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.txt-1-p {
    overflow: hidden;
    color: white;
    font-size: 33px;
    white-space: nowrap;
    border-right: 2px solid;
    font-family: "Fira Sans", sans-serif;
    width: 0;
    animation: typing 1.5s steps(30, end) forwards, blinking 1s infinite;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blinking {
    0% {
        border-right-color: transparent;
    }

    50% {
        border-right-color: black;
    }

    100% {
        border-right-color: transparent;
    }
}

.txt-1 {
    overflow: hidden;
    color: white;
    white-space: nowrap;
    border-right: 2px solid;
    font-family: "Fira Sans", sans-serif;
    width: 0;
    animation: typing 1.5s steps(30, end) forwards, blinking 1s infinite;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blinking {
    0% {
        border-right-color: transparent;
    }

    50% {
        border-right-color: black;
    }

    100% {
        border-right-color: transparent;
    }
}

.txt-2 {
    font-size: 18px;
    font-family: "Fira Sans", sans-serif;
    color: white;
    font-weight: 600;
}

::placeholder {
    color: white;
}

.btn-1 {
    border-radius: 12px;
    font-family: "Fira Sans", sans-serif;
    border: 0;
    color: white;
    background-color: rgba(37, 37, 37, 255);
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
    color: black;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 3px;
}

.icon1 {
    padding: 8px;
    min-width: 187px;
    color: white;
}

/* IMAGE UPLOAD MODAL */
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

.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

/* IMAGE UPLOAD MODAL */

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
</style>
