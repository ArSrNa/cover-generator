# 纯前端生成封面效果

就是实现这样的效果

![](image/image.png)




# 使用

## 安装
````shell
npm i poster-generator
````

## 基本用法
```jsx
import Poster from 'poster-generator';
// 没有注入js，只能手动引入css
import 'poster-generator/dist/index.css';

function App() {
  return (
    <>
      <Poster src='/a8ccb573aeb231c14a84a3c7ea7364431550564.jpg'
        height={350}
        backgroundStyle={{
          backgroundSize: '130vw',
          backgroundPosition: '-69px 5%'
        }}
        test
        content={<Content />} />
    </>
  );
}

function Content() {
  return <div className='content'>
    <h1>强势动力来自</h1>
    <div>
      <div className='content-mask' />
      <span>CNB</span>
    </div>
  </div>
}
```


# demo测试

克隆本仓库

```shell
git clone https://cnb.cool/arsrna/os/cover-generator.git
cd cover-generator
```

安装依赖并启动
```shell
pnpm i
pnpm start
```

访问`http://localhost:5173`查看效果

# 开发

包目录在`packages/Component.tsx`，`packages/index.tsx`是入口文件

`packages/index.module.scss`是样式文件。为防止css选择器冲突，这里使用模块化css，在使用tsx组件的时候，要设置`className={styles.xxx(xxx为class名)}`


# API

| 字段 | 类型 | 是否必填 | 释义 | 默认值 |
|------|------|----------|------|-----------------------------|
| `src` | `string` | 是 | 图片地址 | 无 |
| `content` | `ReactNode` | 否 | 叠层内容 | 无 |
| `contentStyle` | `CSSProperties` | 否 | 叠层内容样式，通过修改 `--text-linear-gradient` 变量可以实现渐变调节 | `{ '--text-linear-gradient': 'linear-gradient(45deg, #89b8eeff 20%, #e0edffff 80%)' }` |
| `backgroundStyle` | `CSSProperties` | 否 | 背景样式，修改 `background` 属性即可更改背景属性 | 无 |
| `height` | `CSSProperties['height']` | 否 | 图片高度 | `300` |
| `scale` | `number` | 否 | 放大比例，防止 `blur` 太高边缘失真问题 | `1.08` |
| `range` | `[number, number]` | 否 | 模糊过渡范围，表示从左到右模糊过渡的阈值 | `[0.2, 0.6]` |
| `filter` | `{ mask?: CSSProperties['filter'], background?: CSSProperties['filter'] }` | 否 | 遮罩和背景的滤镜效果 | `{ mask: 'blur(20px) saturate(1.5)' }` |
| `test` | `boolean` | 否 | 是否启用测试遮罩 | `false` |