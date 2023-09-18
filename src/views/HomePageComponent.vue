<template>
<div class="container ">
    <navbar-sidebar-footer-component />
    <div class="row h-25  ">
        <div class="col-md-12 my-auto" style="color: black">
            <div class="row justify-content-center">
                <!-- <div class="col-md-8">
                    <h1 class="txt1 pt-5">
                        Welcome Back,
                        <span style="color: red">Mr. {{ myData.fname }}</span>
                    </h1>
                </div> -->

                <div class="col-md-6 pt-3 text-center">
                    <div class="cont-first  " style="box-shadow: 2px 2px 5px 1px rgb(188, 184, 184);">
                        <div class="row pt-4 px-3">
                            <div class="col-md-12" style="text-align: left">
                                <input type="text" name="textpost" v-model="post.textpost" placeholder="What's on your mind?" style="border: none;" class="outline-none col-12 p-2" />
                                <div class="row" style="color: black">
                                    <!-- <div class="col-md-1">
                                        <i class="fa fa-photo icon p-4"></i>
                                    </div>
                                    <div class="col-md-1">
                                        <i class="fa fa-file-pdf-o icon p-4"></i>
                                    </div>
                                    <div class="col-md-1">
                                        <i class="fa fa-video-camera icon p-4"></i>
                                    </div> -->

                                    <div class="col-md-1">
                                        <i class="fa fa-smile-o icon p-4" style="font-size: 22px; cursor: pointer;"></i>
                                    </div>

                                    <div class="col-md-10">
                                        <form class="" enctype="multipart/form-data" @submit="submitForm">
                                            <label for="files" @click="selectImage" class="fa fa-image icon p-4" style="font-size: 22px; cursor: pointer; "></label>
                                            <input type="file" id="files" style="visibility:hidden;" @change="onChange">
                                            <button class="px-4 p-1 btn1" @click="postData()" type="submit"> Post </button>
                                        </form>
                                    </div>

                                    <!-- <div class="col-md-3 pt-3 text-center">
                                        <button type="submit" class="px-4 p-1 btn1">
                                            @click="postData()"
                                            Post
                                        </button>
                                    </div> -->

                                    <div class="notification">
                                        <p>Welcome Back, {{ myData.fname }} 👋</p>
                                        <span class="notification_progress"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-md-3 pt-3">
                    <div class="cont-first">
                        <h5 class="text-center pt-3">Complete Your Profile</h5>
                        <p class="px-3">You have completed <span style="color: red;">40%</span> your profile</p>
                        <div class=" text-center ">
                            <button type="submit" class="px-3 p-1 btn1" @click="$router.push('/about-us')">
                                My Profile!
                            </button>
                        </div>
                    </div>
                </div> -->
                <!-- <img :src="previewImage" class="previewImageCSS" alt="Preview Image" v-if="previewImage" /> -->
                <div class="col-md-3"></div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-12 my-auto" style="color: black">
                <div class="row justify-content-center">

                    <div class="col-md-6 pt-3 text-center">
                        <img :src="previewImage" class="previewImageCSS" alt="Preview Image" v-if="previewImage" />
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="container pt-5 ">

        <div class="row">
            <div class="col-md-12 my-auto">
                <div class="row justify-content-center">
                    <div class="col-md-2">
                        <h4 style="font-weight: 400;">Feed <i class="fa fa-arrows-rotate"></i></h4>
                    </div>

                    <div class="col-md-1">
                        <!-- <p>Only $SRS</p> -->
                    </div>
                    <div class="col-md-1 ">
                        <!-- <label class="switch">
                            <input type="checkbox" @click="toggleCheckbox">
                            <div class="slider round">
                            </div>
                        </label> -->
                    </div>

                    <div class="col-md-2 px-5 ">
                        <div class="btn-container px-3 ">
                            <label class="btn-color-mode-switch">
                                <input value="1" id="color_mode" name="color_mode" type="checkbox">
                                <label class="btn-color-mode-switch-inner" data-off="Global" data-on="My Feed" for="color_mode"></label>
                            </label>
                        </div>
                    </div>

                    <div class="col-md-3">
                    </div>
                </div>
            </div>
        </div>

        <div class="row pt-3">
            <div class="col-md-12 my-auto">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <!-- post-profile-cont -->
                        <div class="row">
                            <div class="col-md-12 ">
                                <div class="d-flex flex-column gap-3">
                                    <div class="single-post-cont pt-3" style="border: none;" v-for="(post, index) in posts" :key="index">
                                        <hr>
                                        <!-- box-shadow: 2px 2px 5px 1px rgb(188, 184, 184); -->
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
                                                                                        <p class="share-icons-txt">Copy link</p>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavbarSidebarFooterComponent from "../components/NavbarSidebarFooterComponent.vue";
import axios from "axios";
// import {
//     MDBDropdown,
//     MDBDropdownMenu,
//     MDBDropdownItem
// } from "mdb-vue-ui-kit";
// import {
//     ref
// } from 'vue';
export default {
    components: {
        NavbarSidebarFooterComponent,
        // MDBDropdown,
        // MDBDropdownMenu,
        // MDBDropdownItem,
    },

    data() {
        return {
            myData: "",
            checkbox: false,
            result: {},
            posts: [],
            user_id: [],
            showFullContent: false,
            post: {
                textpost: "",
                created_at: "",
                imagename: "",
                imagepath: "",
                videopost: "",
                user_id: {},
            },
            previewImage: null,
            file: null,
            success: "",
        };
    },

    // setup() {
    //     const dropdown1 = ref(false);
    //     return {
    //         dropdown1,
    //     }
    // },

    mounted() {
        this.myData = JSON.parse(localStorage.getItem("myData"));
        console.log("mounted() called.......");

        var token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = "Bearer" + token;
        axios.defaults.headers.common["Accept"] = "*/*";
        this.myPost();
    },
    methods: {
        onChange(e) {
            this.file = e.target.files[0];
            this.previewImage = URL.createObjectURL(this.file);

        },

        toggleCheckbox() {
            this.checkbox = !this.checkbox
            this.$emit('setCheckboxVal', this.checkbox)
        },

        submitForm(e) {
            e.preventDefault();
            if (this.file) {
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };

                let data = new FormData();
                data.append('file', this.file);
                axios.post('http://127.0.0.1:8000/api/posts', data, config)
                    .then((res) => {
                        this.success = res.data.success;
                        // Assuming the response contains the imagepath and imagename
                        this.post.imagepath = res.data.imagepath;
                        this.post.imagename = res.data.imagename;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },

        postData() {
            axios.post("http://127.0.0.1:8000/api/posts", this.post)
                .then(({
                    data
                }) => {
                    console.log(data);
                    try {
                        if (data.status === true) {
                            alert("Post Submitted.");
                            this.myPost();
                        } else {
                            alert("Not Submitted.");
                        }
                    } catch (err) {
                        alert("Error, please try again");
                    }
                });
        },

        myPost() {
            axios.get("http://127.0.0.1:8000/api/posts")
                .then(({
                    data
                }) => {
                    console.log(data);
                    try {
                        this.posts = data;
                    } catch (err) {
                        alert("Error, please try again");
                    }
                });
        },

        selectImage() {
            if (this.$refs.fileInput) {
                this.$refs.fileInput.click();
            } else {
                console.error("Input element not found with ref 'fileInput'");
            }
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
        truncateText(content) {
            if (!content) {
                return '';
            }
            const maxLength = 100;
            return content.trim().length > maxLength ? content.substring(0, maxLength) + "..." : content;
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
.previewImageCSS {
    max-width: 100%;
    max-height: 200px;
    /* display: block; */
    margin: 0 auto;
    padding: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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

.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.switch input {
    display: none;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked+.slider {
    background-color: #3396FF;
}

input:focus+.slider {
    box-shadow: 0 0 1px #3396FF;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 30px;
}

.slider.round:before {
    border-radius: 50%;
}

.btn-container {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.btn-container i {
    display: inline-block;
    position: relative;
    top: -9px;
}

label {
    font-size: 13px;
    color: black;
    font-weight: 500;
}

.btn-color-mode-switch {
    display: inline-block;
    margin: 0px;
    position: relative;
}

.btn-color-mode-switch>label.btn-color-mode-switch-inner {
    margin: 0px;
    width: 140px;
    height: 30px;
    background: #E0E0E0;
    /* border-radius: 26px; */
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    /*box-shadow: 0px 0px 8px 0px rgba(17, 17, 17, 0.34) inset;*/
    display: block;
}

.btn-color-mode-switch>label.btn-color-mode-switch-inner:before {
    content: attr(data-on);
    position: absolute;
    font-size: 12px;
    font-weight: 500;
    top: 7px;
    right: 20px;
}

.btn-color-mode-switch>label.btn-color-mode-switch-inner:after {
    content: attr(data-off);
    width: 70px;
    height: 26px;
    background: #fff;
    /* border-radius: 26px; */
    position: absolute;
    left: 2px;
    top: 2px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 6px -2px #111;
    padding: 5px 0px;
}

.btn-color-mode-switch input[type="checkbox"] {
    cursor: pointer;
    width: 50px;
    height: 25px;
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: 1;
    margin: 0px;
}

.btn-color-mode-switch input[type="checkbox"]:checked+label.btn-color-mode-switch-inner {
    color: black;
    color: black;
}

.btn-color-mode-switch input[type="checkbox"]:checked+label.btn-color-mode-switch-inner:after {
    content: attr(data-on);
    left: 68px;
    color: black;
    background-color: #3396FF;
}

.btn-color-mode-switch input[type="checkbox"]:checked+label.btn-color-mode-switch-inner:before {
    content: attr(data-off);
    right: auto;
    left: 20px;
}

.btn-color-mode-switch input[type="checkbox"]:checked~.alert {
    display: block;
}

.dark-preview {
    background: #0d0d0d;
}

.white-preview {
    background: #fff;
}

.cont-first {
    height: 130px;
    border: none;
    border-radius: 8px;
}

.shadow-1 {
    --tw-shadow: 0px 6px 14px -6px rgba(24, 39, 75, .06), 0px 10px 32px -4px rgba(24, 39, 75, .06);
    --tw-shadow-colored: 0px 6px 14px -6px var(--tw-shadow-color), 0px 10px 32px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.img1-1 {
    border-radius: 50%;
    width: 100%;
    height: 38%;
    border: 0;
}

.txt1 {
    font-size: 22px;
}

.inp1 {
    font-size: 18px;
    width: 110%;
    border-radius: 24px;
    border: 0;
    background-color: black;
    color: white;
}

.btn1 {
    border-radius: 8px;
    border: 1px solid black;
    font-size: 16px;
    transition: 0.7s ease;
}

.btn1:hover {
    background-color: black;
    color: white;
    transition: 0.7s ease;
    border: 1px solid white;
}

.icon {
    font-size: 16px;
}

.notification {
    position: absolute;
    bottom: 50px;
    left: 50px;
    width: max-content;
    padding: 20px 15px;
    border-radius: 4px;
    background-color: #141619;
    color: #f6f5f9;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(30px);
    opacity: 0;
    visibility: hidden;
    animation: fade-in 4s linear forwards;
    font-family: "Fira Sans", sans-serif;
}

.notification-progress {
    position: absolute;
    left: 5px;
    bottom: 5px;
    width: calc(100% - 10px);
    height: 3px;
    transform: scaleX(0);
    transform-origin: right;
    border-radius: inherit;
    animation: load 3s 0.25s linear forwards;
}

@keyframes fade-in {
    5% {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    90% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes load {
    to {
        transform: scaleX(1);
    }
}

.outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

/* IMAGE UPLOAD MODAL */
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

/* IMAGE UPLOAD MODAL */

.post-cont {
    border: 1px solid white;
    border-radius: 24px;
}

.text-cont {
    border: 1px solid white;
    border-radius: 24px;
}

.img-post {
    /* border: 1px solid white; */
    border-radius: 48px;
    height: 50px;
    width: 50px;
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

/* .post-profile-cont {
    border-radius: 24px;
    background-color: #282828;
    border: 0;
} */

.single-post-cont {
    border-radius: 8px;
    background-color: white;
    border: 0;
}

.btn-read-more-less {
    background-color: transparent;
    border: 0;
    color: blajck;
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

.post-img-cont {
    height: 100;
    object-fit: contain;
    max-width: 300px;
    border: 0;
}
</style>
