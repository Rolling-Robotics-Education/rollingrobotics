export async function register(): Promise<void> {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    if (process.env.npm_lifecycle_event === 'build') {
      return
    }

    const { startFtcManualUpdater } = await import('./lib/ftc/manual-updater')
    startFtcManualUpdater()
  }
}
