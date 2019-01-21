import React from 'react';
import {Table} from 'antd';

class Order extends React.Component{
    render(){
        const columns = [{
            title: 'Tên sản phẩm',
            dataIndex: 'name',
          }, {
            title: 'Mã đơn hàng',
            dataIndex: 'id',
          }, {
            title: 'Địa chỉ nhận hàng',
            dataIndex: 'address',
          }, {
              title: 'Tổng tiền',
              dataIndex: 'priece',
          }
        ];

          const data = [{
            key: '1',
            name: 'John Brown',
            id: 32,
            address: 'New York No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '2',
            name: 'Jim Green',
            id: 42,
            address: 'London No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '3',
            name: 'Joe Black',
            id: 32,
            address: 'Sidney No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '4',
            name: 'Disabled User',
            id: 99,
            address: 'Sidney No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '5',
            name: 'Jim Green',
            id: 42,
            address: 'London No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '6',
            name: 'Joe Black',
            id: 32,
            address: 'Sidney No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '7',
            name: 'Disabled User',
            id: 99,
            address: 'Sidney No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '8',
            name: 'Jim Green',
            id: 42,
            address: 'London No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '9',
            name: 'Joe Black',
            id: 32,
            address: 'Sidney No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '10',
            name: 'Disabled User',
            id: 99,
            address: 'Sidney No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '11',
            name: 'Jim Green',
            id: 42,
            address: 'London No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '12',
            name: 'Joe Black',
            id: 32,
            address: 'Sidney No. 1 Lake Park',
            priece: '100.000 VND',
          }, {
            key: '13',
            name: 'Disabled User',
            id: 99,
            address: 'Sidney No. 1 Lake Park',
            priece: '100.000 VND',
          }
        ];
        return(
            <>
            <div >
            <Table columns={columns} dataSource={data} />
            </div>
            </>
        );
    }
}
export default Order;