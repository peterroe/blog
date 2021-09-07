/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-09-01 19:30:20
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-09-07 20:26:16
 */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return ( <
        header className = { clsx('hero hero--primary', styles.heroBanner) } >
        <
        div className = "container" >
        <
        h1 className = "hero__title" > Attentive and Shared < /h1> <
        p className = "hero__subtitle" > 专注和共享 < /p> <
        div className = { styles.buttons } >
        <
        Link className = "button button--secondary button--lg"
        to = "/docs/intro" >
        Get Started - 5 min⏱️ <
        /Link> < /
        div > <
        /div> < /
        header >
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return ( <
        Layout title = { `Hello from ${siteConfig.title}` }
        description = "Description will go into a meta tag in <head />" >
        <
        HomepageHeader / >
        <
        main >
        <
        HomepageFeatures / >
        <
        /main> < /
        Layout >
    );
}