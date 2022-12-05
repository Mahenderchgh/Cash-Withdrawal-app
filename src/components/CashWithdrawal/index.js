// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {Rupees: 2000}

  updateBalance = value => {
    this.setState(prevState => ({Rupees: prevState.Rupees - value}))
  }

  render() {
    const {Rupees} = this.state

    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="title-container">
            <div className="letter-box">{initial}</div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="text">Your Balance</p>
            <div className="rupees-container">
              <p className="rupees">{Rupees}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <div className="bottom-container">
            <p className="bottom-heading">Withdraw</p>
            <p className="text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  denominationDetails={eachDenomination}
                  key={eachDenomination.id}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
