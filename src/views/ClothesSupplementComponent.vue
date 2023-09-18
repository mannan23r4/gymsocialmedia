<template>
<navbar-sidebar-footer-component />
<!-- <div class="container pt-5" id="glowArea">
    <div class="row justify-content-center pt-5 ">
        <div class="col-md-12 pt-5 circle text-center ">
            <div class="pt-4">
                <div class="pt-5">
                    <button @click="showMerch()" class="shadow__btn  p-2 ">Enter The MerchVerse</button>
                </div>
            </div>
        </div>
    </div>
</div> -->
<!-- d-none -->
<div class="" id="merchArea">
    <div class="container pt-5 ">
        <div class="row  ">
            <div class="col-md-6 ">
                <div class="clothcont" style="background-color: white;">
                    <div class="row">
                        <div class="col-md-8">
                            <img style="border-radius: 5px 0px 0px 5px;" src="../../public/upload/images/Frame11.png" alt="">
                        </div>

                        <div class="col-md-4">
                            <div class="row pt-5 ">

                                <div class="col-md-8 ">
                                    <p style="font-weight: bold;">Limited Edition</p>
                                </div>

                                <div class="col-md-4">
                                    <img src="../../public/upload/images/blacklogo.png" class="logo" alt="">
                                </div>

                                <div class="col-md-12 ">
                                    <p style="font-size: 10px;">Our Limited Edition With RAW APPAREL</p>
                                </div>

                                <div class="col-md-11 ">
                                    <p style="font-size: 10px; font-weight: bold; ">GYMSAGE is excited to announce the collaboration with RAW APPAREL is LIVE. As our premium members are having a chance to win this T-Shirts free.</p>
                                </div>

                                <div class="col-md-12">
                                    <a class="fancy" href="#">
                                        <span class="top-key"></span>
                                        <span class="text"><i class="fa-solid fa-bag-shopping"></i> Buy Now</span>
                                        <span class="bottom-key-1"></span>
                                        <span class="bottom-key-2"></span>
                                    </a>
                                </div>

                                <div class="col-md-12 pt-3 ">
                                    <a class="fancy" href="#">
                                        <span class="top-key"></span>
                                        <span class="text"> <i class="fa-solid fa-cart-shopping"></i> Add to cart</span>
                                        <span class="bottom-key-1"></span>
                                        <span class="bottom-key-2"></span>
                                    </a>
                                </div>

                                <div class="col-md-11 pt-3 ">
                                    <p style="font-size: 10px; ">**Non-Premium members can still WIN this for free, check out our Giveaway post on SIRIUS SYNC Page.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-md-6">
                <div class="row ">
                    <div class="col-md-4">
                        <div class="clothcontri-1">
                            <img src="../../public/upload/images/proteinnew.png" alt="">
                        </div>

                        <div class="row pt-3 ">
                            <div class="col-md-12">
                                <div class="clothcontri-1">
                                    <img src="../../public/upload/images/proteinnew1.png" alt="">
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-8 ">
                        <div class="clothcontri-2 p-5">
                            <div class="row p-5">
                                <div class="col-md-12 text-center my-auto p-5">
                                    <button class="connectwalletbtn p-2 " id="connect-button" @click="connect()">
                                        <span>Connect Wallet</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container pt-5 ">
        <div class="row">
            <div class="col-md-12  text-center ">
                <div class="row " style="color: white;">
                    <div class="col-md-3">
                        <p>CLOTHING</p>
                    </div>

                    <div class="col-md-3">
                        <p>SUPPLIMENTS</p>
                    </div>

                    <div class="col-md-3">
                        <p>MEMBERSHIP</p>
                    </div>

                    <div class="col-md-3">
                        <p>EQUIPMENTS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row pt-5 ">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-img"></div>
                            <div class="card-info">
                                <p class="text-title">Product title </p>
                                <p class="text-body">Product description and details</p>
                            </div>
                            <div class="card-footer">
                                <span class="text-title">$499.49</span>
                                <div class="card-button">
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <img src="../../public/upload/images/Frame11.png" class="card-img" alt="">
                            <div class="card-info">
                                <p class="text-title">Limited Edition </p>
                                <p class="text-body"> GymSage X RAW, Black T-Shirt, Unisex  </p>
                            </div>
                            <div class="card-footer">
                                <span class="text-title  ">$39.99</span>
                                <div class="card-button">
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-img"></div>
                            <div class="card-info">
                                <p class="text-title"> </p>
                                <p class="text-body">Product description and details</p>
                            </div>
                            <div class="card-footer">
                                <span class="text-title">$499.49</span>
                                <div class="card-button">
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                                    </svg>
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
import NavbarSidebarFooterComponent from '../components/NavbarSidebarFooterComponent.vue';
export default {
    components: {
        NavbarSidebarFooterComponent,
    },

    data() {
        return {
            account: "",
            balance: 0,
            provider: null,
        }
    },

    methods: {
        showMerch() {
            document.getElementById("glowArea").classList.add("d-none");
            document.getElementById("merchArea").classList.remove("d-none");
            this.loaderMerch()
        },
        loaderMerch() {
            console.log("hello world")
        },
        connect() {
            console.log("Wallet Connect Starting")
            let button = document.getElementById('connect-button');
            if (window.ethereum) {
                window.ethereum
                    .request({
                        method: 'eth_requestAccounts'
                    })
                    .then(accounts => {
                        this.account = accounts[0];
                        button.textContent = this.account;
                        console.log("Wallet Connect Completed")
                        window.ethereum
                            .request({
                                method: 'eth_getBalance',
                                params: [this.account, 'latest']
                            })
                            .then(result => {
                                let wei = parseInt(result, 16);
                                this.balance = wei / 10 ** 18;
                            });
                    })
                    .catch(error => {
                        console.error(error);
                    });

            } else {
                console.error("Ethereum object not available.");
            }
        },

        disconnect() {
            this.account = "";
            this.balance = 0;
            this.provider = null; // Disconnect from the Ethereum provider
        },

    }
}
</script>

<style scoped>
.circle {
    background-color: transparent;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0 0 8px #ffffff, inset 0 0 8px black;
}

/* .mainbutton {
    text-align: center;
    font-family: sans-serif;
    font-weight: 400;
    border-radius: 12px;
} */

.shadow__btn {
    padding: 10px 20px;
    border: none;
    font-size: 18px;
    color: #fff;
    border-radius: 7px;
    letter-spacing: 4px;
    font-weight: 700;
    transition: 0.5s;
    transition-property: box-shadow;
}

.shadow__btn {
    background: rgb(27, 26, 26);
    box-shadow: 0 0 25px rgb(0, 0, 0);
}

.shadow__btn:hover {
    box-shadow: 0 0 5px rgb(255, 255, 255),
        0 0 25px rgb(255, 255, 255),
        0 0 50px rgb(255, 255, 255),
        0 0 100px rgb(255, 255, 255);
}

.connectwalletbtn {
    border-radius: 12px;
    color: white;
    background-color: #953BC9;
    border: 0;
}

.clothcont {
    border: none;
    border-radius: 8px;
    background-color: black;
    width: 100%;
    height: 100%;
    min-height: 400px;
}

.clothcontri-1 {
    border: none;
    border-radius: 8px;
    background-color: black;
    width: 100%;
    /* height: 100%; */
    min-height: 200px;
}

.clothcontri-2 {
    border: none;
    border-radius: 8px;
    background-color: black;
    width: 100%;
    height: 100%;
    min-height: 400px;
}

.logo {
    width: 100%;
    /* height: 100%; */
    max-width: 200px;
    /* min-height: 80px; */
}

.fancy {
    background-color: transparent;
    border: 2px solid #000;
    border-radius: 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 10px 10px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    user-select: none;
    font-size: 13px;
}

.fancy .text {
    font-size: 12px;
    line-height: 1.33333em;
    padding-left: 5px;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
}

.fancy .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, left 0.3s ease-out;
}

.fancy .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy:hover {
    color: white;
    background: black;
}

.fancy:hover::before {
    width: 0.9375rem;
    background: white;
}

.fancy:hover .text {
    color: white;
    padding-left: 15px;
}

.fancy:hover .top-key {
    left: -2px;
    width: 0px;
}

.fancy:hover .bottom-key-1,
.fancy:hover .bottom-key-2 {
    right: 0;
    width: 0;
}

.card {
    width: 400px;
    height: 600px;
    padding: .8em;
    background: #f5f5f5;
    position: relative;
    overflow: visible;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.card-img {
    background-color: black;
    height: 100%;
    width: 100%;
    border-radius: .5rem;
    transition: .3s ease;
}

.card-info {
    padding-top: 10%;
}

svg {
    width: 20px;
    height: 20px;
}

.card-footer {
    width: 10
    0%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;
}

/*Text*/
.text-title {
    font-weight: 900;
    font-size: 1.2em;
    line-height: 1.5;
}

.text-body {
    font-size: .9em;
    padding-bottom: 10px;
}

/*Button*/
.card-button {
    border: 1px solid #252525;
    display: flex;
    padding: .3em;
    cursor: pointer;
    border-radius: 50px;
    transition: .3s ease-in-out;
}

/*Hover*/
.card-img:hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
}

.card-button:hover {
    border: 1px solid #ffcaa6;
    background-color: #ffcaa6;
}
</style>
