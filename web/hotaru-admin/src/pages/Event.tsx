import React, { FC } from 'react';
import { ColumnsType } from 'antd/es/table';
import {
  Col, Row, Typography, Table, Tag
} from 'antd';
import useSWR from 'swr';
import { IResp, ITable } from '../types';
import Loading from '../components/Loading';

const Event: FC = () => {
  const { data } = useSWR<IResp>('/api/event');
  const columns: ColumnsType<ITable> = [
    {
      title: 'SERVER',
      dataIndex: 'server',
      // eslint-disable-next-line react/display-name
      render(_, record) {
        return (
          <div className="flex items-center text-sm">
            <svg viewBox="0 0 100 100" className="mr-3 block h-12 w-12">
              <use xlinkHref={`#${record.region}`} />
            </svg>
            <div className="whitespace-nowrap">
              <p className="font-semibold">{record.name}</p>
              <p className="text-left text-xs text-gray-600">{record.location}</p>
            </div>
          </div>
        );
      }
    }
  ];
  return (
    <>
      {
        data
          ? (
            <>

            </>
          )
          : <Loading />
      }
    </>
  );
};

export default Event;
