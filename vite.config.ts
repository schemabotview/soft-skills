import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The render engine is the @graphlearning/flow package, not a local folder. `dedupe` keeps a single
// copy of react / react-dom / @xyflow/react across this app and the package — the gotcha that bites
// when two React copies meet (invalid-hook-call).
//
// `base` is `/soft-skills/` for the production BUILD only (the app deploys under
// graphl.in/soft-skills/). Dev stays at `/` so `npm run dev` and the capture/record scripts (which
// drive the dev server at localhost:5173/#/<id>) are unaffected.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/soft-skills/' : '/',
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', '@xyflow/react'],
  },
  server: { port: 5173 },
}))
