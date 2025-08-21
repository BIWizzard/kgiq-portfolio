# Restoring Your Supabase Backup

You have: `db_cluster-12-05-2025@16-24-54.backup.gz`

## Option 1: Install Supabase CLI and Restore

### 1. Install Supabase CLI
```bash
brew install supabase/tap/supabase
```

### 2. Extract your backup
```bash
gunzip db_cluster-12-05-2025@16-24-54.backup.gz
```

### 3. Get your new project's database URL
- Go to your new Supabase project dashboard
- Settings → Database
- Copy the "Connection string" (URI)

### 4. Restore using pg_restore
```bash
pg_restore --verbose --clean --no-acl --no-owner \
  -d "your-database-connection-string" \
  db_cluster-12-05-2025@16-24-54.backup
```

## Option 2: Using Supabase Dashboard (Easier)

### 1. Extract the backup first
```bash
gunzip -k db_cluster-12-05-2025@16-24-54.backup.gz
```

### 2. Convert to SQL if needed
If the backup is in custom format, you'll need to convert it:
```bash
pg_restore --file=restored_backup.sql --verbose --no-owner --no-acl db_cluster-12-05-2025@16-24-54.backup
```

### 3. Use Supabase SQL Editor
- Go to your new Supabase project
- Navigate to SQL Editor
- Create a new query
- Paste the SQL content
- Run the query

## Option 3: Quick Manual Setup (If backup restore fails)

Since your app already has fallback data, you can manually recreate the tables:

### 1. Create the tables in Supabase SQL Editor:

```sql
-- Experience table
CREATE TABLE IF NOT EXISTS experience (
  id SERIAL PRIMARY KEY,
  company VARCHAR(255),
  title VARCHAR(255),
  location VARCHAR(255),
  start_date DATE,
  end_date DATE,
  logo_url TEXT,
  tools TEXT,
  skills TEXT,
  "order" INTEGER
);

-- Experience bullets table
CREATE TABLE IF NOT EXISTS experience_bullets (
  id SERIAL PRIMARY KEY,
  experience_id INTEGER REFERENCES experience(id),
  content TEXT,
  "order" INTEGER
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(255),
  "order" INTEGER
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  summary TEXT,
  contributions TEXT,
  techstack TEXT,
  impact TEXT,
  featured BOOLEAN DEFAULT false,
  "order" INTEGER
);
```

### 2. Then insert your data using the Supabase dashboard Table Editor

## Verify Connection

After restoring, test your connection:
1. Restart your dev server
2. Check the browser console for any Supabase errors
3. The Resume page should now load data from Supabase instead of fallbacks

## Need Help?

- If you see the location of your backup file, I can help you extract and prepare it
- Check Supabase docs: https://supabase.com/docs/guides/platform/migrating-and-upgrading-projects