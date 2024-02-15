
import Logo from "@/assets/icon2_son.png";
//TODO: make the footer at the bottom of the page, alwyas even if there is no content on the page
const Footer = () => {
    return (
        <footer className="bg-gray-20 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                    </p>
                    <p>© Sonran Tags and Title All Rights Reserved.</p>
                </div>
                {/*
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold"></h4>
                    <p className="my-5"></p>
                    <p className="my-5"></p>
                    <p></p>
                </div>
                */}
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">sonorantags6129@gmail.com</p>
                    <a href="tel:(480) 905-0414">(480) 905-0414</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
