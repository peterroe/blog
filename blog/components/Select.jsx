import React from 'react'

export default class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value[0]
        }
        this.handChange = this.handChange.bind(this)
    }
    handChange(event) {
        this.props.setCssData(this.props.title,event.target.value)
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return (
            <div>
                {this.props.title}：
                <select value={this.state.value} onChange={this.handChange}>
                    {
                        this.props.value.map((item,index) => {
                            return (
                                <option value={item} key={index}>
                                    {item}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
};

