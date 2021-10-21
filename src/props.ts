export default {
  "ActionSheet": "[ActionSheet文档](https://zarm.design/#/components/action-sheet)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| visible | boolean | false | 是否显示 |\n| spacing | boolean | false | 是否和外部有间距 |\n| destroy | boolean | true | 弹层关闭后是否移除节点 |\n| actions | Action[] | [] | 动作列表 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n| onCancel | () => void | - | 显示取消菜单，点击时触发的回调函数 |\n| cancelText | string | '取消' | 取消菜单的文案 |\n| text | ReactNode | - | 按钮文字 |\n| theme | string | 'default' | 按钮主题，可选值 `default`、`primary`、`danger` |\n| className | string | - | 追加类名 |\n| onClick | () => void | - | 按钮点击后触发的回调函数 |\n\n",
  "ActivityIndicator": "[ActivityIndicator文档](https://zarm.design/#/components/activity-indicator)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| type | string | 'circular' | 可选值 `circular` 圆环状、`spinner` 传统菊花状 |\n| loading | boolean | ture | 是否执行动画 |\n| strokeWidth | number | 5 | 指示器线条宽度 |\n| percent | number | 20 | 填充百分比, 圆环状无动画状态下可用 |\n| size | string | 'md' | 大小，可选值 `md`、`lg` |\n\n",
  "Affix": "[Affix文档](https://zarm.design/#/components/affix)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| offsetTop | number | - | 距离窗口顶部达到指定偏移量后触发 |\n| offsetBottom | number | - | 距离窗口底部达到指定偏移量后触发 |\n| scrollContainer | HTMLElement \\| (() => HTMLElement) \\| Window | window | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 |\n| onChange | (affixed: boolean) => void | - | 固定状态改变时触发的回调函数 |\n\n",
  "BackToTop": "[BackToTop文档](https://zarm.design/#/components/back-totop)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| speed | number | 100 | 每 10 毫秒滑动的距离 |\n| visibleDistance | number | 400 | 离滚动条顶部的可视距离 |\n| scrollContainer | HTMLElement \\| (() => HTMLElement) | window | 设置滚动容器 |\n| onClick | (event?: MouseEvent<HTMLDivElement>) => void | - | 点击后触发的回调函数 |\n\n",
  "Badge": "[Badge文档](https://zarm.design/#/components/badge)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| theme | string | 'danger' | 设置主题，可选值为 `primary`、`success`、`warning`、`danger` |\n| shape | string | 'dot' | 设置形状，可选值为 `dot`、`rect` 、`radius`、`round`、`circle`、`leaf` |\n| text | ReactNode | - | 设置显示的文字 |\n\n",
  "Button": "[Button文档](https://zarm.design/#/components/button)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| theme | string | 'default' | 设置主题，可选值为 `default`、`primary`、`danger` |\n| size | string | 'md' | 设置大小，可选值为 `md`、`lg`、`sm`、`xs` |\n| shape | string | 'radius' | 设置形状，可选值为 `rect`、`radius`、`round`、`circle` |\n| block | boolean | false | 是否块级元素 |\n| ghost | boolean | false | 是否幽灵按钮 |\n| shadow | boolean | false | 是否带阴影 |\n| disabled | boolean | false | 是否禁用 |\n| loading | boolean | false | 是否加载中状态 |\n| icon | ReactNode | - | 设置图标 |\n| onClick | MouseEventHandler<Element> | - | 点击后触发的回调函数 |\n| htmlType | string | 'button' | 设置原生 button 的`type`值，可选值为`button`、`submit`、`reset` |\n| href | string | - | 点击跳转的地址，指定此属性`button`的行为和 a 标签一致 |\n| target | string | - | 规定在何处打开链接文档，相当于 a 标签的`target`属性，`href`属性存在时生效 |\n| mimeType | string | - | 链接中指向的文档的 mime 类型，相当于 a 标签的`type`属性，`href`属性存在时生效 |\n\n",
  "Calendar": "[Calendar文档](https://zarm.design/#/components/calendar)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| value | Date \\| Date[] | - | 值 |\n| defaultValue | Date \\| Date[] | - | 初始值 |\n| min | Date | new Date() | 最小可选日期 |\n| max | Date | min + 1 年 | 最大可选日期 |\n| multiple | boolean | false | 是否双选 |\n| dateRender | (date?: Date) => void | (date) => date.getDate() | 日期渲染函数 |\n| disabledDate | (date?: Date) => boolean | () => false | 日期是否禁止选择 |\n| onChange | (value?: Date[]) => void | - | 日期选择发生变化时触发的回调函数 |\n\n",
  "Carousel": "[Carousel文档](https://zarm.design/#/components/carousel)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| direction | string | 'left' | 滑动方向，可选值 `left`、`right`、`up`、`down` |\n| height | number \\| string | 160 | 设置轮播区域高度 |\n| activeIndex | number | 0 | 当前页面的索引 |\n| loop | boolean | false | 是否循环 |\n| swipeable | boolean | true | 是否支持拖拽滑动 |\n| autoPlay | boolean | false | 是否自动轮播 |\n| autoPlayIntervalTime | number | 3000 | 自动轮播时间间隔，单位：毫秒 |\n| moveDistanceRatio | number | 0.5 | 移动距离比例临界点 |\n| moveTimeSpan | number | 300 | 移动时间跨度临界点，单位：毫秒 |\n| animationDuration | number | 500 | 动画执行时间，单位：毫秒 |\n| showPagination | boolean | true | 是否显示分页器 |\n| onChange | (activeIndex?: number) => void | - | 值变化时触发的回调函数 |\n| onChangeEnd | (activeIndex?: number) => void | - | 值变化动画结束后触发的回调函数 |\n\n",
  "Cell": "[Cell文档](https://zarm.design/#/components/cell)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| hasArrow | boolean | false | 是否显示箭头 |\n| icon | ReactNode | - | 设置图标 |\n| title | ReactNode | - | 设置标题区域内容 |\n| description | ReactNode | - | 设置描述区域内容 |\n| help | ReactNode | - | 设置下方提示信息区域内容，通常配合 `Message` 组件使用 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n\n",
  "Checkbox": "[Checkbox文档](https://zarm.design/#/components/checkbox)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| type | string | - | 显示类型，可选值 `button`, `cell` |\n| disabled | boolean | false | 是否禁用 |\n| value | string | number | - | 值 |\n| checked | boolean | - | 当前是否选中 |\n| defaultChecked | boolean | - | 初始是否选中 |\n| indeterminate | boolean | false | 当前是否为未全选状态 |\n| id | string | - | 方便外部带有 for 属性的 label 标签控制当前 checkbox |\n| onChange | (event?: ChangeEvent | - | 值变化时触发的回调函数 |\n| type | string | - | 显示类型，可选值 `button`, `cell` |\n| value | number[] \\| string[] | [] | 选中值 |\n| defaultValue | number[] \\| string[] | [] | 初始选中值 |\n| disabled | boolean | false | 是否禁用 |\n| block | boolean | false | 子项是否为块级元素 |\n| onChange | (values?: number[] \\| string[]) => void | - | 值变化时触发的回调函数 |\n| size | string | 'xs' | 按钮类型时的大小，可选值为 `lg`、`md`、`sm`、`xs` |\n| shape | string | 'radius' | 按钮类型时的形状，可选值 `rect`, `radius`, `round` |\n| ghost | boolean | false | 按钮类型时，选中项样式是否为幽灵按钮 |\n\n",
  "Collapse": "[Collapse文档](https://zarm.design/#/components/collapse)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| multiple | boolean | false | 是否可以同时展开多项 |\n| animated | boolean | false | 是否添加展开动画 |\n| activeKey | string \\| number \\| string[] \\| number[] | [] | 动态更新展开项的索引数组或字符串或数字 |\n| defaultActiveKey | string \\| number \\| string[] \\| number[] | [] | 初始化默认展开项的索引数组或字符串或数字 |\n| onChange | (activeKey?: string \\| number \\| string[] \\| number[]) => void | - | 点击某一项的回调函数，返回选中的项 |\n| title | ReactNode | - | 每一项的名称 |\n| key | string \\| number | - | 对应 activeKey |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (active?: boolean) => void | - | 点击某一项的回调函数 |\n\n",
  "ConfigProvider": "[ConfigProvider文档](https://zarm.design/#/components/config-provider)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| locale | Object | - | 语言包配置，默认为中文，语言包可到 [zarm/lib/config-provider/locale](https://unpkg.com/zarm/lib/config-provider/locale/) 目录下寻找 |\n| theme | 'light' \\| 'dark' | 'light' | 主题模式，光亮主题 和 暗黑主题的切换 |\n| primaryColor | string | '#00bc70' | 品牌标准色 |\n\n",
  "DatePicker": "[DatePicker文档](https://zarm.design/#/components/date-picker)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| value | string \\| Date | - | 值 |\n| defaultValue | string \\| Date | - | 初始值 |\n| mode | string | 'date' | 指定日期选择模式，可选项 `year`, `month`, `date`, `time`, `datetime` |\n| min | string \\| Date | - | 相应 mode 的最小时间 |\n| max | string \\| Date | - | 相应 mode 的最大时间 |\n| minuteStep | number | 1 | 分钟间隔 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (value?: Date) => void | - | 值变化时触发的回调函数 |\n| visible | boolean | false | 是否展示 |\n| title | string | '请选择' | 选择器标题 |\n| cancelText | string | '取消' | 取消栏文字 |\n| okText | string | '确定' | 确定栏文字 |\n| maskClosable | boolean | true | 是否点击遮罩层时关闭，需要和 onCancel 一起使用 |\n| wheelDefaultValue | string \\| Date | - | 滚轮默认停留的日期位置 |\n| onOk | (value?: Date) => void | - | 点击确定时触发的回调函数 |\n| onCancel | () => void | - | 点击取消时触发的回调函数 |\n| mountContainer | HTMLElement | () => HTMLElement | document.body | 指定 DatePicker 挂载的 HTML 节点 |\n| placeholder | string | '请选择' | 输入提示信息 |\n| hasArrow | boolean | true | 是否显示箭头 |\n| format | string | - | 格式化显示值。例：format=\"yyyy 年 MM 月 dd 日\" |\n\n",
  "Drag": "[Drag文档](https://zarm.design/#/components/drag)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| onDragStart | (event?: MouseEvent \\| TouchEvent, dragState?: DragState) => void | - | 触摸/点击 起始时触发的事件 |\n| onDragMove | (event?: MouseEvent \\| TouchEvent, dragState?: DragState) => boolean | - | 拖拽移动时触发的事件 |\n| onDragEnd | (event?: MouseEvent \\| TouchEvent, dragState?: DragState) => void | - | 触摸/点击 结束时触发的事件 |\n| startTime | Date | new Date() | 起始时间 |\n| startX | number | - | 起始点 x 坐标 |\n| startY | number | - | 起始点 y 坐标 |\n| offsetX | number | - | 横向偏移量 |\n| offsetY | number | - | 纵向偏移量 |\n\n",
  "FilePicker": "[FilePicker文档](https://zarm.design/#/components/file-picker)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| accept | string | - | 允许上传的附件格式 |\n| capture | string | - | 唤起的原生应用，可选值：照相机`camera`, 摄像机`camcorder`, 录音`microphone` |\n| multiple | boolean | false | 是否多选 |\n| disabled | boolean | false | 是否禁用 |\n| onBeforeSelect | () => boolean | () => true | 选择前触发的事件 |\n| onChange | (file?: object \\| object[]) => void | - | 值变化时触发的回调函数 |\n\n",
  "Icon": "[Icon文档](https://zarm.design/#/components/icon)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| theme | string | 'default' | 主题，可选值 `default`、`primary`、`success`、`warning`、`danger` |\n| size | string | 'md' | 大小，可选值 `sm`、`md`、`lg` |\n| type | string | - | 图标类型，可选值详见 demo 的基本用法 |\n| component | React.ComponentType<React.SVGProps<SVGSVGElement>> | - | 本地 svg 文件，需配合 viewBox 使用 |\n| viewBox | string | '0 0 32 32' | 自定义 SVG 图标时，用来设置画布的起始坐标及大小 |\n\n",
  "ImagePreview": "[ImagePreview文档](https://zarm.design/#/components/image-preview)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| visible | boolean | false | 是否显示 |\n| minScale | number | 1 | 图片最小缩放比例，1 为最小值 |\n| maxScale | number | 3 | 图片最大缩放比例 |\n| images | Array | - | 图片地址 |\n| activeIndex | number | 0 | 当前展示的图片是第几张，从 0 开始 |\n| showPagination | boolean | true | 是否显示分页器 |\n| onChange | (activeIndex?: number) => void | - | 图片切换时候回调 |\n| onClose | () => void | - | 关闭时候回调 |\n\n",
  "Input": "[Input文档](https://zarm.design/#/components/input)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| type | string | 'text' | 类型，可选值 `text`、`number`、`idcard`、`price`、`password`、`search` |\n| value | number \\| string | - | 值 |\n| defaultValue | number \\| string | - | 初始值 |\n| disabled | boolean | false | 是否禁用 |\n| readOnly | boolean | false | 是否只读 |\n| rows | number | - | 多行文本时的显示行数。type 为 text 类型时有效。 |\n| autoHeight | boolean | false | 是否高度自适应 |\n| maxLength | number | - | 输入字数上限 |\n| showLength | boolean | false | 是否显示输入字数。多行文本（type=\"text\"且包含 rows 属性）时有效。 |\n| clearable | boolean | true | 是否显示清除按钮。多行文本（type=\"text\"且包含 rows 属性）时无效。必须为受控组件（属性包含 value、onChange）时方可生效。 |\n| onChange | (value?: number \\| string) => void | - | 值变化时触发的回调函数 |\n\n",
  "Keyboard": "[Keyboard文档](https://zarm.design/#/components/keyboard)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| type | string | 'number' | 键盘类型，可选值 `number`、`price`、`idcard` |\n| onKeyClick | (key?: string) => void | - | 点击按键时触发的回调函数 |\n| visible | boolean | false | 是否展示 |\n| destroy | boolean | true | 弹层关闭后是否移除节点 |\n\n",
  "Loading": "[Loading文档](https://zarm.design/#/components/loading)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| visible | boolean | false | 是否展示 |\n| content | ReactNode | - | 显示的内容 |\n| stayTime | number | 3000 | 自动关闭前停留的时间（单位：毫秒） |\n| mask | boolean | true | 是否展示遮罩层 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n| afterClose | () => void | - | Loading 隐藏后的回调函数 |\n| mountContainer | HTMLElement | () => HTMLElement | document.body | 指定 Loading 挂载的 HTML 节点 |\n\n",
  "LocaleProvider": "[LocaleProvider文档](https://zarm.design/#/components/locale-provider)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| locale | Object | - | 语言包配置，默认为中文，语言包可到 zarm/lib/locale-provider/locale 目录下寻找 |\n\n",
  "Marquee": "[Marquee文档](https://zarm.design/#/components/marquee)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| direction | string | 'left' | 滚动方向，可选值为`left`、`right`、`up`、`down` |\n| width | number \\| string | - | 容器宽度 |\n| height | number \\| string | - | 容器高度 |\n| loop | boolean | true | 是否循环 |\n| animationDuration | number | 6000 | 动画执行时间（单位：毫秒） |\n| animationDelay | number | 0 | 动画延迟执行时间（单位：毫秒） |\n\n",
  "Mask": "[Mask文档](https://zarm.design/#/components/mask)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| visible | boolean | 否 | false |\n| type | 'normal' \\| 'transparent' | 否 | 'normal' |\n| onClick | MouseEventHandler | 否 | \\  |\n\n",
  "Message": "[Message文档](https://zarm.design/#/components/message)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| theme | string | 'primary' | 主题，可选值 `default`、`primary`、`success`、`warning`、`danger` |\n| size | string | 'md' | 设置大小，可选值为 `md`、`lg` |\n| icon | ReactNode | - | 设置图标 |\n| closable | boolean | false | 是否显示关闭按钮 |\n| hasArrow | boolean | false | 是否显示箭头 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n\n",
  "Modal": "[Modal文档](https://zarm.design/#/components/modal)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| shape | string | 'radius' | 形状，可选值 `rect`、`radius` |\n| visible | boolean | false | 是否显示 |\n| animationType | string | 'fade' | 动画效果，可选值 `fade`, `door`, `flip`, `rotate`, `zoom`,`moveUp`, `moveDown`, `moveLeft`, `moveRight`,`slideUp`, `slideDown`, `slideLeft`, `slideRight` |\n| animationDuration | number | 200 | 动画执行时间（单位：毫秒） |\n| width | string | number | '70%' | 宽度 |\n| mask | boolean | true | 是否展示遮罩层 |\n| maskType | string | 'normal' | 遮罩层的类型，可选值 `transparent`, `normal` |\n| maskClosable | boolean | false | 是否点击遮罩层时关闭，需要和 onCancel 一起使用 |\n| closable | boolean | false | 右上角是否显示关闭按钮，需要和 onCancel 一起使用 |\n| onCancel | () => void | - | 如果 maskClosable 或 closable 为 true，那么点击遮罩或者右上角关闭按钮会调用此函数 |\n| title | ReactNode | - | 标题 |\n| footer | ReactNode | - | 弹窗底部内容 |\n| destroy | boolean | true | 弹层关闭后是否移除节点 |\n| afterOpen | () => void | - | 模态框打开后的回调 |\n| afterClose | () => void | - | 模态框关闭后的回调 |\n| mountContainer | HTMLElement | () => HTMLElement | document.body | 指定 Modal 挂载的 HTML 节点 |\n| title | ReactNode | - | 弹出框的标题 |\n| content | ReactNode | - | 弹出框的内容 |\n| cancelText | ReactNode | '关闭'(Alert)/'取消'(Confirm) | 取消按钮的内容 |\n| okText | ReactNode | '确认' | 确认按钮的内容 |\n| onOk | () => void | - | 点击“确认”后的回调函数(Confirm) |\n| onCancel | () => void | - | 点击“关闭/取消”后的回调函数 |\n\n",
  "NavBar": "[NavBar文档](https://zarm.design/#/components/nav-bar)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| title | ReactNode | - | 标题渲染 |\n| left | ReactNode | - | 导航栏左侧渲染 |\n| right | ReactNode | - | 导航栏右侧渲染 |\n\n",
  "NoticeBar": "[NoticeBar文档](https://zarm.design/#/components/notice-bar)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| theme | string | 'warning' | 主题，可选值 `default`、`primary`、`success`、`warning`、`danger` |\n| icon | ReactNode | - | 设置图标 |\n| closable | boolean | false | 是否显示关闭按钮 |\n| hasArrow | boolean | false | 是否显示箭头 |\n| speed | number | 50 | 滚动时的速度（单位：px/s） |\n| delay | number | 2000 | 开启滚动功能时前后停留的时间（单位：ms） |\n| onClick | () => void | - | 点击后触发的回调函数 |\n\n",
  "Panel": "[Panel文档](https://zarm.design/#/components/panel)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| title | ReactNode | - | 标题渲染 |\n| more | ReactNode | - | 更多渲染 |\n\n",
  "Picker": "[Picker文档](https://zarm.design/#/components/picker)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| dataSource | DataSource | [] | 数据源 |\n| value | string \\| number \\| boolean \\| Array | - | 值 |\n| defaultValue | string \\| number \\| boolean \\| Array | - | 初始值 |\n| wheelDefaultValue | string \\| number \\| boolean \\| Array | - | 滚轮初始停留的位置 |\n| valueMember | string | 'value' | 值字段对应的 key |\n| itemRender | (data?: { [key: string]: string | number | boolean }) => ReactNode | (data) => data.label | 单个选项的展示 |\n| disabled | boolean | false | 是否禁用 |\n| cols | number | Infinity | 级联选择器的级数 |\n| onChange | (selected?: Array<{ [key: string]: string | number | boolean }>) => void | - | 值变化时触发的回调函数 |\n| title | string | '请选择' | 选择器标题 |\n| okText | string | '确定' | 确定栏文字 |\n| cancelText | string | '取消' | 取消栏文字 |\n| maskClosable | boolean | true | 是否点击遮罩层时关闭，需要和 onCancel 一起使用 |\n| destroy | boolean | false | 弹层关闭后是否移除节点 |\n| onOk | (selected?: Array<{ [key: string]: string | number | boolean }>) => void | - | 点击确定时触发的回调函数 |\n| onCancel | () => void | - | 点击取消时触发的回调函数 |\n| mountContainer | HTMLElement | () => HTMLElement | document.body | 指定 Picker 挂载的 HTML 节点 |\n| visible | boolean | false | 是否展示 |\n| placeholder | string | '请选择' | 输入提示信息 |\n| hasArrow | boolean | true | 是否显示箭头 |\n| displayRender | (selected?: Array<{ [key: string]: string | number | boolean }>) => ReactNode | selected => selected.map(item => item.label) | 所选值的展示 |\n\n",
  "Popper": "[Popper文档](https://zarm.design/#/components/popper)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| className | string | - | 气泡层类名追加 |\n| content | ReactNode | - | 显示内容 |\n| hasArrow | boolean | false | 是否显示箭头节点 |\n| destroy | boolean | true | 气泡层关闭后是否移除节点 |\n| mountContainer | HTMLElement | () => HTMLElement | document.body | 指定 Popper 挂载的 HTML 节点 |\n| animationType | string | 'zoomFade' | 可选值 `zoomFade`, `menuSlide`, `fade`, `door`, `flip`, `rotate`, `zoom`,`moveUp`, `moveDown`, `moveLeft`, `moveRight`,`slideUp`, `slideDown`, `slideLeft`, `slideRight` |\n| animationDuration | number | 200 | 动画执行时间（单位：毫秒） |\n| arrowPointAtCenter | boolean | false | 箭头是否指向目标元素中心 |\n| mouseEnterDelay | number | 100 | 鼠标移入显示气泡层的延时时间（单位：毫秒） |\n| mouseLeaveDelay | number | 100 | 鼠标移出隐藏气泡层的延时时间（单位：毫秒） |\n| direction | string | 'top' | 显示方向，可选值 `topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom` |\n| trigger | string | 移动端为'click'  | 触发方式，可选值为：`click` 点击触发状态、`hover` 鼠标经过触发、`focus` 聚焦状态触发、`manual` 受控触发、`contextMenu` 右键触发 |\n| visible | boolean | false | 是否显示，`trigger='manual'` 时有效 |\n| onVisibleChange | (visible?: boolean) => void | () => {} | 显示/隐藏 气泡层触发的事件 |\n\n",
  "Popup": "[Popup文档](https://zarm.design/#/components/popup)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| visible | boolean | false | 是否显示 |\n| direction | string | 'bottom' | 弹出方向，可选值 `top`, `bottom`, `left`, `right`, `center` |\n| animationType | string | 'fade' | 当弹出方向为中间位置（direction=\"center\"）时的动画效果，可选值 `fade`, `door`, `flip`, `rotate`, `zoom`,`moveUp`, `moveDown`, `moveLeft`, `moveRight`,`slideUp`, `slideDown`, `slideLeft`, `slideRight` |\n| animationDuration | number | 200 | 动画执行时间（单位：毫秒） |\n| width | string | number | - | 弹层宽度 |\n| mask | boolean | true | 是否展示遮罩层 |\n| maskType | string | 'normal' | 遮罩层的类型，可选值 `transparent`, `normal` |\n| destroy | boolean | true | 弹层关闭后是否移除节点 |\n| afterOpen | () => void | - | 弹层展示后的回调 |\n| afterClose | () => void | - | 弹层关闭后的回调 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n| onEsc | () => void | - | 点击 Esc 键时触发的回调函数 |\n| mountContainer | HTMLElement | () => HTMLElement | document.body | 指定 Popup 挂载的 HTML 节点 |\n\n",
  "Progress": "[Progress文档](https://zarm.design/#/components/progress)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| theme | string | 'primary' | 主题，可选值 `primary`, `success`, `warning`, `danger` |\n| size | string | 'md' | 大小，可选值 `lg`, `md`, `sm`，number 类型的值，或者任何合法的 css 宽度值 |\n| shape | string | 'line' | 形状，可选值 `line`, `circle`, `semi-circle` |\n| percent | number | 0 | 进度百分比（范围：0 ～ 100） |\n| text | (percent?: number) => ReactNode | (percent) => \\`${percent}%\\` | 进度文本显示 |\n| strokeShape | string | 'round' | 线条形状，可选值 `round`, `rect` |\n| strokeWidth | number | - | 线条粗细，单位: px，不设置则根据大小自动调整 |\n\n",
  "Pull": "[Pull文档](https://zarm.design/#/components/pull)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| refresh | Action | - | 下拉刷新的参数配置 |\n| load | Action | - | 上拉加载的参数配置 |\n| animationDuration | number | 400 | 动画执行时间，单位：毫秒 |\n| stayTime | number | 1000 | 加载成功停留时间 |\n| state | REFRESH_STATE | LOAD_STATE | 0 | 状态枚举 |\n| startDistance | number | 30 | 下拉时的助跑距离，单位：px |\n| distance | number | 30 | 触发距离阀值，单位：px；下拉刷新阀值默认为 30px，上拉加载阀值默认为 0 |\n| render | (refreshState: REFRESH_STATE | LOAD_STATE, percent: number) => ReactNode | - | 各状态渲染的回调函数 |\n| handler | () => void | - | 达到阀值后释放触发的回调函数 |\n| normal | 普通状态 | undefined | - |\n| pull | 下拉状态（未满足刷新条件） | undefined | - |\n| drop | 释放立即刷新（满足刷新条件） | undefined | - |\n| loading | 加载中 | undefined | - |\n| success | 加载成功 | undefined | - |\n| failure | 加载失败 | undefined | - |\n| normal | 普通状态 | undefined | - |\n| abort | 终止状态 | undefined | - |\n| loading | 加载中 | undefined | - |\n| success | 加载成功 | undefined | - |\n| failure | 加载失败 | undefined | - |\n| complete | 加载完成 | undefined | - |\n\n",
  "Radio": "[Radio文档](https://zarm.design/#/components/radio)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| value | string \\| number | - | 值 |\n| checked | boolean | - | 当前是否选中 |\n| defaultChecked | boolean | - | 初始是否选中 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (e: ChangeEvent | - | 值变化时触发的回调函数 |\n| type | string | - | 显示类型，可选值 `button`, `cell` |\n| value | string \\| number | - | 选中值 |\n| defaultValue | string \\| number | - | 初始选中值 |\n| disabled | boolean | false | 是否禁用 |\n| block | boolean | false | 子项是否为块级元素 |\n| onChange | (value?: string \\| number) => void | - | 值变化时触发的回调函数 |\n| size | string | 'xs' | 按钮类型时的大小，可选值为 `lg`、`md`、`sm`、`xs` |\n| shape | string | 'radius' | 按钮类型时的形状，可选值 `rect`, `radius`, `round` |\n| ghost | boolean | false | 按钮类型时，选中项样式是否为幽灵按钮 |\n| compact | boolean | false | 按钮类型时，是否为紧凑模式 |\n\n",
  "Scroller": "[Scroller文档](https://zarm.design/#/components/scroller)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| container | HTMLElement \\| (() => HTMLElement) | window | 设置滚动容器 |\n| onScroll | (scrollTop?: number) => void | - | 滚动时触发的回调函数 |\n\n",
  "SearchBar": "[SearchBar文档](https://zarm.design/#/components/search-bar)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| placeholder | string | '搜索' | 占位符 |\n| value | string | - | 值 |\n| defaultValue | string | - | 初始值 |\n| shape | string | 'radius' | 形状，可选值 `rect`, `radius`, `round` |\n| disabled | boolean | false | 是否禁用 |\n| showCancel | boolean | false | 是否一直展示取消按钮 |\n| cancelText | string | '取消' | 取消按钮显示的内容 |\n| maxLength | number | - | 输入字数上限 |\n| clearable | boolean | true | 是否提供清空输入框功能 |\n| onChange | (value?: string) => void | - | 值变化时触发的回调函数 |\n| onSubmit | (value?: string) => void | - | 提交时触发的回调函数 |\n| onFocus | () => void | - | 获取焦点时触发的回调函数 |\n| onBlur | () => void | - | 失去焦点时触发的回调函数 |\n| onClear | () => void | - | 点击清除按钮时触发的回调函数 |\n| onCancel | () => void | - | 点击取消时触发的回调函数 |\n\n",
  "Slider": "[Slider文档](https://zarm.design/#/components/slider)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| value | number | - | 值 |\n| defaultValue | number | - | 初始值 |\n| min | number | 0 | 最小值 |\n| max | number | 100 | 最大值 |\n| disabled | boolean | false | 是否禁用 |\n| step | number | 1 | 步长 |\n| vertical | boolean | false | 是否为纵向 |\n| showMark | boolean | false | 是否显示标记刻度 |\n| marks | { [key: number]: React.ReactNode } | {} | 自定义标记刻度的渲染展示 |\n| onChange | (value?: number) => void | - | 值变化时触发的回调函数 |\n\n",
  "StackPicker": "[StackPicker文档](https://zarm.design/#/components/stack-picker)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| visible | boolean | false | 是否展示 |\n| dataSource | object[] | [] | 数据源 |\n| defaultValue | string \\| number \\| boolean \\| Array | - | 初始值 |\n| value | string \\| number \\| boolean \\| Array | - | 值 |\n| displayMember | string | 'label' | 键字段对应的 key |\n| valueMember | string | 'value' | 值字段对应的 key |\n| displayRender | (selected?: object) => string | selected => selected.map(item => item.label) | 所选值的展示 |\n| itemRender | (data?: object) => data.label | (data?: object) => data.label | 单个选项的展示 |\n| title | string | '请选择' | 选择器标题 |\n| okText | string | '确定' | 确定栏文字 |\n| cancelText | string | '取消' | 取消栏文字 |\n| maskClosable | boolean | true | 是否点击遮罩层时关闭，需要和 onCancel 一起使用 |\n| onChange | (value: string[]) => void | - | 值变化时触发的回调函数 |\n| onOk | (value: string[]) => void | - | 点击确定时触发的回调函数 |\n| onCancel | () => void | - | 点击取消时触发的回调函数 |\n\n",
  "Stepper": "[Stepper文档](https://zarm.design/#/components/stepper)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| shape | string | 'radius' | 形状，可选值 `rect`, `radius`, `circle` |\n| size | string | 'md' | 大小，可选值 `md`、`lg` |\n| type | string | 'text' | 输入类型，可选值 `text`、`number`、`price`、`tel` |\n| value | number \\| string | - | 值 |\n| defaultValue | number | - | 初始值 |\n| min | number | - | 最小值 |\n| max | number | - | 最大值 |\n| step | number | 1 | 步长 |\n| disabled | boolean | false | 是否禁用 |\n| disableInput | boolean | false | 是否禁用输入框 |\n| onInputChange | (value?: number ｜ string) => void | - | 输入值变化时触发的回调函数 |\n| onChange | (value?: number ｜ string) => void | - | 值变化时触发的回调函数 |\n\n",
  "SwipeAction": "[SwipeAction文档](https://zarm.design/#/components/swipe-action)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| left | object[] | [] | 左侧按钮组 |\n| right | object[] | [] | 右侧按钮组 |\n| moveDistanceRatio | number | 0.5 | 移动距离比例临界点 |\n| moveTimeSpan | number | 300 | 移动时间跨度临界点 |\n| animationDuration | number | 300 | 动画执行时间，单位：毫秒 |\n| offset | number | 10 | 回弹偏移的距离 |\n| autoClose | boolean | true | 点击按钮后是否自动关闭 |\n| disabled | boolean | false | 是否允许滑动 |\n| onOpen | () => void | - | 滑开时触发的回调函数 |\n| onClose | () => void | - | 关闭时触发的回调函数 |\n\n",
  "Switch": "[Switch文档](https://zarm.design/#/components/switch)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| checked | boolean | - | 值 |\n| defaultChecked | boolean | - | 初始值 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (value?: boolean) => void | - | 值变化时触发的回调函数 |\n\n",
  "TabBar": "[TabBar文档](https://zarm.design/#/components/tab-bar)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| activeKey | number \\| string | - | 当前选中项 |\n| defaultActiveKey | number \\| string | - | 初始选中项, 默认第一个选中 |\n| onChange | (value?: number \\| string) => void | - | 值变化时触发的回调函数 |\n| visible | boolean | `true` | 是否显示 |\n| itemKey | number \\| string | - | 唯一标识，对应`activeKey`，不设置则默认取 index 索引 |\n| title | ReactNode | - | 标题文字 |\n| icon | ReactNode | - | 图标 |\n| activeIcon | ReactNode | - | 选中时图标，不设置等同 icon 属性的值 |\n| badge | Object | - | 参考`Badge`组件 |\n\n",
  "Tabs": "[Tabs文档](https://zarm.design/#/components/tabs)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| value | number | - | 值 |\n| defaultValue | number | - | 初始值 |\n| disabled | boolean | false | 是否禁用 |\n| direction | `horizontal` \\| `vertical` | 'horizontal' | 方向 |\n| swipeable | boolean | false | 是否支持滑动切换 |\n| scrollable | boolean | false | 是否支持滚动 |\n| lineWidth | number \\| string | - | 线条宽度 |\n| onChange | (index?: number) => void | - | 值变化时触发的回调函数 |\n| title | ReactNode | - | 标题 |\n| children | ReactNode | - | 内容 |\n| disabled | boolean | false | 是否禁用 |\n\n",
  "Toast": "[Toast文档](https://zarm.design/#/components/toast)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| visible | boolean | false | 是否展示 |\n| content | ReactNode | - | 显示的内容 |\n| stayTime | number | 3000 | 自动关闭前停留的时间（单位：毫秒） |\n| mask | boolean | false | 是否展示遮罩层 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n| afterClose | () => void | - | Toast 隐藏后的回调函数 |\n| mountContainer | HTMLElement | () => HTMLElement | document.body | 指定 Toast 挂载的 HTML 节点 |\n\n",
  "Tooltip": "[Tooltip文档](https://zarm.design/#/components/tooltip)\n\n ---\n\n| props | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :------: |\n| visible | boolean | false | 是否显示 |\n| content | ReactNode | - | 显示内容 |\n| hasArrow | boolean | false | 是否带有箭头 |\n| arrowPointAtCenter | boolean | false | 箭头是否指向目标元素中心 |\n| className | string | - | 气泡层类名追加 |\n| mouseEnterDelay | number | 100 | 鼠标移入后延时多少才显示气泡层，单位：毫秒 |\n| mouseLeaveDelay | number | 100 | 鼠标移出后延时多少才隐藏气泡层，单位：毫秒 |\n| direction | string | 'top' | 显示方向，可选值 `topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom` |\n| trigger | string | 'click' | 触发方式，PC 端默认值为 'hover', 可选值为：点击触发`click`、鼠标经过触发`hover`、聚焦状态触发`focus`、受控触发`manual`、右键触发`contextMenu` |\n| onVisibleChange | (visible?: boolean) => void | noop | 显示/隐藏触发的事件 |\n\n"
}