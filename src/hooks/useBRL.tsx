interface IBRL {
  brl: string | number;
}

export const useBRL = ({ brl }: IBRL) => {
  const formatedInBRL = brl.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return {
    formatedInBRL,
  };
};
