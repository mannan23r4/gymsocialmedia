<template>
<navbar-sidebar-footer-component />
<div>
    <button id="connect-button" @click="connect">Connect</button>
    <button id="disconnect-button" @click="disconnect" v-if="account">Disconnect</button>

    <div style="color: white;" >
        <p>Account: {{ account }}</p>
        <p>Balance: {{ balance }} {{  }}</p>
    </div>
</div>
</template>

<script>
import NavbarSidebarFooterComponent from '../components/NavbarSidebarFooterComponent.vue';

export default {
    components: {
        NavbarSidebarFooterComponent
    },
    data() {
        return {
            account: "",
            balance: 0,
            provider: null,
        };
    },

    methods: {
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
        }
    }
}
</script>

<style></style>
