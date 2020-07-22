import React, {Component} from 'react';

class Accordion extends Component {
    static defaultProps = {sections: []}
    state = {
        currentTabIndex: null
    }
    handleButtonClick(index) {
        this.setState({currentTabIndex: index})
    }
    renderButtons(section, idx, currentTabIndex) {      
        return (
            <li className="AccordionButton" key={idx}>
                <button type="button" onClick={() => this.handleButtonClick(idx)}>
                    {section.title}
                </button>
                {(currentTabIndex === idx) &&<p>{section.content}</p>}
            </li>
        )
    }
    render () {
        const {currentTabIndex} = this.state
        const {sections} = this.props
        return (
            <ul className="Accordions">
                {sections.map((section, idx) => 
                    this.renderButtons(section, idx, currentTabIndex)
                )}
            </ul>
        )        
    }
}

export default Accordion;