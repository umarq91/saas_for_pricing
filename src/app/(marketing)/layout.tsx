import { ReactNode } from "react"

export function MarketingLayout({children}:{
    children:ReactNode
}){
    return <div>
        {/* Navbar */}
        {children}
    </div>
}