import { GlobalStyle, LayoutContainer } from "./Layout.style";
import Router from "../Router/Router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Header />
        <Router />
        <Footer />
      </LayoutContainer>
    </>
  )
}