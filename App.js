import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/Navigation/TabNav';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <TabNav />
      </AuthProvider>
    </NavigationContainer>
  );
}