import React from 'react';

function connect(store, WrappedComponent) {
    return class extends React.Component {
        state = store;

        componentDidMount() {
            this.unsubscribe = store.subscribe((newValue) => {this.setState(newValue)});
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        render() {
            const joinedProps = {...this.props, ...this.state};
            return <WrappedComponent {...joinedProps} />;
        }
    };
}

export default connect;