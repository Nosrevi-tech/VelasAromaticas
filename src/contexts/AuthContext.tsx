// import React, { createContext, useContext, useState } from 'react';
// import { User, AuthContextType, RegisterData, Address } from '../types';

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// const ADMIN_EMAIL = 'admin@velasaromaticas.com';
// const ADMIN_PASSWORD = 'admin123';

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);

//   const login = async (email: string, password: string) => {
//     if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
//       setUser({
//         id: 'admin',
//         name: 'Administrador',
//         email: ADMIN_EMAIL,
//         addresses: [],
//         isAdmin: true,
//       });
//       return;
//     }

//     // Simulação de login para usuários normais
//     const mockUser: User = {
//       id: '1',
//       name: 'Usuário Teste',
//       email,
//       addresses: [],
//       isAdmin: false,
//     };
//     setUser(mockUser);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   const register = async (userData: RegisterData) => {
//     const newUser: User = {
//       id: Math.random().toString(),
//       name: userData.name,
//       email: userData.email,
//       addresses: [userData.address],
//       isAdmin: false,
//     };
//     setUser(newUser);
//   };

//   const updateProfile = async (data: Partial<User>) => {
//     if (user) {
//       setUser({ ...user, ...data });
//     }
//   };

//   const addAddress = async (address: Address) => {
//     if (user) {
//       setUser({
//         ...user,
//         addresses: [...user.addresses, address],
//       });
//     }
//   };

//   const updateAddress = async (index: number, address: Address) => {
//     if (user) {
//       const newAddresses = [...user.addresses];
//       newAddresses[index] = address;
//       setUser({
//         ...user,
//         addresses: newAddresses,
//       });
//     }
//   };

//   const deleteAddress = async (index: number) => {
//     if (user) {
//       setUser({
//         ...user,
//         addresses: user.addresses.filter((_, i) => i !== index),
//       });
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//         register,
//         updateProfile,
//         addAddress,
//         updateAddress,
//         deleteAddress,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType, RegisterData, Address } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_EMAIL = 'admin@velasaromaticas.com';
const ADMIN_PASSWORD = 'admin123';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('authUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('authUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('authUser');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminUser: User = {
        id: 'admin',
        name: 'Administrador',
        email: ADMIN_EMAIL,
        addresses: [],
        isAdmin: true,
      };
      setUser(adminUser);
      return;
    }

    // Simulação de login para usuários normais
    const mockUser: User = {
      id: '1',
      name: 'Usuário Teste',
      email,
      addresses: [],
      isAdmin: false,
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser'); // Remove o usuário armazenado
  };

  const register = async (userData: RegisterData) => {
    const newUser: User = {
      id: Math.random().toString(),
      name: userData.name,
      email: userData.email,
      addresses: [userData.address],
      isAdmin: false,
    };
    setUser(newUser);
  };

  const updateProfile = async (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
    }
  };

  const addAddress = async (address: Address) => {
    if (user) {
      const updatedUser = {
        ...user,
        addresses: [...user.addresses, address],
      };
      setUser(updatedUser);
    }
  };

  const updateAddress = async (index: number, address: Address) => {
    if (user) {
      const updatedAddresses = [...user.addresses];
      updatedAddresses[index] = address;
      const updatedUser = {
        ...user,
        addresses: updatedAddresses,
      };
      setUser(updatedUser);
    }
  };

  const deleteAddress = async (index: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        addresses: user.addresses.filter((_, i) => i !== index),
      };
      setUser(updatedUser);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        updateProfile,
        addAddress,
        updateAddress,
        deleteAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
