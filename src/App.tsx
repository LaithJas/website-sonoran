import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home"
import Services from "@/scenes/services";
import AllServices from "@/scenes/AllServices";
import FAQ from "@/scenes/faq";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./scenes/footer";
import MapComponent from "./scenes/map/MapComponent.tsx";
import TandR from "./scenes/AllServices/TandR.tsx";
import Reg from "./scenes/AllServices/reg.tsx";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home)
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    return (
        <BrowserRouter>
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Routes>
                <Route path="/" element={
                    <div>
                        <Home setSelectedPage={setSelectedPage} />
                        <Services setSelectedPage={setSelectedPage} />
                    </div>
                } />

                <Route path="/allservices" element={
                    <AllServices setSelectedPage={setSelectedPage} />
                } />

                <Route path="/faq" element={
                    <FAQ />
                } />

                <Route path="/TandR" element={
                    <TandR />
                } />

                <Route path="/reg" element={
                    <Reg />
                } />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
