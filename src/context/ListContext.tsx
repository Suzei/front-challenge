import { createContext, useContext, useState } from 'react';
import { IProduct, IProductSpecifications } from '../entitites/Product';
import React from 'react';
interface IListContext {
  details: IProduct[];
  specifications: IProductSpecifications[];
}

const ListContext = createContext({} as any);

export const ListProvider: React.FC = ({ children }) => {
  const [list, setList] = useState([]);
  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};

export function useProduct(): IListContext {
  const context = useContext(ListContext);

  return context;
}
