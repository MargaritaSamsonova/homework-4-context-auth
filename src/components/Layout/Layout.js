import React, {Fragment, PureComponent} from 'react';
import './Layout.css';
import SectionTitle from "../SectionTitle";


class Layout extends PureComponent {
  render() {
    const classesForMain = `main ${this.props.header ? 'main--with-header' : ''} ${this.props.footer ? 'main--with-footer': ''}`;
    const { header: Header, footer: Footer } = this.props;

    return (
        <Fragment>
          {!this.props.footer && <Header/>}
          <main className={classesForMain}>
             <SectionTitle className='main__title'>Main</SectionTitle>
            {this.props.children}
          </main>
          {!this.props.header && <Footer/>}
        </Fragment>
    );
  }
}

export default Layout;
