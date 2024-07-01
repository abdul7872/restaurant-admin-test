'use client'

import { Button, Form, Input, InputNumber } from "antd"



// export type FormState = typeof initialState;

function RestaurantForm() {

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Form
            title="Restaurant Form:"
            name="restaurantForm"
            onFinish={onFinish}
            style={{ marginTop: 16 }}
            layout={"vertical"}
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

                    <Form.Item label="Description," name="description," rules={[{ required: true, message: 'Please enter restaurant description!' }]}>
                        <Input.TextArea />
                    </Form.Item>
                </div>
            </div>

            <div className="mt-5 flex justify-center">
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