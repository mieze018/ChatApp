// This code prevents a Flash Of Unstyled Content (FOUC)
// on load. Without it, the styles are only added once
// react loads on the frontend
import Document from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

import type { DocumentContext } from 'next/document'

export default class MyDocument extends Document {
  static override async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }
}
