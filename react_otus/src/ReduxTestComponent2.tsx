import { useDispatch } from 'react-redux';
import { setName, setAge } from './userSlice';

function ReduxTestComponent2() {

    const dispatch = useDispatch();

    return (
        <div className="test2">
            <p>component 2</p>

            <div>
                <button onClick={() => dispatch(setName('Петя Иванов'))} type="button" class="btn btn-primary mx-2">Задать имя</button>
                <button onClick={() => dispatch(setAge(30))} type="button" class="btn btn-secondary">Задать возраст</button>
            </div>

        </div>
  );
}

export default ReduxTestComponent2;