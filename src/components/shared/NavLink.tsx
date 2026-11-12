"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface  NavLinkProps{
 href: string,
 children: React.ReactNode,
  className?: string,
  onClick?: () => void;
}

const NavLink = ({href, children,className = "",onClick, }:NavLinkProps) => {
    const pathName = usePathname();
    const isActive = href === pathName;
    return (
       <Link href={href} onClick={onClick} className={`${className} ${isActive ? "bg-[#0F4C5C] text-white  font-extrabold " : ""}`}>
        {children}
       </Link>
    );
};

export default NavLink;