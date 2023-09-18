<template>
<navbar-sidebar-footer-component />

<!-- <div class="container pt-5">
        <div class="row justify-content-center">
            <div class="col-md-3 cont-1">
                <div class="col-md-6  ">

                </div>
            </div>
            <div class="col-md-6">
                <div class="post-cont p-5" v-for="(post, index) in posts" :key="index">
                    <div style="color: white">
                        <div class="row justify-content-center">
                            <div class="col-md-2 text-center">
                                <img class="img1" src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    alt="Profile" />
                            </div>

                            <div class="col-md-10">
                                <p class="username" style="margin-bottom: 0px">
                                    {{ myData.username }}
                                </p>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>Posted on: {{ post.created_at }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="  col-md-12 pt-5">
                                <div class="post-cont p-1" style="border-radius: 0">
                                    <h5 class="p-1">{{ post.textpost }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 cont-1"></div>
        </div>
    </div> -->

<div class="container pt-1">
    <div class="row pt-4 ">
        <div class="col-md-3">
            <div class="user-info-cont  text-center ">
                <div class="profile-img-cont">
                    <div class="col-md-12 p-3 " style="display: flex; justify-content: end; ">
                        <div class="opt-cont" style="cursor: pointer;">
                            <i class="fa fa-cog" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#settingModal" style="position: relative; color: black; " aria-hidden="true"></i>
                        </div>
                    </div>
                    <img style="margin-top: -56px;" src="https://images.unsplash.com/photo-1529891934443-f92f7cc212a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwYW5kJTIwYmx1ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" class=" img-back-cover  " alt="Back Cover Picture">
                    <img style="margin-top: -70px;" src="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.webp?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U=" class=" img1 " alt="Profile Picture">
                </div>
                <p class="pt-3 name-txt-profile ">{{myData.fname}} {{myData.lname}} </p>
                <i>
                    <p class="name-txt-profile  " style="font-size: 18px; font-weight: 300; ">@{{myData.username}}</p>
                </i>
                <p class="name-txt-profile px-4  " style="font-size: 15px; font-weight: 300; ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <div class="px-5">
                    <div class="px-2">
                        <button class="cssbuttons-io-button"> Share Profile
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6" style="display: flex; justify-content: center; ">
            <div v-if="posts.length === 0" class="pt-5">
                <p class="px-5 pt-5 " style="font-size: 30px; text-align: center; color: white; ">No posts yet by {{ myData.fname }} {{ myData.lname }} </p>
                <p class="px-5" style="font-size: 30px; text-align: center; color: red; cursor: pointer; " @click="$router.push('../home')">Post Now!! </p>
            </div>
            <div v-else class="container-fluid p-3 pt-5 ">
                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex flex-column gap-3">
                            <div class="single-post-cont pt-3 p-2 " style="border: none;" v-for="(post, index) in posts" :key="index">
                                <hr>
                                <div style="color: black">
                                    <div class="row justify-content-center">
                                        <div class="col-md-12 px-4 " style="display: flex; justify-content: end; ">
                                            <label class="popup">
                                                <input type="checkbox">
                                                <div class="burger" tabindex="0">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <nav class="popup-window">
                                                    <ul>
                                                        <li>
                                                            <button>
                                                                <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                                                    <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                                                                </svg>
                                                                <span>Edit</span>
                                                            </button>
                                                        </li>
                                                        <hr>
                                                        <li>
                                                            <button>
                                                                <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                                                    <line y2="18" x2="6" y1="6" x1="18"></line>
                                                                    <line y2="18" x2="18" y1="6" x1="6"></line>
                                                                </svg>
                                                                <span>Delete</span>
                                                            </button>
                                                        </li>
                                                        <hr>
                                                        <li>
                                                            <button>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                                                                    <polyline points="12 8 12 12 16 12"></polyline>
                                                                </svg>
                                                                <span>Archive</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </label>

                                            <!-- <span>
                                                        <MDBDropdown v-model="dropdown1"  >
                                                            <i class="fa-solid fa-ellipsis-vertical px-1"  @click="dropdown1 = !dropdown1"></i>
                                                            <MDBDropdownMenu  class="" aria-labelledby="dropdownMenuButton" style="background-color: rgb(141, 139, 139);  ">
                                                                <MDBDropdownItem style="color: black;"   href="#">Edit</MDBDropdownItem>
                                                                <MDBDropdownItem style="color: black;  " href="#">Delete Post</MDBDropdownItem>
                                                                <MDBDropdownItem style="color: black;  " href="#">Archive</MDBDropdownItem>
                                                            </MDBDropdownMenu>
                                                        </MDBDropdown>
                                                    </span> -->
                                        </div>

                                        <div class="col-md-2 text-center">
                                            <img class="img-post" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" />
                                        </div>

                                        <div class="col-md-10">
                                            <i>
                                                <p class="username" style="margin-bottom: 0px">
                                                    {{ post.user_id }}
                                                </p>
                                            </i>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <p>Posted at: {{ post.created_at }}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row px-4 pt-2 ">
                                            <div class="col-md-10">
                                                <p class="post-txt-main  " v-if="!post.showFullContent">{{ truncateText(post.textpost) }}</p>
                                                <p class="post-txt-main  " v-else>{{ post.textpost }}</p><button class="btn-read-more-less pb-3 " v-if="isLongPost(post.textpost)" @click="toggleContent(post)">
                                                    {{ post.showFullContent ? "Read Less" : "Read More" }}
                                                </button>
                                                <img class="post-img-cont px-2 " :src="'http://127.0.0.1:8000/storage/' + post.imagepath" alt="" />
                                            </div>

                                            <div class="col-md-10 pt-3 pb-3 ">
                                                <!-- Like Button -->
                                                <label class="like pe-3 " @click="likePost">
                                                    <input type="checkbox" class="likecheckbox">
                                                    <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
                                                    </svg>
                                                </label>

                                                <!-- Comment Button -->
                                                <label class="like px-0 pe-3 " @click="commentPost">
                                                    <input type="checkbox" class="commentcheckbox">
                                                    <svg viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>
                                                    </svg>
                                                </label>

                                                <!-- Share Button -->
                                                <label class="like" @click="sharePost" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                    <input type="checkbox" class="sharecheckbox">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 448 612">
                                                        <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
                                                    </svg>
                                                </label>
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

        <div class="col-md-3" style="display: flex; justify-content: end; ">
            <h1>Friends</h1>
        </div>
    </div>
</div>
<!-- all modal -->

<!-- setting modal -->
<div class="modal fade" id="settingModal" tabindex="-1" aria-labelledby="settingLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="settingLabel">Edit Profile</h5>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <span>
                    <i class="fa-solid fa-pencil px-2 "></i>
                </span>
            </div>
            <div class="modal-body">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        </div>
                        <div class="col-md-6">
                            <span>
                                First Name: {{ myData.fname }}
                            </span>
                        </div>

                        <div class="col-md-6">
                            <span>
                                Username: @{{ myData.username }}
                            </span>
                        </div>

                        <div class="col-md-6 pt-3 ">
                            <span>
                                Last Name: {{ myData.lname }}
                            </span>
                        </div>

                        <div class="col-md-6 pt-3 ">
                            <span v-if="myData.active2fa == 1">
                                2FA is Active
                            </span>

                            <span v-if="myData.active2fa == 1">
                                <button>Disable 2FA</button>
                                <span style="color: red; font-size: 12px; ">This will affect your account security</span>
                            </span>

                            <span v-if="myData.active2fa == 0">
                                2FA is Not Active
                            </span>

                            <span v-if="myData.active2fa == 0">
                                <button>Activate 2FA</button>
                            </span>
                        </div>

                        <div class="col-md-7 pt-3 ">
                            <span>
                                Email: {{ myData.email }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard changes</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
<!-- setting modal -->

<!-- share modal -->
<div class="modal fade" id="shareModal" tabindex="-1" aria-labelledby="shareLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="shareLabel">Share Post</h5>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <span>
                                <i class="fa-solid fa-link px-1 share-icons "></i>
                                <p class="share-icons-txt">Copy Link</p>
                            </span>
                        </div>

                        <div class="col-md-2">
                            <span>
                                <i class="fa-solid fa-qrcode px-1 share-icons "></i>
                                <p class="share-icons-txt">Copy Link</p>
                            </span>
                        </div>

                        <div class="col-md-2">
                            <span>
                                <i class="fa-brands fa-whatsapp px-1 share-icons "></i>
                                <p class="share-icons-txt">Share Now!</p>
                            </span>
                        </div>

                        <div class="col-md-2">
                            <span>
                                <i class="fa-brands fa-telegram px-1 share-icons "></i>
                                <p class="share-icons-txt">Share Now!</p>
                            </span>
                        </div>

                        <div class="col-md-2">
                            <span>
                                <i class="fa-brands fa-facebook px-1 share-icons"></i>
                                <p class="share-icons-txt">Share Now!</p>
                            </span>
                        </div>

                        <div class="col-md-2">
                            <span>
                                <i class="fa-brands fa-instagram px-1 share-icons"></i>
                                <p class="share-icons-txt">Share Now!</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- share modal -->
</template>

<script>
import axios from "axios";
import NavbarSidebarFooterComponent from "../components/NavbarSidebarFooterComponent.vue";
export default {
    components: {
        NavbarSidebarFooterComponent,
    },

    data() {
        return {
            myData: "",
            result: {},
            posts: [],
            showFullContent: false,
            post: {
                textpost: "",
                created_at: "",
                imagepath: "",
                imagename: "",
            },
        };
    },
    mounted() {
        this.myData = JSON.parse(localStorage.getItem("myData"));
        console.log("mounted() called.......");
        var token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = "Bearer" + token;
        axios.defaults.headers.common["Accept"] = "*/*";
        this.myPost();
    },

    methods: {
        myPost() {
            axios.get("http://127.0.0.1:8000/api/profileposts").then(({
                data
            }) => {
                console.log(data);
                try {
                    this.posts = data.map((post) => ({
                        ...post,
                        showFullContent: false, // Initialize the showFullContent property for each post
                    }));
                } catch (err) {
                    alert("Error, please try again");
                }
            });
        },
        truncateText(content) {
            if (!content) {
                return '';
            }
            const maxLength = 100;
            return content.length > maxLength ? content.substring(0, maxLength) + "..." : content;
        },
        toggleContent(post) {
            post.showFullContent = !post.showFullContent;
        },

        isLongPost(postText) {
            if (postText && typeof postText === 'string') {
                const wordCount = postText.trim().split(/\s+/).length;
                return wordCount > 30;
            }
            return false;
        },
    },

};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.btn-read-more-less {
    background-color: transparent;
    border: 0;
    color: black;
    font-weight: bold;
}

.post-img-cont {
    height: 100;
    object-fit: contain;
    max-width: 300px;
    border: 0;
}

.popup {
    --burger-line-width: 1.125em;
    --burger-line-height: 0.125em;
    --burger-offset: 0.625em;
    --burger-bg: rgba(0, 0, 0, .15);
    --burger-color: #333;
    --burger-line-border-radius: 0.1875em;
    --burger-diameter: 2.125em;
    --burger-btn-border-radius: calc(var(--burger-diameter) / 2);
    --burger-line-transition: .3s;
    --burger-transition: all .1s ease-in-out;
    --burger-hover-scale: 1.1;
    --burger-active-scale: .95;
    --burger-enable-outline-color: var(--burger-bg);
    --burger-enable-outline-width: 0.125em;
    --burger-enable-outline-offset: var(--burger-enable-outline-width);
    /* nav */
    --nav-padding-x: 0.25em;
    --nav-padding-y: 0.625em;
    --nav-border-radius: 0.375em;
    --nav-border-color: #ccc;
    --nav-border-width: 0.0625em;
    --nav-shadow-color: rgba(0, 0, 0, .2);
    --nav-shadow-width: 0 1px 5px;
    --nav-bg: #eee;
    --nav-font-family: Menlo, Roboto Mono, monospace;
    --nav-default-scale: .8;
    --nav-active-scale: 1;
    --nav-position-left: 0;
    --nav-position-right: unset;
    /* if you want to change sides just switch one property */
    /* from properties to "unset" and the other to 0 */
    /* title */
    --nav-title-size: 0.625em;
    --nav-title-color: #777;
    --nav-title-padding-x: 1rem;
    --nav-title-padding-y: 0.25em;
    /* nav button */
    --nav-button-padding-x: 1rem;
    --nav-button-padding-y: 0.375em;
    --nav-button-border-radius: 0.375em;
    --nav-button-font-size: 12px;
    --nav-button-hover-bg: #6495ed;
    --nav-button-hover-text-color: #fff;
    --nav-button-distance: 0.875em;
    /* underline */
    --underline-border-width: 0.0625em;
    --underline-border-color: #ccc;
    --underline-margin-y: 0.3125em;
}

/* popup settings 👆 */

.popup {
    display: inline-block;
    text-rendering: optimizeLegibility;
    position: relative;
}

.popup input {
    display: none;
}

.burger {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--burger-diameter);
    height: var(--burger-diameter);
    border-radius: var(--burger-btn-border-radius);
    border: none;
    cursor: pointer;
    overflow: hidden;
    transition: var(--burger-transition);
    outline: var(--burger-enable-outline-width) solid transparent;
    outline-offset: 0;
}

.burger span {
    height: var(--burger-line-height);
    width: var(--burger-line-width);
    background: var(--burger-color);
    border-radius: var(--burger-line-border-radius);
    position: absolute;
    transition: var(--burger-line-transition);
}

.burger span:nth-child(1) {
    top: var(--burger-offset);
}

.burger span:nth-child(2) {
    bottom: var(--burger-offset);
}

.burger span:nth-child(3) {
    top: 50%;
    transform: translateY(-50%);
}

.popup-window {
    transform: scale(var(--nav-default-scale));
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding: var(--nav-padding-y) var(--nav-padding-x);
    background: white;
    font-family: var(--nav-font-family);
    color: var(--nav-text-color);
    border-radius: var(--nav-border-radius);
    box-shadow: var(--nav-shadow-width) var(--nav-shadow-color);
    border: var(--nav-border-width) solid var(--nav-border-color);
    top: calc(var(--burger-diameter) + var(--burger-enable-outline-width) + var(--burger-enable-outline-offset));
    left: var(--nav-position-left);
    right: var(--nav-position-right);
    transition: var(--burger-transition);
}

.popup-window legend {
    padding: var(--nav-title-padding-y) var(--nav-title-padding-x);
    margin: 0;
    color: var(--nav-title-color);
    font-size: var(--nav-title-size);
    text-transform: uppercase;
}

.popup-window ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.popup-window ul button {
    outline: none;
    width: 100%;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    color: var(--burger-color);
    font-size: var(--nav-button-font-size);
    padding: var(--nav-button-padding-y) var(--nav-button-padding-x);
    white-space: nowrap;
    border-radius: var(--nav-button-border-radius);
    cursor: pointer;
    column-gap: var(--nav-button-distance);
}

.popup-window ul li:nth-child(1) svg,
.popup-window ul li:nth-child(2) svg {
    color: cornflowerblue;
}

.popup-window ul li:nth-child(4) svg,
.popup-window ul li:nth-child(5) svg {
    color: rgb(153, 153, 153);
}

.popup-window ul li:nth-child(7) svg {
    color: red;
}

.popup-window hr {
    margin: var(--underline-margin-y) 0;
    border: none;
    border-bottom: var(--underline-border-width) solid var(--underline-border-color);
}

/* actions */

.popup-window ul button:hover,
.popup-window ul button:focus-visible,
.popup-window ul button:hover svg,
.popup-window ul button:focus-visible svg {
    color: var(--nav-button-hover-text-color);
    background: var(--nav-button-hover-bg);
}

.burger:hover {
    transform: scale(var(--burger-hover-scale));
}

.burger:active {
    transform: scale(var(--burger-active-scale));
}

.burger:focus:not(:hover) {
    outline-color: var(--burger-enable-outline-color);
    outline-offset: var(--burger-enable-outline-offset);
}

.popup input:checked+.burger span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}

.popup input:checked+.burger span:nth-child(2) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
}

.popup input:checked+.burger span:nth-child(3) {
    transform: translateX(calc(var(--burger-diameter) * -1 - var(--burger-line-width)));
}

.popup input:checked~nav {
    transform: scale(var(--nav-active-scale));
    visibility: visible;
    opacity: 1;
}

.img-post {
    /* border: 1px solid white; */
    border-radius: 48px;
    height: 60px;
    width: 60px;
    border: 0;
}

.username {
    font-weight: bold;
    font-size: 20px;
}

.user-info-cont {
    border-radius: 24px;
    background-color: #282828;
    border: 0;
}

.profile-img-cont {
    border-radius: 50%;
}

.img1 {
    border-radius: 50%;
    object-fit: cover;
    width: 100px;
    height: 100px;
    border: 0;
}

.name-txt-profile {
    font-size: 22px;
    color: white;
    font-weight: bold;
}

.img-back-cover {
    object-fit: cover;
    width: 306px;
    height: 220px;
    border-radius: 24px;
    border: 0;
}

.opt-cont {
    border-radius: 50%;
    background-color: white;
    position: relative;
    width: 25px;
    height: 25px;
}

.cssbuttons-io-button {
    background: white;
    color: black;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em black;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
}

.cssbuttons-io-button .icon {
    background: #282828;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em black;
    right: 0.3em;
    transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: white;
}

.cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
    transform: scale(0.95);
}

.post-profile-cont {
    border-radius: 24px;
    background-color: #282828;
    border: 0;
}

.single-post-cont {
    border-radius: 8px;
    background-color: white;
    border: 0;
}

.btn-read-more-less {
    background-color: transparent;
    border: 0;
    color: black;
    font-weight: bold;
}

.like .likecheckbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.like {
    /* display: block; */
    position: relative;
    cursor: pointer;
    user-select: none;
    color: black;
}

.like svg {
    position: relative;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    transition: all 0.3s;
    fill: black;
}

.like svg:hover {
    transform: scale(1.1);
}

.like .likecheckbox:checked~svg {
    fill: #E3474F;
}

.like .commentcheckbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.like .sharecheckbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.post-txt-main {
    font-size: 18px;
}

.share-icons {
    font-size: 30px;
    cursor: pointer;
}

.share-icons-txt {
    font-size: 10px;
}
</style>
