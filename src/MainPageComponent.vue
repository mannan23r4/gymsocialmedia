<template>
<div class="container h-100">
    <div class="row h-100">
        <div class="col-12 my-auto text-center">
            <h1 class="txt1 animate__zoomInDown animate__animated animate__delay-1s">Welcome To <span style="color: red;">ATROMG8</span><span style="font-size: 100px;">.</span></h1>
            <div class="col-12 text-center">
                <p class="txt2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta ipsam praesentium voluptates quia vero modi iure ut, provident, autem, laboriosam iusto quos architecto nulla! Mollitia veritatis quam labore tempore?</p>
            </div>

            <div class="col-md-12 py-3 px-3">
                <button class=" py-2 px-5 text-center btn-1" @click="$router.push('../register')">
                    Register
                </button>

                <button class=" py-2 px-5 text-center btn-1" @click="$router.push('../login')">
                    Log-In
                </button>
            </div>
        </div>
    </div>
</div>
</template>

    
<script>
    </script>

    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.txt1 {
    color: white;
    font-size: 50px;
    font-family: "Fira Sans", sans-serif;
}

.txt2 {
    color: white;
    font-family: "Fira Sans", sans-serif;
    font-size: 18px;
}

.btn-1 {
    border-radius: 12px;
    font-family: "Fira Sans", sans-serif;
    border: 0;
    background-color: rgba(37, 37, 37, 255);
    color: white;
}

.btn-1:hover {
    background-color: black;
    color: white;
    border: 0;
    transition: 0.5s ease-in;
}
</style>
