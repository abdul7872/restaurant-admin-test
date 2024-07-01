'use client'

import { DataType } from "@/app/page";
import { Button, Form, Input } from "antd"
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
    editData: DataType | undefined
    setRestaurantList: Dispatch<SetStateAction<DataType[]>>
}

function RestaurantForm( { setRestaurantList, editData }: Props ) {

    const [form] = Form.useForm<DataType>();

    useEffect(()=>{
        if(editData?.key){
            form.setFieldsValue(editData);
        }
    }, [editData])

    const onFinish = (values: any) => {
        if(editData?.key){
            setRestaurantList(prev=> prev.map((item) => {
                return item.key === editData.key ? {key: editData?.key, ...values} : item;
            }))
        }else {
            setRestaurantList(prev=> [...prev, {...values, key: Date.now().toString()}])
        }
        form.resetFields();
    };

    return (
        <Form
            name="restaurantForm"
            form={form}
            onFinish={onFinish}
            style={{ marginTop: 16 }}
            layout={"vertical"}
            autoComplete="off"
        >

            <h1 className="text-lg lg:text-2xl text-slate-600">Restaurant Form:</h1>

            <div className="mt-2 flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                <div className='flex-1'>
                    <Form.Item label="Restaurant Name" name="name" rules={[{ required: true, message: 'Please enter restaurant name!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter address!' }, { min: 6, message: 'Address should be minimum characters long!' }]}>
                        <Input.TextArea />
                    </Form.Item>
                </div>

                <div className='flex-1'>
                    <Form.Item
                        name="email"
                        label="E mail"
                        rules={[{ type: 'email', message: 'The input is not valid email!', }, { required: true, message: 'Please input your email!', },]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter restaurant description!' }]}>
                        <Input.TextArea />
                    </Form.Item>
                </div>
            </div>

            <div className="mt-2 flex justify-center">
                <Form.Item noStyle>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    )
}

export default RestaurantForm