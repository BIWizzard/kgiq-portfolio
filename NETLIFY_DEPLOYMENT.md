# Netlify Deployment Guide - Kenneth Graham Resume

## ✅ Ready for Deployment!

Your standalone resume is complete and ready to deploy to kenneth-graham.com.

## Quick Summary
- **Resume Bundle:** 340KB (optimized)
- **Navbar:** Perfect match with "Clarity | Action | Results" tagline
- **Content:** All dynamic data from Supabase
- **Domain Target:** kenneth-graham.com
- **Build Command:** `npm run build:resume`
- **Publish Directory:** `dist-resume`

## Netlify Deployment Steps

### 1. Create Netlify Site

**Option A: GitHub Integration (Recommended)**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Connect GitHub and select `kgiq-portfolio` repo
4. Configure build settings:
   - **Base directory:** (leave blank)
   - **Build command:** `npm run build:resume`
   - **Publish directory:** `dist-resume`
   - **Functions directory:** (leave blank)

**Option B: Manual Upload**
1. Run `npm run build:resume` locally
2. Drag `dist-resume` folder to Netlify dashboard

### 2. Environment Variables

In Netlify dashboard → Site settings → Environment variables, add:
```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Custom Domain Setup

1. **In Netlify:**
   - Site settings → Domain management
   - Add custom domain: `kenneth-graham.com`
   - Add redirect: `www.kenneth-graham.com` → `kenneth-graham.com`

2. **DNS Configuration at GoDaddy:**
   ```
   # Web (Netlify)
   A     @      75.2.60.5
   CNAME www    netlify.com
   
   # Email (Keep Hostinger)
   MX    @      mx1.hostinger.com (Priority: 10)
   MX    @      mx2.hostinger.com (Priority: 20)
   CNAME mail   hostinger.com
   ```

### 4. SSL Certificate
- Netlify will auto-provision SSL certificate
- Should activate within minutes of DNS propagation

## Local Testing Commands

```bash
# Test resume dev server
npm run dev:resume

# Build for production
npm run build:resume

# Preview production build
npx vite preview --outDir dist-resume

# Restore portfolio files (if needed)
npm run dev:resume:restore
```

## File Structure

```
├── dist-resume/                    # Production resume build
├── src/ResumeOnly.jsx             # Standalone resume component
├── src/resume-main.jsx             # Resume entry point
├── src/components/resume/ResumeNavbar.jsx  # Resume navbar with tagline
├── index-resume.html               # Resume HTML template
├── vite.config.resume.js           # Resume build config
└── DEPLOYMENT_STEPS.md             # Detailed deployment guide
```

## Post-Deployment Checklist

1. **Test resume loads:** https://kenneth-graham.com
2. **Verify sections work:**
   - [ ] Hero with Download Resume button
   - [ ] Professional Experience (7 companies)
   - [ ] Technical Skills (color-coded)
   - [ ] Key Projects (4 featured)
   - [ ] Certifications & Education
   - [ ] Contact section
3. **Test functionality:**
   - [ ] Download Resume button works
   - [ ] LinkedIn link works
   - [ ] All company logos display
   - [ ] Mobile responsive
4. **Verify email still works:** (should continue via Hostinger)

## DNS Migration Timeline

1. **Phase 1:** Deploy to Netlify with temporary domain (test everything)
2. **Phase 2:** Lower TTL on existing DNS records (wait 24hrs)
3. **Phase 3:** Update DNS to point to Netlify
4. **Phase 4:** Monitor and verify (email + website)

## Rollback Plan

If issues occur:
1. **DNS:** Revert A record to Hostinger IP
2. **Email:** Should continue working (MX records unchanged)
3. **Backup:** Original site preserved at Hostinger

## Next Steps

1. Deploy to Netlify with temporary domain
2. Test all functionality
3. Plan DNS migration
4. Monitor performance and analytics

Your professional resume is now ready for the world! 🚀