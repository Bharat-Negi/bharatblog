import Link from 'next/link'
export default function NotFound() {
  return (
    <div>
      <h1>404 in main layout</h1>
      <Link href="/">Home</Link>
    </div>
  )
}