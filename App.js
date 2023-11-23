import React from "react";
import { AuthProvider } from './Context/AuthContext';
import { RidesProvider } from './Context/RidesContext';
import { UsersProvider } from './Context/UserContext'
import AppNav from "./Navigation/AppNav";

export default function App() {


  return (
    <AuthProvider>
      <UsersProvider>
        <RidesProvider>
          <AppNav />
        </RidesProvider>
      </UsersProvider>
    </AuthProvider>
  );
}

