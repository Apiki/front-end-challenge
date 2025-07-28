import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import LogoTheme from "./LogoTheme";

// Menu da Sidebar.
const data = {
  navMain: [
    {
      title: "Início",
      url: "/",
      items: [
        {
          title: "Sobre o Blog",
          url: "/",
        },
        {
          title: "Como Começar WordPress",
          url: "#",
        },
      ],
    },
    {
      title: "Tutoriais",
      url: "#",
      items: [
        {
          title: "Instalação Passo a Passo",
          url: "#",
        },
        {
          title: "Configurando Seu Site",
          url: "#",
        },
        {
          title: "Customização de Temas",
          url: "#",
        },
        {
          title: "Plugins Essenciais para Blogs",
          url: "#",
          isActive: true, // Talvez eu use o active do próprio NextJS, verificar posteriormente!
        },
        {
          title: "Criando e Editando Posts",
          url: "#",
        },
        {
          title: "Menus e Widgets na Prática",
          url: "#",
        },
        {
          title: "SEO Básico para Blogs",
          url: "#",
        },
        {
          title: "Backup e Segurança",
          url: "#",
        },
      ],
    },
    {
      title: "Novidades & Atualizações",
      url: "#",
      items: [
        {
          title: "Últimas Versões do WordPress",
          url: "#",
        },
        {
          title: "Novos Plugins em Alta",
          url: "#",
        },
        {
          title: "Tendências Design de Blogs",
          url: "#",
        },
        {
          title: "Comunidade WordPress",
          url: "#",
        },
      ],
    },
    {
      title: "Recursos Avançados",
      url: "#",
      items: [
        {
          title: "API REST do WordPress",
          url: "#",
        },
        {
          title: "WP-CLI para Automação",
          url: "#",
        },
        {
          title: "Desenvolvimento de Plugins",
          url: "#",
        },
        {
          title: "Temas Child e Personalizações",
          url: "#",
        },
      ],
    },
    {
      title: "Sobre o Autor",
      url: "#",
      items: [
        {
          title: "Contato",
          url: "#",
        },
        {
          title: "Redes Sociais",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="place-content-center hover:bg-primary/30"
              size="lg"
              asChild
            >
              <Link href={"/"}>
                <LogoTheme />
                <div className="flex flex-col leading-none">
                  <span className="font-medium">Developer</span>
                  <p className="text-destructive">Menu ilustrativo</p>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className="hover:bg-primary/30" asChild>
                  <Link href={item.url} className="font-medium">
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          className="hover:bg-primary/30"
                          asChild
                          isActive={item.isActive}
                        >
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
