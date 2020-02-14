// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// Wrap Page
import CustomLayout from "./wrapPageElement"

// Wrap Root Provider
import wrapWithProvider from "./wrapWithProvider"

// Exports
export const wrapPageElement = CustomLayout
export const wrapRootElement = wrapWithProvider
