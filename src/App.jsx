import TabsProvider from './contexts/TabsProvider';
import Card from './components/containers/Card/Card';

function App() {
    return (
      
            <TabsProvider>
                <Card/>
            </TabsProvider>
    
    );
}

export default App;
