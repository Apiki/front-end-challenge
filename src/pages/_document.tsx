import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Posts Apiki</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}