import { useContext, useState, createContext, FC, ReactNode } from 'react';
import { Item } from './types';

const Context = createContext(null as any)
const API_KEY = 'PZ08RP1MG1DZU3U3';


const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    let [assets, setAssets] = useState<Item[]>([])
    return (
        <Context.Provider value={{ assets, setAssets, API_KEY }}>
            {children}
        </Context.Provider>
    );
}

export const useContextHook = () => useContext(Context)

export default ContextProvider