# Vercel Fix Notes

This version fixes the deployment error shown in Vercel:

- `Module not found: Can't resolve '@/components/Header'`
- `Module not found: Can't resolve '@/components/AIAssistant'`
- `Module not found: Can't resolve '@/components/QuoteForm'`
- `Module not found: Can't resolve '@/components/ComparisonTable'`

Fix applied:
- Added `baseUrl` and `paths` alias to `tsconfig.json`
- Included all referenced components in `/components`
- Kept reusable calculator and quote form components
- Removed generated folders such as `node_modules` and `.next` from the ZIP

Upload all extracted files directly to the root of your GitHub repository.
