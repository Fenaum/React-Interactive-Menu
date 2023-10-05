import { useState } from "react"
import { MenuItem } from "./MenuItem"
import "./menu.css"

export default function Menu() {
    return (
        <main className="menu-container" >
            <h2 className="menu-title" >
                Our Menu
            </h2>
            <MenuItem />
        </main>
    )
}