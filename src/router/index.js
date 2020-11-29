import {createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";
import Game from "@/views/Game.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/home",
		redirect: "/",
	},
	{
		path: "/village",
		redirect: "/village/1",
	},
	{
		path: "/village/:id",
		name: "Game",
		component: Game,
		props: true,
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/",
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
