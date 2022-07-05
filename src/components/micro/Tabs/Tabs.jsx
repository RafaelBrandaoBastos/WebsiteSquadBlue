import {useState} from 'react';
import {Tab, TabGroup} from './tabsStyled';

const options = ['Basic', 'Social', 'Certificates'];

const Tabs = () => {
    const [active, setActive] = useState(options[0]);
    return (
        <>
            <TabGroup>
                {options.map((option) => (
                    <Tab
                        key={option}
                        active={active === option}
                        onClick={() => setActive(option)}
                    >
                        {option}
                    </Tab>
                ))}
            </TabGroup>
        </>
    );
};

export default Tabs;
