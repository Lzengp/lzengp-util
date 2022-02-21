// 传入日期，获取当前日期的星期, 默认当前时间的星期
export function GetWeek(value: string = '', needDefault: boolean = false) {
    const weekList = ['日', '一', '二', '三', '四', '五', '六']
    const weekName = value ? weekList[new Date(value).getDay()] : needDefault ? weekList[new Date().getDay()] : ''
    return weekName ? '星期' + weekName : ''
}

export const UUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}
