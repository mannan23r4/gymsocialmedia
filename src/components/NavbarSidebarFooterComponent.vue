<template>
<!-- <div class="page-loader" v-if="!isloaded" >
    <div class="lds-ripple">
        <div>
        </div>
        <div>
        </div>
    </div>
</div> -->

<div class="container" style="color: black;">
    <div class="row justify-content-center ">
        <!-- <div class="col-md-2 pt-5 fixed-top  ">
            <div class="cont-sidebar" style="color: black;">
                <div class="px-3  d-inline " style="font-size: 20px;" >
                    ONEG8
                </div>
                <i class="fa fa-arrow-right " style="cursor: pointer; padding-left: 6rem!important;" ></i>

                <div class="px-2 p-4  " style="font-size: 22px;" >
                    <div class="col-md-12 p-2"  >
                        <i class="fa fa-home p-3 icon1 " aria-hidden="true">  Home</i>
                    </div>

                    <div class="col-md-12 p-2">
                        <i class="fa fa-home p-3 icon1 " aria-hidden="true">  Home</i>
                    </div>

                    <div class="col-md-12 p-2">
                        <i class="fa fa-home p-3 icon1 " aria-hidden="true">  Home</i>
                    </div>

                    <div class="col-md-12 p-2">
                        <i class="fa fa-home p-3 icon1 " aria-hidden="true">  Home</i>
                    </div>

                </div>
            </div>
        </div> -->
        <div class="col-md-6 text-center pt-5">
            <div class="row"  >
                <div class="col-2">
                    <p @click="$router.push('/home')" style="cursor: pointer;" >Home</p>
                </div>

                <div class="col-3">
                    <p @click="$router.push('/profile')" style="cursor: pointer;">Profile</p>
                </div>

                <div class="col-3">
                    <p @click="$router.push('/about-us')" style="cursor: pointer;">About Us</p>
                </div>

                <div class="col-3">
                    <p @click="$router.push('/wallet')" style="cursor: pointer;">Wallet</p>
                </div>
            </div>
        </div>

        <div class="col-md-2 pt-5  ">
            <div class="row justify-content-center">
                <div class="col-2">
                    <i class="fa fa-youtube-play icon"></i>
                </div>

                <div class="col-2">
                    <i class="fa fa-instagram icon "></i>
                </div>

                <div class="col-2">
                    <i class="fa fa-facebook icon"></i>
                </div>

                <div class="col-2">
                    <i class="fa fa-linkedin icon"></i>
                </div>
            </div>
        </div>

        <div class="col-md-1  pt-5">
            <div class="row">
                <div class="col" v-if="myData != ''">
                    <i class="fa fa-user icon" @click="logout()"><span style="font-size: 12px;" class="p-2"  >LogOut</span></i>
                </div>

                <div class="col" v-else>
                    <i class="fa fa-user icon" @click="$router.push('../loginnew')">Login</i>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    // data:() =>{
    //     return{
    //         isloaded:false,
    //     }
    // },
    // mounted(){
    //     document.onreadystatechange =() =>{
    //         if (document.readyState ==  "complete" ){
    //             this.isloaded = true;
    //         }
    //     }
    // }

    data() {
        return {
            myData: '',
        }
    },
    mounted() {
        this.myData = JSON.parse(localStorage.getItem('myData'));

    },
    methods: {
        logout() {
            localStorage.removeItem('myData')
            this.$router.push({
                path: '/loginnew'
            })
        }
    }
}
</script> 

<style scoped >
.cont-sidebar {
    background-color: white;
    height: 750px;
}

.icon1{
    cursor: pointer;
    font-size: 22px;
    border-radius: 12px;
    border: 1px solid black;
    width: 100%;
}

.icon {
    cursor: pointer;
    font-size: 20px;
}

.img1 {
    width: 100px;
    height: 20px;
    background-color: white;
}

.page-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #333;
    z-index: 999;
}

.lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    4.9% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    5% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }

    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}
</style>
