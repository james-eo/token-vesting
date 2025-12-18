'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletButton } from '../solana/solana-provider'
import { ExplorerLink } from '../cluster/cluster-ui'
import { useVestingProgram } from './vesting-data-access'
import { VestingCreate, VestingList } from './vesting-ui'
import { ellipsify } from '@/lib/utils'

export default function VestingFeature() {
  const { publicKey } = useWallet()
  const { programId } = useVestingProgram()

  return publicKey ? (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 dark:from-purple-500/20 dark:via-blue-500/20 dark:to-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                Vesting Dashboard
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Create and manage token vesting schedules for your team
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Program:</span>
              <ExplorerLink
                path={`account/${programId}`}
                label={ellipsify(programId.toString())}
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-mono text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <VestingCreate />
        <div className="mt-12">
          <VestingList />
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5">
      <div className="text-center space-y-8 p-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Connect Your Wallet
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Please connect your Solana wallet to access the vesting dashboard
          </p>
        </div>
        <WalletButton />
      </div>
    </div>
  )
}
