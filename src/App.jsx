import TabsProvider from './contexts/TabsProvider';
import Card from './components/containers/Card/Card';
import UserDataProvider from './contexts/UserDataProvider';
import Header from './components/containers/Header/Header';
import {Container} from './components/containers/Card/cardStyled';

function App() {
    return (
        <TabsProvider>
            <UserDataProvider>
                <Container>
                    <Header />
                    <Card />
                </Container>
            </UserDataProvider>
        </TabsProvider>
    );
}

export default App;
