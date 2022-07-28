import React, {useEffect} from "react";
import Layout from "@theme/Layout";
import {useRequest} from "ahooks";
import {Button, Spin} from "antd";


export default function KFC(){

    const request = ()=>{
        return fetch("/kfc-api/api/index").then(response => {
            return response.text();
        })
    };
    const { data, loading, run, refresh } = useRequest(request, {
        manual: true,
    });
    useEffect(()=>{
        run();
    },[])
    return (
        <Layout title="Hello" description="Hello React Page">
            <div className={'container mx-auto'}>
                <div className={`bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-10`}>
                    {
                        loading ? <Spin size="large" /> : <>{ data }</>
                    }
                </div>
                <div className={`flex justify-center`}>
                    <Button onClick={refresh} type={'primary'} className={`mx-auto`}>换一句</Button>
                </div>
            </div>
        </Layout>

    )
}
