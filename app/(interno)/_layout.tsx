import { useAuth } from '@/contexts/auth';
import { Redirect, Stack } from 'expo-router';

export default function RootLayout() {
    const isLoggedIn = useAuth();

    console.log(isLoggedIn);

    if (!isLoggedIn) {
        return <Redirect href="/login" />;
    }

    return <Stack />;
}
