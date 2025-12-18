'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { ThemeSelect } from '@/components/theme-select'
import { ClusterUiSelect } from './cluster/cluster-ui'
import { WalletButton } from '@/components/solana/solana-provider'

export function AppHeader({ links = [] }: { links: { label: string; path: string }[] }) {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  function isActive(path: string) {
    return path === '/' ? pathname === '/' : pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-8">
            <Link className="text-2xl font-bold hover:opacity-80 transition-opacity" href="/">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                TokenVesting
              </span>
            </Link>
            <div className="hidden md:flex items-center">
              <ul className="flex gap-6 items-center">
                {links.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      className={`font-medium transition-all hover:text-purple-600 dark:hover:text-purple-400 ${
                        isActive(path) ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'
                      }`}
                      href={path}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-purple-100 dark:hover:bg-purple-900/30"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <div className="hidden md:flex items-center gap-3">
            <WalletButton />
            <ClusterUiSelect />
            <ThemeSelect />
          </div>

          {showMenu && (
            <div className="md:hidden fixed inset-x-0 top-[73px] bottom-0 bg-white/98 dark:bg-gray-900/98 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-xl">
              <div className="flex flex-col p-6 gap-6">
                <ul className="flex flex-col gap-4">
                  {links.map(({ label, path }) => (
                    <li key={path}>
                      <Link
                        className={`font-medium text-lg py-2 block transition-all ${
                          isActive(path)
                            ? 'text-purple-600 dark:text-purple-400'
                            : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                        }`}
                        href={path}
                        onClick={() => setShowMenu(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <WalletButton />
                  <ClusterUiSelect />
                  <ThemeSelect />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
