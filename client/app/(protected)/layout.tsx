import Link from 'next/link';

// This layout will wrap all protected pages
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
      {children}
    </div>
  )
} 