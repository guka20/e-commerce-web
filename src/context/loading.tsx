import React, { ReactNode, useState, createContext } from "react";
type Loading = Boolean;
interface ContextApi {
  loading: Loading;
  setIsLoading: React.Dispatch<React.SetStateAction<Loading>>;
}
const defaultState = {
  loading: false,
  setIsLoading: (loading: Loading) => Boolean,
} as ContextApi;
export const LoadingContext = createContext(defaultState);
type LoadingProps = {
  children: ReactNode;
};
export const LoadingContextApi = ({ children }: LoadingProps) => {
  const [loading, setIsLoading] = useState<Loading>(false);
  return (
    <LoadingContext.Provider value={{ loading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
