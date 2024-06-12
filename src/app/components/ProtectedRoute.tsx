'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthProvider';
import { useEffect, ReactNode, FC } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
