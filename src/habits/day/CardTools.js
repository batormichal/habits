export function getClassStyle(value) {
    let class_style;
    if (value === 'x') {
        class_style = "result-x"
    } else if (value === '-') {
        class_style = "result--"
    } else if (value === 'v') {
        class_style = "result-v"
    } else if (value === '\\') {
        class_style = "result-slash"
    } else if (value === ',') {
        class_style = "result-part"
    } else {
        class_style = "result-empty"
    }
    return class_style
}
