import axios from 'axios';
// 获取远端图片

export default function downloadImg(imgUrl) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: '/api/img',
            data: { img: imgUrl },
            responseType: 'blob',
        }).then((response) => {
            console.log('aaaa')
            if (response.status == 200) {
                console.log(window.URL.createObjectURL(response.data))
                resolve(window.URL.createObjectURL(response.data))
            }
            reject(`download image failed, status:${response.status}`)
        }).catch((error) => {
            reject(error)
        })
    })

}

//   (async function(){
//     await downloadImg("https://bkimg.cdn.bcebos.com/pic/34fae6cd7b899e51cf0f2d3741a7d933c8950d0b?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg")
//   })()