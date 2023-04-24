import "./App.css";
import {useState} from "react";
import {set, useForm} from "react-hook-form"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

function App() {
    const [error, setError] = useState()
    const [errorOne, setErrorOne] = useState("")
    const [btn, setBtn] = useState(false)
    const [eye, setEye] = useState(false)
    const [eyeTwo, setEyeTwo] = useState(false)
    const handlearrow = () => {
        setEye(!eye)
    }
    const handlearrowTwo = () => {
        setEyeTwo(!eyeTwo)
    }

    function btnOne() {
        if (error !== errorOne) {
            setBtn(true)
        } else if (error === errorOne) {
            setBtn(false)
        } else if (error === "" && errorOne === "") {
            setBtn(true)
        }
    }

    function eyeOne() {
        return
    }

    const {
        register, handleSubmit, formState: {errors},
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="App">
            <div><h4>Авторизация</h4></div>
            <from onSubmit={handleSubmit(onSubmit)}>
                <div className="forms">
                    {errors.name && <span>Введите имя</span>}
                    <input  {...register("name", {required: true, maxLength: 80})} type="text"
                            placeholder="Имя пользовотелья"/>
                    {errors.lastName && <span>Введите фамилию</span>}
                    <input {...register("lastName", {required: true, maxLength: 100})} type="email"
                           placeholder="Адрес электронный почты"/> {
                    btn && <span style={{
                        color: "red", fontSize: "14px"
                    }}>
                        Введите пароль
              </span>}
                    <div style={{display: "flex"}}><input type={!eyeTwo ? "password" : "text"}
                                                          placeholder="Придумаете пароль"
                                                          onChange={(e) => setError(e.target.value)}
                                                          style={{
                                                              border: btn ? "1px solid red" : "", width: "300px"
                                                          }}
                    />
                        <div style={{fontSize: "32px"}} onClick={handlearrowTwo}>                            {eyeTwo ?
                              <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                        </div>
                    </div>
                    <div style={{display: "flex"}}><input type={!eye ? "password" : "text"}
                                                          placeholder="Повторите пароль"
                                                          onChange={(e) => setErrorOne(e.target.value)}
                                                          style={{
                                                              border: btn ? "1px solid red" : "", width: "300px"
                                                          }}
                    />
                        <div style={{fontSize: "32px"}} onClick={handlearrow}>
                            {eye ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                        </div>
                    </div>
                </div>
                <button className="submit" onClick={btnOne}>Войти</button>
                <button className="submit" onClick={handleSubmit(onSubmit)}>Войти</button>
            </from>
        </div>);
}

export default App;