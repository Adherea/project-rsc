"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/dashboard");
    } else {
      setError(data.error || "Login gagal");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" onChange={(e) => setPassword(e.target.value)} value={password} />

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <button onClick={handleLogin} disabled={loading} className="w-full bg-yellow-500 duration-300 hover:cursor-pointer text-white p-2 hover:bg-amber-400 rounded-tr-2xl rounded-bl-2xl disabled:bg-blue-300">
          {loading ? "Logging in..." : "Login"}
        </button>
        <Link href="/">
          <div className="w-full my-2 bg-blue-500 text-white p-2 rounded text-center hover:bg-blue-600 cursor-pointer rounded-tr-2xl rounded-bl-2xl duration-300">Kembali ke Home</div>
        </Link>

        <p className="mt-4 text-center text-sm text-gray-600">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="relative inline-block text-blue-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Daftar disini.
          </Link>
        </p>
      </div>
    </div>
  );
}
