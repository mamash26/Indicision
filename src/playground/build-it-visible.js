class VisibiltyToggle extends React.Component {
    constructor(props) {
        super(props)
        this.hadnleToggleVisibility = this.hadnleToggleVisibility.bind(this)
        this.state = {
            visibilty: false
        }
    }
    hadnleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibilty: !prevState.visibilty
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick={this.hadnleToggleVisibility}>
                    {this.state.visibilty ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibilty && (
                    <div>
                        <p>some message</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibiltyToggle />, document.getElementById('app'))
// console.log('build-it-visible.js is running')
// let visibilty = false

// const showDetails = () => {
//     visibilty = !visibilty
//     render()
// }
// const render = () => {
//     const template = (
//         <div>
//         <h1>Visibilty Toggle</h1>
//         <button onClick={showDetails}>
//             {visibilty ? 'Hide details' : 'Show details'}
//         </button>
//         {visibilty && (
//             <div>
//             <p>some message</p>
//             </div>
//         )}
//         </div>
//     )
    
//     ReactDOM.render(template, appRoot)
// }

// const appRoot = document.getElementById('app');

// render()
