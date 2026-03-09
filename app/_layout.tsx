import { AuthProvider } from '@/contexts/auth';
import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <AuthProvider>
            <Stack />
        </AuthProvider>
    );
}
