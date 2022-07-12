import TabsProvider from './contexts/TabsProvider';
import Card from './components/containers/Card/Card';
import Header from "./components/containers/Header/Header";
import {Container} from "./components/containers/Card/cardStyled"

function App() {
    return (
            <TabsProvider>
                <Container>
                <Header/>
                <Card/>
                </Container>
            </TabsProvider>
    
    );
}

export default App;
