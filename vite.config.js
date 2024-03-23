const { defineConfig } = require("vite")

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                shop: resolve(__dirname, "./shop.html"),
                login: resolve(__dirname, "./login.html"),
                cart: resolve(__dirname, "./cart.html"),
                checkout: resolve(__dirname, "./checkout.html"),
                chitiet: resolve(__dirname, "./chitiet.html"),
            }
        }
    }
})