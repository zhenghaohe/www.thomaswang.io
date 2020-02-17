// custom typefaces
import "typeface-merriweather"
import "typeface-merriweather-sans"

// Wrap Page
import CustomLayout from "./wrapPageElement"

// Wrap Root Provider
import wrapWithProvider from "./wrapWithProvider"

// Exports
export const wrapPageElement = CustomLayout
export const wrapRootElement = wrapWithProvider
