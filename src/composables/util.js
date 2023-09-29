import { ElNotification } from 'element-plus'

// 消息提示
export function showToast(message, type = "success",dangerouslyUseHTMLString = false){
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration:3000
    })
}
