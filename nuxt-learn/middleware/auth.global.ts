import { defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
    console.log("GOING TOWARDS", to);
    console.log("COMING FROM", from);
});
