import { Card, Modal } from "antd";
import { useState } from "react";
import { CETOralTest, CETWritten } from "./CET46";
import style from "../style/index.module.css";
const title = ["CET笔试介绍", "CET口试介绍"]
const index = () => {
  const [open, setOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0)
  const chooseTitle = (e: number) => {
    setCurrentTitle(e)
    setOpen(true)
  }
  return <>
<div className={style.mainImg}></div>
    <section>
      <h2 style={{marginTop:'140px'}}>四六级考试系统</h2>
      <div style={{margin: '30px 0'}}>
        <Card title="CET笔试" extra={<a type="primary" onClick={() => chooseTitle(0)}>more</a>} style={{ width: '100%' }}>
          <p>　CET笔试的考试时间为每年6月和12月；CET口试的考试时间为每年5月和11月，报考口试的考生必须先报考当次相应级别的笔试。
            CET同时设有非英语考试科目，包括：日语四级(CJT4)、日语六级(CJT6)、俄语四级(CRT4)、俄语六级(CRT6)、德语四级(PHD4)、德语六级(PHD6)和法语四级(TFU4)，以上考试科目每年6月开考一次，均为笔试考核，无口试考核。</p>
        </Card>
      </div>
      <div>
        <Card title="CET口试" extra={<a type="primary" onClick={() => chooseTitle(1)}>more</a>} style={{ width: '100%' }}>
          <p>　CET口试每年开考两次，分别于5月和11月举行，具体考试时间我中心将会在每年年初另行通知。目前仅有英语开考对应级别的口试科目，即英语四级口语考试
            （CET-SET4）和英语六级口语考试（CET-SET6）。口语考试采用机考形式，凡已经报考笔试科目的考生均可报考对应级别的口试科目。</p>
        </Card>
      </div>
      <h1 style={{ textAlign: 'center',marginTop: '25px' }}>本网站参全国大学英语四，六级考试官网，更多信息请前往<a style={{ color: "blue", marginLeft: '10px' }} target='_blank' href="https://cet.neea.edu.cn/html1/folder/1608/1178-1.htm">全国大学英语四，六级考试</a></h1>
    </section>
    <Modal
      title={title[currentTitle]}
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1000}
    >
      {currentTitle === 0 ? <CETOralTest /> : <CETWritten />}
    </Modal>
  </>;
};

export default index;