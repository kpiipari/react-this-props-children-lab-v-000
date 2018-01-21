import React from 'react'

export default class ThemedDecorations extends React.Component {
    render() {
        const childrenWithExtraPop = React.Children.map(this.props.children, child => {
            return (
                <div className="heaven">{child}</div>
            );
        });
        return (
            <div className="themed-decorations">
                {childrenWithExtraPop}
            </div>
        )
    }
}
