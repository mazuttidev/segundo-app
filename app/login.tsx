import { useAuth } from '@/contexts/auth';
import { Redirect } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
    const { isLoggedIn } = useAuth();

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
            <Text>Edit app/index.tsx to edit this screen.</Text>
        </View>
    );
}
