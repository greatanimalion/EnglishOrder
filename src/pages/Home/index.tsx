import { Link, Outlet } from 'react-router-dom';
import style from './style/index.module.css';
import Logo from '@/components/Logo'
import { useLocation } from 'react-router-dom';
import useUserStore from '@/store/useUserStore';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Home = () => {
 if(useLocation().pathname === '/')window.location.href = '/school';
  const userStore = useUserStore();
  if (userStore.userInfor.id!=='') {
    console.log(userStore.userInfor);
    
  }
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
          {userStore.userInfor.id ==='' 
          ?<Link to='/login'><div className={style.div}>登录</div></Link>
          :<Link to='/person'><div className={style.div} style={{padding:'5px'}}> <Avatar size={35} icon={<UserOutlined />} /></div></Link>}
        </div>

      </nav>
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  )
};

export default Home;