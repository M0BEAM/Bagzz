import { StatusBar } from 'expo-status-bar';
import Navbar from './components/Navbar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from 'nativewind';
import TabRouter from './components/tabRouter';
import { SheetManager, SheetProvider } from 'react-native-actions-sheet';
import { Button } from 'react-native';
function App() {
  const { colorScheme } = useColorScheme();
  return (
    <GestureHandlerRootView className="dark:bg-gray-900" style={{ flex: 1 }}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <Navbar />
        <TabRouter />
    </GestureHandlerRootView>
  );
}


export default App;