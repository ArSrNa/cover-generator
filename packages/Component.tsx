import { CSSProperties, ReactNode } from 'react';
import style from './index.module.scss';

export default function Component(props: {
    /**图片地址 */
    src: string;
    /**叠层内容 */
    content?: ReactNode;
    /**叠层内容样式
     * 
     * 通过修改 --text-linear-gradient 变量可以实现渐变调节
     * 
     * 修改top和left属性可以实现位移
     * */
    contentStyle?: CSSProperties

    /**背景样式
     * 
     * 修改background的属性即可更改背景属性，如图片、位移、大小
     */
    backgroundStyle?: CSSProperties
    /**图片高度，默认300px */
    height?: CSSProperties['height'];

    /**放大，防止blur太高边缘失真问题 */
    scale?: number;
    /**设置过渡范围，表示从左到右模糊过渡的阈值
     * @example 
     * [1, 0.6, 0.2, 0] -> 0%-20% 清晰；20%-60%逐渐清晰；60%-100% 不模糊
     * 
     * 数组四个值表示模糊范围在 [0]和[1]之间，模糊到清晰的过渡在[1]和[2]之间，不模糊的范围在[2]和[3]之间
     */
    range?: [number, number, number, number];
    filter?: {
        /**遮罩filter */
        mask?: CSSProperties['filter']
        /**背景filter */
        background?: CSSProperties['filter']
    };
    /**测试遮罩 */
    test?: boolean
}) {
    const {
        src,
        content,
        backgroundStyle,
        height = 300,
        scale = 1.08,
        range = [1, 0.45, 0.25, 0],
        filter = { mask: `blur(20px) saturate(1.5)` },
        test = false,
        contentStyle = {
            '--text-linear-gradient': `linear-gradient(45deg, #89b8eeff 20%, #e0edffff 80%)`,
        }
    } = props;

    const gradient = `linear-gradient(to left, 
        #00000000 ${range[3] * 100}%, 
        #00000000 ${range[2] * 100}%, 
        #000000ff ${range[1] * 100}%, 
        #000000ff ${range[0] * 100}%)`

    const imgStyle = {
        ...backgroundStyle,
        height,
        "--img-url": `url("${src}")`,
        "--scale": scale,
        "--linear-gradient": gradient,
    } as CSSProperties

    return (<><div className={style.container}>
        <div className={style['img-container']}>
            <div className={style['img-mask']} style={{ ...imgStyle, filter: filter.mask }} />
            <div className={style['img']} style={{ ...imgStyle, filter: filter.background }} />
        </div>
        <div className={style['layer-container']} style={contentStyle as CSSProperties}>
            {content}
        </div>
    </div>
        {test && <div className={style['test-mask']} style={{ "--linear-gradient": gradient } as CSSProperties} />}
    </>)
}