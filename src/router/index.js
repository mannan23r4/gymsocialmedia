import{createRouter, createWebHistory} from 'vue-router'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/register',
            component: ()=> import('../RegisterPageComponent.vue')
        },
        // {
        //     path:'/EnterPasswordComponent',
        //     component: () => import('../EnterPasswordComponent.vue')
        // },
        {
            path:'/registered',
            component: () => import('../ThankYouComponent.vue')
        },
        {
            path:'/login',
            component: () => import('../LoginInComponent.vue')
        },
        {
            path:'/adminlogin',
            component: ()=> import('../views/AdminLoginComponent.vue')
        },
        {
            path:'/loginnew',
            component: () => import('../LoginInComponentNew.vue')
        },
        {
            path:'/start',
            component: () => import('../MainPageComponent.vue')
        },
        {
            path:'/home',
            component: () => import('../views/HomePageComponent.vue')
        },
        {
            path:'/principaldashboard',
            component: () => import('../views/PrincipalPageComponent.vue')
        },
        {
            path:'/clerkdashboard',
            component: () => import('../views/ClerkPageComponent.vue')
        },
        {
            path:'/studentdashboard',
            component: () => import('../views/StudentPageComponent.vue')
        },
        {
            path:'/formsubmitted',
            component: () => import('../views/FormSubmittedComponent.vue')
        },
        {
            path:'/kycformsubmitted',
            component: () => import('../views/KYCFormSubmittedComponent.vue')
        },
        {
            path:'/newwallet',
            component: () => import('../views/NewWalletPageComponent.vue')
        },
        // {
        //     path:'/myposts',
        //     component: () => import('../views/PostPageComponent.vue')
        // },
        {
            path:'/about-us',
            component: () => import('../views/AboutUsPageComponent.vue')
        },
        {
            path:'/wallet',
            component: () => import('../views/WalletPageComponent.vue')
        },
        {
            path:'/profile',
            component: () => import('../views/ProfilePageComponent.vue')
        },
        {
            path:'/userdashboard',
            component: () => import('../views/DashboardPageComponent.vue')
        },
        {
            path:'/NavbarSidebarFooterComponent',
            component: () => import('../components/NavbarSidebarFooterComponent.vue')
        },
        {
            path:'/SidebarFooterComponent',
            component: () => import('../components/SidebarFooterComponent.vue')
        },
        {
            path:'/kycpage',
            component: () => import('../views/KYCComponentPage.vue')
        },
        {
            path:'/merch',
            component: () => import('../views/ClothesSupplementComponent.vue')
        },
        // {
        //     path:'/walletconnect',
        //     component: () => import('../views/WalletConnectComponent.vue')
        // },
        {
            path:'/walletconnect',
            component: () => import('../views/WalletConnectComponent.vue')
        },
    ]
})
// 'signupform/resources/js/components/PostCreate.vue'
export default router