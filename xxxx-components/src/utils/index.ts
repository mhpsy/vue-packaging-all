export const toLine = (value: String) => {
    //驼峰转为-
    return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}
