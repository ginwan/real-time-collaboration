
import Image from "next/image";
import ProtectedRoute from "./components/ProtectedRoute";
import Message from "./components/Message";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-end p-12">
      {/* <ProtectedRoute>
        {process.env.NEXT_PUBLIC_FIREBASE_API_KEY}
      </ProtectedRoute> */}
      <Message />
    </main>
  );
}
