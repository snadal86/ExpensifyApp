//HOC - Higher Order Component
//A component (HOC) that renders another component
// Goal -> Reuse code
// Render hijacking
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is privat info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated && <p>You need to be authenticated to see this component</p>}
            {props.isAuthenticated && <WrappedComponent {...props}/> }
        </div>
    )
}

// requireAuthentication


const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'))