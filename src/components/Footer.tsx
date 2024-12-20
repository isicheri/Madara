"use client";

import GithubIcon from "@/svg/GithubIcon";
import LinkedInIcon from "@/svg/LinkedInIcon";
import TwitterIcon from "@/svg/TwitterIcon";
import { MailMinus } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
    const { theme } = useTheme();

    const color = theme === "light" ? "black" : "#A7D4EE";
   
    return (
        <footer className="padding-container max-container flex flex-col md:flex-row justify-between gap-4 items-center py-10 border-t border-zinc-900">
            
            <div className="flex gap-4 items-center justify-center">
                <Link href="https://github.com/isicheri" target="_blank">
                    <GithubIcon color={color} />
                </Link>
                <Link href="https://www.linkedin.com/in/dominion-isicheri" target="_blank">
                    <LinkedInIcon color={color} />
                </Link>
                <Link href="https://twitter.com/Madara_ts" target="_blank">
                    <TwitterIcon color={color} />
                </Link>
            </div>
            <Link href="mailto:disicheri@gmail.com" className="dark:text-[#A7D4EE] text-black flex gap-4"><MailMinus />disicheri@gmail.com</Link>
        </footer>
    )
}

export default Footer;