function LoginPage() {
  return (
      <div class="container">
          <div className="d-flex justify-content-center align-items-center vh-100 page">
              {/*<div className="text-center">*/}
              {/*    <h1 className="text-primary">Авторизация</h1>*/}
              {/*    <p>Этот страница для авторизации в приложении.</p>*/}
              {/*</div>*/}

              <form>
                  <img class="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                      <h1 class="h3 mb-3 fw-normal">Авторизация</h1>

                      <div class="form-floating">
                          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                              <label for="floatingInput">Email</label>
                      </div>
                      <div class="form-floating">
                      <input type="password" class="form-control my-2" id="floatingPassword" placeholder="Password"/>
                              <label for="floatingPassword">Пароль</label>
                      </div>

                      <div class="form-check text-start my-3">
                          <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                              <label class="form-check-label" for="flexCheckDefault">
                                  Запомнить меня
                              </label>
                      </div>
                      <button class="btn btn-primary w-100 py-2" type="submit">Войти</button>
                      <p class="mt-5 mb-3 text-body-secondary">&copy; 2020–2025</p>
              </form>
          </div>
      </div>
  );
}

export default LoginPage;