export const cleanURL = (url : string) : string => {
    return url.replace(/https{0,}:\/\//, "").replace('\/', "");
}