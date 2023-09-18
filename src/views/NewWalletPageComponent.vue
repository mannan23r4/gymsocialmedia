<template>
<!-- <navbar-sidebar-footer-component /> -->
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

<div class="container-fluid pt-3 ">
    <div class="row  ">
        <div class="col-md-2 sidenav-cont  ">
        </div>

        <div class="col-md-9  p-5 main-cont   ">
            <div class="row">
                <h1 class="mid-main-txt ">Your NFTs</h1>
                <div class="row pt-5 ">
                    <div class="col-md-12 text-center pt-3 ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes" class="fa fa-cubes" height="70px" width="70px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill="currentColor" d="M273.8 45.8l73.7 28L271.2 103 194.8 73.7l73.7-28c1.7-.7 3.6-.7 5.3 0zM128.1 87.1V192.6c-1.2 .4-2.4 .8-3.6 1.2L34.1 228.1c-20.5 7.8-34 27.4-34 49.3V389.5c0 20.9 12.4 39.8 31.5 48.3L122 477.5c13.5 5.9 28.9 5.9 42.4 0l106.8-46.9L378 477.5c13.5 5.9 28.9 5.9 42.4 0l90.4-39.7c19.1-8.4 31.5-27.3 31.5-48.3V277.4c0-21.9-13.5-41.5-34-49.3l-90.4-34.3c-1.2-.5-2.4-.9-3.6-1.2V87.1c0-21.9-13.5-41.5-34-49.3L289.9 3.5c-12-4.6-25.3-4.6-37.4 0L162.1 37.8c-20.5 7.8-34 27.4-34 49.3zM369.1 198.2l-77.5 29.4v-84l77.5-29.7v84.3zM145.8 236.1l73.7 28-76.4 29.3L66.8 264.1l73.7-28c1.7-.7 3.6-.7 5.3 0zm17.7 192.4V333.9l77.5-29.7v90.2l-77.5 34.1zm233-192.4c1.7-.7 3.6-.7 5.3 0l73.7 28-76.4 29.3-76.4-29.3 73.7-28zm96.1 160.3l-73 32.1V333.9l77.5-29.7v85.3c0 3-1.8 5.7-4.5 6.9z"></path>
                        </svg>
                    </div>
                    <div class="col-md-12 text-center pt-3 pb-5">
                        <p style="font-size: 20px;  font-weight: 400; color: #e5e5e5; ">No NFTs found for this wallet </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-1 ">
        </div>
    </div>
</div>

<div class="container-fluid pt-3 ">
    <div class="row  ">
        <div class="col-md-2 sidenav-cont  ">
        </div>

        <div class="col-md-9  p-5 main-cont   ">
            <div class="row">
                <h1 class="mid-main-txt text-muted" style="font-size: 30px;">Transactions <label class="nav-circle px-1 " style="height: 40px; width: 40px; "> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rotate" class="fa fa-rotate fast-spin iconnav " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z"></path>
                        </svg> </label> </h1>
                <div class="row pt-5 ">
                    <div class="col-md-12 text-center pt-3 ">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" height="70px" width="70px" data-icon="arrow-right-arrow-left" class="fa fa-arrow-right-arrow-left fa-5x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"></path>
                        </svg>
                    </div>
                    <div class="col-md-12 text-center pt-3 pb-5">
                        <p style="font-size: 20px;  font-weight: 400; color: #e5e5e5; ">No transactions found for this wallet</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-1 ">
        </div>
    </div>
</div>

<div>
    <p class="text-center footer-txt pt-3   ">Made with 💖 by Sirius Sync Team</p>
    <p class="text-center footer-txt pb-3 "> Build 1.5.4-4a9bc03a </p>
</div>

<div class="modal fade " id="sendModal" tabindex="-1" aria-labelledby="sendLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered  modal-md  ">
        <div class=" p-2  modal-content" style="background-color:black; ">
            <div class="row justify-content-center p-3 ">
                <div class="col-md-12  " style="text-align: right;">
                    <div class="" style="border: none; ">
                        <h5 class="modal-title" id="sendLabel">
                            <svg aria-hidden="true" data-bs-dismiss="modal" aria-label="Close" focusable="false" data-prefix="far" data-icon="xmark" class="svg-inline--fa fa-xmark modal-close-btn " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M313 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L41 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L7 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L279 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L313 137z"></path>
                            </svg>
                        </h5>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row  ">
                        <div class="col-md-4 activesend ">
                            <div class="sendcont-circle"> <span class="px-1"> 1 </span> </div>
                            <span class="sendcont-up-txt"> Transactions Details </span>
                            <!-- <span style="border-bottom: 1px solid #888;"> </span> -->
                            <hr style="border: 1px solid white ;">
                        </div>

                        <div class="col-md-4 activesend ">
                            <div class="sendcont-circle"> <span class="px-1"> 2 </span> </div>
                            <span class="sendcont-up-txt"> Transactions Summary </span>
                            <!-- <span style="border-bottom: 1px solid #888;"> </span> -->
                            <hr style="border: 1px solid white ;">
                        </div>

                        <div class="col-md-4 activesend ">
                            <div class="sendcont-circle"> <span class="px-1"> 3 </span> </div>
                            <span class="sendcont-up-txt"> Confirm Transactions </span>
                            <!-- <span style="border-bottom: 1px solid #888;"> </span> -->
                            <hr style="border: 1px solid white ;">
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-body">
                <div class="container">
                    <div class="row justify-content-center ">

                        <div class="col-md-12 ">
                            <span class="recievemodal-txt  text-center ">
                                Send
                            </span>
                        </div>

                        <div class="row">
                            <div class="col-md-12 pt-4 ">
                                <div class="row">
                                    <div class="col-md-12 pb-0 p-2">
                                        <p class="swaptxt-small" style="font-weight: 600;">Receiver</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row pt-2 pb-2 swaprowcont  ">
                                    <div class="col-md-12">
                                        <input class="swapinputcont col-md-12 " type="text">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 pt-4 ">
                                <div class="row">
                                    <div class="col-md-6 pb-0 p-2">
                                        <p class="swaptxt-small" style="font-weight: 600;">Amount</p>
                                    </div>

                                    <div class="col-md-6 pb-0 p-2">
                                        <p style="text-align: right;" class="swaptxt-small">Available: <span style="font-size: 14px; color: #e5e5e5; "> 0 EGLD </span> </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row pt-2 swaprowcont  ">
                                    <div class="col-md-8">
                                        <input class="swapinputcont" type="text" placeholder="Amount">
                                    </div>

                                    <div class="col-md-4">
                                        <MDBDropdown v-model="dropdown3">
                                            <div class=" col-md-12  " @click="dropdown3 = !dropdown3">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                            <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                            <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                        </svg>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <p class=""> EGLD <i class="fa-solid fa-caret-down px-1"></i></p>

                                                    </div>
                                                </div>
                                            </div>
                                            <MDBDropdownMenu class="dropdown-port" aria-labelledby="dropdownMenuButton">
                                                <MDBDropdownItem href="#" class="dropdown-item p-2 pb-0 pt-2">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                                <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                                <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-8 p-0 ">
                                                            <p class=""> WEGLD <span class="px-4"> 0 </span> </p>
                                                        </div>
                                                    </div>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" id="feeinput" @click="opengasInputs()">
                            <div class="col-md-12 pt-4 ">
                                <div class="row">
                                    <div class="col-md-12 pb-0 p-2">
                                        <p class="swaptxt-small" style="font-weight: 600;">Fee</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row pt-2 pb-2 swaprowcont  ">
                                    <div class="col-md-10">
                                        <input class="swapinputcont col-md-12 change " disabled placeholder="0.00005 EGLD (≈ $0.0015)" type="text">
                                    </div>

                                    <div class="col-md-2">
                                        <i class="fa-solid fa-caret-down px-4"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" v-show="gasinputs">
                            <div class="col-md-12 pt-4 ">
                                <div class="row">
                                    <div class="col-md-12 pb-0 p-2">
                                        <p class="swaptxt-small" style="font-weight: 600;">Gas Price</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row pt-2 pb-2 swaprowcont  ">
                                    <div class="col-md-12">
                                        <input class="swapinputcont col-md-12" disabled placeholder="0.000000001" type="text">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12 pt-4 ">
                                <div class="row">
                                    <div class="col-md-12 pb-0 p-2">
                                        <p class="swaptxt-small" style="font-weight: 600;">Gas Limit</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row pt-2 pb-2 swaprowcont  ">
                                    <div class="col-md-12">
                                        <input class="swapinputcont col-md-12  " value="50000" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 pt-4 ">
                                <div class="row">
                                    <div class="col-md-12 pb-0 p-2">
                                        <p class="swaptxt-small" style="font-weight: 600;">Data</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row pt-2 pb-2 swaprowcont  ">
                                    <div class="col-md-12">
                                        <textarea class="swapinputcont col-md-12 " placeholder="Add transaction data" rows="2" cols="50"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center pt-5 ">
                            <div class="col-md-12 pt-3" style="display: flex; justify-content: center; ">
                                <button class=" btn btn-primary swapbtnmodal p-3 px-4  " type="submit">
                                    <span style="font-size: 16px; font-weight: 600 ">Send EGLD</span>
                                </button>
                            </div>
                        </div>

                        <div class="row justify-content-center  ">
                            <div class="col-md-12 pt-3" style="display: flex; justify-content: center; ">
                                <span data-bs-dismiss="modal" aria-label="Close" focusable="false" style=" cursor:pointer; font-size: 16px; color:#23F7DD; font-weight: 600 ">Cancel</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade " id="recieveModal" tabindex="-1" aria-labelledby="recieveLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered  modal-lg  ">
        <div class=" p-2  modal-content" style="background-color:black; ">
            <div class="row justify-content-center p-3 ">
                <div class="col-md-12  " style="text-align: right;">
                    <div class="" style="border: none; ">
                        <h5 class="modal-title" id="recieveLabel">
                            <svg aria-hidden="true" data-bs-dismiss="modal" aria-label="Close" focusable="false" data-prefix="far" data-icon="xmark" class="svg-inline--fa fa-xmark modal-close-btn " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M313 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L41 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L7 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L279 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L313 137z"></path>
                            </svg>
                        </h5>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row px-5 pb-5 ">
                        <div class="col-md-3 rightest-cont-hover px-5  ">
                            <div class="nav-circle p-3 pt-2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="fa fa-arrow-up  rightest-cont-icon  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                                </svg>
                            </div>
                            <span class=" rightest-txt text-center px-2">Send</span>
                        </div>

                        <div class="col-md-3 rightest-cont-hover px-5 ">
                            <div class="nav-circle p-3 pt-2" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#recieveModal">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="fa fa-arrow-down rightest-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                                </svg>
                            </div>
                            <span class=" rightest-txt text-center px-2">Receive</span>
                        </div>

                        <div class="col-md-3 rightest-cont-hover px-5 ">
                            <div class="nav-circle p-3 pt-2" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#swapModal">
                                <svg aria-hidden="true" focusable="false" height="20px" width="20px" data-prefix="fas" data-icon="rotate" class="fa fa-rotate  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z"></path>
                                </svg>
                            </div>
                            <span class=" rightest-txt text-center px-2">Swap</span>
                        </div>

                        <div class="col-md-3 rightest-cont-hover px-5 ">
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

            <div class="modal-body">
                <div class="container">
                    <div class="row justify-content-center ">

                        <div class="col-md-12 ">
                            <span class="recievemodal-txt  ">
                                Receive
                            </span>
                        </div>

                        <div class="col-md-10">
                            <div class="col-md-12 text-center pt-3 ">
                                <img src=" https://cdn2.me-qr.com/qr/69645982.png?v=1690184113 " class="recievescanner-cont" alt="">
                            </div>

                            <div class="col-md-10 pt-4  ">
                                <label class=" walletaddress-recieve-txt ">
                                    Your Address
                                </label>
                                <div class="row">
                                    <div class="col-md-12 ">
                                        <p class="walletaddress-recieve "> erd12w4g7prawwh63nwc94uhpudxl5ygnw0nahxxte70z3gjeggq6rzsnm36th <svg aria-hidden="true" focusable="false" height="13px" width="13px" data-prefix="far" data-icon="clone" class="fa fa-clone iconnavadd " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"></path>
                                            </svg>
                                        </p>
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

<div class="modal fade " id="swapModal" tabindex="-1" aria-labelledby="swapLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered  modal-lg  ">
        <div class=" p-2  modal-content" style="background-color:black; ">
            <div class="row justify-content-center p-3 ">
                <div class="col-md-12  " style="text-align: right;">
                    <div class="" style="border: none; ">
                        <h5 class="modal-title" id="swapLabel">
                            <svg aria-hidden="true" data-bs-dismiss="modal" aria-label="Close" focusable="false" data-prefix="far" data-icon="xmark" class="svg-inline--fa fa-xmark modal-close-btn " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M313 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L41 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L7 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L279 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L313 137z"></path>
                            </svg>
                        </h5>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row px-5 pb-5 ">
                        <div class="col-md-3 rightest-cont-hover px-5  ">
                            <div class="nav-circle p-3 pt-2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="fa fa-arrow-up  rightest-cont-icon  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                                </svg>
                            </div>
                            <span class=" rightest-txt text-center px-2">Send</span>
                        </div>

                        <div class="col-md-3 rightest-cont-hover px-5 ">
                            <div class="nav-circle p-3 pt-2" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#recieveModal">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="fa fa-arrow-down rightest-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                                </svg>
                            </div>
                            <span class=" rightest-txt text-center px-2">Receive</span>
                        </div>

                        <div class="col-md-3 rightest-cont-hover px-5 ">
                            <div class="nav-circle p-3 pt-2" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#swapModal">
                                <svg aria-hidden="true" focusable="false" height="20px" width="20px" data-prefix="fas" data-icon="rotate" class="fa fa-rotate  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z"></path>
                                </svg>
                            </div>
                            <span class=" rightest-txt text-center px-2">Swap</span>
                        </div>

                        <div class="col-md-3 rightest-cont-hover px-5 ">
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

            <div class="modal-body">
                <div class="container">
                    <div class="row justify-content-center ">

                        <div class="col-md-12 ">
                            <span class="recievemodal-txt  ">
                                Swap
                            </span>
                        </div>

                        <div class="row">
                            <div class="col-md-12 pt-4 ">
                                <div class="row">
                                    <div class="col-md-6 pb-0 p-2">
                                        <p class="swaptxt-small" style="font-weight: 600;">You send</p>
                                    </div>

                                    <div class="col-md-6 pb-0 p-2">
                                        <p style="text-align: right;" class="swaptxt-small">Available: <span style="font-size: 14px; color: #e5e5e5; "> 0 EGLD </span> </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row pt-3 swaprowcont  ">
                                    <div class="col-md-6">
                                        <input class="swapinputcont" type="text" placeholder="Amount">
                                    </div>

                                    <div class="col-md-3"></div>

                                    <div class="col-md-3">
                                        <MDBDropdown v-model="dropdown3">
                                            <div class=" col-md-12  " @click="dropdown3 = !dropdown3">
                                                <div class="row">
                                                    <div class="col-md-4 pe-0 px-4">
                                                        <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                            <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                            <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                        </svg>
                                                    </div>
                                                    <div class="col-md-8 pe-0">
                                                        <p class=""> EGLD <i class="fa-solid fa-caret-down p-2 px-4"></i></p>

                                                    </div>
                                                </div>
                                            </div>
                                            <MDBDropdownMenu class="dropdown-port" aria-labelledby="dropdownMenuButton">
                                                <div class="scroll-dropdown" style="height: 180px;">
                                                    <MDBDropdownItem href="#" class="dropdown-item p-2 pb-0 pt-2">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                                    <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                                    <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                                </svg>
                                                            </div>
                                                            <div class="col-md-8 p-0 ">
                                                                <p class=""> WEGLD <span class="px-4"> 0 </span> </p>
                                                            </div>
                                                        </div>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem href="#" class="dropdown-item p-2 pb-0 pt-2">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                                    <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                                    <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                                </svg>
                                                            </div>
                                                            <div class="col-md-8 p-0 ">
                                                                <p class=""> WEGLD <span class="px-4"> 0 </span> </p>
                                                            </div>
                                                        </div>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem href="#" class="dropdown-item p-2 pb-0 pt-2">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                                    <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                                    <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                                </svg>
                                                            </div>
                                                            <div class="col-md-8 p-0 ">
                                                                <p class=""> WEGLD <span class="px-4"> 0 </span> </p>
                                                            </div>
                                                        </div>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem href="#" class="dropdown-item p-2 pb-0 pt-2">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                                    <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                                    <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                                </svg>
                                                            </div>
                                                            <div class="col-md-8 p-0 ">
                                                                <p class=""> WEGLD <span class="px-4"> 0 </span> </p>
                                                            </div>
                                                        </div>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem href="#" class="dropdown-item p-2 pb-0 pt-2">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                                    <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                                    <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                                </svg>
                                                            </div>
                                                            <div class="col-md-8 p-0 ">
                                                                <p class=""> WEGLD <span class="px-4"> 0 </span> </p>
                                                            </div>
                                                        </div>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem href="#" class="dropdown-item p-2 pb-0 pt-2">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                                    <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                                    <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                                </svg>
                                                            </div>
                                                            <div class="col-md-8 p-0 ">
                                                                <p class=""> WEGLD <span class="px-4"> 0 </span> </p>
                                                            </div>
                                                        </div>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem href="#" class="dropdown-item p-2 pb-0 pt-2">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                                    <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                                    <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                                </svg>
                                                            </div>
                                                            <div class="col-md-8 p-0 ">
                                                                <p class=""> WEGLD <span class="px-4"> 0 </span> </p>
                                                            </div>
                                                        </div>
                                                    </MDBDropdownItem>
                                                </div>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center ">
                            <div class="col-md-12 pt-4" style="display: flex; justify-content: center; ">
                                <div class="swaptransaction-circle p-1 px-2" style="height: 35px; width: 35px">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down-arrow-up" class="svg-inline--fa fa-arrow-down-arrow-up rightest-cont-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M150.6 470.6l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 370.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V370.7L54.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0zm352-333.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L352 141.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 pt-4 ">
                                <div class="row">
                                    <div class="col-md-6 pb-0 p-2">
                                        <p class="swaptxt-small" style="font-weight: 600;">You recieve</p>
                                    </div>

                                    <div class="col-md-6 pb-0 p-2">
                                        <p style="text-align: right;" class="swaptxt-small">Available: <span style="font-size: 14px; color: #e5e5e5; "> 0 EGLD </span> </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row pt-3 swaprowcont  ">
                                    <div class="col-md-6">
                                        <input class="swapinputcont" type="text" placeholder="Amount">
                                    </div>

                                    <div class="col-md-3"></div>

                                    <div class="col-md-3">
                                        <MDBDropdown v-model="dropdown4">
                                            <div class=" col-md-12  " @click="dropdown4 = !dropdown4">
                                                <class class="row">
                                                    <div class="col-md-4 pe-0 px-4">
                                                        <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                            <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                            <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                        </svg>
                                                    </div>
                                                    <div class="col-md-8 pe-0">
                                                        <p class=""> EGLD <i class="fa-solid fa-caret-down p-2 px-4"></i></p>
                                                    </div>
                                                </class>
                                            </div>
                                            <MDBDropdownMenu class="dropdown-port" aria-labelledby="dropdownMenuButton">
                                                <MDBDropdownItem href="#">
                                                    <div class="row">
                                                        <div class="col-md-4 ">
                                                            <svg viewBox="0 0 300 300" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" class="dapp-core-component__tokenSelect-module__diamond">
                                                                <rect width="300" height="300" rx="150" fill="black" id="egld-token"></rect>
                                                                <path d="M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z" fill="#23F7DD"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-8 ">
                                                            <p class=""> WEGLD </p>
                                                        </div>
                                                    </div>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row pt-2 ">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-1">
                                        <div data-v-7d632a2f="" class="swaptransaction-circle px-2 " style="height: 28px;width: 28px;color: #737373;">
                                            <svg data-v-7d632a2f="" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-arrow-left" class="svg-inline--fa fa-arrow-right-arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 12px; width: 10px;">
                                                <path data-v-7d632a2f="" fill="currentColor" d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"> </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <p class="smalliconswaptxt pt-1 px-1 "> Exchange Rate </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <p class="smalliconswaptxt" style="color:#e5e5e5 ; text-align: right; ">1 WETH ≃ 100,827.9486 ASH</p>
                            </div>
                        </div>

                        <div class="row pt-0 ">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-1">
                                        <div data-v-7d632a2f="" class="swaptransaction-circle px-2 " style="height: 28px;width: 28px;color: #737373;">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line-up" class="svg-inline--fa fa-chart-line-up " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zM439 279c15.1 15.1 41 4.4 41-17V152c0-13.3-10.7-24-24-24H345.9c-21.4 0-32.1 25.9-17 41l32.4 32.4L304 258.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L208 253.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0l80-80L439 279z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <p class="smalliconswaptxt pt-1 px-1 "> Slippage </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <p class="smalliconswaptxt" style="color:#e5e5e5 ; text-align: right; ">1%</p>
                            </div>
                        </div>

                        <div class="row justify-content-center ">
                            <div class="col-md-12 pt-3" style="display: flex; justify-content: center; ">
                                <button class=" btn btn-primary swapbtnmodal p-3 px-4  " type="submit">
                                    <span style="font-size: 16px; font-weight: 600 ">Swap</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="buyModal" tabindex="-1" aria-labelledby="buyLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered  modal-lg  ">
        <div class=" p-2  modal-content" style="background-color:black; ">
            <div class="row justify-content-center p-3 ">
                <div class="col-md-12  " style="text-align: right;">
                    <div class="" style="border: none; ">
                        <h5 class="modal-title" id="buyLabel">
                            <svg aria-hidden="true" data-bs-dismiss="modal" aria-label="Close" focusable="false" data-prefix="far" data-icon="xmark" class="svg-inline--fa fa-xmark modal-close-btn " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M313 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L41 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L7 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L279 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L313 137z"></path>
                            </svg>
                        </h5>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row px-5 pb-5 ">
                        <div class="col-md-3 rightest-cont-hover px-5  ">
                            <div class="nav-circle p-3 pt-2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="fa fa-arrow-up  rightest-cont-icon  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                                </svg>
                            </div>
                            <span class=" rightest-txt text-center px-2">Send</span>
                        </div>

                        <div class="col-md-3 rightest-cont-hover px-5 ">
                            <div class="nav-circle p-3 pt-2" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#recieveModal">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="fa fa-arrow-down rightest-cont-icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                                </svg>
                            </div>
                            <span class=" rightest-txt text-center px-2">Receive</span>
                        </div>

                        <div class="col-md-3 rightest-cont-hover px-5 ">
                            <div class="nav-circle p-3 pt-2" data-bs-backdrop="static" data-bs-toggle="modal" data-bs-target="#swapModal">
                                <svg aria-hidden="true" focusable="false" height="20px" width="20px" data-prefix="fas" data-icon="rotate" class="fa fa-rotate  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z"></path>
                                </svg>
                            </div>
                            <span class=" rightest-txt text-center px-2">Swap</span>
                        </div>

                        <div class="col-md-3 rightest-cont-hover px-5 ">
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

            <div class="modal-body">
                <div class="container">
                    <div class="row justify-content-center ">
                        <div class="col-md-12 ">
                            <span class="recievemodal-txt p-2 ">
                                Buy
                            </span>
                        </div>

                        <div class="row p-3 ">
                            <div class="col-md-12 provider-buy-cont ">
                                <div class="col-md-12 pt-3 ">
                                    <p class="" style="font-size: 16px; color: #a3a3a3; font-weight: 600; "> Providers </p>
                                </div>

                                <div class="col-md-12 p-2 ">
                                    <div class="row sidenav-li-box p-1 ">
                                        <div class="col-md-6 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="48" viewBox="0 0 120 48" fill="none">
                                                <g clip-path="url(#clip0_1453_70422)">
                                                    <path d="M-0.000110626 25.6915C-0.000110626 34.7259 7.3236 42.0497 16.3579 42.0497C25.3921 42.0497 32.7158 34.7259 32.7158 25.6915C32.7158 16.6571 25.3921 9.33325 16.3579 9.33325C7.3236 9.33325 -0.000110626 16.6571 -0.000110626 25.6915Z" fill="#7214F5" />
                                                    <path d="M30.3334 9.44123C30.3334 11.8941 32.3218 13.8825 34.7746 13.8825C37.2274 13.8825 39.2158 11.8941 39.2158 9.44123C39.2158 6.98841 37.2274 5 34.7746 5C32.3218 5 30.3334 6.98841 30.3334 9.44123Z" fill="#7214F5" />
                                                    <path d="M40.2793 33.8313H42.9516L44.5623 25.4673C44.7867 24.2841 45.0314 22.4072 45.0314 22.4072H45.0723C45.0723 22.4072 45.0928 24.1412 45.1746 25.2224L45.8687 33.8313H48.643L52.6619 25.2025C53.233 23.9786 53.8656 22.4077 53.8656 22.4077H53.9065C53.9065 22.4077 53.4373 24.2031 53.1924 25.4678L51.5817 33.8318H54.2951L57.109 19.2454H52.9065L49.398 26.8132C48.5617 28.6284 47.9087 30.5871 47.9087 30.5871H47.8883C47.8883 30.5871 47.8678 28.486 47.7047 26.4453L47.154 19.2454H43.0945L40.2793 33.8313ZM61.1889 34.1381C64.7588 34.1381 67.0029 31.2005 67.0029 27.855C67.0029 24.7543 64.8404 23.0814 62.1682 23.0814C58.5982 23.0814 56.2727 25.9577 56.2727 29.2625C56.2727 32.4635 58.4553 34.1373 61.1889 34.1373V34.1381ZM59.006 29.4248C59.006 27.4051 59.9239 25.1408 62.0252 25.1408C63.636 25.1408 64.2692 26.4056 64.2692 27.7724C64.2692 29.7715 63.3716 32.0769 61.25 32.0769C59.6386 32.0769 59.006 30.8527 59.006 29.4248ZM72.0209 34.1373C75.5908 34.1373 77.8348 31.1997 77.8348 27.8543C77.8348 24.7535 75.6723 23.0807 73.0001 23.0807C69.4307 23.0804 67.1041 25.9569 67.1041 29.2617C67.1041 32.4635 69.2875 34.1373 72.0211 34.1373H72.0209ZM69.8382 29.4248C69.8382 27.4051 70.7561 25.1408 72.8574 25.1408C74.4681 25.1408 75.1014 26.4056 75.1014 27.7724C75.1014 29.7715 74.2038 32.0769 72.0822 32.0769C70.4708 32.0769 69.8382 30.8527 69.8382 29.4248ZM82.1392 23.3655H79.467L77.4472 33.8305H80.1808L81.2825 28.1186C81.5681 26.5887 82.4862 25.4055 83.7712 25.4055C84.934 25.4055 85.4645 26.1602 85.1991 27.5475L83.9752 33.8313H86.7088L87.9736 27.2222C88.4428 24.7742 87.2393 23.0804 85.1584 23.0804C83.6692 23.0804 82.792 23.7331 81.8946 25.0184H81.8335L82.1392 23.3655ZM87.9941 33.8305H91.0133L92.0318 28.5476H95.5813C98.8452 28.5476 101.069 26.6708 101.069 23.5496C101.069 20.8159 99.2123 19.2451 96.4176 19.2451H90.809L87.9941 33.8305ZM93.3375 21.7946H96.0303C97.3562 21.7946 98.05 22.5087 98.05 23.6917C98.05 25.4257 96.8057 26.1602 95.4389 26.1602H92.5023L93.3375 21.7946ZM106.313 33.8313H108.903V33.729C108.74 33.4844 108.679 32.9947 108.822 32.2807L109.801 27.2626C110.372 24.223 108.414 23.1011 105.823 23.1011C103.13 23.1011 101.477 24.4068 101.131 26.5488H103.579C103.824 25.5085 104.579 25.0595 105.721 25.0595C106.761 25.0595 107.353 25.4686 107.353 26.2223C107.353 27.2626 106.598 27.3442 104.64 27.5076C102.09 27.7121 99.8868 28.2217 99.8868 30.9959C99.8868 33.1584 101.6 34.0762 103.212 34.0762C104.72 34.0762 105.497 33.3621 106.129 32.689H106.17C106.13 33.0756 106.179 33.4664 106.313 33.8313ZM102.518 30.7505C102.518 29.3226 103.967 29.3837 104.966 29.2001C105.653 29.1088 106.324 28.9306 106.965 28.6696L106.639 30.322C106.434 31.2807 105.517 32.1784 104.089 32.1784C103.171 32.1789 102.518 31.6893 102.518 30.7505ZM108.924 37.2585H110.637C112.657 37.2585 113.554 36.4424 114.594 34.3414L120.002 23.3662H117.227L115.064 28.1194C114.615 29.0986 114.105 30.4859 114.105 30.4859H114.064C114.064 30.4859 113.901 29.0782 113.758 28.1194L113.044 23.3662H110.188L111.696 30.8121C111.884 31.5817 112 32.3671 112.043 33.1581C112.043 34.4638 111.39 35.0961 110.228 35.0961H109.35L108.924 37.2585Z" fill="#E5E5E5" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1453_70422">
                                                        <rect width="120" height="48" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="col-md-6 pt-2 " style="display: flex; justify-content: end; ">
                                            <div class="goahead-buy-cont">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class=" pt-2 pe-2 goahead-buy-icon svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 p-2">
                                    <div class="row sidenav-li-box p-1 ">
                                        <div class="col-md-6 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="48" viewBox="0 0 120 48" fill="none">
                                                <path d="M28.0889 26.3575L23.1477 31.3169C22.7291 31.7371 22.7295 32.4201 23.1485 32.8397L26.9245 36.6211C27.568 37.2563 28.6201 37.2563 29.2636 36.6211L40.8371 25.1981C41.4806 24.563 41.4806 23.5244 40.8371 22.8893L29.2636 11.4764C28.6201 10.8412 27.568 10.8412 26.9245 11.4764L23.1485 15.2578C22.7295 15.6774 22.7291 16.3604 23.1477 16.7806L28.0889 21.74C29.376 23.0103 29.376 25.0872 28.0889 26.3575Z" fill="#0A6E5C" />
                                                <path d="M13.2308 26.3575L18.172 31.3169C18.5906 31.7371 18.5902 32.4201 18.1712 32.8397L14.3952 36.6211C13.7517 37.2563 12.6996 37.2563 12.0561 36.6211L0.482651 25.1981C-0.160884 24.563 -0.160884 23.5244 0.482651 22.8893L12.0561 11.4764C12.6996 10.8412 13.7517 10.8412 14.3952 11.4764L18.1712 15.2578C18.5902 15.6774 18.5906 16.3604 18.172 16.7806L13.2308 21.74C11.9437 23.0103 11.9437 25.0872 13.2308 26.3575Z" fill="#21BF73" />
                                                <path d="M14.5276 24.9924C14.0064 24.4712 14.0064 23.6263 14.5276 23.1052L19.7175 17.9153C20.2387 17.3941 21.0836 17.3941 21.6047 17.9153L26.7946 23.1052C27.3157 23.6263 27.3157 24.4712 26.7946 24.9924L21.6047 30.1823C21.0836 30.7035 20.2387 30.7035 19.7175 30.1823L14.5276 24.9924Z" fill="#21BF73" />
                                                <path d="M63.4548 31.8785H59.7668L57.7328 26.5577C57.5689 26.1386 57.3156 25.8467 56.9728 25.6822C56.645 25.5175 56.2278 25.4351 55.7212 25.4351H53.4637V31.8785H50.0215V15.8936H57.107C58.9547 15.8936 60.3554 16.2977 61.3091 17.1059C62.2627 17.9141 62.7395 19.0741 62.7395 20.5858C62.7395 21.6485 62.4565 22.5615 61.8902 23.3248C61.3388 24.0881 60.5416 24.6344 59.4985 24.9637C60.4373 25.1582 61.1154 25.8094 61.5326 26.9169L63.4548 31.8785ZM56.5928 22.7635C57.5912 22.7635 58.3214 22.5989 58.7833 22.2696C59.2452 21.9253 59.4762 21.394 59.4762 20.6756C59.4762 19.9572 59.2452 19.4333 58.7833 19.104C58.3214 18.7598 57.5912 18.5877 56.5928 18.5877H53.4189V22.7635H56.5928Z" fill="white" />
                                                <path d="M76.9758 20.496V31.8785H73.6455V30.1947C73.3028 30.7784 72.8185 31.2349 72.1927 31.5642C71.5668 31.8935 70.859 32.0582 70.0692 32.0582C69.0858 32.0582 68.214 31.8186 67.4541 31.3397C66.709 30.8608 66.1204 30.1797 65.6883 29.2967C65.2711 28.3986 65.0625 27.3659 65.0625 26.1985C65.0625 25.031 65.2711 23.9908 65.6883 23.0778C66.1204 22.1648 66.7165 21.4613 67.4764 20.9675C68.2364 20.4586 69.1007 20.2041 70.0692 20.2041C70.859 20.2041 71.5668 20.3762 72.1927 20.7204C72.8185 21.0647 73.3028 21.5287 73.6455 22.1124V20.496H76.9758ZM71.0527 29.4763C71.8872 29.4763 72.5279 29.1919 72.9749 28.6232C73.4219 28.0544 73.6455 27.2312 73.6455 26.1536C73.6455 25.0759 73.4219 24.2527 72.9749 23.684C72.5279 23.1003 71.8872 22.8084 71.0527 22.8084C70.2182 22.8084 69.57 23.1077 69.1081 23.7064C68.6462 24.3051 68.4152 25.1358 68.4152 26.1985C68.4152 27.2611 68.6388 28.0768 69.0858 28.6456C69.5477 29.1994 70.2034 29.4763 71.0527 29.4763Z" fill="white" />
                                                <path d="M93.5601 20.2041C94.8569 20.2041 95.8176 20.6007 96.4439 21.394C97.0841 22.1723 97.4046 23.3696 97.4046 24.9861V31.8785H94.0299V25.0984C94.0299 24.3051 93.9027 23.7363 93.6499 23.3921C93.3962 23.0329 92.9795 22.8533 92.398 22.8533C91.7129 22.8533 91.1836 23.0928 90.8109 23.5717C90.4382 24.0506 90.2523 24.7242 90.2523 25.5923V31.8785H86.8767V25.0984C86.8767 24.3201 86.743 23.7513 86.4747 23.3921C86.2218 23.0329 85.8116 22.8533 85.2456 22.8533C84.5598 22.8533 84.024 23.0928 83.6358 23.5717C83.2639 24.0506 83.0771 24.7242 83.0771 25.5923V31.8785H79.7023V23.7513C79.7023 22.539 79.6427 21.4538 79.5234 20.496H82.6971L82.8985 22.2022C83.241 21.5586 83.7181 21.0647 84.329 20.7204C84.9545 20.3762 85.6705 20.2041 86.4747 20.2041C88.1588 20.2041 89.2761 20.9075 89.8274 22.3145C90.2001 21.6709 90.7139 21.162 91.3696 20.7878C92.04 20.3987 92.7707 20.2041 93.5601 20.2041Z" fill="white" />
                                                <path d="M106.993 20.2041C107.962 20.2041 108.827 20.4586 109.587 20.9675C110.346 21.4613 110.935 22.1648 111.352 23.0778C111.785 23.9908 112 25.031 112 26.1985C112 27.3659 111.792 28.3986 111.374 29.2967C110.958 30.1797 110.369 30.8608 109.609 31.3397C108.849 31.8186 107.977 32.0582 106.993 32.0582C106.204 32.0582 105.496 31.8935 104.87 31.5642C104.244 31.2349 103.768 30.7784 103.44 30.1947V37.0977H100.064V23.7513C100.064 22.539 100.005 21.4538 99.8857 20.496H103.06L103.283 22.3819C103.581 21.7083 104.058 21.177 104.714 20.7878C105.384 20.3987 106.144 20.2041 106.993 20.2041ZM106.033 29.4763C106.867 29.4763 107.508 29.1994 107.955 28.6456C108.402 28.0768 108.625 27.2611 108.625 26.1985C108.625 25.1358 108.394 24.3051 107.932 23.7064C107.485 23.1077 106.852 22.8084 106.033 22.8084C105.198 22.8084 104.55 23.1003 104.087 23.684C103.641 24.2527 103.417 25.0759 103.417 26.1536C103.417 27.2312 103.641 28.0544 104.087 28.6232C104.55 29.1919 105.198 29.4763 106.033 29.4763Z" fill="white" />
                                            </svg>
                                        </div>

                                        <div class="col-md-6 pt-2 " style="display: flex; justify-content: end; ">
                                            <div class="goahead-buy-cont">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class=" pt-2 pe-2 goahead-buy-icon svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 p-2 ">
                                    <div class="row sidenav-li-box p-1 ">
                                        <div class="col-md-6 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="60" viewBox="0 0 150 60" fill="none">
                                                <g clip-path="url(#clip0_55_9437)">
                                                    <path d="M14.9543 28C16.0764 29.497 12.7902 32.3924 13.5283 31.197H6.52826C5.771 30.2061 5.25038 29.1237 5 28H14.9543Z" fill="white" />
                                                    <path d="M12.7345 36.9925C11.7398 37.7859 10.6644 38.4724 9.52605 39.0406L8.96879 39.3208L8.40848 39.0414C3.14202 36.3986 0 31.8459 0 26.8581V21H3.21225V26.8573C3.21225 27.2314 3.23667 27.6039 3.28782 27.9741C3.6924 31.0047 5.73823 33.8009 8.95658 35.6841C8.95978 35.6869 8.96338 35.6892 8.96727 35.691L8.97566 35.6856L8.9894 35.6772C10.1528 36.328 11.4197 36.7732 12.7345 36.9933V36.9925Z" fill="white" />
                                                    <path d="M17.8459 28.0008C17.6971 29.1584 17.3794 30.2879 16.9031 31.3535C16.023 33.3321 14.6077 35.1329 12.7435 36.6314C11.4293 36.4111 10.1629 35.9659 9 35.3153C9.41985 35.0672 9.82749 34.7985 10.2206 34.51C10.2596 34.4848 10.297 34.4566 10.3336 34.4275C12.5095 32.8607 14.0771 30.59 14.7711 28H17.8459V28.0008Z" fill="white" />
                                                    <path d="M17.7253 21H3V24.2107H17.7253V21V21Z" fill="white" />
                                                    <path d="M18.2214 24V26.6451C18.2214 26.7542 18.2176 26.8642 18.2138 26.9733H15C15.0038 26.8642 15.0053 26.7542 15.0053 26.6451V24H18.2214Z" fill="white" />
                                                    <path d="M36.5406 29.7939C36.5406 30.8817 36.4184 31.7711 36.1726 32.4596C35.8414 33.4491 35.189 34.2994 34.3192 34.8757C33.4381 35.4303 32.4126 35.7119 31.3718 35.6848C29.5245 35.6848 28.1084 35.0574 27.1214 33.8009C26.3676 32.8259 25.9722 31.6214 26.0015 30.3894C26.0015 28.9252 26.4389 27.6954 27.313 26.6985C28.3054 25.5664 29.6901 25 31.4688 25C32.6566 25 33.6627 25.3053 34.4886 25.9145C35.078 26.3451 35.581 26.9832 35.9986 27.8283L33.5268 28.8527C33.3619 28.4504 33.11 28.0893 32.7879 27.7977C32.3823 27.4649 31.8712 27.2879 31.3466 27.2985C30.2092 27.2985 29.4153 27.884 28.968 29.055C28.8007 29.4813 28.7153 29.9353 28.7161 30.3932C28.7024 30.8323 28.7758 31.2697 28.932 31.6803C29.0881 32.0909 29.324 32.4665 29.626 32.7856C30.0749 33.2619 30.6741 33.4993 31.4222 33.4978C32.0863 33.4978 32.613 33.3047 33.0024 32.9184C33.2871 32.6054 33.4634 32.21 33.5062 31.7894H31.3543V29.7932L36.5406 29.7939ZM49.9903 31.1191C49.9964 31.6382 49.9445 32.1558 49.8354 32.6634C49.6662 33.3657 49.2889 34.0005 48.7529 34.4848C47.9369 35.2558 46.846 35.6421 45.4803 35.6421C44.091 35.6421 43.0063 35.249 42.2254 34.4635C41.8038 34.0343 41.5104 33.496 41.378 32.9092C41.2556 32.3233 41.2011 31.7252 41.2154 31.1268V25.3206H43.8307V30.7596C43.8307 31.1978 43.8384 31.523 43.8536 31.7375C43.9009 32.4207 44.2101 32.897 44.7811 33.1665C45.0254 33.281 45.2926 33.3383 45.5628 33.3344C46.2002 33.3344 46.6811 33.1123 47.0056 32.6657C47.2468 32.3375 47.3666 31.7024 47.3666 30.7596V25.3214H49.9827L49.9903 31.1191ZM63.7637 35.3764H60.9706L60.3232 33.623H56.7133L56.0209 35.3764H53.2591L57.1217 25.3214H59.9774L63.7637 35.3764ZM59.6164 31.6352L58.5347 28.429L57.4362 31.6352H59.6164ZM76.3005 35.3764H73.0562L70.5585 31.5138V35.3764H67.9363V25.3214H72.0043C73.1928 25.3214 74.0715 25.6771 74.641 26.3886C75.1023 26.962 75.3474 27.6794 75.3333 28.4153C75.3333 29.3046 75.0684 30.0138 74.5379 30.5443C74.1486 30.9092 73.6631 31.155 73.1379 31.252L76.3005 35.3764ZM72.6234 28.5596C72.627 28.3897 72.594 28.221 72.5265 28.065C72.4591 27.9091 72.3588 27.7695 72.2325 27.6558C71.986 27.4245 71.589 27.3099 71.0417 27.3107H70.5539V29.8146H71.0417C71.5951 29.8146 71.9905 29.6993 72.2325 29.4687C72.3581 29.3534 72.4578 29.2127 72.5249 29.056C72.592 28.8993 72.625 28.73 72.6218 28.5596H72.6234ZM89.2327 30.3451C89.2177 31.3856 88.8879 32.3971 88.2867 33.2465C87.6854 34.0958 86.8411 34.7431 85.8647 35.1032C85.3532 35.2826 84.8152 35.3744 84.2731 35.3749H80.4112V25.3206H84.2731C85.2074 25.3169 86.1218 25.5912 86.8999 26.1084C87.6808 26.6102 88.3091 27.3164 88.7167 28.1504C89.0544 28.8325 89.231 29.5839 89.2327 30.3451ZM86.5212 30.3451C86.5343 29.6914 86.3288 29.052 85.9373 28.5283C85.422 27.8435 84.6502 27.5016 83.6197 27.5023H83.022V33.197H83.6197C84.6502 33.197 85.422 32.8543 85.9373 32.1695C86.3273 31.6428 86.5319 31.0008 86.5182 30.3451H86.5212ZM102.262 35.3764H99.4702L98.8214 33.623H95.2114L94.519 35.3764H91.7564L95.619 25.3214H98.4756L102.262 35.3764ZM98.1137 31.6352L97.0328 28.429L95.9419 31.6352H98.1137ZM114.799 35.3764H111.545L109.048 31.5138V35.3764H106.436V25.3214H110.502C111.69 25.3214 112.57 25.6771 113.139 26.3886C113.6 26.9626 113.845 27.6794 113.831 28.4153C113.831 29.3046 113.566 30.0138 113.035 30.5443C112.646 30.9097 112.161 31.1553 111.636 31.252L114.799 35.3764ZM111.123 28.5596C111.126 28.3897 111.092 28.2212 111.024 28.0654C110.957 27.9095 110.857 27.7699 110.731 27.6558C110.483 27.4252 110.088 27.3107 109.541 27.3107H109.053V29.8146H109.537C110.089 29.8146 110.485 29.7 110.726 29.4687C110.852 29.3535 110.952 29.2129 111.021 29.0563C111.089 28.8996 111.123 28.7304 111.121 28.5596H111.123ZM121.529 35.3764H118.912V25.3214H121.528L121.529 35.3764ZM136.215 35.3764H133.422L132.773 33.623H129.164L128.472 35.3764H125.708L129.571 25.3214H132.42L136.215 35.3764ZM132.068 31.6352L130.987 28.429L129.888 31.6352H132.068ZM150.429 35.3764H147.813L143.003 29.2191V35.3764H140.387V25.3214H143.003L147.813 31.4726V25.3214H150.429V35.3764Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_55_9437">
                                                        <rect width="150" height="60" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="col-md-6 pt-2 " style="display: flex; justify-content: end; ">
                                            <div class="goahead-buy-cont">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class=" pt-2 pe-2 goahead-buy-icon svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row p-3 ">
                            <div class="col-md-12 provider-buy-cont ">
                                <div class="col-md-12 pt-3 ">
                                    <p class="" style="font-size: 16px; color: #a3a3a3; font-weight: 600; "> Exchanges </p>
                                </div>

                                <div class="col-md-12 p-2 ">
                                    <div class="row sidenav-li-box p-1 ">
                                        <div class="col-md-6 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="48" viewBox="0 0 121 48" fill="none">
                                                <path d="M5.49579 24.0751L2.74671 26.8218L0 24.0751L2.74671 21.3284L5.49579 24.0751ZM12.1606 17.4056L16.8675 22.1149L19.6142 19.3682L12.1606 11.9146L4.70694 19.3682L7.45365 22.1149L12.1606 17.4056ZM21.5768 21.3284L18.8301 24.0751L21.5768 26.8218L24.3212 24.0751L21.5768 21.3284ZM12.1606 30.7447L7.45365 26.0378L4.70694 28.7821L12.1606 36.2357L19.6142 28.7821L16.8675 26.0378L12.1606 30.7447ZM12.1606 26.8218L14.9073 24.0751L12.1606 21.3284L9.41388 24.0751L12.1606 26.8218ZM41.1483 27.0856V27.0476C41.1483 25.256 40.1979 24.3603 38.6511 23.771C39.6015 23.2364 40.4046 22.3977 40.4046 20.8936V20.8556C40.4046 18.7599 38.7271 17.4056 36.0018 17.4056H29.8146V30.7447H36.1586C39.1691 30.7447 41.1531 29.5258 41.1531 27.0856H41.1483ZM37.4892 21.3831C37.4892 22.3739 36.6695 22.7945 35.3745 22.7945H32.673V19.9788H35.5694C36.8073 19.9788 37.494 20.4731 37.494 21.3498L37.4892 21.3831ZM38.2329 26.7197C38.2329 27.7105 37.4512 28.1667 36.1539 28.1667H32.673V25.237H36.0636C37.57 25.237 38.2377 25.7906 38.2377 26.6864L38.2329 26.7197ZM47.3141 30.7447V17.4056H44.3702V30.7447H47.3141ZM63.0887 30.7447V17.4056H60.1828V25.6196L53.9338 17.4056H51.2275V30.7447H54.1239V22.2646L60.582 30.7447H63.0887ZM79.3432 30.7447L73.617 17.3105H70.9106L65.1963 30.7447H68.1877L69.4114 27.7533H75.0521L76.271 30.7447H79.3432ZM74.009 25.161H70.4544L72.227 20.8366L74.009 25.161ZM93.331 30.7447V17.4056H90.4251V25.6196L84.1737 17.4056H81.4698V30.7447H84.3638V22.2646L90.8242 30.7447H93.331ZM108.478 28.592L106.613 26.7054C105.565 27.6558 104.631 28.2665 103.106 28.2665C100.82 28.2665 99.2378 26.3656 99.2378 24.0751V24.0371C99.2378 21.7514 100.858 19.8838 103.106 19.8838C104.439 19.8838 105.482 20.4541 106.518 21.3878L108.378 19.2351C107.141 18.0162 105.637 17.1775 103.12 17.1775C99.024 17.1775 96.1656 20.283 96.1656 24.068V24.106C96.1656 27.9362 99.081 30.9657 103.006 30.9657C105.575 30.9728 107.098 30.058 108.469 28.592H108.478ZM121 30.7447V28.131H113.748V25.3249H120.038V22.7113H113.748V20.0169H120.895V17.4032H110.833V30.7423L121 30.7447Z" fill="#F0B90B" />
                                            </svg>
                                        </div>

                                        <div class="col-md-6 pt-2 " style="display: flex; justify-content: end; ">
                                            <div class="goahead-buy-cont">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class=" pt-2 pe-2 goahead-buy-icon svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 p-2">
                                    <div class="row sidenav-li-box p-1 ">
                                        <div class="col-md-6 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="48" viewBox="0 0 120 48" fill="none">
                                                <g clip-path="url(#clip0_1453_70418)">
                                                    <path d="M22.3575 19.3044C18.3333 19.3044 15.1889 22.2376 15.1889 26.1643C15.1889 30.091 18.2538 32.999 22.3575 32.999C26.4612 32.999 29.5794 30.0408 29.5794 26.1392C29.5794 22.2627 26.5145 19.3044 22.3575 19.3044ZM22.3846 30.1692C20.093 30.1692 18.4137 28.4602 18.4137 26.1653C18.4137 23.8442 20.0658 22.1362 22.3575 22.1362C24.6763 22.1362 26.3546 23.8703 26.3546 26.1653C26.3546 28.4602 24.6763 30.1692 22.3846 30.1692ZM30.4582 22.2888H32.4571V32.7451H35.6548V19.5593H30.4582V22.2888ZM7.14144 22.1353C8.82073 22.1353 10.1531 23.1297 10.6589 24.6089H14.0436C13.4302 21.4469 10.7122 19.3044 7.16859 19.3044C3.14436 19.3044 0 22.2376 0 26.1653C0 30.0929 3.06493 33 7.16859 33C10.6327 33 13.404 30.8576 14.0174 27.6695H10.6589C10.1792 29.1486 8.84685 30.1692 7.1676 30.1692C4.84878 30.1692 3.22379 28.4602 3.22379 26.1653C3.22481 23.8442 4.82365 22.1353 7.14144 22.1353ZM91.2157 24.8898L88.8708 24.5587C87.7518 24.4061 86.9523 24.0489 86.9523 23.207C86.9523 22.2888 87.9921 21.8302 89.4039 21.8302C90.9495 21.8302 91.9358 22.4674 92.1489 23.513H95.2402C94.8932 20.8608 92.7614 19.3054 89.4842 19.3054C86.0995 19.3054 83.8613 20.9632 83.8613 23.3093C83.8613 25.5531 85.3271 26.8546 88.2846 27.2621L90.6295 27.5932C91.776 27.7458 92.4154 28.1802 92.4154 28.9961C92.4154 30.0417 91.2964 30.4752 89.7508 30.4752C87.8582 30.4752 86.7924 29.7357 86.6326 28.6138H83.4881C83.7818 31.1897 85.8865 33 89.7236 33C93.215 33 95.5327 31.4697 95.5327 28.8426C95.5327 26.4964 93.8544 25.2722 91.2157 24.8898ZM34.056 14.1274C32.8835 14.1274 32.0039 14.9433 32.0039 16.0652C32.0039 17.1871 32.8826 18.0029 34.056 18.0029C35.2284 18.0029 36.1084 17.1871 36.1084 16.0652C36.1084 14.9433 35.2284 14.1274 34.056 14.1274ZM80.9833 24.074C80.9833 21.218 79.1714 19.3054 75.3341 19.3054C71.71 19.3054 69.6848 21.0655 69.2847 23.7689H72.4561C72.6159 22.7233 73.4687 21.8562 75.2809 21.8562C76.9069 21.8562 77.7062 22.5446 77.7062 23.3866C77.7062 24.4834 76.24 24.7634 74.4281 24.942C71.9765 25.1968 68.9387 26.0127 68.9387 29.0733C68.9387 31.4456 70.7778 32.9749 73.7093 32.9749C76.0007 32.9749 77.4397 32.0567 78.1598 30.6027C78.2664 31.9032 79.279 32.7451 80.6917 32.7451H82.5571V30.0166H80.9842V24.074H80.9833ZM77.8388 27.3895C77.8388 29.1496 76.24 30.4501 74.2942 30.4501C73.0949 30.4501 72.0823 29.9654 72.0823 28.9459C72.0823 27.6454 73.708 27.2881 75.2005 27.1356C76.6395 27.0081 77.4387 26.7021 77.8388 26.1151V27.3895ZM60.8642 19.3044C59.0783 19.3044 57.5861 20.0189 56.5203 21.2171V14H53.3227V32.7451H56.4668V31.0111C57.5326 32.2604 59.0523 33 60.8642 33C64.7012 33 67.6064 30.0929 67.6064 26.1653C67.6064 22.2376 64.6481 19.3044 60.8642 19.3044ZM60.3846 30.1692C58.0929 30.1692 56.4137 28.4602 56.4137 26.1653C56.4137 23.8703 58.1192 22.1362 60.4106 22.1362C62.7295 22.1362 64.3543 23.8452 64.3543 26.1653C64.3543 28.4602 62.676 30.1692 60.3846 30.1692ZM45.6742 19.3044C43.5958 19.3044 42.2363 20.1203 41.437 21.2682V19.5593H38.2653V32.7442H41.463V25.5782C41.463 23.5632 42.7953 22.1353 44.7673 22.1353C46.6064 22.1353 47.7516 23.3846 47.7516 25.1959V32.7451H50.9493V24.9671C50.9505 21.6506 49.1656 19.3044 45.6742 19.3044ZM110.776 25.7318C110.776 21.9576 107.898 19.3054 104.034 19.3054C99.93 19.3054 96.9185 22.2637 96.9185 26.1653C96.9185 30.2715 100.143 33 104.087 33C107.418 33 110.03 31.1125 110.695 28.4351H107.364C106.884 29.6082 105.712 30.2715 104.139 30.2715C102.087 30.2715 100.541 29.0473 100.195 26.9048H110.775V25.7318H110.776ZM100.382 24.7112C100.889 22.8748 102.328 21.9827 103.98 21.9827C105.792 21.9827 107.178 22.9772 107.498 24.7112H100.382Z" fill="#0052FF" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1453_70418">
                                                        <rect width="111" height="19" fill="white" transform="translate(0 14)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="col-md-6 pt-2 " style="display: flex; justify-content: end; ">
                                            <div class="goahead-buy-cont">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class=" pt-2 pe-2 goahead-buy-icon svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 p-2 ">
                                    <div class="row sidenav-li-box p-1 ">
                                        <div class="col-md-6 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="48" viewBox="0 0 120 48" fill="none">
                                                <g clip-path="url(#clip0_1453_70404)">
                                                    <path d="M9.93711 16.0177C11.775 15.904 13.6441 16.257 15.2951 17.0468C17.731 18.1957 19.6686 20.272 20.5845 22.7192C20.9894 23.8022 21.2075 24.9451 21.2075 26.0939V30.3602C21.2075 30.5337 21.2137 30.7132 21.1701 30.8808C21.0704 31.3116 20.7527 31.6886 20.329 31.874C20.0362 32.0057 19.6998 32.0236 19.3883 31.9758C18.7092 31.8561 18.1858 31.2458 18.1796 30.5876C18.1734 29.2652 18.1796 27.9429 18.1796 26.6145C18.1921 26.2375 18.1921 25.8366 17.9803 25.5076C17.6376 24.8972 16.8028 24.604 16.1361 24.8673C15.5692 25.0588 15.158 25.6093 15.1518 26.1897C15.1455 27.536 15.1518 28.8763 15.1518 30.2166C15.1518 30.4679 15.1642 30.7252 15.0895 30.9645C14.9462 31.4372 14.535 31.8202 14.0428 31.9518C13.3949 32.1254 12.6535 31.8501 12.3233 31.2757C12.099 30.9286 12.1177 30.5098 12.1239 30.1269C12.1177 28.7925 12.1301 27.4582 12.1177 26.1239C12.1052 25.4477 11.5258 24.8374 10.8218 24.7476C10.367 24.6818 9.88727 24.8254 9.55707 25.1366C9.25802 25.4058 9.08981 25.7948 9.08981 26.1897V30.079C9.08358 30.4081 9.12719 30.7432 8.99636 31.0483C8.79699 31.6048 8.21136 32.0117 7.59457 31.9937C6.96532 32.0296 6.34854 31.6108 6.14917 31.0423C6.03703 30.7611 6.06195 30.4619 6.06195 30.1628C6.06195 28.8224 6.06818 27.4821 6.06195 26.1358C6.05572 25.4717 5.51992 24.8673 4.84084 24.7476C4.23028 24.622 3.55119 24.9212 3.23969 25.4537C3.10885 25.6751 3.04032 25.9324 3.04032 26.1837V30.5397C3.04655 30.9645 2.84095 31.3834 2.50453 31.6527C1.99365 32.0835 1.16504 32.1074 0.623016 31.7125C0.230516 31.4552 0 31.0184 0 30.5636V26.1538C0.00623016 24.4844 0.442342 22.8209 1.27095 21.355C1.95004 20.1583 2.87834 19.0872 3.99353 18.2375C5.67568 16.9271 7.78147 16.1433 9.93711 16.0177Z" fill="#5442D0" />
                                                    <path d="M51.2308 21.1337C50.4582 21.1337 49.7168 21.1337 48.9318 21.1337C49.0128 19.584 49.3493 18.1898 50.8258 17.3102C52.2899 16.4366 53.9035 16.2392 55.5794 16.3708C56.489 16.4426 57.3737 16.6281 58.2086 16.9991C59.6726 17.6453 60.3953 18.7523 60.3953 20.29C60.4016 23.0185 60.3953 25.753 60.3953 28.4815C60.3953 29.4868 60.6072 29.6722 61.6538 29.5705C61.766 29.5586 61.8781 29.5406 61.9965 29.5227C62.009 29.5765 62.0214 29.6184 62.0214 29.6603C62.0214 30.2048 62.0214 30.7493 62.0214 31.3177C61.1866 31.587 60.3517 31.6707 59.5107 31.4553C58.9001 31.2938 58.5076 30.8689 58.2958 30.3065C58.1899 30.0193 58.1276 29.7201 58.0279 29.385C57.9407 29.4808 57.8659 29.5705 57.7787 29.6483C55.9657 31.4135 53.8038 32.1554 51.2619 31.5391C49.4614 31.1023 48.2154 29.5167 48.1718 27.7276C48.1593 27.1532 48.2091 26.5668 48.3524 26.0103C48.6826 24.7179 49.6358 23.94 50.8507 23.4194C51.7043 23.0485 52.6139 22.9408 53.5297 22.833C54.6013 22.7014 55.6729 22.5758 56.7445 22.4322C57.4734 22.3364 57.841 21.9654 57.9531 21.2594C58.1836 19.8592 57.5357 18.9138 56.109 18.5787C55.2617 18.3813 54.3957 18.3454 53.5359 18.501C52.265 18.7224 51.5547 19.4105 51.3055 20.6251C51.2931 20.7807 51.2682 20.9422 51.2308 21.1337ZM58.003 23.8443C56.9438 24.3948 55.9159 24.5264 54.8816 24.676C54.0094 24.8076 53.1247 24.9273 52.2899 25.1906C51.1685 25.5436 50.6701 26.4292 50.7635 27.6139C50.8445 28.6012 51.5485 29.397 52.6512 29.5705C54.3645 29.8458 55.8847 29.391 57.0809 28.1704C57.4298 27.8173 57.7101 27.3028 57.7849 26.8241C57.9407 25.8727 57.9344 24.8974 58.003 23.8443Z" fill="#5442D0" />
                                                    <path d="M90.7299 26.6926C90.6738 26.9319 90.6427 27.1354 90.5804 27.3268C89.5835 30.2229 87.5836 31.4734 85.1477 31.7307C80.9236 32.1795 78.5125 29.5228 77.8895 26.7046C77.3973 24.4667 77.4659 22.2408 78.4876 20.1346C79.4533 18.1481 81.0108 16.8377 83.3284 16.4488C86.0946 15.982 90.0259 17.2924 90.6863 21.457C90.8545 22.528 90.8919 23.623 90.9978 24.7539C87.3656 24.7539 83.8331 24.7539 80.2632 24.7539C80.3567 26.2797 80.6059 27.7038 81.7647 28.8167C82.2444 29.2775 82.8612 29.4989 83.5278 29.6066C85.7084 29.9716 87.4964 28.9723 88.2067 26.9678C88.2814 26.7524 88.3811 26.6866 88.6116 26.6926C89.3032 26.7046 89.9947 26.6926 90.7299 26.6926ZM80.3504 22.7913C83.0356 22.7913 85.7021 22.7913 88.3873 22.7913C88.3001 21.8998 88.1319 21.0621 87.702 20.2842C87.2846 19.5303 86.6616 18.9918 85.8143 18.7165C83.0356 17.801 80.1635 19.9312 80.3504 22.7913Z" fill="#5442D0" />
                                                    <path d="M96.5106 31.2458C95.6757 31.2458 94.8845 31.2458 94.0684 31.2458C94.0684 26.3931 94.0684 21.5524 94.0684 16.6938C94.8347 16.6938 95.5947 16.6938 96.386 16.6938C96.386 17.352 96.386 17.9862 96.386 18.7342C96.5604 18.5427 96.6726 18.423 96.7785 18.3093C98.4357 16.4903 100.529 16.0117 102.896 16.5741C104.547 16.9631 105.463 18.082 105.775 19.6497C105.906 20.2899 105.98 20.9481 105.987 21.6003C106.012 24.7237 105.999 27.8471 105.999 30.9705C105.999 31.0543 105.987 31.1441 105.98 31.2458C105.158 31.2458 104.342 31.2458 103.482 31.2458C103.482 31.1022 103.482 30.9765 103.482 30.8509C103.482 27.9369 103.501 25.0169 103.47 22.1029C103.463 21.4567 103.37 20.7925 103.177 20.1762C102.859 19.153 102.012 18.6085 100.897 18.5726C98.8718 18.5068 97.2582 19.536 96.766 21.2772C96.5916 21.8995 96.5355 22.5696 96.5293 23.2218C96.5044 25.7529 96.5168 28.2899 96.5106 30.8209C96.5106 30.9466 96.5106 31.0782 96.5106 31.2458Z" fill="#5442D0" />
                                                    <path d="M64.3823 16.6939C65.186 16.6939 65.946 16.6939 66.7373 16.6939C66.7373 18.7223 66.7373 20.7447 66.7373 22.8569C66.8868 22.7193 66.974 22.6475 67.0612 22.5697C68.9864 20.6849 70.9177 18.7941 72.8366 16.9033C72.9986 16.7417 73.1606 16.6699 73.3973 16.6699C74.3007 16.6819 75.2103 16.6759 76.2071 16.6759C76.0701 16.8135 75.9953 16.8973 75.9143 16.9811C74.2197 18.6146 72.5313 20.2481 70.8243 21.8756C70.6311 22.0551 70.6249 22.1748 70.762 22.3902C72.6123 25.2204 74.4502 28.0506 76.2943 30.8868C76.3629 30.9885 76.4252 31.0903 76.5124 31.2399C76.3878 31.2518 76.2943 31.2638 76.2009 31.2638C75.3598 31.2638 74.5187 31.2578 73.6777 31.2698C73.4472 31.2758 73.335 31.192 73.2229 31.0125C71.8149 28.7328 70.3944 26.459 68.9801 24.1793C68.9178 24.0776 68.8493 23.9818 68.7683 23.8621C68.1141 24.4844 67.4787 25.0888 66.8494 25.7111C66.7684 25.7888 66.7497 25.9444 66.7497 26.0701C66.7435 27.6677 66.7435 29.2593 66.7435 30.8569C66.7435 30.9766 66.7435 31.0963 66.7435 31.2698C66.2762 31.2698 65.8277 31.2758 65.3791 31.2698C65.0551 31.2638 64.6253 31.3476 64.4383 31.186C64.2764 31.0424 64.376 30.6116 64.376 30.3064C64.376 25.9145 64.376 21.5226 64.376 17.1307C64.3823 16.987 64.3823 16.8494 64.3823 16.6939Z" fill="#5442D0" />
                                                    <path d="M37.2496 16.6761C35.337 18.4951 33.4804 20.2722 31.6113 22.0493C33.6174 25.1368 35.5799 28.1585 37.586 31.246C37.4241 31.252 37.3244 31.264 37.2185 31.264C36.4023 31.264 35.5799 31.258 34.7638 31.2699C34.527 31.2759 34.3962 31.1922 34.2778 31.0007C32.8698 28.721 31.4493 26.4472 30.0351 24.1675C29.979 24.0717 29.9167 23.982 29.8233 23.8384C29.4619 24.1974 29.1504 24.5803 28.7579 24.8616C27.9667 25.436 27.7299 26.154 27.7922 27.0934C27.8732 28.332 27.8109 29.5826 27.8109 30.8272C27.8109 30.9588 27.8109 31.0845 27.8109 31.234C27.0197 31.234 26.2596 31.234 25.4746 31.234C25.4746 26.3934 25.4746 21.5527 25.4746 16.6881C26.2409 16.6881 26.9948 16.6881 27.7985 16.6881C27.7985 18.7165 27.7985 20.7389 27.7985 22.7613C27.8483 22.7913 27.8981 22.8272 27.948 22.8571C28.0103 22.7554 28.0477 22.6297 28.1287 22.5519C30.0413 20.6671 31.9664 18.7943 33.8791 16.9094C34.0473 16.7419 34.2155 16.6581 34.471 16.6641C35.2684 16.6821 36.0659 16.6701 36.8571 16.6701C36.9693 16.6761 37.0814 16.6761 37.2496 16.6761Z" fill="#5442D0" />
                                                    <path d="M41.9161 19.0873C43.0998 17.4239 44.3583 16.0357 46.6947 16.4366C46.6947 17.2863 46.6947 18.13 46.6947 18.9258C46.0716 18.9677 45.4611 18.9497 44.8817 19.0634C43.4425 19.3506 42.3335 20.6131 42.1155 22.1329C42.0719 22.4321 42.0532 22.7433 42.0532 23.0484C42.0469 25.6453 42.0532 28.2481 42.0532 30.845C42.0532 30.9706 42.0532 31.1023 42.0532 31.2459C41.2246 31.2459 40.4396 31.2459 39.6172 31.2459C39.6172 26.3992 39.6172 21.5645 39.6172 16.6999C40.371 16.6999 41.1249 16.6999 41.9223 16.6999C41.9161 17.4778 41.9161 18.2436 41.9161 19.0873Z" fill="#5442D0" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1453_70404">
                                                        <rect width="106" height="16" fill="white" transform="translate(0 16)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div class="col-md-6 pt-2 " style="display: flex; justify-content: end; ">
                                            <div class="goahead-buy-cont">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class=" pt-2 pe-2 goahead-buy-icon svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row p-3 ">
                            <div class="col-md-12 provider-buy-cont ">
                                <div class="col-md-12 pt-3 ">
                                    <p class="" style="font-size: 16px; color: #a3a3a3; font-weight: 600; "> Bridges </p>
                                </div>

                                <div class="col-md-12 p-2 ">
                                    <div class="row sidenav-li-box p-1 ">
                                        <div class="col-md-6 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="48" viewBox="0 0 120 48" fill="none">
                                                <path d="M4.09543 13.7127L6.40801 8.18284H8.13015V15.3927H6.99193V9.28881L4.44015 15.4312H3.62352L1.09414 9.32732V15.3956H0V8.17993H1.79875L4.09543 13.7127Z" fill="white" />
                                                <path d="M14.3403 14.2258C14.145 14.619 13.8445 14.9497 13.4727 15.1807C13.1008 15.4118 12.6723 15.534 12.2351 15.5338C10.6662 15.5338 9.59375 14.3406 9.59375 12.6998V9.05566H10.7652V12.4811C10.7652 13.6736 11.4409 14.4562 12.5134 14.4562C13.6227 14.4562 14.3374 13.6481 14.3374 12.4811V9.05566H15.4988V15.3928H14.3403V14.2258Z" fill="white" />
                                                <path d="M23.9742 15.3926H22.4811C21.0141 15.3926 20.274 14.687 20.274 13.2758V10.1069H18.8887V9.05543H20.274V7.45679H21.4354V9.05543H23.9742V10.1069H21.4354V13.0062C21.4354 13.9298 21.7288 14.3142 22.7362 14.3142H23.9734L23.9742 15.3926Z" fill="white" />
                                                <path d="M30.7001 15.5084H29.7722L26.7998 9.05566H28.1006L30.2687 13.9431L32.4251 9.05566H33.6241L30.7001 15.5084Z" fill="white" />
                                                <path d="M40.0426 12.3656H34.7981C34.8624 13.5457 35.7044 14.4729 36.9423 14.4729C38.2048 14.4729 38.7151 13.7927 38.8177 13.5878H39.9646C39.8627 14.1394 39.0583 15.5498 36.9409 15.5498C34.9896 15.5498 33.623 14.087 33.623 12.2268C33.623 10.3157 34.9882 8.90455 36.826 8.90455C38.6775 8.90164 40.0426 10.2874 40.0426 12.3656ZM34.8747 11.3904H38.7541C38.4599 10.4283 37.7842 9.90224 36.8274 9.90224C35.8063 9.90224 35.1176 10.4669 34.8747 11.3904Z" fill="white" />
                                                <path d="M42.3283 15.3927H41.167V9.0555H42.3283V10.2225C42.5068 9.76035 43.0424 9.00391 44.5224 9.00391H45.2032V10.1709H44.4971C42.8769 10.1709 42.3291 10.6847 42.3291 11.8132L42.3283 15.3927Z" fill="white" />
                                                <path d="M47.7591 12.6124C46.5471 12.4671 45.6922 11.8901 45.6922 10.7231C45.6922 9.60699 46.7386 8.87524 48.2823 8.87524C50.4135 8.87524 51.1007 9.97903 51.306 10.6192H50.0687C49.9285 10.4521 49.4559 9.87512 48.2823 9.87512C47.3254 9.87512 46.8369 10.221 46.8369 10.6832C46.8369 11.1322 47.1563 11.4142 47.9087 11.5043C48.4066 11.5682 48.7123 11.5937 49.2615 11.6583C50.7538 11.8502 51.392 12.4918 51.392 13.6595C51.392 14.7241 50.4221 15.5706 48.6357 15.5706C46.4163 15.5706 45.6373 14.198 45.4971 13.621H46.735C46.7986 13.8259 47.3088 14.5446 48.6357 14.5446C49.7074 14.5446 50.2306 14.1595 50.2306 13.6595C50.2306 13.1596 49.9625 12.8602 49.1083 12.7614L47.7591 12.6124Z" fill="white" />
                                                <path d="M24.8438 6H26.0557V7.8348H24.8438V6ZM24.869 9.05195H26.0297V15.3898H24.869V9.05195Z" fill="white" />
                                                <path d="M16.9717 7.10645H18.133V15.3903H16.9717V7.10645Z" fill="white" />
                                                <path d="M56.0573 9.86344L58.8758 8.35926L58.4024 7.45312L55.8203 8.49297C55.754 8.51988 55.6799 8.51988 55.6136 8.49297L53.0314 7.45312L52.5566 8.36217L55.3751 9.86634L52.5566 11.3705L53.0314 12.2796L55.6136 11.2317C55.6799 11.2048 55.754 11.2048 55.8203 11.2317L58.4024 12.2745L58.8772 11.3654L56.0573 9.86344Z" fill="#23F7DD" />
                                                <path d="M73.8264 29.6664H63.2031C63.3317 32.0448 65.0382 33.9059 67.5452 33.9059C70.0522 33.9059 71.1388 32.5361 71.3454 32.1228H73.6718C73.4652 33.234 71.8367 36.0777 67.5466 36.0777C63.5918 36.0777 60.8262 33.1314 60.8262 29.3832C60.8262 25.635 63.5918 22.6887 67.314 22.6887C71.0362 22.6887 73.8279 25.4804 73.8279 29.6678L73.8264 29.6664ZM63.3577 27.7027H71.2154C70.6201 25.7636 69.2502 24.7044 67.3126 24.7044C65.2448 24.7044 63.849 25.8416 63.3577 27.7027Z" fill="white" />
                                                <path d="M17.531 35.7674H15.209V23.1009H17.531V25.4229C17.8879 24.504 18.9601 22.9998 21.9193 22.9998H23.2805V25.3218H21.8688C18.6292 25.3218 17.5325 26.407 17.5325 28.651V35.7688L17.531 35.7674Z" fill="white" />
                                                <path d="M0 21.2412H7.4704C10.6493 21.2412 12.3298 22.6891 12.3298 25.17C12.3298 26.7205 11.2186 27.7811 10.1074 28.1163C11.4773 28.5035 12.6665 29.7187 12.6665 31.6059C12.6665 34.1649 10.986 35.7673 7.60045 35.7673H0.00144526V21.2412H0ZM2.37839 23.361V27.2378H7.28979C9.02084 27.2378 9.87481 26.5919 9.87481 25.2986C9.87481 24.0054 9.02228 23.3595 7.28979 23.3595H2.37839V23.361ZM2.37839 29.3315V33.6476H7.41839C9.35751 33.6476 10.236 32.8471 10.236 31.4758C10.236 30.1046 9.30549 29.3301 7.41839 29.3301H2.37839V29.3315Z" fill="white" />
                                                <path d="M24.8691 16.8469H27.3241V20.5431H24.8691V16.8469ZM24.9212 22.9981H27.2735V35.7671H24.9212V22.9981Z" fill="white" />
                                                <path d="M40.5772 33.5707C40.2405 34.1905 38.8447 36.0777 35.9244 36.0777C32.5129 36.0777 29.6172 33.5967 29.6172 29.3832C29.6172 25.1697 32.5114 22.6887 35.9244 22.6887C38.8186 22.6887 40.2405 24.4212 40.5772 25.1177V19.3018H42.9295V35.767H40.5772V33.5707ZM36.3637 24.8605C33.7526 24.8605 32.0476 26.7996 32.0476 29.3832C32.0476 31.9668 33.7541 33.9059 36.3637 33.9059C38.9733 33.9059 40.6277 31.9668 40.6277 29.3832C40.6277 26.7996 38.9212 24.8605 36.3637 24.8605Z" fill="white" />
                                                <path d="M56.2813 33.595C55.9446 34.2669 54.5488 36.1019 51.6285 36.1019C48.217 36.1019 45.3213 33.621 45.3213 29.4075C45.3213 25.194 48.2155 22.687 51.6285 22.687C54.5227 22.687 55.9446 24.4441 56.2813 25.142V22.9962H58.6336V35.1887C58.6336 38.7809 56.3073 41.2893 51.9392 41.2893C46.9772 41.2893 45.632 38.0584 45.4253 37.2565H48.0103C48.191 37.5671 49.0955 39.1176 51.9392 39.1176C54.7828 39.1176 56.2813 37.6697 56.2813 35.1887V33.595ZM52.0678 24.8588C49.4567 24.8588 47.7517 26.8225 47.7517 29.4075C47.7517 31.9925 49.4582 33.9302 52.0678 33.9302C54.6774 33.9302 56.3318 31.9145 56.3318 29.4075C56.3318 26.9005 54.6253 24.8588 52.0678 24.8588Z" fill="white" />
                                            </svg>
                                        </div>

                                        <div class="col-md-6 pt-2 " style="display: flex; justify-content: end; ">
                                            <div class="goahead-buy-cont">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class=" pt-2 pe-2 goahead-buy-icon svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
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
        </div>
    </div>
</div>
</template>

<script>
// import NavbarSidebarFooterComponent from '../components/NavbarSidebarFooterComponent.vue';
import {
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownItem
} from "mdb-vue-ui-kit";
import {
    ref
} from 'vue';
export default {
    // components: {
    //     NavbarSidebarFooterComponent
    // },

    components: {
        MDBDropdown,
        MDBDropdownMenu,
        MDBDropdownItem,
    },
    data() {
        return {
            myData: "",
            gasinputs: false,
        };
    },

    setup() {
        const dropdown1 = ref(false);
        const dropdown2 = ref(false);
        const dropdown3 = ref(false);
        const dropdown4 = ref(false);
        return {
            dropdown1,
            dropdown2,
            dropdown3,
            dropdown4,
        }
    },

    mounted() {
        this.myData = JSON.parse(localStorage.getItem("myData"));
    },
    
    
    methods: {
        opengasInputs() {
            this.gasinputs = !this.gasinputs;
        },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

/* modal rightest start */

.change::placeholder {
    color: #e5e5e5;
    opacity: 1;
}

.modal-close-btn {
    height: 13px;
    width: 13px;
    cursor: pointer;
    color: #706c6c;
}

.recievescanner-cont {
    height: 200px;
    width: 200px;
    border-radius: 12px;
    /* box-shadow: 5px 10px #888888; */
}

.walletaddress-recieve-txt {
    color: #737373;
    font-size: 14px;
}

.walletaddress-recieve {
    color: #e5e5e5;
    font-size: 14px
}

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

.recievemodal-txt {
    color: #e5e5e5;
    font-size: 24px;
}

/* swap modal start */

.swaptxt-small {
    font-size: 12px;
    color: #a3a3a3;
}

.swaprowcont {
    background-color: #171717;
    color: white;
    border-radius: 12px;
}

.swapinputcont {
    background-color: #171717;
    color: white;
    border: none;
    font-size: 14px;
}

.swaptransaction-circle {
    height: 35px;
    width: 35px;
    transition: 0.2s ease-in;
    border-radius: 50%;
    color: #23f7dd;
    background-color: #292e2d;
}

.smalliconswaptxt {
    font-size: 14px;
    color: #737373;
}

.swapbtnmodal {
    border-radius: 12px;
    color: #171717;
    background-color: #23f7DD;
    border: none;
}

/* swap modal end */

/* modal rightest end */

/* buy modal start */

.provider-buy-cont {
    background-color: #171717;
    border: none;
    border-radius: 12px;
}

.goahead-buy-cont {
    border-radius: 12px;
    height: 35px;
    width: 35px;
    background-color: #262626;
}

.goahead-buy-cont:hover {
    color: #23f7DD;
    background-color: #3b5650;
    transition: 0.2s ease-in-out
}

.goahead-buy-icon {
    height: 25px;
    width: 38px;
    color: #a3a3a3;
}

.goahead-buy-icon:hover {
    color: #23f7DD;
}

/* buy modal end */

/* send modal start */

.sendcont-circle {
    border-radius: 50%;
    height: 18px;
    width: 18px;
    background-color: white;
    color: black;
    font-size: 12px;
    font-weight: bold;

}

.sendcont-up-txt {
    font-size: 12px;
    color: #e5e5e5;
}

/* send modal end */

/* navbar code start */
.nav-cont {
    background-color: #171717;
    color: white;
}

.imglogo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.nav-circle {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background-color: rgb(38, 38, 38);
    transition: 0.2s ease-in;
}

.nav-circle:hover {
    background-color: rgb(68, 66, 66);
    transition: 0.2s ease-in;
}

.iconnav {
    height: 27px;
    width: 32px;
    border-radius: 50%;
    color: #706c6c;
}

.iconnav:hover {
    transition: 0.2s ease-in;
    color: #23f7DD;
}

.address-cont-nav {
    border-radius: 24px;
    border: 1px solid #706c6c;
    /* background-color: rgb(69, 65, 65); */
    color: #e5e5e5;
}

.txt-nav-address {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
}

.iconnavadd {
    height: 15px;
    width: 15px;
    color: #706c6c;
    transition: 0.2s ease-out;
}

.iconnavadd:hover {
    color: #23f7DD;
    transition: 0.2s ease-in;
}

/* navbar code end */

/* sidenav code start */

.sidenav-cont {
    /* border: 1px solid white; */
    background-color: #171717;
    color: #e5e5e5;
}

ul {
    list-style-type: none;
}

.sidenav-cont-icon {
    height: 16px;
    width: 18px;

}

.sidevan-txt {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
}

.active {
    color: #23f7DD;
}

.sidenav-li-box {
    transition: 0.2s ease-in-out;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
}

.sidenav-li-box:hover {
    border-radius: 12px;
    background-color: rgb(42, 41, 41);
    transition: 0.2s ease-in-out;
}

.text-muted-sidenav {
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
    font-family: "Roobert Heavy", "Inter", Roboto, sans-serif;
    color: #737373;
}

/* sidenav code end */

/* righest-cont start */
.rightest-txt {
    font-size: 16px;
    color: #706c6c;
    font-weight: 400;
}

.rightest-txt:hover {
    color: #23f7DD;
}

.rightest-cont-icon {
    width: 15px;
    height: 20px;
}

.rightest-cont-hover:hover {
    color: #23f7DD;
}

/* righest-cont end */

/* mid-cont start */

.scroll-main-cont {
    max-height: 100%;
    overflow-y: auto;
}

.scroll-dropdown {
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

}

/* width */
::-webkit-scrollbar {
    width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 12px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: black;
}

.main-cont {
    background-color: black;
    border-radius: 36px;
}

.mid-main-txt {
    font-size: 40px;
    font-weight: 400;
    font-family: "Roobert Heavy", "Inter", Roboto, sans-serif;
    color: #e5e5e5;
}

.main-port-cont {
    background-color: #171717;
    border: none;
    border-radius: 20px;
    height: 350px;
}

.port-txt {
    font-size: 18px;
    font-weight: 400;
    font-family: "Roobert Heavy", "Inter", Roboto, sans-serif;
    color: #a3a3a3;
}

.dropdown-port {
    font-size: 16px;
    font-weight: 400;
    font-family: "Roobert Heavy", "Inter", Roboto, sans-serif;
    color: white;
    border-radius: 12px;
    background-color: #2e2d2d;
    transition: 0.2s ease-in;
}

.dropdown-port:hover {
    color: rgb(105, 102, 102);
    transition: 0.2s ease-in;
}

.main-port-cont-total {
    background-color: #23f7DD;
    border: none;
    color: black;
    border-radius: 20px;
    /* height: 140px; */
}

.main-port-cont-token {
    background-color: #171717;
    border: none;
    border-radius: 20px;
}

.small-port-cont {
    border: none;
    border-radius: 20px;
    background-color: #171717;
}

.small-port-cont-icon {
    color: #23f7DD;
    height: 21px;
    width: 24px;
}

.small-port-cont-muted-txt {
    color: #737373;
    font-size: 14px;
}

.footer-txt {
    font-size: 13px;
    color: #a3a3a3;
}

/* mid-cont end */
</style>
