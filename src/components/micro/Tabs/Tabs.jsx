import {useContext} from 'react';
import {Tab, TabGroup} from './tabsStyled';
import {TabsContext} from '../../../contexts/TabsProvider';
import FormBasic from '../../containers/FormBasic/form';
import FormSocial from '../../containers/FormSocial/form';


const options = ['Basic', 'Social', 'Certificates'];

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    const handleToggleTab = (index) => {
        setSelectedTab(index);
    };

    return (
        <>
            <TabGroup>
                {options.map((option, index) => (
                    <Tab
                        disabled={selectedTab < index}
                        className={selectedTab === index && 'active'}
                        key={option}
                        onClick={() => handleToggleTab(index)}
                    >
                        {option}
                    </Tab>
                ))}
            </TabGroup>
            {selectedTab === 0 && <FormBasic/>}
            {selectedTab === 1 && <FormSocial/>}
            {selectedTab === 2 && "a"}
        </>
    );
};

export default Tabs;
