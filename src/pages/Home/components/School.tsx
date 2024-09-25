import { MoreOutlined } from '@ant-design/icons';
import style from '../style/school.module.css';
import img from "@/assets/img/a.jpg"
import { Button, Popover } from 'antd';
import { Link } from 'react-router-dom';
const announcement = [
  '注意听力范围',
  '四六级考试注意事项。',
  '2022年1月1日，北京大学迎来了新生入学第一天。',
  '2022年1月1日，北京大学迎来了新生入学第一天。',
  '2022年1月1日，北京大学迎来了新生入学第一天。',
  '2022年1月1日，北京大学迎来了新生入学第一天。',
]
const list = announcement.map((item, index) => {
  return <div className={style.ellipsis} key={index}>
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4291" width="20" height="20"><path d="M1016.986301 371.726027v-4.208219-2.805479c0-1.40274 0-2.805479-1.402739-2.80548 0-1.40274-1.40274-2.805479-1.40274-2.805479 0-1.40274-1.40274-1.40274-1.40274-2.80548s-1.40274-1.40274-1.40274-2.805479-1.40274-1.40274-2.805479-2.805479l-2.805479-2.80548c-1.40274-1.40274-1.40274-1.40274-2.80548-1.40274-1.40274-1.40274-1.40274-1.40274-2.805479-1.402739 0 0-1.40274 0-1.40274-1.40274L582.136986 122.038356c0-40.679452-33.665753-72.942466-72.942465-72.942466-40.679452 0-72.942466 32.263014-72.942466 72.942466L25.249315 342.268493s-1.40274 0-1.40274 1.40274c-1.40274 0-1.40274 1.40274-2.805479 1.40274s-1.40274 1.40274-2.80548 2.805479l-2.805479 2.80548s-1.40274 0-1.40274 1.402739-1.40274 1.40274-1.402739 2.80548-1.40274 1.40274-1.40274 2.805479-1.40274 1.40274-1.40274 2.80548-1.40274 2.805479-1.40274 2.805479v583.539726c0 19.638356 15.430137 35.068493 35.068494 35.068493h939.835616c19.638356 0 35.068493-15.430137 35.068493-35.068493v-575.123288h-1.40274zM468.515068 185.161644c11.221918 7.013699 25.249315 12.624658 40.679453 12.624657 15.430137 0 29.457534-4.208219 40.679452-12.624657l290.367123 152.89863H182.356164l286.158904-152.89863z m478.334247 728.021918h-869.69863v-504.986302h869.69863v504.986302z" fill="#1296db" p-id="4292"></path><path d="M213.216438 534.443836h590.553425c19.638356 0 35.068493-15.430137 35.068493-35.068494s-15.430137-35.068493-35.068493-35.068493H213.216438c-19.638356 0-35.068493 15.430137-35.068493 35.068493s15.430137 35.068493 35.068493 35.068494zM213.216438 868.29589h590.553425c19.638356 0 35.068493-15.430137 35.068493-35.068493s-15.430137-35.068493-35.068493-35.068493H213.216438c-19.638356 0-35.068493 15.430137-35.068493 35.068493s15.430137 35.068493 35.068493 35.068493zM213.216438 713.994521h590.553425c19.638356 0 35.068493-15.430137 35.068493-35.068494s-15.430137-35.068493-35.068493-35.068493H213.216438c-19.638356 0-35.068493 15.430137-35.068493 35.068493s15.430137 35.068493 35.068493 35.068494z" fill="#1296db" p-id="4293"></path></svg>
    {item}
  </div>
})
const muen = () => {
  return <>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button type='text'>关注</Button>
      <Button type='text' style={{ color: 'red' }}>举报</Button>
    </div>

  </>
}
const school = () => {
  return (<>
    <img src="https://img.51miz.com/Element/00/72/18/16/741e5207_E721816_15d124b0.jpg" alt="" style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'blur(8px)',
      position: 'absolute',
    }} />
    <section className={style.container}>
      <div className={style.left}>
        <h2 style={{ padding: 0, fontSize: '21px', color: 'var(--primary-color)', marginBottom: '10px' }}>公告</h2>
        <div>{list}</div>
      </div>
      <div className={style.main}>
        <ul className={style.title}>
          <li>全部动态</li>
          <li>官方动态</li>
          <li>本校动态</li>
          <li>同学动态</li>
        </ul>
        <div>
          <div className={style.content} >
            <img src={img} alt="" />
            <div style={{ width: '100%' }}>
              <div style={{ float: 'right', cursor: 'pointer', zIndex: 999 }}>
                <Popover placement="bottomRight" content={muen()}>
                  <Button type='text' style={{ padding: '0px' }}><MoreOutlined style={{ fontSize: '30px', color: 'var(--primary-color)' }} /></Button>
                </Popover></div>
                <span className={style.name}>无病无灾</span>
              <div className={style.time}>10:57发布</div>
              <div style={{ margin: '10px 0' }} >
                你们好，我是无病无灾，北京大学2022级本科生，目前在学校学习。
                <div>
                <img className={style.img} src="https://ts1.cn.mm.bing.net/th/id/R-C.60f3cc6c9ea74c67accc6e47491ab8a2?rik=pUAD5lH9IIkD2w&riu=http%3a%2f%2fimg.fuxila.com%2fuploads%2f2022%2f11%2f1668571853_637462cd103a7.jpg&ehk=j%2fxhwofWto2Rjk1TmpdrvGdwHxnfDL3TR2RKOIbKG5Q%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
                <div className={style.more}>
                  <div>点赞</div>
                  <div>收藏</div>
                  <div>阅读量</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.content} >
          <img src={img} alt="" />
          <div style={{ width: '100%' }}>
            <div style={{ float: 'right', cursor: 'pointer', zIndex: 999 }}>
              <Popover placement="bottomRight" content={muen()}>
                <Button type='text' style={{ padding: '0px' }}><MoreOutlined style={{ fontSize: '30px', color: 'var(--primary-color)' }} /></Button>
              </Popover></div>
            <span className={style.name}>无病无灾</span>
            <div className={style.time}>10:57发布</div>
            <div style={{ margin: '10px 0' }}>
              你们好，我是无病无灾，北京大学2022级本科生，目前在学校学习。
            </div>
          </div>
        </div>
        </div>

      </div>
      <div className={style.right}>
        <div className={style.myInfor}>
          <img src={img} alt="" />
          <div>
            <p>无病无灾</p>
            <ul>
              <li>朋友：11人</li>
              <li>地区：北京</li>
              <li>学校：北京大学</li>
            </ul>
            <Link to='/publish'><div style={{color: 'rgb(229 178 102)',cursor: 'pointer',lineHeight:'30px'}}>发布动态</div></Link>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default school;