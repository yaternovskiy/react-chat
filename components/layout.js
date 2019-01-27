import React, { Fragment } from 'react';
import Head from 'next/head';

const Layout = props => (
    <Fragment>
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" />
        <title>{props.pageTitle || 'None'}</title>
    </Head>
    {props.children}
    </Fragment>
);

export default Layout;