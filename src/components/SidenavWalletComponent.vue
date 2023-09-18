<template>
        
<div class="container-fluid nav-cont position-fixed " style="z-index: 5;  ">
    <div class="row p-3">
        <div class="col-md-6">
            <img class="imglogo" src="https://pbs.twimg.com/profile_images/1678690894520926208/jcvxoMxL_400x400.jpg" alt="">
        </div>

<div class="col-md-6 ">
            <div class="row">
                <div class="col-md-1 px-2">
                    <div class="nav-circle p-2"> <svg aria-hidden="true" focusable="false" data-prefix="fas" class=" iconnav pt-2  fa fa-question " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M64 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H128C57.3 32 0 89.3 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
                        </svg>
                    </div>
                </div>

<div class="col-md-1 px-1 ">
                    <div class="nav-circle p-2 ">
                        <!-- <p class="p-3 pt-3 port-txt">Portfolio History</p> -->
                        <MDBDropdown v-model="dropdown2">
                            <div class=" col-md-2  " @click="dropdown2 = !dropdown2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="iconnav pt-2 " viewBox="0 0 256 256">
                                    <path fill="currentColor" d="M76 60a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm52-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm68 32a16 16 0 1 0-16-16a16 16 0 0 0 16 16ZM60 112a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm68 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm68 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16ZM60 180a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm68 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm68 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z" /></svg>

                            </div>
<MDBDropdownMenu class="dropdown-port" aria-labelledby="dropdownMenuButton">
                                <MDBDropdownItem href="#">hello1</MDBDropdownItem>
                                <MDBDropdownItem href="#">hello1</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                </div>

<div class=" col-md-10  address-cont-nav my-auto p-2 ">
                    <div class="row my-auto">
                        <div class="col-md-10 my-auto px-4 ">
                            <span class="txt-nav-address">erd1ly30ktyrh2j9zxwln3ulzq2xelq48atj3pg0mew8cn3y6gm5xwzq2zm9ce</span>
                        </div>

<div class="col-md-1  ">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone" class="fa fa-clone iconnavadd " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"></path>
                            </svg>
                        </div>
<div class="col-md-1 px-1 ">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="power-off" class="fa fa-power-off iconnavadd " @click="copyText" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid pt-4 ">
    <div class="row pt-5 ">
        <div class="col-md-2 sidenav-cont ">
            <ul class="p-1 pt-2 position-fixed  ">
                <li class="p-1 active sidenav-li-box"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class=" fa fa-chart-pie sidenav-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M302 240V16.6c0-9 7-16.6 16-16.6C441.7 0 542 100.3 542 224c0 9-7.6 16-16.6 16H302zM30 272C30 150.7 120.1 50.3 237 34.3c9.2-1.3 17 6.1 17 15.4V288L410.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C369.8 495.6 321.8 512 270 512C137.5 512 30 404.6 30 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L318 288H556.4z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt active ">Dashboard</span>
                </li>

                <li class="p-1 sidenav-li-box "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-arrow-left" class="fa fa-arrow-right-arrow-left sidenav-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt ">Transactions</span>
                </li>

                <li class="p-1 sidenav-li-box "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="coins" class="fa fa-coins sidenav-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt ">Tokens</span>
                </li>

                <li class="p-1 sidenav-li-box "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes" class="fa fa-cubes sidenav-cont-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M273.8 45.8l73.7 28L271.2 103 194.8 73.7l73.7-28c1.7-.7 3.6-.7 5.3 0zM128.1 87.1V192.6c-1.2 .4-2.4 .8-3.6 1.2L34.1 228.1c-20.5 7.8-34 27.4-34 49.3V389.5c0 20.9 12.4 39.8 31.5 48.3L122 477.5c13.5 5.9 28.9 5.9 42.4 0l106.8-46.9L378 477.5c13.5 5.9 28.9 5.9 42.4 0l90.4-39.7c19.1-8.4 31.5-27.3 31.5-48.3V277.4c0-21.9-13.5-41.5-34-49.3l-90.4-34.3c-1.2-.5-2.4-.9-3.6-1.2V87.1c0-21.9-13.5-41.5-34-49.3L289.9 3.5c-12-4.6-25.3-4.6-37.4 0L162.1 37.8c-20.5 7.8-34 27.4-34 49.3zM369.1 198.2l-77.5 29.4v-84l77.5-29.7v84.3zM145.8 236.1l73.7 28-76.4 29.3L66.8 264.1l73.7-28c1.7-.7 3.6-.7 5.3 0zm17.7 192.4V333.9l77.5-29.7v90.2l-77.5 34.1zm233-192.4c1.7-.7 3.6-.7 5.3 0l73.7 28-76.4 29.3-76.4-29.3 73.7-28zm96.1 160.3l-73 32.1V333.9l77.5-29.7v85.3c0 3-1.8 5.7-4.5 6.9z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt ">NFTs</span>
                </li>

                <span class="text-muted-sidenav  px-1">staking</span>

                <li class="p-1 sidenav-li-box "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-arrow-left" class="fa fa-lock sidenav-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt ">Stake</span>
                </li>

                <li class="p-1 sidenav-li-box "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock-keyhole" class="fa fa-lock-keyhole sidenav-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M224 64c44.2 0 80 35.8 80 80v48H144V144c0-44.2 35.8-80 80-80zM80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H368V144C368 64.5 303.5 0 224 0S80 64.5 80 144zM256 320v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32s32 14.3 32 32z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt ">Legacy Delegation</span>
                </li>

                <li class="p-1 sidenav-li-box "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="server" class="fa fa-server sidenav-cont-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt ">Validate</span>
                </li>

                <span class="text-muted-sidenav  px-1">Sign Message</span>

                <li class="p-1 sidenav-li-box "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="stamp" class="fa fa-stamp sidenav-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M312 201.8c0-17.4 9.2-33.2 19.9-47C344.5 138.5 352 118.1 352 96c0-53-43-96-96-96s-96 43-96 96c0 22.1 7.5 42.5 20.1 58.8c10.7 13.8 19.9 29.6 19.9 47c0 29.9-24.3 54.2-54.2 54.2H112C50.1 256 0 306.1 0 368c0 20.9 13.4 38.7 32 45.3V464c0 26.5 21.5 48 48 48H432c26.5 0 48-21.5 48-48V413.3c18.6-6.6 32-24.4 32-45.3c0-61.9-50.1-112-112-112H366.2c-29.9 0-54.2-24.3-54.2-54.2zM416 416v32H96V416H416z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt ">Sign Message</span>
                </li>

                <span class="text-muted-sidenav  px-1">Issue</span>

                <li class="p-1 sidenav-li-box "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hexagon-image" class="fa fa-hexagon-image sidenav-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M10.1 220c-12.9 22.3-12.9 49.7 0 72L98.4 444.9c12.9 22.3 36.6 36 62.4 36H337.3c25.7 0 49.5-13.7 62.4-36L487.9 292c12.9-22.3 12.9-49.7 0-72L399.6 67.1c-12.9-22.3-36.6-36-62.4-36H160.7c-25.7 0-49.5 13.7-62.4 36L10.1 220zm141.2 59.8c4.5-4.9 10.8-7.7 17.4-7.8s13 2.6 17.6 7.4L225.2 320l71.6-86.2c4.6-5.5 11.3-8.7 18.5-8.7s13.9 3.2 18.5 8.7l72.6 87.4-55.2 95.7c-2.9 5-8.1 8-13.9 8l-176.6 0c-5.7 0-11-3-13.9-8l-46.8-81 51.2-56.1zM185 120a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt ">Create Token</span>
                </li>

                <li class="p-1 sidenav-li-box "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="coin" class="fa fa-coin sidenav-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 352C114.6 352 0 287.5 0 208S114.6 64 256 64s256 64.5 256 144s-114.6 144-256 144zM86.6 248.2c12 11.4 27.7 20.1 44.4 26.8c33.6 13.4 77.8 21 125 21s91.4-7.6 125-21c16.7-6.7 32.4-15.4 44.4-26.8C437.5 236.7 448 220.5 448 200s-10.5-36.7-22.6-48.2c-12-11.4-27.7-20.1-44.4-26.8c-33.6-13.4-77.8-21-125-21s-91.4 7.6-125 21c-16.7 6.7-32.4 15.4-44.4 26.8C74.5 163.3 64 179.5 64 200s10.5 36.7 22.6 48.2zM96 200c0-35.3 71.6-64 160-64s160 28.7 160 64s-71.6 64-160 64s-160-28.7-160-64zM0 290.1c13.2 15.6 29.7 29.3 48 40.9l0 63.7C17.8 373.6 0 347.9 0 320l0-29.9zM80 413l0-64.7c28.4 13.2 60.9 23 96 29l0 64.3c-36.2-6-68.9-15.9-96-28.7zm128 32.8l0-64.1c15.7 1.6 31.7 2.4 48 2.4s32.3-.8 48-2.4l0 64.1c-15.5 1.5-31.6 2.2-48 2.2s-32.5-.8-48-2.2zm128-4.1l0-64.3c35.1-6 67.6-15.9 96-29l0 64.7c-27.1 12.8-59.8 22.7-96 28.7zm128-47l0-63.7c18.3-11.5 34.8-25.2 48-40.9l0 29.9c0 27.9-17.8 53.6-48 74.6z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt ">Create NFT</span>
                </li>

                <span class="text-muted-sidenav  px-1">Security</span>

                <li class="p-1 sidenav-li-box"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-xmark" class="fa fa-shield-xmark sidenav-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M253.4 2.9C249.2 1 244.7 0 240 0s-9.2 1-13.4 2.9L38.3 82.8C16.3 92.1-.1 113.8 0 140c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C438.7 420.7 479.5 239.2 480 140c.1-26.2-16.3-47.9-38.3-57.2L253.4 2.9zM159 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                    </svg>
                    <span class="px-3 sidevan-txt ">Guardian</span>
                </li>
            </ul>
        </div>

<div class="col-md-9  p-5 main-cont   ">
            <div class="row ">
                <h1 class="mid-main-txt ">Welcome back!</h1>
                <div class="col-md-8 p-2   main-port-cont ">
                    <div class="row scrollable-content ">
                        <div class="col-md-9">
                            <p class="p-3 pt-3 port-txt">Portfolio History</p>
                        </div>

<div class="col-md-2 pt-3">
                            <!-- <p class="p-3 pt-3 port-txt">Portfolio History</p> -->
                            <MDBDropdown v-model="dropdown1">
                                <div class=" dropdown-port px-2 " @click="dropdown1 = !dropdown1">
                                    <span class="px-2">30d</span> <i class="fa-solid fa-caret-down p-2"></i>
                                </div>
<MDBDropdownMenu class="dropdown-port " aria-labelledby="dropdownMenuButton">
                                    <MDBDropdownItem href="#">7d</MDBDropdownItem>
                                    <MDBDropdownItem href="#">30d</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </div>
                    </div>
                </div>

<div class="col-md-4 px-4">
                    <div class="row justify-content-center ">
                        <div class="col-md-12 pt-4 pb-3 main-port-cont-total text-center ">
                            <span style="font-size: 12px; font-weight: 500; ">Total Portfolio</span>
                            <div class="col-md-12  text-center ">
                                <span style="font-size: 32px; font-weight: bold; ">$0.00</span>
                            </div>
<div class="col-md-12 pt-2 text-muted-sidenav text-center " style="color: black;">
                                <span class="" style="font-size: 10px; font-weight: 300; ">0 SRS Available</span>
                            </div>
                        </div>

                    </div>

<div class="row pt-3 ">
                        <div class="col-md-12 main-port-cont-token">
                            <p class="text-muted-sidenav pt-3" style="font-size: 16px; text-transform: none; font-weight: 600;  ">Your Tokens</p>
                            <div class="row justify-content-center ">
                                <div class="col-md-12 text-center">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="coins" class="fa fa-coins  " height="70px" width="70px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"></path>
                                    </svg>
                                </div>
<div class="col-md-12 text-center pt-2 pb-2">
                                    <p style="font-size: 20px;  font-weight: 400; color: #e5e5e5; ">No tokens found for this wallet </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<div class="row pt-3 justify-content-center ">
                    <div class="col-md-12  ">
                        <div class="row">
                            <div class="col-md-3 small-port-cont mr-3 ">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="col-md-12  ">
                                            <div class="px-3 pt-3 ">
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check" class="fa fa-check icon small-port-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"></path>
                                                </svg>
                                            </div>
<span class="small-port-cont-muted-txt px-3 "> Available </span>
                                        </div>
<div class="col-md-12 pt-4">
                                            <span class="small-port-cont-muted-txt px-3  " style="font-size: 18px; color: #e5e5e5; "> 0 SRS </span>
                                        </div>
<div class="col-md-12 pb-3">
                                            <span class="small-port-cont-muted-txt px-3  "> = $0 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

<div class="col-md-3  small-port-cont  mr-3 ">
                                <div class="row ">
                                    <div class="col-md-12">
                                        <div class="col-md-12">
                                            <div class="px-3 pt-3    ">
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock" class="fa fa-lock icon small-port-cont-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M144 128v64H304V128c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h32c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H96zM48 256V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16z"></path>
                                                </svg>
                                            </div>
<span class="small-port-cont-muted-txt px-3 "> Stake Delegation</span>
                                        </div>
<div class="col-md-12 pt-4">
                                            <span class="small-port-cont-muted-txt px-3  " style="font-size: 18px; color: #e5e5e5; "> 0 SRS </span>
                                        </div>
<div class="col-md-12 pb-3">
                                            <span class="small-port-cont-muted-txt px-3  "> = $0 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

<div class="col-md-3 small-port-cont mr-3 ">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="col-md-12">
                                            <div class="px-3 pt-3">
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock" class="fa fa-lock icon small-port-cont-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M144 128v64H304V128c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h32c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H96zM48 256V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16z"></path>
                                                </svg>
                                            </div>
<span class="small-port-cont-muted-txt px-3 "> My Legacy Delegation </span>
                                        </div>
<div class="col-md-12 pt-4">
                                            <span class="small-port-cont-muted-txt px-3  " style="font-size: 18px; color: #e5e5e5; "> 0 SRS </span>
                                        </div>
<div class="col-md-12 pb-3">
                                            <span class="small-port-cont-muted-txt px-3  "> = $0 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

<div class="col-md-3 small-port-cont  ">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="col-md-12">
                                            <div class="px-3 pt-3    ">
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="server" class="fa fa-server icon small-port-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M64 80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 336c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V352c0-8.8-7.2-16-16-16H64zM0 352c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V352zm392 32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM328 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
                                                </svg>
                                            </div>
<span class="small-port-cont-muted-txt px-3 "> Staked Nodes </span>
                                        </div>
<div class="col-md-12 pt-4">
                                            <span class="small-port-cont-muted-txt px-3  " style="font-size: 18px; color: #e5e5e5; "> 0 SRS </span>
                                        </div>
<div class="col-md-12 pb-3">
                                            <span class="small-port-cont-muted-txt px-3  "> = $0 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

<div class="col-md-1">
            <div class="row position-fixed ">
                <div class="row justify-content-center pt-3  ">
                    <div class="col-md-6 rightest-cont-hover ">
                        <div class="nav-circle p-3 pt-2" data-bs-toggle="modal" data-bs-target="#sendModal" data-bs-backdrop="static">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="fa fa-arrow-up  rightest-cont-icon  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                            </svg>
                        </div>
<span class=" rightest-txt text-center px-2">Send</span>
                    </div>
                </div>

<div class="row justify-content-center pt-3 ">
                    <div class="col-md-6 rightest-cont-hover">
                        <div class="nav-circle p-3 pt-2 " data-bs-toggle="modal" data-bs-target="#recieveModal" data-bs-backdrop="static">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="fa fa-arrow-down rightest-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                            </svg>
                        </div>
<span class=" rightest-txt text-center ">Receive</span>
                    </div>
                </div>

<div class="row justify-content-center pt-3 ">
                    <div class="col-md-6 rightest-cont-hover">
                        <div class="nav-circle p-3 pt-2" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#swapModal">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rotate" class="fa fa-rotate rightest-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z"></path>
                            </svg>
                        </div>
<span class=" rightest-txt text-center px-1">Swap</span>
                    </div>
                </div>

<div class="row justify-content-center pt-3  ">
                    <div class="col-md-6 rightest-cont-hover">
                        <div class="nav-circle p-3 pt-2" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#buyModal">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" class="fa fa-plus rightest-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M232 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H184V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H392c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V72z"></path>
                            </svg>
                        </div>
<span class=" rightest-txt text-center px-2">Buy</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div>
    <p class="text-center footer-txt pt-3   ">Made with 💖 by Sirius Sync Team</p>

    <p class="text-center footer-txt pb-3 "> Build 1.5.4-4a9bc03a </p>
</div>


</template>