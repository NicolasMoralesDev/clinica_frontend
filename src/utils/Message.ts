import { message } from "antd";


export const messageLoading = (msg: string, key: string, isLoading: boolean ) => {
     message.loading({content: msg, key: key})
}