import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const config: UserConfig = {
  plugins: [vanillaExtractPlugin(), react(), vike({ prerender: true })]
}

export default config
