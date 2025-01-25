import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from './userSlice';



function ReduxTestComponent1() {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <div className="test1">
            <p>component 1</p>

            <div>
                <h1>Пользователь</h1>
                <p>Имя: {user.name}</p>
                <p>Возраст: {user.age}</p>
            </div>

        </div>
  );
}

export default ReduxTestComponent1;