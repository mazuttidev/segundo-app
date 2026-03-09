import { useAuth } from '@/contexts/auth';
import { Redirect } from 'expo-router';
import { Button, View } from 'react-native';

export default function Index() {
    const { isLoggedIn, login } = useAuth();

    if (isLoggedIn) {
        return <Redirect href="/" />;
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button onPress={() => login()} title="Logar" />
        </View>
    );
}
