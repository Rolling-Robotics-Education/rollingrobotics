import { refreshFtcManual } from '../src/lib/ftc/manual-updater'

function argumentValue(name: string): string | undefined {
  const prefix = `--${name}=`
  return process.argv.find((argument) => argument.startsWith(prefix))?.slice(prefix.length)
}

async function main(): Promise<void> {
  const result = await refreshFtcManual({
    force: process.argv.includes('--force'),
    sourceUrl: argumentValue('source'),
  })

  console.info(
    `${result.reason}. ${result.metadata.pages} pages are available in data/ftc-game-manual.md.`,
  )
}

main().catch((error: unknown) => {
  console.error('Unable to update the FTC competition manual', error)
  process.exitCode = 1
})
