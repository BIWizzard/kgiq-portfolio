# Resume Deployment Steps

## Summary
✅ **Standalone resume version created successfully!**
- Bundle size: 339KB (much smaller than full portfolio)
- All resume components included
- Same Supabase integration
- Optimized for kenneth-graham.com deployment

## Quick Start Commands

```bash
# Test locally
npm run dev:resume

# Build for production 
npm run build:resume

# Preview production build
npx vite preview --outDir dist-resume
```

## Netlify Deployment

### Option 1: GitHub Integration (Recommended)

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Add standalone resume build"
   git push origin main
   ```

2. **Create Netlify site:**
   - Go to https://netlify.com
   - "Add new site" > "Import an existing project"
   - Connect your GitHub repo
   - Configure build settings:
     - **Base directory:** (leave blank)
     - **Build command:** `npm run build:resume`
     - **Publish directory:** `dist-resume`

3. **Set environment variables:**
   ```
   VITE_SUPABASE_URL=your-supabase-url-here
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

4. **Deploy and test**

### Option 2: Manual Upload

1. **Build locally:**
   ```bash
   npm run build:resume
   ```

2. **Upload dist-resume folder contents** to Netlify dashboard

## DNS Configuration for kenneth-graham.com

### Current State
- Domain: GoDaddy registration
- DNS: Pointing to Hostinger
- Email: Hosted by Hostinger  
- Web: Hostinger shared hosting

### Target State  
- Domain: GoDaddy registration
- DNS: Updated to point to Netlify
- Email: Still hosted by Hostinger
- Web: Netlify (resume only)

### Steps

1. **Get Netlify domain info:**
   - Note your Netlify site URL
   - Get custom domain settings from Netlify

2. **Update DNS at GoDaddy:**
   ```
   # Remove old A records pointing to Hostinger
   # Add new records for Netlify:
   A     @      75.2.60.5
   CNAME www    netlify.com
   
   # Keep email records for Hostinger:
   MX    @      mx1.hostinger.com (Priority: 10)
   MX    @      mx2.hostinger.com (Priority: 20)
   CNAME mail   hostinger.com
   ```

3. **Add custom domain in Netlify:**
   - Site settings > Domain management
   - Add custom domain: `kenneth-graham.com`
   - Add redirect: `www.kenneth-graham.com` → `kenneth-graham.com`

4. **Verify SSL certificate** auto-provisions

## File Structure Created

```
├── src/ResumeOnly.jsx          # Standalone resume component
├── resume-main.jsx             # Entry point for resume build
├── index-resume.html           # HTML template for resume
├── vite.config.resume.js       # Vite config for resume build
├── dist-resume/               # Built resume files (generated)
└── DNS_MIGRATION_GUIDE.md     # Detailed DNS guide
```

## Key Features of Standalone Resume

- ✅ All resume sections (experience, skills, projects, certifications, education, contact)
- ✅ Dynamic data from Supabase
- ✅ Same glassmorphic design
- ✅ Download resume button
- ✅ LinkedIn integration
- ✅ Responsive design
- ✅ Optimized bundle size (339KB vs 544KB)
- ✅ SEO-friendly meta tags

## Testing Checklist

Before going live:
- [ ] Test resume loads properly locally: `npm run dev:resume`
- [ ] Verify Supabase data loads
- [ ] Test download resume button works  
- [ ] Check mobile responsiveness
- [ ] Verify all company logos display
- [ ] Test contact links work
- [ ] Confirm build succeeds: `npm run build:resume`

## Monitoring After Deployment

1. **Website functionality:**
   - Resume loads at kenneth-graham.com
   - All sections display properly
   - Download button works
   - Contact information correct

2. **Email functionality:**
   - Test sending/receiving emails
   - Verify existing email addresses still work
   - Check spam folder initially

3. **SEO and analytics:**
   - Google Search Console
   - Monitor site performance
   - Verify SSL certificate

## Emergency Rollback

If issues occur:
1. **DNS:** Change A record back to Hostinger IP
2. **Email:** Should continue working (MX records unchanged)  
3. **Backup:** Original site files preserved at Hostinger

## Next Steps

1. Test the standalone resume locally
2. Deploy to Netlify with temporary domain
3. Verify everything works
4. Plan DNS migration timing
5. Execute DNS changes
6. Monitor and verify

The standalone resume is ready for deployment! It maintains all the functionality and design of the portfolio version while being optimized for the personal domain.