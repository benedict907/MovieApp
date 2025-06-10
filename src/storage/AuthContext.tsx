import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

type AuthContextType = {
  setLoading: (value: boolean) => void;
  isLoading: boolean;
  cachedData: string | null;
  setCachedData: (value: string | null) => void;
  insertCachedData: (value: string | null) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [isLoading, setLoading] = useState(true);
  const [cachedData, setCachedData] = useState<string | null>(null);

  const insertCachedData = (value: string | null) => {
    setCachedData(value);
    if (value) {
      AsyncStorage.setItem('cachedData', value).catch(error =>
        console.error('Error saving cached data:', error),
      );
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const cachedData = await AsyncStorage.getItem('cachedData');
        console.log('cachedData:', cachedData);
        setCachedData(cachedData); // Set true if token exists, false otherwise
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setLoading,
        cachedData,
        setCachedData,
        insertCachedData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
