import RisizeObserver from 'rc-resize-observer'
import React from 'react'
import ReactDOM from 'react-dom'
export default function() {
    return (
        <RisizeObserver
            onResize={() => {
                consoel.log(123)
            }}
        >
            <textarea></textarea>
        </RisizeObserver>
    )
}