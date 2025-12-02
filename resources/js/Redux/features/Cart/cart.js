import { createSlice } from "@reduxjs/toolkit"

// Reusable function to sync with localStorage
const saveToLocalStorage = (carts) => {
    localStorage.setItem("carts", JSON.stringify(carts))
}

const initialState = {
    carts: JSON.parse(localStorage.getItem("carts")) || [],
    coupon: JSON.parse(localStorage.getItem("coupon")) || ""
}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        // Add item to cart (product, gift, or cause)
        addCart(state, action) {
            const { id, type, content, quantity = 1 } = action.payload

            // Find existing item with same id + type
            const cartIndex = state.carts.findIndex(
                (c) => c.id === id && c.type === type
            )

            let itemPrice = 0
            if (type === "product") {
                itemPrice = Number(content.discount_price ?? content.price ?? 0)
            } else if (type === "gift") {
                itemPrice = Number(content.amount ?? 0)
            } else if (type === "cause") {
                itemPrice = Number(content.price ?? 0)
            }

            if (cartIndex === -1) {
                state.carts.push({
                    id,
                    type,                  // product, gift, or cause
                    title: content.content?.title || content.content?.name,
                    price: itemPrice,
                    thumbnail_image: content.thumbnail_image || content.gift_image || null,
                    quantity,
                    sku: content.sku ?? null
                })
            } else {
                state.carts[cartIndex].quantity += quantity
            }

            saveToLocalStorage(state.carts)
        },

        // Remove item from cart
        removeCart(state, action) {
            const { id, type } = action.payload
            state.carts = state.carts.filter((c) => !(c.id === id && c.type === type))
            saveToLocalStorage(state.carts)
        },

        // Clear entire cart
        clearCart(state) {
            state.carts = []
            localStorage.removeItem("carts")
        },

        // Increase quantity
        increaseCart(state, action) {
            const { id, type } = action.payload
            const cartIndex = state.carts.findIndex((c) => c.id === id && c.type === type)
            if (cartIndex !== -1) {
                state.carts[cartIndex].quantity += 1
                saveToLocalStorage(state.carts)
            }
        },

        // Decrease quantity
        decreaseCart(state, action) {
            const { id, type } = action.payload
            const cartIndex = state.carts.findIndex((c) => c.id === id && c.type === type)
            if (cartIndex !== -1) {
                state.carts[cartIndex].quantity -= 1
                if (state.carts[cartIndex].quantity <= 0) {
                    state.carts.splice(cartIndex, 1)
                }
                saveToLocalStorage(state.carts)
            }
        },

        // Set coupon
        setCoupon(state, action) {
            state.coupon = action.payload
            localStorage.setItem("coupon", JSON.stringify(action.payload))
        },

        // Remove coupon
        removeCoupon(state) {
            state.coupon = ""
            localStorage.removeItem("coupon")
        }
    }
})

export default cartSlice.reducer
export const { addCart, removeCart, clearCart, increaseCart, decreaseCart, setCoupon, removeCoupon } = cartSlice.actions
