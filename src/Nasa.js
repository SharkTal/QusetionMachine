import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

const Trivia = () => {
    const [ques, setQues] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const getNewQ = () => {
        setCount(count + 1);
    }

    React.useEffect(
        () => {
            fetch('https://opentdb.com/api.php?amount=100')
                .then(res => res.json())
                .then(resData => {
                    console.log(resData);
                    setQues(resData.results)
                })
        }, [count]
    )

    const columns = [
        {
            title:'category',
            dataIndex:'category'
        },
        {
            title: 'question',
            dataIndex: 'question'
        },
    ]

    return (
        <div>
            <Table columns={columns} dataSource={ques} />
            <br />
            <button onClick={getNewQ}>New Q</button>
        </div>
    )

}

export default Trivia;