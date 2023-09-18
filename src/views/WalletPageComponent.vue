<template>
<navbar-sidebar-footer-component />

<div class="container">
    <div class="row">
        <div class="col-md-10">
            <div style="color: black;">
            </div>
        </div>

        <div class="col-md-2">
            <button id="connect-button" class="connectBtn" @click="connect">Connect Wallet</button>
        </div>
    </div>
</div>

<div class="container pt-5 ">
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6 text-center ">
                    <div class="wallet-c-cont">
                        <div class="row">
                            <div class="col-md-4 pt-2 pe-5 px-5 p-1 ">
                                <span class="walletno">Wallet 1</span>
                            </div>
                            <div class="col-md-8 pt-1 d-flex justify-content-end pe-3    ">
                                <!-- <i class="fa fa-eye pt-2 btnhide px-3" ></i> -->
                                <!-- @click="toggleIcon" -->
                            </div>
                        </div>

                        <div class="row px-2  ">
                            <!-- v-if="showIcon" -->
                            <div class="col-md-12 p-1 px-2 ">
                                <span class="walletaddress"> Account: {{account}}
                                    <i class="fas fa-clipboard px-3 " v-if="canCopy" @click="copy(account)"></i>

                                </span>
                            </div>

                            <div class="row pt-4 justify-content-center ">
                                <div class="col-md-2  ">
                                    <div class="col-md-2 circle-cont-sl circle-cont-sl-send" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#balanceModal">
                                        <i class="fa fa-balance-scale pt-3 icon iconsend"></i>
                                        <p class="pt-3 wallettxticon">Balance</p>
                                    </div>
                                </div>

                                <!-- Modal -->
                                <div class="modal fade" id="balanceModal" tabindex="-1" aria-labelledby="balanceLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="balanceLabel">Balance</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="container pt-3">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="container1">
                                                                <div>
                                                                    <p>ETH: {{ balance }}</p>
                                                                    <p>BNB: {{ balance }}</p>
                                                                    <p>USDC: {{ balance }}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-2 circle-cont-sl circle-cont-sl-send" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#sendModal">
                                    <i class="fa-solid fa-arrow-up pt-3 icon iconsend"></i>
                                    <p class="pt-3 wallettxticon">Send</p>
                                </div>

                                <!-- Modal -->
                                <div class="modal fade" id="sendModal" tabindex="-1" aria-labelledby="sendLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="sendLabel">Send</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="container pt-3">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="container1">
                                                                <input v-model="v$.address.address.$model" required="" type="text" class="input" style="width: 400px;">
                                                                <label class="label">Sender's Address</label>
                                                                <div class="input-errors" v-for="(error, index) of v$.address.address.$errors" :key="index">
                                                                    <div class="error-msg" style="color: black; font-size: 14px; margin-right: 100px ">
                                                                        {{ error.$message }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="container pt-5">
                                                    <div class="row">
                                                        <div class="col-md-5  ">
                                                            <!-- <input class="p-2 send-input " type="text" placeholder="Amount"> -->
                                                            <div class="container1">
                                                                <input required="" type="text" class="input">
                                                                <label class="label">Amount</label>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-3">
                                                            <button class="send-input send-max-button p-2 " style="width: 50px;">Max</button>
                                                        </div>

                                                        <div class="col-md-1  ">
                                                            <button class="send-input send-max-button p-2" style="width: 120px;">More Details</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-primary">Confirm & Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-2 circle-cont-sl circle-cont-sl-recieve" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#recieveModal">
                                    <i class="fa-solid fa-arrow-down pt-3 icon iconsend"></i>
                                    <p class="pt-3 wallettxticon">Recieve</p>
                                </div>
                                <!-- Modal -->
                                <div class="modal fade" id="recieveModal" tabindex="-1" aria-labelledby="sendLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="recieveLabel">Recieve</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <img src=" https://cdn2.me-qr.com/qr/69645982.png?v=1690184113 " class="recievescanner-cont" alt="">

                                                            <div class="col-md pt-4 ">
                                                                <span class="walletaddress pt-5 " style="color: black;">
                                                                    {{account}}
                                                                </span>
                                                            </div>

                                                            <div class="container" style="display: flex; justify-content: end;">
                                                                <div class="row">
                                                                    <div class="col-md-2  circle-cont-sl circle-cont-sl-copy">
                                                                        <i class="fas fa-clipboard pt-3 icon iconsend"></i>
                                                                    </div>

                                                                    <div class="col-md-2  circle-cont-sl circle-cont-sl-copy">
                                                                        <i class="fas fa-share pt-3 icon iconsend"></i>
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

                                <div class="col-md-2 circle-cont-sl circle-cont-sl-send" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#buyModal">
                                    <i class="fa-solid fa-wallet pt-3 icon iconsend"></i>
                                    <p class="pt-3 wallettxticon">Buy</p>
                                </div>

                                <!-- Modal -->
                                <div class="modal fade" id="buyModal" tabindex="-1" aria-labelledby="buyLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="walletLabel">Buy</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <span>
                                                                <input type="text">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-2 circle-cont-sl circle-cont-sl-swap" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#swapModal">
                                    <i class="fa-solid fa-exchange pt-3 icon iconsend"></i>
                                    <p class="pt-3 wallettxticon">Swap</p>
                                </div>

                                <!-- Modal -->
                                <div class="modal fade" id="swapModal" tabindex="-1" aria-labelledby="swapLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="swapLabel">Swap</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <span>
                                                                <input type="text">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 pt-5 ">
                    <p class="walletno"> Balance </p>

                    <div class="walletaddress">
                        <p>Balance: <span style="font-weight: bold;"> {{ balance }}</span></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<!-- <div>
    <h1>Top 100 Coins</h1>
    <ul v-if="coins">
        <li v-for="coin in coins" :key="coin.id">
            {{ coin.name }} ({{ coin.symbol }}): ${{ coin.quote.USD.price }}
        </li>
    </ul>
    <div v-else>Loading...</div>
</div> -->

<div class="container">
    <div class="row">
        <div class="col-md-12 pt-5 ">
            <p class="walletno " style=" font-size: 35px; text-align: center; ">Top 100 Coins Data</p>
        </div>

        <div class="conatiner pt-4 ">
            <div class="row">
                <div class="col-md-1">
                    <p class="table-top">Symbol</p>
                    <div v-if="coins">
                        <div class="table-in pt-4 " v-for="coin in coins" :key="coin.rank">
                            {{ coin.symbol }}
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <p class="table-top">Name</p>
                    <div v-if="coins">
                        <div class="table-in pt-4 " v-for="coin in coins" :key="coin.rank">
                            {{ capitalize(coin.name) }}
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <p class="table-top">Price</p>
                    <div v-if="coins">
                        <div class="table-in pt-4 " v-for="coin in coins" :key="coin.rank">
                            ${{ formatPrice(coin.quote.USD.price) }}
                        </div>
                    </div>
                </div>

                <div class="col-md-1">
                    <p class="table-top">1H%</p>
                    <div v-if="coins">
                        <div class="table-in pt-4" v-for="coin in coins" :key="coin.rank">
                            {{ formatPrice(coin.quote.USD.percent_change_1h) }}%
                        </div>
                    </div>
                </div>

                <div class="col-md-1">
                    <p class="table-top">24H%</p>
                    <div v-if="coins">
                        <div class="table-in pt-4" v-for="coin in coins" :key="coin.rank">
                            {{ formatPrice(coin.quote.USD.percent_change_24h) }}%
                        </div>
                    </div>
                </div>

                <div class="col-md-1">
                    <p class="table-top">7D%</p>
                    <div v-if="coins">
                        <div class="table-in pt-4" v-for="coin in coins" :key="coin.rank">
                            {{ formatPrice(coin.quote.USD.percent_change_7d) }}%
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <p class="table-top">Market Cap</p>
                    <div v-if="coins">
                        <div class="table-in pt-4 " v-for="coin in coins" :key="coin.rank">
                            ${{ formatPrice(coin.quote.USD.market_cap) }}
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <p class="table-top">Volume</p>
                    <div v-if="coins">
                        <div class="table-in pt-4" v-for="coin in coins" :key="coin.rank">
                            ${{ formatPrice(coin.quote.USD.volume_24h) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script scoped>
import NavbarSidebarFooterComponent from "../components/NavbarSidebarFooterComponent.vue";
import axios from 'axios';
import 'animate.css';
import useVuelidate from "@vuelidate/core";
import {
    // email
} from "@vuelidate/validators";

export function validAddress(address) {
    let validAddressPattern = new RegExp("^0x[a-fA-F0-9]{40}$");
    if (validAddressPattern.test(address)) {
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
    components: {
        NavbarSidebarFooterComponent,
    },

    validations() {
        return {
            address: {
                address: {
                    address_validation: {
                        $validator: validAddress,
                        $message: "Invalid Address. ",
                    },
                },
            },
        };
    },

    data() {
        return {
            coins: null,
            coin: [],
            showIcon: false,
            showModalsend: false,
            result: {},
            register: [],
            address: {
                address: "",
                // errorMessage: "",
            },
            form: {
                fname: "",
                lname: "",
                email: "",
                username: "",
                walletbalance: "",
                profilepic: "",
            },
            account: "",
            balance: 0,
            provider: null,
            canCopy: false,
        };
    },

    mounted() {
        var token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = "Bearer" + token;
        axios.defaults.headers.common["Accept"] = "*/*";
        // this.allData();
        this.coindetails();
    },

    created() {
        this.canCopy = !!navigator.clipboard;
    },

    methods: {

        async copy(s) {
            await navigator.clipboard.writeText(s);
            console.log('copied')
        },
        connect() {
            let button = document.getElementById('connect-button');
            if (window.ethereum) {
                window.ethereum
                    .request({
                        method: 'eth_requestAccounts'
                    })
                    .then(accounts => {
                        this.account = accounts[0];
                        button.textContent = this.account;

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

        showdata() {
            document.getElementById("allinfo").classList.remove("d-none");
        },

        toggleIcon() {
            this.showIcon = !this.showIcon;
        },

        capitalize(name) {
            return name.toUpperCase(); // Convert the entire name to uppercase
        },

        formatPrice(price) {
            // return price.toFixed(2); // Format to 2 decimal places           
            return price.toLocaleString(); // Format with commas for thousands
            // price.to
        },

        coindetails() {
            axios.get("http://127.0.0.1:8000/api/coinsdetails").then(({
                data
            }) => {
                console.log(data);
                try {
                    this.coins = data.data;
                } catch (err) {
                    alert("Error, please try again");
                }
            });
        },

    },

    // async created() {
    //     try {
    //         const response = await fetch('http://127.0.0.1:8000/api/coinsdetails');
    //         const data = await response.json();
    //         this.coins = data.data;
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // },

};

// allData() {
//     axios.get("http://127.0.0.1:8000/api/register").then(({
//         data
//     }) => {
//         console.log(data);
//         try {
//             this.register = data;
//         } catch (err) {
//             alert("Error, please try again");
//         }
//     });
// },
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.wallet-c-cont {
    border: 1px solid black;
    max-width: 550px;
    min-height: 200px;
    border-radius: 24px;
}

.walletno {
    font-size: 20px;
    color: black;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
}

.walletaddress {
    font-size: 16px;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

.icon {
    color: black;
    font-size: 25px;
}

.btnhide {
    font-size: 18px;
    border-radius: 18px;
    background-color: black;
    border: 0;
    color: black;
}

.img1 {
    max-width: 80px;
    min-height: 80px;
}

.circle-cont-sl {
    width: 60px;
    height: 60px;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 28px;
    background-color: white;
}

.circle-cont-sl-send:hover {
    background-color: red;
    border: 0;
    transition: 0.5s ease;
}

.circle-cont-sl-recieve:hover {
    background-color: lightgreen;
    transition: 0.5s ease;
    border: 0;
}

.circle-cont-sl-buy:hover {
    background-color: rgb(147, 147, 194);
    border: 0;
    transition: 0.5s ease;
}

.circle-cont-sl-swap:hover {
    background-color: rgb(206, 84, 84);
    border: 0;
    transition: 0.5s ease;
}

.circle-cont-sl-copy:hover {
    background-color: lightgreen;
    border: 0;
    transition: 0.5s ease;
}

.animate__animated.animate__backOutUp {
    --animate-duration: 10s;
}

.wallettxticon {
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
}

.iconsend {
    color: black;
}

/* SEND MODAL */
.modal-mask {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    /* Use flex container to center the content */
    align-items: center;
    /* Vertically center the content */
    justify-content: center;
    /* Horizontally center the content */
    transition: opacity 0.6s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    transition: opacity 0.6s ease;
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
    color: black;
    transition: 0.7s ease;
    border: 1px solid black;
}

/* SEND MODAL */

.send-input {
    border-radius: 12px;
    /* width: 400px; */
    font-size: 14px;
    border: 1px solid black;
}

.send-max-button {
    font-family: 'Poppins', sans-serif;
    border: 1px black solid;
    transition: 0.5 ease;
}

.send-max-button:hover {
    background-color: lightskyblue;
    color: black;
    transition: 0.5 ease;
    border: 1px black solid;
}

.recievescanner-cont {
    border: 1px solid gray;
    height: 200px;
    width: 200px;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 5px 10px #888888;
}

.container1 {
    display: flex;
    flex-direction: column;
    gap: 7px;
    position: relative;
    color: black;
}

.container1 .label {
    font-size: 15px;
    padding-left: 10px;
    position: absolute;
    top: 13px;
    transition: 0.3s;
    pointer-events: none;
    font-family: 'Poppins', sans-serif;

}

.input {
    width: 200px;
    height: 45px;
    border: none;
    outline: none;
    padding: 0px 7px;
    border-radius: 6px;
    color: black;
    font-size: 15px;
    background-color: transparent;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
        -1px -1px 6px rgba(255, 255, 255, 0.4);
    font-family: 'Poppins', sans-serif;

}

.input:focus {
    border: 2px solid transparent;
    color: black;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
        -1px -1px 6px rgba(255, 255, 255, 0.4),
        inset 3px 3px 10px rgba(0, 0, 0, 1),
        inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}

.container1 .input:valid~.label,
.container1 .input:focus~.label {
    transition: 0.3s;
    padding-left: 2px;
    transform: translateY(-35px);
}

.container1 .input:valid,
.container1 .input:focus {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
        -1px -1px 6px rgba(255, 255, 255, 0.4),
        inset 3px 3px 10px rgba(0, 0, 0, 1),
        inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}

.table-top {
    font-size: 20px;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

.table-in {
    font-size: 18px;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

.connectBtn {
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    color: white;
    font-weight: 500;
    background: linear-gradient(to right, rgb(94, 89, 89), black);
    box-shadow: 0 20px 30px -7px gray;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.connectBtn:hover {
    box-shadow: none;
    transform: translate(0px, 2.2px);
}

.connectBtn:active {
    transform: scale(0.96) translate(0px, 3.2px);
}
</style>
