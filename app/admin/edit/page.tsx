'use client';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import styles from '@/app/ui/css/admin.edit.module.css';
import Search from '@/app/ui/css/home.module.css';
import { Button } from '@/app/ui/button';
import Markdown from 'react-markdown';
import { mark_content } from './utils';

export default function EditPage() {
    const [value, setValue] = useState(`Here is some JavaScript code:

~~~js
console.log('It works!')
~~~

![](https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png)

~~~mermaid
graph TD;
    A[开始] --> B["获取当前时间dateTime"]
    B --> C["修改应用版本号"]
    C --> N{是否执行成功}
    N -- 是 --> D["执行 Android打包脚本"]
    N -- 否 --> J["抛出异常"]
    D --> E{"是否使用--official参数"}
    E -- 是 --> F["获取 Git 标签信息"]
    F --> M{是否执行成功}
    M -- 是 --> G["创建或更新 Git 标签"]
    M -- 否 --> J
    H --> I[结束]
    E -- 否 --> H["上传 APK 到 fir.im 
    fir_upload(dateTime)"]
    G--> Z{是否执行成功}
    Z -- 是 --> H
    Z -- 否 --> J
    J --> K[结束]
~~~

`);
    const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~


`;
    return (
        <div className={`${styles.container}`}>
            <h1 className="text-xl">文章编辑</h1>
            <MDEditor value={value} onChange={txt => setValue(txt)} height="100%" />
            {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
            {/* <Markdown>{markdown}</Markdown> */}
            <div className="flex gap-12 mt-4">
                <Button className="bg-stone-500 hover:bg-stone-800 active:bg-stone-600">返回</Button>
                <Button>保存</Button>
            </div>
            <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03f33288989947fc958e437fb2a9cd3d~tplv-k3u1fbpfcp-zoom-1.image" alt="" />
        </div>
    );
}
