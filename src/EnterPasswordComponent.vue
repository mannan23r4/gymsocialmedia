<!-- <template>
<div class="container h-100">
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
            <form @submit.prevent="saveSata">
                <div class="row justify-content-left">
                    <div class="row">
                        <div class="col-md-10 my-auto pt-3">
                            <div class="input-icons">
                                <i class="fa fa-eye icon"></i>
                                <input type="password" name="password" v-model="password" class="py-3 px-5 input-field" style="
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
                                <input type="password" v-model="confirmPassword" @input="validateForm" class="py-3 px-5 input-field" style="
                      border-radius: 12px;
                      background-color: rgba(37, 37, 37, 255);
                      color: white;
                      border: 0;
                    " placeholder="Confirm password..." />
                                <p v-if="errorMessage" style="color: red; font-size: 15px; font-weight: bold;">
                                    {{ errorMessage }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5 py-3 px-3 txt-2-p">
                            <button class="input-field py-2 px-5 text-center btn-1" @click="$router.push('../EnterNameComponent')">
                                Back
                            </button>
                        </div>

                        <div class="col-md-5 py-3 pe-2 txt-2-p">
                            <button class="input-field py-2 px-5 text-center btn-1" style="color: black; border: 0" id="passwordSubmitbtn" disabled @click="$router.push('../ThankYouComponent')">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            password: "",
            confirmPassword: "",
            errorMessage: "",
        };
    },

    methods: {
        validateForm() {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = "Passwords do not match";
                return false;
            } else {
                document.getElementById('passwordSubmitbtn').disabled = false;
            }

            this.errorMessage = "";
            return true;
        },
        name: 'EnterNameComponent',
        data1() {
            return {
                result: {},
                student: {
                    password: '',
                }
            }
        },
        created() {},
        mounted() {
            console.log("mounted() called.......");
        },
        methods: {
            saveData() {
                axios.post("http://127.0.0.1:8000/api/register", this.student)
                    .then(
                        ({
                            data
                        }) => {
                            console.log(data);
                            try {
                                alert("saveddddd");

                            } catch (err) {
                                alert("failed");
                            }
                        }
                    )
            }
        }
    },

};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

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

::placeholder {
    color: white;
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
    color: black;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 3px;
}

.icon1 {
    padding: 5px;
    min-width: 187px;
    color: white;
}
</style> -->

<template>
    <p>.</p>
</template>

<script>
export default {

}
</script>

<style>

</style>