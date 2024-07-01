'use client'
import React from 'react';
import { Table, Tooltip } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { DataType } from '@/app/page';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface Props {
    restaurantList: DataType[]
    onDeleteRestaurant: (key: string) => void,
    onEditRestaurant: (data: DataType) => void
}

function RestaurantList({ restaurantList, onDeleteRestaurant, onEditRestaurant }: Props) {
    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            sorter: (a, b) => a.description.localeCompare(b.description)
        },
        {
            title: 'Address',
            dataIndex: 'address',
            sorter: (a, b) => a.address.localeCompare(b.address)
        },
        {
            title: 'Action',
            dataIndex: '',
            render: (_, data) => {
                return (
                    <div className='flex space-x-2'>
                        <Tooltip title="Edit" arrow={false} className='cursor-pointer'>
                            <EditOutlined onClick={()=>onEditRestaurant(data)} style={{ color: "blue"}} className='text-lg' />
                        </Tooltip>
                        <Tooltip title="Delete" arrow={false} className='cursor-pointer'>
                            <DeleteOutlined onClick={()=>onDeleteRestaurant(data?.key)} style={{ color: "red"}} className='text-lg' />
                        </Tooltip>
                    </div>
                )
            }
        },
    ];

    return (
        <div>
            <h1 className="my-2 text-lg lg:text-2xl text-slate-600">Restaurant List</h1>

            <Table
                columns={columns}
                dataSource={restaurantList}
                showSorterTooltip={false}
                tableLayout={'auto'}
            />
        </div>
    )
}

export default RestaurantList