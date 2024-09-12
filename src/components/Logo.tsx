import React from 'react';
const logo: React.FC<{title: string,showTitle: boolean}> = ({title,showTitle,}) => {
    return <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height: '50px'}}>
            <img style={{ cursor: 'pointer',width: '30px',borderRadius:'4px' }} src="https://pic1.zhimg.com/v2-df5b877ed4f185c76307195db2a17b51_720w.jpg?source=172ae18b" alt="logo" />
             <span style={{color: 'white', marginLeft:showTitle? '10px': '0px' ,fontSize:showTitle? '14px':'0px' ,transition: 'all 0.1s'}}>{title}</span>
        </div>
    </>
}
export default logo;