import React from 'react';
//accept prop named tabs= [array of {name: 'name', content: 'content'}]

//tabs prop used to generate row of buttons
//use this.tabs.name = text of button

//onClick, opens tab
//shows a section underneath buttons row
//section contains this.tabs.content = content

//show first tab by default

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex: 0
    }
    handleButtonClick(index) {
        this.setState({ currentTabIndex: index })
    }
    renderButtons() {
        return (
            this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        )))
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex] 
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }
    render () {
        return (
        <div>
            {this.renderButtons()}
            {!!this.props.tabs.length && this.renderContent()}
        </div>
        )
    }
}

export default Tabs;