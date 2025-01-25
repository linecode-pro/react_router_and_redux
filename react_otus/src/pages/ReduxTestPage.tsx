import ReduxTestComponent1 from "../ReduxTestComponent1";
import ReduxTestComponent2 from "../ReduxTestComponent2";

function ReduxTestPage() {
  return (
      <div class="container">
          <div className="d-flex justify-content-center align-items-center vh-100 page">
              <div className="text-center">
                  <h1 className="text-primary">Redux - тест</h1>
                  <p>Этот страница для тестирования Redux в приложении.</p>
                  <p>Здесь представлены два компонента.</p>
                  <p>Один компонент отправляет данные в стор, другой - получает значения из стора и отображает изменения.</p>
                  <ReduxTestComponent1 />
                  <ReduxTestComponent2 />
              </div>
          </div>
      </div>
  );
}

export default ReduxTestPage;