import { api } from './api';

interface ConversionsResumeProps {
  title: {
    value: number;
    growth: number;
  };
}

interface IConversions {
  conversions: ConversionsResumeProps[];
}

export const ConversionsResume = async (): Promise<IConversions> => {
  const { data } = await api.get('conversions-resume');
  return data;
};
