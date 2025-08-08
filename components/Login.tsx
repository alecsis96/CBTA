import { auth, provider } from "@/lib/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export default function Login({ user, onLogin, onLogout }: any) {
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      onLogin(result.user);
    } catch (err) {
      setError("Error al iniciar sesión");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    onLogout();
  };

  return (
    <div className="text-center my-8">
      {user ? (
        <>
          <p className="mb-2">Sesión iniciada como <b>{user.displayName}</b></p>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Cerrar sesión</button>
        </>
      ) : (
        <>
          <button onClick={handleLogin} className="bg-[#38761D] text-white px-4 py-2 rounded">Iniciar sesión con Google</button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </>
      )}
    </div>
  );
}