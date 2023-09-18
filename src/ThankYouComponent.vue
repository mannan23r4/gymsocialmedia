<template>
<div class="container h-100">
    <div class="row h-100">
        <div class="col-md-12 my-auto">
            <div class="col-md-12 text-center ">
                <h1 class="animate__animated animate__bounceInUp">THANK YOU</h1>
                <h1 class="animate__animated animate__bounceInUp">FOR JOINING US <span style="color: red; font-size: 40px;  ">.</span> </h1>
            </div>

            <div class="col-md-12 text-center ">
                <h1 class=" txt-1 " style="color: white;">Congratz, you successfully created your account.</h1>
                <h1 class=" txt-1 " style="color: red;">WE HAVE SENT YOU A <span style="color: white;">VERIFICATION EMAIL.</span></h1>

            </div>

            <div class="col-md-12 text-center">
                <button class="input-field py-2 px-5  btn-1" @click="$router.push('../login')">
                    Let Me In
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>

  </script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.animate__animated.animate__bounceInUp {
    --animate-duration: 3s;
    font-size: 45px;
    color: white;
    font-family: 'Climate Crisis', cursive;
    letter-spacing: 2px;
}

/* This changes all the animations globally */
:root {
    --animate-duration: 800ms;
    --animate-delay: 0.9s;
}

.txt-1 {
    color: white;
    font-size: 22px;
    font-family: "Fira Sans", sans-serif;
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
</style>
