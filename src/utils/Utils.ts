export function clearString(value: string)
{
    return value?.replace("&apos;", "'")
                 .replace("&quot;", '"')
                 .replace("&lt;", "<")
                 .replace("&gt;", ">")
                 .replace("&amp;", "&")

}