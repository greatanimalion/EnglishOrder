import { Link, Outlet } from 'react-router-dom';
import style from './style/index.module.css';
import Logo from '@/components/Logo'
import { useLocation } from 'react-router-dom';

const Home = () => {
 if(useLocation().pathname === '/')window.location.href = '/school';

  return (
    <div className={style.home}>
      <nav>
        <div>
          <Logo title='四六级报考系统' showTitle theme />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '10px',
          width: '30%',
          minWidth: '470px',
        }}>
          <Link to='/home'><div className={style.div}>首页</div></Link>
          <Link to='/school'><div className={style.div}>学校动态</div></Link>
          <Link to='/study'><div className={style.div}>学习资料</div></Link>
          <Link to='/login'><div className={style.div}>登录</div></Link>
        </div>

      </nav>
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  )
};

export default Home;