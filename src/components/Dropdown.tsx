import * as React from 'react'
import styled from 'styled-components'

type Props = {
    items: { text: string, value: string }[];
    onClick: (language: string) => void;
    value: string;
}

type DropdownProps = {
    toggled: boolean;
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: auto;
    background: red;
`
const Display = styled.div`
    padding: 10px;
    font-weight: 500;
`
const DropdownPanel = styled.ul<DropdownProps>`
    position: absolute;
    top: 50px;
    left: 0;
    display: ${(props) => props.toggled ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    padding: 0;
`
const DropdownItem = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: #CDCDCD;
`

const Dropdown: React.FC<Props> = ({ items, onClick, value }) => {
    const [toggled, setToggled] = React.useState(false);

    const handleToggle = React.useCallback(() => {
        setToggled(!toggled);
    }, [toggled]);

    const handleClick = React.useCallback((language: string) => {
        if (onClick) { onClick(language); }
        setToggled(false)
    }, []);

    return (
        <Wrapper>
            <Display onClick={handleToggle}>
                {items.filter(x => x.value == value)[0].text}
            </Display>
            <DropdownPanel toggled={toggled}>
                {items.map((item) => (
                    <DropdownItem onClick={() => handleClick(item.value)}>{item.text}</DropdownItem>
                ))}
            </DropdownPanel>
        </Wrapper>
    )
}

export default Dropdown
