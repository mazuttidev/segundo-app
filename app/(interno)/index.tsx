import { useAuth } from '@/contexts/auth';
import { Redirect } from 'expo-router';
import { Button, View } from 'react-native';

export default function Index() {
    const { isLoggedIn, logout } = useAuth();

    if (!isLoggedIn) {
        return <Redirect href="/login" />;
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button onPress={() => logout()} title="Logout" />
        </View>
    );
}
