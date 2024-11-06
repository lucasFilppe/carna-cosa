"use client";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import CosaLogo from "../Logo";
import { Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="hidden md:flex flex-1 justify-center text-sm md:text-base">
            <ul className="flex space-x-4">
              <li>
                <a href="#inicio" className="nav-link">
                  Início
                </a>
              </li>
              <li>
                <a href="#blocos" className="nav-link">
                  Blocos
                </a>
              </li>
              <li>
                <a href="#pacotes" className="nav-link">
                  Pacotes
                </a>
              </li>
              <li>
                <a href="#festas" className="nav-link">
                  Festas
                </a>
              </li>
              <li>
                <a href="#fotos" className="nav-link">
                  Fotos
                </a>
              </li>
              <li>
                <a href="#vendedoresOficiais" className="nav-link">
                  Vendedores oficiais
                </a>
              </li>
              <li>
                <a href="#informacoes" className="nav-link">
                  Informações
                </a>
              </li>
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
                <ul className="bg-customBlue p-4 text-white">
                  <li>
                    <a href="#inicio" className="block py-2" onClick={() => setIsOpen(false)}>
                      Início
                    </a>
                  </li>
                  <li>
                    <a href="#blocos" className="block py-2" onClick={() => setIsOpen(false)}>
                      Blocos
                    </a>
                  </li>
                  <li>
                    <a href="#pacotes" className="block py-2" onClick={() => setIsOpen(false)}>
                      Pacotes
                    </a>
                  </li>
                  <li>
                    <a href="#festas" className="block py-2" onClick={() => setIsOpen(false)}>
                      Festas
                    </a>
                  </li>
                  <li>
                    <a href="#fotos" className="block py-2" onClick={() => setIsOpen(false)}>
                      Fotos
                    </a>
                  </li>
                  <li>
                    <a href="#vendedoresOficiais" className="block py-2" onClick={() => setIsOpen(false)}>
                      Vendedores oficiais
                    </a>
                  </li>
                  <li>
                    <a href="#informacoes" className="block py-2" onClick={() => setIsOpen(false)}>
                      Informações
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Transition>
        )}
      </nav>
    </div>
  );
}

