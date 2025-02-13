import { IconType } from 'react-icons';
import { FaPix } from 'react-icons/fa6';
import { SiPicpay } from 'react-icons/si';

export type Country = {
  name: string
  code?: string
  cards: Array<Card>
}

export type Card = {
  icon: IconType;
  title: string;
  description: string;
};

const countries: Country[] = [
  { name: 'Brasil', code: "BR", cards: [
    { 
      title: 'PIX, PIX Direct', 
      description: 'O método de pagamento instantâneo ligado a mais de 700 instituições financeiras, criado e suportado pelo Banco Central do Brasil. PIX Direct oferece transações em tempo real, permitindo acesso imediato aos fundos para depósitos e retiradas.', 
      icon: FaPix
    }, 
    { 
      title: 'PicPay', 
      description: 'Uma aplicação de carteira digital para enviar e receber dinheiro, pagar contas e armazenar cartões de fidelidade.', 
      icon: SiPicpay
    },
    { 
      title: 'PicPay', 
      description: 'Uma aplicação de carteira digital para enviar e receber dinheiro, pagar contas e armazenar cartões de fidelidade.', 
      icon: SiPicpay
    }
  ]},
  { name: 'Mexico', code: 'MX', cards: [] },
  { name: 'Argentina', code: 'AR', cards: [] },
  { name: 'Chile', code: 'CL', cards: [] },
  { name: 'Peru', code: 'PE', cards: [] },
  { name: 'Colombia', code: 'CO', cards: [] }
]

export default countries

export type Questions = {
  title: string;
  description: string;
};

export const questions: Questions[] = [
  {
    title: "Quais formas de pagamento são aceitas?",
    description: "Aceitamos pagamentos via cartão de crédito, débito, Pix e boleto bancário."
  },
  {
    title: "É seguro inserir meus dados de pagamento?",
    description: "Sim! Utilizamos criptografia e certificações de segurança para garantir a proteção dos seus dados."
  },
  {
    title: "Posso salvar meus dados de pagamento para futuras compras?",
    description: "Sim, você pode optar por salvar seus dados de pagamento para facilitar compras futuras, de forma segura."
  },
  {
    title: "Como faço para aplicar um cupom de desconto?",
    description: "No momento do checkout, insira seu código promocional no campo 'Cupom de Desconto' e clique em 'Aplicar'."
  },
  {
    title: "O que fazer se meu pagamento não for aprovado?",
    description: "Verifique se os dados do cartão estão corretos, se há saldo suficiente ou entre em contato com o seu banco."
  }
];

