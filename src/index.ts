export function GetWeek(value: string = '', needDefault: boolean = false) {
    const weekList = ['日', '一', '二', '三', '四', '五', '六']
    const weekName = value ? weekList[new Date(value).getDay()] : needDefault ? weekList[new Date().getDay()] : ''
    return weekName ? '星期' + weekName : ''
}