import React, {Fragment, PureComponent} from 'react';
import './Layout.css';
import SectionTitle from "../SectionTitle";


class Layout extends PureComponent {
  render() {
    const classesForMain = `main ${this.props.header ? 'main--with-header' : ''} ${this.props.footer ? 'main--with-footer': ''}`;

    return (
        <Fragment>
          {!this.props.footer && this.props.header}
          <main className={classesForMain}>
             <SectionTitle className='main__title'>Main</SectionTitle>
            {this.props.children}
          </main>
          {!this.props.header && this.props.footer}
        </Fragment>
    );
  }
}

export default Layout;
