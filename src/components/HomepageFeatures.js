import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [{
        title: '专注博客内容',
        Svg: require('../../static/img/undraw_Developer_activity_re_39tg.svg').default,
        description: ( <
            >
            无广告、 专注博客内容， 提升您的阅读体验 <
            />
        ),
    },
    {
        title: '文档结构清晰',
        Svg: require('../../static/img/undraw_Upvote_re_qn2k.svg').default,
        description: ( <
            >
            用心整理文档， 合理的结构帮助您快速学习 < / >
        ),
    },
    {
        title: '交互式的学习',
        Svg: require('../../static/img/undraw_Wall_post_re_y78d.svg').default,
        description: ( <
            >
            基于MDX打造， 无需任何编辑器辅助学习， 您可以随时随地修改代码并预览 < / >
        ),
    },
];

function Feature({ Svg, title, description }) {
    return ( <
        div className = { clsx('col col--4') } >
        <
        div className = "text--center" >
        <
        Svg className = { styles.featureSvg }
        alt = { title }
        /> < /
        div > <
        div className = "text--center padding-horiz--md" >
        <
        h3 > { title } < /h3> <
        p > { description } < /p> < /
        div > <
        /div>
    );
}

export default function HomepageFeatures() {
    return ( <
        section className = { styles.features } >
        <
        div className = "container" >
        <
        div className = "row" > {
            FeatureList.map((props, idx) => ( <
                Feature key = { idx } {...props }
                />
            ))
        } <
        /div> < /
        div > <
        /section>
    );
}