import React, { useState } from 'react';
import { Space, Table, Drawer, Input, Button } from 'antd';
import type { TableProps } from 'antd';
import style from './style/allStudents.module.css';
import { SearchOutlined } from '@ant-design/icons';
const { Search } = Input;
type ColumnsType<T extends object> = TableProps<T>['columns'];
interface DataType {
  key: string;
  school: string;
  name: string;
  major: string;
  area: string;
  time: string;
  pass: string;
  level: string;
  sex: string;
  email: string;
  account: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    major: 'Computer Science',
    school: 'Stanford University',
    area: 'New York',
    time: '2022-01-01',
    pass: 'Yes',
    level: 'Undergraduate',
    sex: 'Male',
    email: 'john.brown@gmail.com',
    account: 'john.brown',
  },
  {
    key: '2',
    name: 'Jane Doe',
    major: 'Mathematics',
    school: 'Harvard University',
    area: 'Boston',
    time: '2022-01-02',
    pass: 'No',
    level: 'Undergraduate',
    sex: 'Female',
    email: 'jane.doe@gmail.com',
    account: 'jane.doe',
  },
  {
    key: '3',
    name: 'Tom Smith',
    major: 'Physics',
    school: 'Yale University',
    area: 'New Hampshire',
    time: '2022-01-03',
    pass: 'Yes',
    level: 'Undergraduate',
    sex: 'Male',
    email: 'tom.smith@gmail.com',
    account: 'tom.smith',
  },
  {
    key: '4',
    name: 'Mary Johnson',
    major: 'Chemistry',
    school: 'Princeton University',
    area: 'Chicago',
    time: '2022-01-04',
    pass: 'No',
    level: 'Undergraduate',
    sex: 'Female',
    email: 'mary.johnson@gmail.com',
    account: 'mary.johnson',
  },

];

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
   
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      render: (text) => {
        if (text === 'Male') {
          return <span className={style.male}>男</span>;
        } else {
          return <span className={style.female}>女</span>;
        }
      }
    },
    {
      title: '专业',
      dataIndex: 'major',
      key: 'major',
    },
    {
      title: '报考等级',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: '报考时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a onClick={showDrawer}>查看更多</a>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div style={{ marginBottom: '10px' }} >
        <h2 style={{ marginBottom: '10px' }}>特定筛选</h2>
        <Space.Compact>
          <Search addonBefore="姓名" placeholder="请输入姓名" allowClear className={style.input} />
          <Search addonBefore="账号" placeholder="请输入账号" allowClear className={style.input}/>
        </Space.Compact>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <h2 style={{ marginBottom: '10px' }}>条件筛选(不填不进入筛选条件)</h2>
        <div>
          <Input defaultValue="" addonBefore="专业" placeholder="请输入专业" allowClear className={style.input}/>
          <Input defaultValue="" addonBefore="性别" placeholder="请输入性别" allowClear className={style.input} />
          <Input defaultValue="" addonBefore="时间" placeholder="请输入时间" allowClear className={style.input} />
          <Input defaultValue="" addonBefore="报考等级" placeholder="请输入报考等级" allowClear className={style.input} />
          <Input defaultValue="" addonBefore="通过" placeholder="请输入是否通过" allowClear className={style.input} />
          <Button className={style.input} style={{ width: '100px' }}><SearchOutlined />搜索</Button>
          </div>
      </div>
      <Table columns={columns} pagination={{ position: ['bottomCenter'] }} dataSource={data} />
      <Drawer title="学生详情" onClose={onClose} open={open}>
        <table className={style.table}>
          <tbody>
            <tr>
              <td>姓名:</td>
              <td>{data[0].name}</td>
            </tr>
            <tr>
              <td>学校:</td>
              <td>{data[0].school}</td>
            </tr>
            <tr>
              <td>专业:</td>
              <td>{data[0].major}</td>
            </tr>
            <tr>
              <td>地区:</td>
              <td>{data[0].area}</td>
            </tr>
            <tr>
              <td>报考时间:</td>
              <td>{data[0].time}</td>
            </tr>
            <tr>
              <td>是否通过:</td>
              <td>{data[0].pass}</td>
            </tr>
            <tr>
              <td>考试等级:</td>
              <td>{data[0].level}</td>
            </tr>
            <tr>
              <td>性别:</td>
              <td>{data[0].sex}</td>
            </tr>
            <tr>
              <td>邮箱:</td>
              <td>{data[0].email}</td>
            </tr>
            <tr>
              <td>账号:</td>
              <td>{data[0].account}</td>
            </tr>
          </tbody>
        </table>
      </Drawer>
    </div>
  );
};

export default App;