import {useContext} from 'react';
import {Tab, TabGroup} from './tabsStyled';
import {TabsContext} from '../../../contexts/TabsProvider';
import FormCertificates from '../../containers/FormCertificates/Form';
import FormBasic from '../../containers/FormBasic/Form';
import FormSocial from '../../containers/FormSocial/Form';
import FormSucess from '../../containers/FormSucess/Form';

const options = ['Basic', 'Social', 'Certificates'];

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useContext(TabsContext);
    const handleToggleTab = (index) => {
        setSelectedTab(index);
    };

    return (
        <>
            <TabGroup className={selectedTab === 3 && "none"}>
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
            {selectedTab === 0 && <FormBasic />}
            {selectedTab === 1 && <FormSocial />}
            {selectedTab === 2 && <FormCertificates />}
            {selectedTab === 3 && <FormSucess />}
        </>
    );
};

export default Tabs;
