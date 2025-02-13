import Container from '@/components/features/Container';
import Text from '@/components/shared/Text';
import Title from '@/components/shared/Title';
import { Button } from '@/components/ui/button';
import { IconType } from 'react-icons';
import { BiSolidAnalyse } from 'react-icons/bi';
import { FaBusinessTime, FaMoneyBillTransfer } from 'react-icons/fa6';

const Info = () => {
  return (
    <div className='w-full rounded-xl bg-neutral-100 p-8 md:p-16 mt-20 shadow-sm'>
      <Container className="flex flex-col gap-8 md:gap-16">
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className="w-full md:w-[450px]">
            <Title className="text-3xl md:text-4xl font-bold text-left">
              Escalabilidade para facilitar seu crescimento<span className="text-primary-500">.</span>
            </Title>
          </div>
          <div className="w-full md:w-1/3">
            <Text className="text-base text-gray-600">
              Crie um sistema financeiro eficiente para seu negócio e tenha controle completo do fluxo de caixa.
            </Text>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-8 md:gap-11'>
          <InfoCard
            title='Transferências grátis'
            description='Envie e receba dinheiro de forma rápida e sem custos adicionais, com total segurança e praticidade.'
            Icon={FaMoneyBillTransfer}
          />
          <InfoCard
            title='Análise de pagamentos'
            description='Acompanhe e analise todos os seus pagamentos para tomar decisões mais informadas e precisas.'
            Icon={BiSolidAnalyse}
          />
          <InfoCard
            title='Agilize seu negócio'
            description='Otimize processos e economize tempo para focar no que realmente importa: o crescimento do seu negócio.'
            Icon={FaBusinessTime}
          />
        </div>

        <div className='flex justify-center mt-8'>
          <Button className="px-6 py-2 text-sm">
            Saiba mais sobre nossas soluções
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Info;

const InfoCard = ({ title, description, Icon }: { title: string, description: string, Icon: IconType }) => {
  return (
    <div className='flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
      <div className='flex items-center'>
        <Icon size={48} className='text-primary-500' /> 
      </div>
      <div className='flex flex-col gap-2'>
        <Title className='text-xl font-semibold'>{title}</Title>
        <Text className='text-sm text-gray-600'>{description}</Text>
      </div>
    </div>
  );
};