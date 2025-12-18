# Token Vesting Platform

A decentralized token vesting platform built on Solana that enables companies to create and manage token vesting schedules for team members, advisors, and investors. The platform provides secure, transparent, and automated token distribution with customizable vesting periods and cliff periods.

## Features

- **Create Vesting Accounts**: Set up company vesting accounts with custom token mints
- **Employee Vesting Schedules**: Define vesting schedules with start time, end time, cliff periods, and total allocations
- **Automated Token Release**: Smart contracts automatically calculate and release vested tokens based on linear vesting schedules
- **Transparent On-Chain**: All vesting schedules are verifiable on the Solana blockchain
- **Mobile Wallet Support**: Connect using mobile wallets like Phantom Mobile and Solflare Mobile
- **Modern UI**: Sleek and responsive interface built with Next.js and Tailwind CSS

## Architecture

### Smart Contract (Anchor Program)

The vesting program consists of three main instructions:

1. **Create Vesting Account**: Initializes a company vesting account with a treasury
2. **Create Employee Account**: Sets up individual vesting schedules for beneficiaries
3. **Claim Tokens**: Allows employees to claim their vested tokens as they unlock

**Key Features:**

- Program-Derived Addresses (PDAs) for secure token custody
- Linear vesting calculation with cliff period support
- Overflow-safe arithmetic operations
- Comprehensive error handling

### Frontend (Next.js App)

- Built with Next.js 15 and React 19
- Styled with Tailwind CSS v4
- Wallet integration using Solana Wallet Adapter
- Mobile-first responsive design
- Dark mode support

## Prerequisites

- Node.js 18+ or Bun
- Yarn or npm
- Rust and Anchor CLI (for smart contract development)
- Solana CLI tools

## Getting Started

### Installation

Clone the repository:

```shell
git clone https://github.com/james-eo/token-vesting.git
cd token-vesting
```

Install dependencies:

```shell
yarn install
```

## Development

### Smart Contract (Anchor Program)

Navigate to the anchor directory for all Anchor commands, or use the provided scripts.

#### Build the program:

```shell
yarn anchor-build
```

#### Start the test validator with the program deployed:

```shell
yarn anchor-localnet
```

#### Run the tests:

```shell
yarn anchor-test
```

#### Sync the program ID:

```shell
yarn anchor keys sync
```

After syncing, update the program ID in `anchor/src/vesting-exports.ts` to match the new address.

#### Deploy to Devnet:

```shell
yarn anchor deploy --provider.cluster devnet
```

### Frontend (Next.js)

#### Start the development server:

```shell
yarn dev
```

The app will be available at `http://localhost:3000`

#### Build for production:

```shell
yarn build
```

#### Start production server:

```shell
yarn start
```

## Testing

The project includes comprehensive tests using Bankrun for fast Solana program testing:

```shell
yarn anchor-test
```

Test coverage includes:

- Creating vesting accounts
- Funding treasury accounts
- Creating employee vesting schedules
- Claiming vested tokens

## Mobile Support

The platform supports mobile wallets through the Solana Mobile Wallet Adapter. Users can connect using:

- Phantom Mobile
- Solflare Mobile
- Other compatible Solana mobile wallets

## Security

- All tokens are held in Program-Derived Addresses (PDAs)
- Smart contract enforces vesting schedules on-chain
- No centralized control over locked tokens
- Cliff periods prevent premature token claims

## Tech Stack

**Smart Contract:**

- Solana Blockchain
- Anchor Framework 0.31.1
- Rust

**Frontend:**

- Next.js 15.5.7
- React 19
- TypeScript
- Tailwind CSS v4
- Solana Wallet Adapter
- Solana Mobile Wallet Adapter
- Solana Bankrun

## License

This project is open source and available under the MIT License.

## Links

- [Live Demo](https://token-vesting.vercel.app) _(coming soon)_
- [GitHub Repository](https://github.com/james-eo/token-vesting)
- [Solana Documentation](https://docs.solana.com)
- [Anchor Framework](https://www.anchor-lang.com)

## What is Token Vesting?

Token vesting is a mechanism that locks tokens and releases them gradually over time according to a predetermined schedule. It's commonly used to:

- Incentivize long-term commitment from team members
- Align interests between investors and project success
- Prevent market dumping by distributing tokens over time
- Reward advisors and contributors fairly

**Key Concepts:**

- **Vesting Period**: The total duration over which tokens unlock
- **Cliff Period**: An initial period where no tokens are released
- **Linear Vesting**: Tokens unlock proportionally over time after the cliff
- **Beneficiary**: The recipient of the vested tokens
