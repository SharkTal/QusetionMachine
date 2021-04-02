import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';

const Trivia = () => {
    const [ques, setQues] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const getNewQ = () => {
        setCount(count + 1);
    }

    React.useEffect(
        () => {
            fetch('https://opentdb.com/api.php?amount=20')
                .then(res => res.json())
                .then(resData => {
                    console.log(resData);
                    setQues(resData.results)
                })
        }, [count]
    )

    const columns = [
        {
            title: 'Category',
            dataIndex: 'category'
        },
        {
            title: 'Question',
            dataIndex: 'question'
        },
        {
            title: 'Difficulty',
            dataIndex: 'difficulty',
        },
        
    ]

    return (
        <div>
            <Table columns={columns} dataSource={ques} />
            <br />
            <Button type="primary" onClick={getNewQ}>New Questions</Button>
        </div>
    )

}

export default Trivia;