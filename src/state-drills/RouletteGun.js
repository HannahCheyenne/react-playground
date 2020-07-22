import React, {Component} from 'react';


class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    state = {
        chamber: null,
        spinningTheChamber: false,
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    handleButtonClick= () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random()*8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
        },2000)
    }
    renderDisplay() {
        const {chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.props
        if(spinningTheChamber) {
            return "spinning the chamber and pulling the trigger!..."
        } else if(chamber === bulletInChamber) {
            return "BANG!!!!"
        } else {
            return "you're safe"
        }        
    }

    render () {  
        return (
            <div className="gunStatus">
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButtonClick}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun;
//num between 1-8
//click button, choose random number

//"you're safe!"
//this.setState({spinningTheChamber: false})
// this.setState({chamber: Math.floor((Math.random()*8)+1)})
