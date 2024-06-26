"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-[#eeeeee] lg:flex justify-center items-center">
                    <div className="md:hidden flex justify-between flex-row p-2">
                        <img
                            src="https://img.icons8.com/?size=100&id=2VkB5nq4yhf6&format=png&color=000000"
                            alt="curtain"
                            width={30}
                        />
                        <button
                            onClick={toggleMenu}
                            className="text-gray-500 text-xl transition bg-white rounded pl-2 pr-2"
                        >
                            {isOpen ? "✖" : "☰"}
                        </button>
                    </div>
                    <div
                        className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}
                    >
                        <motion.ul className="flex flex-col md:flex-row justify-center items-center">
                            {[
                                { text: "Home", path: "/home" },
                                { text: "Curtains", path: "/curtains" },
                                { text: "Home Decor", path: "/homedecor" },
                                { text: "Sofas & Seating", path: "/sofas" },
                                { text: "Furniture", path: "/furniture" },
                                { text: "Cushion covers", path: "/cushions" },
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="m-3 text-gray-500 text-xs font-normal hover:text-orange-400 transition uppercase"
                                    variants={fadeIn}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                >
                                    <Link href={item.path}>{item.text}</Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
                <div className="flex flex-row justify-center lg:justify-between p-3">
                    <div className="hidden lg:flex">
                        <a href="https://www.instagram.com/sayeedia_curtain_gallery/">
                            <img
                                src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"
                                alt="insta"
                                width={30}
                                className="m-1 hover:translate-y-[-2px] transition-all"
                            />
                        </a>
                        <a href="https://www.facebook.com/SayeediasCurtainGallery/">
                            <img
                                src="https://img.icons8.com/?size=100&id=118468&format=png&color=000000"
                                alt="fb"
                                width={30}
                                className="m-1 hover:translate-y-[-2px] transition-all"
                            />
                        </a>
                        <a href="https://wa.me/9700011630">
                            <img
                                src="https://img.icons8.com/?size=100&id=16712&format=png&color=000000"
                                alt="whatsapp"
                                width={30}
                                className="m-1 cursor-pointer hover:translate-y-[-2px] transition-all"
                            />
                        </a>
                    </div>
                    <div>
                        <a
                            className="text-center text-orange-400 relative top-0 left-0 lg:bottom-[-2px] lg:left-[72px] text-xl lg:text-3xl"
                            href="/"
                        >
                            S𝓪𝔂𝓮𝓮𝓭𝓲𝓪𝓼 C𝓾𝓻𝓽𝓪𝓲𝓷 G𝓪𝓵𝓵𝓮𝓻𝔂
                        </a>
                    </div>
                    <div className="hidden lg:flex">
                        <p className="text-xs">
                            📍: Asif Nagar Rd, Zeba Bagh,
                            <br /> Asif Nagar, Hyderabad, Telangana 500028
                        </p>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="hidden md:flex justify-center sticky">
                        <div>
                            <motion.ul className="flex flex-col md:flex-row justify-center items-center">
                                {[
                                    { text: "About us", path: "#company" },
                                    { text: "services", path: "#samples" },
                                    { text: "projects", path: "#projects" },
                                    { text: "contact us", path: "#contact" },
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="m-4 text-black text-sm font-normal hover:text-orange-400 transition uppercase tracking-wide"
                                        variants={fadeIn}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <Link href={item.path}>{item.text}</Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                    <hr />
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
