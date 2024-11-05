"use client"; // Adicione esta linha no início do arquivo
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import CosaLogo from "../Logo";
import { Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-customBlue text-white p-2 fixed w-full z-10 w-full">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo na esquerda */}
          <div className="flex items-center space-x-4">
            <CosaLogo />
          </div>

          {/* Botão de menu hambúrguer para dispositivos móveis */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {/* Condicional para alternar entre os ícones */}
              {isOpen ? <AiOutlineClose size={50} /> : <MdMenu size={50} />}
            </button>
          </div>

          {/* Links de navegação - Visível em telas médias e maiores */}
          <div className="mr-20 text-sm md:text-base">
            <ul className="hidden md:flex space-x-4">
              <li>
                <a
                  href="#inicio"
                  className="text-base hover:text-gray-200 hover:underline hover:underline-offset-1 focus:text-gray-200 focus:underline focus:underline-offset-1 active:text-gray-200 active:underline active:underline-offset-1"
                  style={{ textDecorationThickness: "3px" }}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#blocos"
                  className="text-base hover:text-gray-200 hover:underline hover:underline-offset-1 focus:text-gray-200 focus:underline focus:underline-offset-1 active:text-gray-200 active:underline active:underline-offset-1"
                  style={{ textDecorationThickness: "3px" }}
                >
                  Blocos
                </a>
              </li>
              <li>
                <a
                  href="#pacotes"
                  className="text-base hover:text-gray-200 hover:underline hover:underline-offset-1 focus:text-gray-200 focus:underline focus:underline-offset-1 active:text-gray-200 active:underline active:underline-offset-1"
                  style={{ textDecorationThickness: "3px" }}
                >
                  Pacotes
                </a>
              </li>
              <li>
                <a
                  href="#festas"
                  className="text-base hover:text-gray-200 hover:underline hover:underline-offset-1 focus:text-gray-200 focus:underline focus:underline-offset-1 active:text-gray-200 active:underline active:underline-offset-1"
                  style={{ textDecorationThickness: "3px" }}
                >
                  Festas
                </a>
              </li>
              <li>
                <a
                  href="#fotos"
                  className="text-base hover:text-gray-200 hover:underline hover:underline-offset-1 focus:text-gray-200 focus:underline focus:underline-offset-1 active:text-gray-200 active:underline active:underline-offset-1"
                  style={{ textDecorationThickness: "3px" }}
                >
                  Fotos
                </a>
              </li>
              <li>
                <a
                  href="#vendedoresOficiais"
                  className="text-base hover:text-gray-200 hover:underline hover:underline-offset-1 focus:text-gray-200 focus:underline focus:underline-offset-1 active:text-gray-200 active:underline active:underline-offset-1"
                  style={{ textDecorationThickness: "3px" }}
                >
                  Vendedores oficiais
                </a>
              </li>
              <li>
                <a
                  href="#informacoes"
                  className="text-base hover:text-gray-200 hover:underline hover:underline-offset-1 focus:text-gray-200 focus:underline focus:underline-offset-1 active:text-gray-200 active:underline active:underline-offset-1"
                  style={{ textDecorationThickness: "3px" }}
                >
                  Informações
                </a>
              </li>
            </ul>
          </div>
        </div>

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
            <div className="fixed inset-x-0 flex items-end justify-end md:hidden">
              <div className="bg-white rounded-t-lg inset-x-0 justify-end">
                <ul className="md:hidden bg-customBlue p-4">
                  <li>
                    <a
                      href="#inicio"
                      className="block hover:text-gray-200"
                      onClick={() => setIsOpen(false)} // Fechar o modal ao clicar no link
                    >
                      Início
                    </a>
                  </li>
                  <li>
                    <a
                      href="#atracoes"
                      className="block hover:text-gray-200"
                      onClick={() => setIsOpen(false)} // Fechar o modal ao clicar no link
                    >
                      Atrações
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blocos"
                      className="block hover:text-gray-200"
                      onClick={() => setIsOpen(false)} // Fechar o modal ao clicar no link
                    >
                      Blocos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#festas"
                      className="block hover:text-gray-200"
                      onClick={() => setIsOpen(false)} // Fechar o modal ao clicar no link
                    >
                      Festas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#fotos"
                      className="block hover:text-gray-200"
                      onClick={() => setIsOpen(false)} // Fechar o modal ao clicar no link
                    >
                      Fotos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#vendedoresOficiais"
                      className="block hover:text-gray-200"
                      onClick={() => setIsOpen(false)} // Fechar o modal ao clicar no link
                    >
                      Vendedores oficiais
                    </a>
                  </li>
                  <li>
                    <a
                      href="#informacoes"
                      className="block hover:text-gray-200"
                      onClick={() => setIsOpen(false)} // Fechar o modal ao clicar no link
                    >
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
