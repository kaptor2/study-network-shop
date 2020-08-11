import React from 'react';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';

type TProps = {}

type TState = {
    hasError: boolean
}

export class ErrorBoundry extends React.Component<TProps, TState> {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return (<ErrorIndicator />);
        }

        return this.props.children;
    }
}