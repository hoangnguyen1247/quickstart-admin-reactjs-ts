import React, { MouseEventHandler } from "react";
import classNames from "classnames";
import Img from "react-image";
import { 
    Fade,
} from "reactstrap";

const ImageLoader = (
    {
        src,
        alt,
        width, 
        height, 
        circle = false, 
        className = "", 
        id, 
        onClick,
    }) => {

    return(
        <img
            src={src || `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUQBxMWFRUXFhYYGBcVFxYbFhUWFxgYGhgXFhgaHSggGB0lHhYXJTEhJSkvLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADcQAQABAwICCAIIBgMAAAAAAAABAgMRBAUhMRJBUWFxgZGhEzMGIzJyscHw8RUiJEJi0SU0Uv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNuGrjR2YqmM5nGASRX2d40tz7eafFNt3rV2PqqonwkGY1379uxRm7OPKVde3yzT8mmZ8eEAtRF27VTq9P0qoxOZiYhKAAAAAAAAAAAAAAAAAAABQ7zf1NvVzTFUxTiJiI4friC6u37NmPraojxlT7/d6V6minqjPnP7PdLs134kVX6o5xOOcy0x/Wb13dL2p/YE/+Daeq1HOJxxx2ol3Zb1E5sVRPtK31eop0tia6+OOrvRtu3KNZXNNUYnn3Arvibpo/tdKY7/5o9Xn8Q093/tWqZ744S6Fpu6Wxe+ZTE/j6ggbdqNBZzFqqYzjhV1ea0prprj+SYnwmJVt7ZLFXy5mn3hCubTq9Pxs1ROOycT6A6AUuzarU39T0a6sxETM59uK6AAAAAAAAAAAAAAAAAU/0htZoprjwnzXCLudr42hqjsjPoDXp9V/xHTnnFMx5xwj8kH6PWs3Kq56ox682q5M2dlpj/3VM+Ufss9mtRa0ETPXmQS79mi/amm5ylH0egs6OZmiZz2z1KzcN1qqvxGmnhTOfvT/AKYbjulWpp6NnhHX2zP+gX9u5RdozbnMNOt1lrSW83OfVHXKj2/catHaqpxns7pRL965fuTVdnMyDrqKulRE9sIu6XfhaGrvjEefD8Mtmgq6eion/GFd9IbuKaaI8QZfR61i1VXPXOPKFsjbda+DoqY7s+vFJAAAAAAAAAAAAAAAAAJiJjiHiDnd6qpi/Tbo5UUxH69k7TbtpfhxTXE04iI5Zj2U2qu/G1NVXbM+nV7NQOkmxt+sj+Toz92cT6I17Y6J+TVMePFSRwngk2dfqrP2ap8+P4g23tq1dvlHS+7P5c0Kuiu3OK4mPGFrZ3yuPnUxPhOEyjc9FqIxc4d1UAz2arpbdT3Zj3Veu/q946McsxT6c/zXVurT2bEzYxiMzwU2yUTe1011dUTPnP6kHQeAAAAAAAAAAAAAAAAAADC9RNy1NNM4mYmMswHO3tn1Vv7GKvDmg3LVy1P1kTHjDq9VRVXpqotzicTiY556nP2911NMYuTFUdlUQCC9WluvS6ycVWaontt5/Dk23NkzGbNWO6qAUwmXtr1dr+3Mf48USqmqicVxMeMYB5EzHJf7Ba6Olmqf7p9oc+67SWvg6amnsiPXrBtAAAAAAAAAAAAAAAAAAAARre36W3VmKY8+KSARERGIAAY10UXIxciJ8WQCHVtekqriYpxMTnhyTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z`}
            alt={alt || ""}
            style={{width: width, height: height, borderRadius: circle ? "50%" : "0"}}
            className={className}
            id={id}
            onClick={onClick}
        />
    )
};

const ImageUnLoader = (
    {
        src,
        alt,
        width, 
        height, 
        circle = false, 
        className = "", 
        id, 
        onClick,
    }) => {
    
    return(
        <img
            src={src || `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCADgAOADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9qKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==`}
            alt={alt || ""}
            style={{width: width, height: height, borderRadius: circle ? "50%" : "0"}}
            className={className}
            id={id}
            onClick={onClick}
        />
    )
};

type Props = {
    src: string,
    alt: string,
    loaderSrc?: string,
    unloaderSrc?: string,
    width: string,
    height?: string,
    circle?: boolean,
    inline?: boolean,
    thumbnail?: boolean,
    stroke?: boolean,
    className?: string,
    id?: string,
    onClick?: MouseEventHandler,
};

const defaultProps = {

};

export const Image = ({
    src, 
    alt,
    loaderSrc,
    unloaderSrc,
    width = "100%", 
    height = "auto", 
    circle = false, 
    inline = true, 
    thumbnail = true, 
    stroke = false, 
    className = "", 
    id, 
    onClick,
    ...rest
}: Props) => {

    if (thumbnail) {
        return (
            <Img
                src={src}
                style={{width: width, height: height, borderRadius: circle ? "50%" : "0"}}
                className={className}
                id={id}
                loader={
                    <ImageLoader 
                        src={loaderSrc}
                        alt=""
                        width={width} 
                        height={height} 
                        circle={circle} 
                        className={className} 
                        id={id} 
                        onClick={onClick}
                    />
                }
                unloader={
                    <ImageUnLoader
                        src={unloaderSrc}
                        alt=""
                        width={width} 
                        height={height} 
                        circle={circle} 
                        className={className} 
                        id={id} 
                        onClick={onClick}
                    />
                }
                onClick={onClick}
                {...rest}
            />
        )
    }

    return (
        <Img
            src={src}
            style={{width: width, height: height, borderRadius: circle ? "50%" : "0"}}
            className={className}
            id={id}
            loader={
                <ImageLoader 
                    src={loaderSrc}
                    alt=""
                    width={width} 
                    height={height} 
                    circle={circle} 
                    className={className} 
                    id={id} 
                    onClick={onClick}
                />
            }
            unloader={
                <ImageUnLoader
                    src={unloaderSrc}
                    alt=""
                    width={width} 
                    height={height} 
                    circle={circle} 
                    className={className} 
                    id={id} 
                    onClick={onClick}
                />
            }
            container={children => {
                return (
                    <Fade 
                        timeout={200} 
                        className={classNames("bg-light justify-content-center align-items-center overflow-hidden", className, { 
                            "d-inline-flex": inline, 
                            "d-flex": !inline,
                            "flex-fill": !inline,
                        })}
                        style={{ width: width, height: height, borderRadius: circle ? "50%" : "0", border: `${stroke ? 4 : 0}px solid #fff` }}
                    >
                        {children}
                    </Fade>
                )
            }}
            onClick={onClick}
            {...rest}
        />
    )
};

Image.defaultProps = defaultProps;
