import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';
import ProTable from '@ant-design/pro-table';


export default (): React.ReactNode => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'Name'
    },{
      title: 'Age',
      dataIndex: 'age',
      key: 'Age'
    }
  ];

  return (
    <PageContainer
      tabList={[
        {
          tab: 'SMS ANALYTICS',
          key: 'base',
        },
        {
          tab: 'APP ANALYTICS',
          key: 'info',
        },
      ]}
    >
      <ProTable
        columns={columns}
        search={false}
      ></ProTable>
    </PageContainer>
  );
};
