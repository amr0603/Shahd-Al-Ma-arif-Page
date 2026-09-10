import { LangProvider } from "./context/LangContext";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import Products      from "./components/Products";
import Notebooks     from "./components/Notebooks";
import Gifts         from "./components/Gifts";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./index.css";

export default function App() {
  return (
    <LangProvider>
      <WhatsAppFloat />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Notebooks />
        <Gifts />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}