import TabsProvider from './contexts/TabsProvider';
import Card from './components/containers/Card/Card';
import UserDataProvider from './contexts/UserDataProvider';

function App() {
    return (
        <TabsProvider>
            <UserDataProvider>
                <Card />
            </UserDataProvider>
        </TabsProvider>
    );
}

export default App;
