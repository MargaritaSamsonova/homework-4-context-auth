import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (

        <AuthConsumer>
            {({ isAuthorized, email }) => (
                <footer className="footer">
                  <p className="header__title section-title">Footer</p>
                  {
                    isAuthorized ? (
                        <p className="footer-message t-footer">
                          Вы вошли как {email}
                        </p>
                    ) : (
                        <p className="t-footer">Вы гость в этой системе</p>
                    )
                  }
                </footer>
            )}
        </AuthConsumer>
    );
  }
}

export default Footer;
