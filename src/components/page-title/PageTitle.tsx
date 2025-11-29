import Link from 'next/link'
import React from 'react'

export default function PageTitle(props:any) {
  return (
    <div className="page-title">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">{props.title}</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/category">Category</Link></li>
            <li className="current">{props.title}</li>
          </ol>
        </nav>
      </div>
    </div>
  )
}
