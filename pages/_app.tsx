import { Box, GlobalStyles } from "@bigcommerce/big-design";
import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Header from "../components/header";
import SessionProvider from "../context/session";
import { Provider } from "react-redux";
import { store } from "../store/store";


const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Box
				marginHorizontal={{ mobile: "none", tablet: "xxxLarge" }}
				marginVertical={{ mobile: "none", tablet: "xxLarge" }}
			>
				<Header />
				<Provider store={store}>
					<SessionProvider>
						<Component {...pageProps} />
					</SessionProvider>
				</Provider>
			</Box>
		</ThemeProvider>
	);
};
export default MyApp;