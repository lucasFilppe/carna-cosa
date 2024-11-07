"use client";

import CosaLogo from "../Logo";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio"); // Link ativo inicial

  const links = [
    "#inicio",
    "#blocos",
    "#pacotes",
    "#festas",
    "#fotos",
    "#vendedores",
    "#informações",
  ];

  const handleLinkClick = (href: string) => {
    setActiveLink(href); // Atualizar o link ativo
    setIsOpen(false); // Fechar o menu móvel
  };

  return (
    <div className="w-full">
      <nav className="bg-customBlue text-white p-2 w-full fixed top-0 z-50 h-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
          {/* Logo na esquerda */}
          <div className="flex items-center space-x-4">
            <CosaLogo />
          </div>

          {/* Botão de menu hambúrguer para dispositivos móveis */}
          <div className="md:hidden flex items-end justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {/* Alternar entre os ícones */}
              {isOpen ? <AiOutlineClose size={50} /> : <MdMenu size={50} />}
            </button>
          </div>

          {/* Links de navegação - Visível em telas médias e maiores */}
          <div className="hidden md:flex flex-1 justify-center text-2xl">
            <ul className="flex space-x-4">
              {links.map((href: string) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`nav-link ${activeLink === href ? "border-b-2 border-white" : ""}`}
                    onClick={() => handleLinkClick(href)}
                  >
                    {href === "#inicio" ? "Início" : href.substring(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Menu Dropdown para dispositivos móveis */}
        {isOpen && (
          <Transition
            show={isOpen}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="md:hidden fixed inset-0 top-16 z-40">
              <div className="bg-white rounded-t-lg shadow-lg w-full">
                <ul className="bg-customBlue p-4 text-white text-xl">
                  {links.map((href: string) => (
                    <li key={href}>
                      <a
                        href={href}
                        className={`block py-2 ${activeLink === href ? "border-b-2 border-white" : ""}`}
                        onClick={() => handleLinkClick(href)}
                      >
                        {href === "#inicio" ? "Início" : href.substring(1)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Transition>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
