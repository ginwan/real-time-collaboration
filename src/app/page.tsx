import Image from "next/image";
import ProtectedRoute from "./components/ProtectedRoute";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProtectedRoute>
        {process.env.NEXT_PUBLIC_FIREBASE_API_KEY}
      </ProtectedRoute>

    </main>
  );
}
