import Select from './Select.jsx'
import React from 'react'

//èœŹé©Œćł°
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

const emoji = ['đ§','đ€','đ','đ„','đ§','đ­','đŠ','đ„ź','đŁ','đ','đœ','đ','đ','đ„','đč','đ„œ','đ°','â','đŠ','đ°','đȘ','đž']

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boxArray:['đ§','đ€','đ'],
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
            alert('æ°éć·ČèŸŸäžéïŒ')
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
            alert('äžèœćšćć°äșïŒ')
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
                    <button onClick={this.mineBox} style={{marginRight:'10px'}}>ćć°æ°é</button>
                    <button onClick={this.addBox}>ćąć æ°é</button>
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
