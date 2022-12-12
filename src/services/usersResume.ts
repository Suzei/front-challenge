import { api } from './api';

export interface IUsersResumeProps {
  type: {
    category: string;
    value: number;
  };

  per_sex: {
    male: string;
    female: string;
  };
}

interface UsersResume {
  users: IUsersResumeProps[];
}

export const UsersResume = async (): Promise<IUsersResumeProps> => {
  const { data } = await api.get('users-resume');
  return data;
};
