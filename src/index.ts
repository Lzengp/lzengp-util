export function GetWeek(value: string = '', needDefault: boolean = false) {
    const weekList = ['日', '一', '二', '三', '四', '五', '六']
    const weekName = value ? weekList[new Date(value).getDay()] : needDefault ? weekList[new Date().getDay()] : ''
    return weekName ? '星期' + weekName : ''
}

export function duplicateRemoval(arr: Array<{}> = [], field: string) {
    const obj: any = {}
    return arr.reduce((cur: any, next: any, index: number) => {
        if (!obj[next[field]]) {
            obj[next[field]] = true
            cur.push(next)
        }
        return cur
    }, [])
}
