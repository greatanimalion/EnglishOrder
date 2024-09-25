import { useNavigate } from 'react-router-dom';
import API from '@/servic/login';
import style from './index.module.css';
import { useState } from 'react';
import { message } from 'antd';
import useUserStore from '@/store/useUserStore'
import loginImg from '@/assets/img/login.jpg'
const login = () => {
    const userStore=useUserStore();
    const Navigate = useNavigate();
    const [account, setAaccount] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    function toggleForm() {
        document.getElementById('login-form')!.classList.toggle(style.active);
        document.getElementById('register-form')!.classList.toggle(style.active);
    }
    const login = async () => {
        if(!account ||!password)return message.error({content:'用户名或密码不能为空'})
        try {
            let result = await API.login({ account, password, code: '123456' });
            console.log(result);
            userStore.setUserInfor(result.data.result)
            Navigate('/home')
        } catch (error: any) {
            if (error.status === 400) message.error({
                content: '登录失败，请检查用户名或密码是否正确',
            });
            else message.error({
                content: '服务器出错',
            });
        }
    }
    return <>
        <img className={style.img} src={loginImg} alt="" />
        <div className={style.body}>
            <div className={style.container}>
                <div id="login-form" className={style['form-container'] + " " + style.active}>
                    <h2>登录</h2>
                    <input  onChange={(e) => { setAaccount(e.target.value) }} className={style.input} type="text" placeholder="用户名/邮箱" required />
                    <input onChange={(e) => { setPassword(e.target.value) }} className={style.input} type="password" placeholder="密码" required />
                    <button className={style.button} onClick={login} >登录</button>
                    <a style={{ color: '#939393', cursor: 'pointer' }} >忘记密码?</a>
                    <hr />
                    <div className={style['register-link']}>
                        <p>还没有账户？<a onClick={toggleForm} style={{ cursor: 'pointer' }}>注册</a></p>
                    </div>
                </div>
                <div id="register-form" className={style['form-container']}>
                    <h2>创建新账户</h2>
                        <input className={style.input} type="text" placeholder="用户名" required />
                        <input className={style.input} type="email" placeholder="邮箱" required />
                        <input className={style.input} type="password" placeholder="密码" required />
                        <input className={style.input} type="password" placeholder="确认密码" required />
                        <button className={style.button}>注册</button>
                        <div className={style['register-link']}>
                            <p>已有账户？<a href="#" onClick={toggleForm}>登录</a></p>
                        </div>
                </div>

            </div>
        </div>
    </>
}
export default login;