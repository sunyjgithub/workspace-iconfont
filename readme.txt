字体图标改颜色
字体图标绘制
例如：

        @font-face {font-family: "iconfont";
                        src:url('../fonts/iconfont.ttf') format('truetype'); /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
                   }

    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
    }

    .icon-nanzhuang:before { content: "\e600"; }

    .icon-nvzhuang:before { content: "\e601"; }

    .icon-gouwuche:before { content: "\e602"; }



    修改颜色的方式：
    直接用color属性就可以改了,我在项目里面也用到很多字体图标

    .mui-icon-gear-filled:before {
        content: '\e532';
        color: #045380;
    }

    .mui-icon-extra-order:before {
        content: "\e113";
        color: #5A8C19;
    }

    .mui-icon-extra-university:before {
        content: "\e605";
        color: #E51C23;
    }

    .mui-icon-extra-peoples:before {
        content: "\e205";
        color: #1590E9;
    }