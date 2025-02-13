export interface ILink {
  label: string;
  href: string;
  type?: 'navigation' | 'button';
}


export const dashboardNavbarNavigation: ILink[] = [
  {
    label: "Sobre nós",
    href: "/",
  },
  {
    label: "Métodos",
    href: "/clientes",
  },
  {
    label: "Contatos",
    href: "/reviews",
  },
  {
    label: "Documentação API",
    href: "/documentation",
  },
  {
    label: "Começar",
    href: "/services",
    type: 'button'
  },
];
