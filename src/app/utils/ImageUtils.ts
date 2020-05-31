export function getAliasImage(url: string, type?: string) {
    const parts = url.split(".");
    const imagePath = url.substring(0, url.length - parts[parts.length - 1].length - 1);

    return imagePath + "-original." + parts[parts.length - 1];
}
