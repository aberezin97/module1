import { expect } from 'chai';
import Router from './router';
import Route from './route';
import SigninPage from '../pages/signin/signin.block';
import SignupPage from '../pages/signup/signup.block';
import MessengerPage from '../pages/messenger/messenger.block';

describe('Проверяем получение роута у роутера', () => {
  it('Проверяем что находит существующий роут', () => {
    const router = new Router('.app');

    router
      .use('/', SigninPage)
      .use('/sign-up', SignupPage)
      .use('/messenger', MessengerPage)
      .start();

    const route = router.getRoute('/');

    expect(route instanceof Route).to.eq(true);
  });

  it('Проверяем что не находит несуществующий роут', () => {
    const router = new Router('.app');

    router.start();
    const route = router.getRoute('/does-not-exist');
    console.log(route);

    expect(route).to.eq(undefined);
  })
  
});