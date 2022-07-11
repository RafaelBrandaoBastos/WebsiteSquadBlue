import TabsProvider from './contexts/TabsProvider';
import Card from './components/containers/Card/Card';
import Header from "./components/containers/Header/Header";

function App() {
    return (
            <TabsProvider>
                <Header/>
                <Card/>
            </TabsProvider>
    
    );
}

export default App;
