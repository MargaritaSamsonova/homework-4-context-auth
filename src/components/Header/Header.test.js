import React from 'react';
import Header from './Header';
import { TestProvider } from '../../contexts/Auth';
import { mount } from 'enzyme';

describe("Хедер c контекстом { isAuthorized: true, email: 'stu@dent.com' }", () => {
  const context = { isAuthorized: true, email: 'stu@dent.com' };
  const wrapper = mount(
      <TestProvider value={context}>
        <Header />
      </TestProvider>
  );

  it('p.t-header-email содержит: stu@dent.com', () => {
    expect(wrapper.find('p.t-header-email').text()).toBe('stu@dent.com');
  });

  it('Хедер содержит button.t-logout', () => {
    expect(wrapper.find('button.t-logout').length).toBe(1);
  });
});

describe('Хедер c контекстом { isAuthorized: false }', () => {
  const context = { isAuthorized: false };
  const wrapper = mount(
    <TestProvider value={context}>
      <Header />
    </TestProvider>
  );

  it('Хедер пустой', () => {
    expect(wrapper.find('.header__content').children().length).toBe(0);
  });
});
