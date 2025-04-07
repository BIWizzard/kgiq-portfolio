## 🧠 Blog Post: From Scratch to Git Woes — Starting My Portfolio Journey

Welcome to the first post in a multi-part series chronicling my attempt to rebuild my developer portfolio — publicly, honestly, and often hilariously. If you're here for the shiny tech, the stumbling blocks, or a bit of both, you're in the right place.

---

### Who Am I?

Hi, I’m Ken — a BI Developer, Data Analyst, and certified data geek. I have a career's worth of SQL, dashboards, DAX, semantic modelling, and pipeline troubleshooting under my belt, but I’m also hopelessly distracted by shiny new tech. ADHD-level curiosity means I tend to dive deep, build obsessively, and try things I probably shouldn’t — like creating a full-featured web portfolio app from scratch using tools I’ve never touched before.

One of my bigger goals with this project is to start weaving **AI and large language models (LLMs)** into the tools I build. Whether it's AI-assisted resume tailoring, smart content search, or code-gen helpers — I want to bake intelligence into the experience wherever I can.

So here we are.

---

### 🏗️ The Project Premise

This series documents the construction of my digital "house" — a portfolio site that does more than just host my resume. The idea is to build the **framework** (React + Vite + GitHub + Netlify + etc), and then fill it with **content** (projects, tools, blog posts, data visualizations). Basically, I want to build _all the things_.

The challenge: much of this stack is new to me. React? Never shipped anything with it. SCSS? Played with it, but nothing major. GitHub automation and API scripting? Somewhat. I'm leaning in — knowing full well that I'll learn the hard way more often than not.

---

### ❌ The First Decision: React

Why React? Two big reasons:

1. **Component Modularity** — It’s conceptually elegant and seems perfect for the kind of reusable blocks I want (hero section, navbar, resume builder, etc).
2. **It's Time** — React dominates the front-end job market. As someone open to building future client tools, this skill felt overdue.

I went with Vite to bootstrap the project quickly. Vite’s speed and simplicity appealed to the impatient builder in me.

---

### 🤛 The First Problem: Issue Importing

To move fast, I planned my roadmap in CSV and JSON files. Rather than manually creating dozens of GitHub issues and milestones, I figured I’d **script it** with a shell script and API calls.

> _"It’ll save time!" — Me, 2 hours and 10 minutes before I fixed it._

Here’s a quick summary of the issues I ran into:

#### ❌ 1. `github-issue-import` npm package is deprecated

Despite a ton of blogs referencing it, it no longer exists. A dead end.

#### ❌ 2. GitHub Web UI has no CSV import

Nothing native supported bulk import. I had to convert the CSV to JSON formatted for the REST API.

#### ❌ 3. Rate Limits + Secondary Throttling

Using `curl` + `jq` to loop through and post issues seemed fine… until GitHub returned 403 errors after a few API calls. The dreaded [Secondary Rate Limits](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#secondary-rate-limits) hit me hard.

#### ❌ 4. Secret Scanning Blocked My Pushes

I accidentally committed my Personal Access Token (PAT). GitHub rejected the push to `dev` with GH013 secret scanning errors. Rewriting git history to remove secrets is harder than it sounds.

#### ✅ Fixes I Ended Up Implementing:

- Converted CSV to REST API JSON manually
- Rewrote a bash script (`import_issues.sh`) to POST issues with throttling (via `sleep 2`)
- Used a `.env` file to store secrets and `grep` + `xargs` to source them safely
- Revoked the exposed PAT and generated a new one
- Used `git filter-repo` on a fresh clone to wipe leaked secrets
- Validated via test push, and finally succeeded on reimport

> _The irony of trying to save time by automating something that cost me two hours wasn’t lost on me._

But... I’d do it again. Every minute spent debugging and researching was a minute learning — and this project is about learning just as much as shipping.

---

### 🌟 What’s Next?

- Start building real components: `<Navbar />`, `<Hero />`, etc
- Add routing for `/`, `/resume`, `/projects`, and a `/store` placeholder
- Try deploying early with Netlify or Hostinger for live previews
- Link to the pre-React resume page as a baseline
- Keep finding ways to sprinkle in AI capabilities
- Write the next blog post about this process 😁

If you made it this far — thank you. This blog is equal parts accountability and therapy for me, and I hope it helps or inspires a few others trying to build in public.

🚀 Want to follow along? [Subscribe here](#) to get new posts as I build them.

🔗 Curious? [Check out the live project WIP](#) or preview the [original resume site](#) before React entered the chat.

---

📝 _Ken_

📍 Follow @biwizzard for more behind-the-scenes tech chaos.
