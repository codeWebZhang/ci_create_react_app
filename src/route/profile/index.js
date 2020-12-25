import React, { useEffect, useState } from "react";
import { Upload, Icon, message } from 'antd';
import _ from 'lodash';
import styles from './index.module.less';
import img from '../../images/profile.jpeg';
import { upload } from '../../api';
export default function Profile() {

    const [profileImg, setProImg] = useState();

    const onchange = (a, b, c) => {
    }

    const doImgUpload = (options) => {
        const { onSuccess, onError, file, onProgress } = options;
        const formData = new FormData();
        formData.append('file', file);//名字和后端接口名字对应
        upload(formData)
            .then((res) => {
                const { data } = res;
                if (!_.isEmpty(data['filesUrl'])) {
                    setProImg(data['filesUrl'][0])
                }
                console.log('smyhvae doImgUpload:', data);
            })
            .catch((e) => {
                // console.log('smyhvae 图片上传失败:' + JSON.stringify(e || ''));
                // message.error('图片上传失败，请重试');
            });
    };

    return (
        <div className={styles.root}>
            <div>
                profile
                <img src={`/public${profileImg}`} alt='暂无图片' />
            </div>
            <Upload
                customRequest={doImgUpload}
                onChange={onchange}
            >
                <div className={styles.profileImg}>
                    <img src={img} />
                </div>
            </Upload>
        </div>
    )
}