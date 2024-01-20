import "@/app/globals.css"

import {cn} from "@/lib/utils"
import {PropsWithChildren} from "react";
import {Inter as FontSans} from "next/font/google"
import {ThemeProvider} from "@/components/theme-provider";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

export default function RootLayout({children}: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
		<head/>
		<body
			className={cn(
				"min-h-screen bg-background font-sans antialiased",
				fontSans.variable
			)}
		>
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
		</body>
		</html>
	)
}
