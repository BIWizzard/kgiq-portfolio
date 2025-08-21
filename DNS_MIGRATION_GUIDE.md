# DNS Migration Guide: kenneth-graham.com

## Current Setup
- **Domain Registrar:** GoDaddy
- **DNS Management:** GoDaddy (pointing to Hostinger)
- **Web Hosting:** Hostinger (shared hosting)
- **Email Hosting:** Hostinger
- **Target Web Hosting:** Netlify (for resume)

## Migration Strategy

### Step 1: Deploy Resume to Netlify

1. **Build the standalone resume:**
   ```bash
   npm run build:resume
   ```

2. **Deploy to Netlify:**
   - Create new Netlify site
   - Connect to this GitHub repo
   - Set build command: `npm run build:resume`
   - Set publish directory: `dist-resume`
   - Set environment variables for Supabase

3. **Get Netlify domain:**
   - Note the provided subdomain (e.g., `amazing-curie-123456.netlify.app`)
   - Consider setting a custom Netlify subdomain

### Step 2: DNS Configuration

#### At GoDaddy (Domain Registrar):
Keep existing email records, update web records:

**Keep these records (for Hostinger email):**
```
MX    @    mx1.hostinger.com    (Priority: 10)
MX    @    mx2.hostinger.com    (Priority: 20)
CNAME mail hostinger.com
```

**Update these records (for Netlify web):**
```
A     @    75.2.60.5     (Netlify Load Balancer)
CNAME www netlify.com
```

#### Alternative: Use Netlify DNS
1. **Change nameservers at GoDaddy to Netlify:**
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```

2. **Configure all records in Netlify DNS:**
   ```
   # Web (Netlify)
   A     @    75.2.60.5
   CNAME www netlify.com
   
   # Email (Hostinger) 
   MX    @    mx1.hostinger.com    (Priority: 10)
   MX    @    mx2.hostinger.com    (Priority: 20)
   CNAME mail hostinger.com
   
   # Additional email records if needed
   TXT   @    "v=spf1 include:hostinger.com ~all"
   ```

### Step 3: Migration Timeline

#### Phase 1: Test (Recommended)
1. Deploy resume to Netlify with temporary domain
2. Test all functionality
3. Verify Supabase connection works from Netlify

#### Phase 2: DNS Update
1. Lower TTL on existing DNS records to 300 seconds (5 minutes)
2. Wait 24 hours for TTL to propagate
3. Update DNS records as above
4. Monitor email functionality

#### Phase 3: Verification
1. Test `kenneth-graham.com` loads resume
2. Test `www.kenneth-graham.com` redirects properly
3. Verify email still works: `k.kmg@icloud.com`
4. Test SSL certificate auto-provisions

### Step 4: Backup Strategy

#### Before Migration:
1. **Export DNS records** from current provider
2. **Backup website files** from Hostinger
3. **Document email settings** for recovery

#### After Migration:
1. Keep Hostinger account active for 30 days
2. Monitor email delivery
3. Have rollback plan ready

## Environment Variables for Netlify

Set these in Netlify dashboard:
```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Testing Commands

```bash
# Test standalone resume locally
npm run dev:resume

# Build for production
npm run build:resume

# Preview production build locally
npx vite preview --outDir dist-resume
```

## Rollback Plan

If issues occur:
1. **DNS:** Revert A and CNAME records to point back to Hostinger
2. **Email:** Should continue working if MX records unchanged
3. **Website:** Hostinger site will be restored

## Contact Information to Update

After migration, update resume contact section if needed:
- Email: Keep current email working
- Website: Will be kenneth-graham.com (Netlify)
- Phone: No change needed
- LinkedIn: No change needed

## Notes

- **Email:** Critical to maintain business email functionality
- **SSL:** Netlify provides free SSL certificates
- **Performance:** Netlify CDN will improve site speed globally
- **Cost:** Netlify free tier should be sufficient for resume site
- **Analytics:** Consider adding Netlify Analytics if needed