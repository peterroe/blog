import Select from './Select.jsx'
import React from 'react'

//转驼峰
function toHump(str) {
    const index = str.indexOf('-')
    if(index == -1) {
        return str   
    } else {
        return str.replace(`-${str[index+1]}`,() => {
           return str[index+1].toUpperCase()
        })
    }
}

const emoji = ['🧊','🤚','🍅','🥒','🧉','🍭','🦞','🥮','🍣','🍄','🌽','🍎','🏅','🥏','🕹','🥽','💰','✒','🦂','🔰','🪔','🕸']

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boxArray:['🧊','🤚','🍅'],
            style: {
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start'
            }
        }
        this.setCssData = this.setCssData.bind(this)
        this.addBox = this.addBox.bind(this)
        this.mineBox = this.mineBox.bind(this)
        this.chooseBox = this.chooseBox.bind(this)
    }
    setCssData(key,value) {
        key = toHump(key)
        let copy = Object.assign({},this.state.style,{[key]:value})
        this.setState({
            style: copy
        })
    }
    addBox() {
        if(this.state.boxArray.length >= 22) {
            alert('数量已达上限！')
            return
        }
        const boxArray = [...this.state.boxArray]
        const len = boxArray.length
        boxArray.push(emoji[len])
        this.setState({
            boxArray: boxArray
        })
    }
    mineBox() {
        if(this.state.boxArray.length <= 0) {
            alert('不能在减少了！')
            return
        }
        const boxArray = [...this.state.boxArray]
        const len = boxArray.length
        boxArray.pop()
        this.setState({
            boxArray: boxArray
        })
    }
    chooseBox() {

    }
    render() {
        return (
            <div>
                <Select title="flex-direction" value={['row','row-reverse','column','column-reverse']} setCssData={this.setCssData}/>
                <Select title="flex-wrap" value={['nowrap','wrap','wrap-reverse']} setCssData={this.setCssData}/>
                <Select title="justify-content" value={['flex-start','flex-end','center','space-between','space-around']} setCssData={this.setCssData}/>
                {/* <Select />
                <Select /> */}
                <div style={{margin:'10px 0'}}>
                    <button onClick={this.mineBox} style={{marginRight:'10px'}}>减少数量</button>
                    <button onClick={this.addBox}>增加数量</button>
                </div>
                <div style={{...this.state.style, ...{height:'300px',background:'skyblue'}}}>
                    {
                        this.state.boxArray.map((item,index) => {
                            return (
                                <div className="flexBox" key={index} onClick={this.chooseBox}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
