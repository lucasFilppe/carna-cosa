'use client';

import CosaLogo from "../Logo";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Substituindo useRouter

const Navbar = () => {
  const pathname = usePathname(); // Usando usePathname para pegar o caminho atual
  const [isOpen, setIsOpen] = useState(false);

  // Alterna o estado do menu móvel
  const toggleMenu = () => setIsOpen(!isOpen);

  // Fecha o menu ao clicar em um link (para dispositivos móveis)
  const closeMenuOnClick = () => setIsOpen(false);

  // Links da barra de navegação
  const links = [
    { href: "/", label: "Início" },
    { href: "/blocos", label: "Blocos" },
    { href: "/pacotes", label: "Pacotes" },
    { href: "/festas", label: "Festas" },
    { href: "/fotos", label: "Fotos" },
    { href: "/vendedores", label: "Vendedores" },
    { href: "https://wa.me/5537998418715" , label: "Excursões" },
    { href: "/informacoes", label: "Informações" },
  ];
 
  // Classe para o link ativo
  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `nav-link ${isActive ? "border-b-2 border-white" : ""}`;
  };

  // Propriedades de segurança e destino para links externos
  const getLinkProps = (href: string) => ({
    ...(href.startsWith("http") && {
      target: "_blank",
      rel: "noopener noreferrer",
    }),
  });

  // UseEffect para fechar o menu ao clicar fora dele (para dispositivos móveis)
  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (e: Event) => {
        // Fazendo um type assertion para garantir que `target` seja do tipo HTMLElement
        if (!(e.target instanceof HTMLElement) || !e.target.closest("nav")) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", handleOutsideClick);
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      <nav className="bg-black text-white p-2 w-full fixed top-0 z-50 h-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <CosaLogo />
          </div>

          {/* Botão de menu para dispositivos móveis */}
          <div className="md:hidden flex items-end justify-end">
            <button
              aria-label="Alternar menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
              className="focus:outline-none"
            >
              {isOpen ? <AiOutlineClose size={50} /> : <MdMenu size={50} />}
            </button>
          </div>

          {/* Links de navegação - Para telas médias e maiores */}
          <div className="hidden md:flex flex-1 justify-center text-2xl">
            <ul className="flex space-x-4">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={getLinkClass(href)}
                    {...getLinkProps(href)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Menu dropdown - Para dispositivos móveis */}
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
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={getLinkClass(href)}
                        {...getLinkProps(href)}
                        onClick={closeMenuOnClick} // Fecha o menu ao clicar no link
                      >
                        {label}
                      </Link>
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
};

export default Navbar;



