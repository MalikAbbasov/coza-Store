import React from 'react'
import "./pageheader.scss"

function PageHeader({pageName}) {
  return (
    <div>
        <header id='header_pages'>
                <div className="container">
                    <h1>{pageName}</h1>
                </div>
        </header>
    </div>
  )
}

export default PageHeader