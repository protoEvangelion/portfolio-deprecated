import react from 'react'

function asyncRoute(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    mounted = false;

    state = {
      Component: AsyncComponent.Component
    };

    componentWillMount() {
      if ( this.state.Component === null ) {
        getComponent().then(m => m.default).then(Component => {
         AsyncComponent.Component = Component;
          if ( this.mounted ) {
            this.setState({Component});
          }
        })
      }
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      const {Component} = this.state;

      if ( Component !== null ) {
        return <Component {...this.props} />
      }
      return null; // or <div /> with a loading spinner, etc..
    }
  }
}

export const Home = asyncRoute(() => System.import('./home'));
export const Download = asyncRoute(() => System.import('./download'));
export const Guide = asyncRoute(() => System.import('./guide'));
export const Source = asyncRoute(() => System.import('./source'));
export const License = asyncRoute(() => System.import('./license'));