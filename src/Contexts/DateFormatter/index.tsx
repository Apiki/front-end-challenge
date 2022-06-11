import { createContext, ReactNode, useContext } from 'react';

type DateFormatterProps = {
    handleDate: (date: string) => string;
}

type DateFormatterProviderProps = {
    children: ReactNode;
}

const DateFormatter = createContext({} as DateFormatterProps);

export function DateFormatterProvider({ children }: DateFormatterProviderProps) {

    function handleDate(date: string) {
        const formattedDate = new Date(date).toLocaleDateString("pt-BR");
        return formattedDate;
    }
    return (
        <DateFormatter.Provider value={{ handleDate }}>
            {children}
        </DateFormatter.Provider>
    );
};

export function useDateFormatter() {
    const value = useContext(DateFormatter)
    return value;
}