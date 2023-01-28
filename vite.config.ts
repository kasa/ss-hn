import solid from "solid-start/vite";
import { defineConfig } from "vite";
export default defineConfig({
	base: "/ss-hn/",
	plugins: [solid({ ssr: false })],
});
