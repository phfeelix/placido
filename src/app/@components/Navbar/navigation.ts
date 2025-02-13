export interface ILink {
  label: string;
  href: string;
  type?: 'navigation' | 'button';
}


export const dashboardNavbarNavigation: ILink[] = [
  {
    label: "Sobre nós",
    href: "#sobrenos",
  },
  {
    label: "Métodos",
    href: "#metodo",
  },
  {
    label: "Contatos",
    href: "/contato",
  },
  {
    label: "Começar",
    href: "/services",
    type: 'button'
  },
];
