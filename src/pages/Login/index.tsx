import { useNavigate } from 'react-router-dom';
import style from './index.module.css';
const login = () => {
    const Navigate = useNavigate();
    function showRegisterForm() {
        document.getElementById('login-form')!.classList.remove(style.active);
        document.getElementById('register-form')!.classList.add(style.active);
    }

    function showLoginForm() {
        document.getElementById('register-form')!.classList.remove(style.active);
        document.getElementById('login-form')!.classList.add(style.active);
    }
    const login = () => {
        Navigate('/')
    }
    return <>
        <div className={style.body}>
            <div className={style.container}>
                <div id="login-form" className={style['form-container']+" "+style.active}>
                   <h2>登录</h2>
                    <form>
                        <input className={style.input} type="text" placeholder="用户名/邮箱" required />
                        <input className={style.input} type="password" placeholder="密码" required />
                        <button className={style.button} onClick={login} >登录</button>
                        <a style={{color: '#939393',cursor: 'pointer'}} >忘记密码?</a>
                        <hr />
                        <div className={style['register-link']}>
                            <p>还没有账户？<a onClick={showRegisterForm} style={{cursor: 'pointer'}}>注册</a></p>
                        </div>
                    </form>
                </div>
                <div id="register-form" className={style['form-container']}>
                    <h2>创建新账户</h2>
                    <form>
                        <input className={style.input} type="text" placeholder="用户名" required />
                        <input className={style.input} type="email" placeholder="邮箱" required />
                        <input className={style.input} type="password" placeholder="密码" required />
                        <input className={style.input} type="password" placeholder="确认密码" required />
                        <button  className={style.button}>注册</button>
                        <div className={style['register-link']}>
                            <p>已有账户？<a href="#" onClick={showLoginForm}>登录</a></p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </>
}
export default login;