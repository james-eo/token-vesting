'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletButton } from '../solana/solana-provider'
import { redirect } from 'next/navigation'

export default function AccountListFeature() {
  const { publicKey } = useWallet()

  if (publicKey) {
    return redirect(`/account/${publicKey.toString()}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5">
      <div className="text-center space-y-8 p-12">
        <div className="space-y-4">
          <svg
            className="w-20 h-20 mx-auto mb-4 text-purple-600 dark:text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Connect Your Wallet
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md">
            Please connect your Solana wallet to view your account details
          </p>
        </div>
        <WalletButton />
      </div>
    </div>
  )
}
