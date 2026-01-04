# Blog Post Creation Guide

## Quick Start Checklist

- [ ] Copy BLOG_POST_TEMPLATE.html to `/blog/posts/[your-slug].html`
- [ ] Replace all `[PLACEHOLDERS]` with actual content
- [ ] Add post card to blog.html
- [ ] Update sitemap.xml with new post URL
- [ ] Create/optimize featured image (1200x630px for Open Graph)
- [ ] Test on mobile and desktop
- [ ] Validate meta tags with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## Complete Placeholder Reference

### Required Placeholders

| Placeholder | Description | Example |
|------------|-------------|---------|
| `[POST_TITLE]` | Post title (50-60 chars optimal) | "How We Cut Proposal Time from 3 Hours to 45 Minutes with Gemini" |
| `[META_DESCRIPTION]` | SEO description (150-160 chars) | "A detailed walkthrough of how we implemented Gemini for a 5-person sales team and achieved 80% daily usage in just 2 weeks." |
| `[POST_SLUG]` | URL-friendly slug (lowercase with hyphens) | "gemini-implementation-5-person-sales-team" |
| `[CATEGORY]` | One of: Case Study, Tutorial, Industry Insights | "Case Study" |
| `[TAG1]`, `[TAG2]`, `[TAG3]` | Relevant keywords | "Gemini", "Sales Automation", "ROI" |
| `[ISO_DATE]` | ISO 8601 format date | "2024-12-15T00:00:00Z" |
| `[PUBLISH_DATE]` | Human-readable date | "Dec 15, 2024" |
| `[READING_TIME]` | Minutes to read (word count ÷ 200) | "5" |
| `[WORD_COUNT]` | Total words in article | "1200" |
| `[FEATURED_IMAGE]` | Image filename (no path) | "gemini-sales-team" |
| `[ALT_TEXT]` | Descriptive alt text for image | "Gemini workspace setup for sales team" |

### Multiple Occurrences

Some placeholders appear multiple times in the template. Use Find & Replace to update all instances:

- `[POST_TITLE]` - 5 occurrences (title tag, OG, Twitter, JSON-LD, page heading)
- `[POST_SLUG]` - 7 occurrences (canonical, OG, Twitter, social share buttons)
- `[META_DESCRIPTION]` - 4 occurrences (meta tag, OG, Twitter, JSON-LD)
- `[FEATURED_IMAGE]` - 3 occurrences (OG, Twitter, featured image tag)

**Tip**: Use your editor's "Find & Replace All" feature for efficiency.

---

## Step-by-Step Process

### 1. Create Your Post File

```bash
# Copy the template
cp blog/_templates/BLOG_POST_TEMPLATE.html blog/posts/your-post-slug.html
```

**Slug Guidelines:**
- Use lowercase with hyphens
- Keep under 60 characters
- Be descriptive but concise
- Examples:
  - `gemini-sales-automation` ✓
  - `rag-system-tutorial` ✓
  - `ai-consulting-trends-2025` ✓
  - `Post1` ✗ (not descriptive)
  - `how-to-build-a-really-amazing-rag-system-with-langchain-and-pinecone` ✗ (too long)

### 2. Fill in Metadata

Open your new post file and replace all placeholders:

#### Dates
- **ISO Date**: `2024-12-15T00:00:00Z`
  - Format: `YYYY-MM-DDTHH:MM:SSZ`
  - Always use T00:00:00Z for midnight UTC
- **Publish Date**: `Dec 15, 2024`
  - Format: `Mon DD, YYYY`
  - Use abbreviated month names

#### Reading Time Calculation
Formula: **Total words ÷ 200 = minutes**

Examples:
- 1000 words = 5 min read
- 1600 words = 8 min read
- 1200 words = 6 min read

Round to nearest whole number.

#### Category Selection
Choose ONE:
- **Case Study** - Real implementation story with problem → solution → results
- **Tutorial** - Step-by-step how-to guide with actionable instructions
- **Industry Insights** - Opinion piece, trend analysis, or strategic thinking

### 3. Write Your Content

#### Recommended Structure

**Opening (1-2 paragraphs)**
- Hook: Start with a problem, surprising stat, or relatable scenario
- Context: Briefly explain the situation
- Promise: Tell readers what they'll learn

**Body (3-5 main sections with H2 headings)**
- Each section focuses on one key point
- Use H3 for subsections
- Include practical examples
- Add code snippets if tutorial
- Use callout boxes for key insights

**Conclusion (2-3 paragraphs)**
- Summarize main takeaways
- Reinforce value provided
- Natural lead to CTA (already included in template)

#### Writing Tips

**For Readability:**
- Short paragraphs (2-4 sentences)
- Bullet points for lists
- Bold for emphasis (sparingly)
- Subheadings every 200-300 words
- One idea per paragraph

**For SEO:**
- Include primary keyword in first paragraph
- Use keyword in 2-3 H2 headings
- Add internal links to other posts/pages
- Link to 2-3 authoritative external sources
- Natural, conversational tone

**Voice & Tone:**
- Conversational but professional
- Use "I" and "you" naturally
- Avoid corporate jargon
- Be direct and honest
- Show expertise without bragging

### 4. Add Images

#### Featured Image (Required)
- **Size**: 1200 x 630 pixels
- **Format**: PNG or JPG
- **Location**: `/assets/images/blog/[filename].png`
- **Naming**: Match post slug (e.g., `gemini-sales-team.png`)
- **Content**: Can be:
  - Screenshot with overlay text
  - Gradient background with title
  - Relevant diagram or chart
  - Custom graphic

**Creating Simple Featured Images:**
If you don't have design tools, use a gradient background:
1. Use your site's color scheme (#00ff88, #0a0a0a)
2. Add post title in large white text
3. Keep it simple and readable

#### In-Content Images (Optional)
- Max width: 1000px (will scale responsively)
- Compress for web (<200KB per image)
- Add descriptive alt text
- Use border style from template (already styled)

### 5. Use Special Content Blocks

#### Callout Box
For key insights or important notes:

```html
<div class="callout-box">
    <h4>Key Takeaway</h4>
    <p>This implementation reduced proposal time by 75% and achieved 80% team adoption in 2 weeks.</p>
</div>
```

#### Blockquote
For quotes or emphasized statements:

```html
<blockquote>
    <p>The best AI implementation is one that people actually use. Focus on adoption, not features.</p>
</blockquote>
```

#### Code Block
For code examples:

```html
<pre><code>// Example Python code
def calculate_roi(time_saved, hourly_rate):
    return time_saved * hourly_rate * 20  # 20 work days/month
</code></pre>
```

### 6. Add Post to Blog Index

Edit `blog.html` and add a new card to the `blog-grid` section.

**Important**: Add new posts at the **TOP** of the grid (newest first).

```html
<!-- Add this BEFORE existing cards -->
<article class="blog-card" data-category="case-study">
    <div class="blog-card-image">
        <img src="./assets/images/blog/your-image.png" alt="Descriptive alt text">
    </div>
    <div class="blog-card-content">
        <div class="blog-card-meta">
            <span class="blog-category">Case Study</span>
            <span class="blog-date"><i class="las la-calendar"></i> Dec 15, 2024</span>
            <span class="blog-reading-time"><i class="las la-clock"></i> 5 min read</span>
        </div>
        <h3><a href="blog/posts/your-slug.html">Your Post Title</a></h3>
        <p class="blog-excerpt">Brief excerpt describing the post (1-2 sentences, ~100-120 chars)</p>
        <div class="blog-card-footer">
            <a href="blog/posts/your-slug.html" class="btn-ghost">Read More →</a>
        </div>
    </div>
</article>
```

**Category data-attribute values:**
- `case-study` for Case Studies
- `tutorial` for Tutorials
- `insight` for Industry Insights

### 7. Update Sitemap

Edit `sitemap.xml` to add your new post.

**Add new post entry:**

```xml
<url>
    <loc>https://sartajsyed.com/blog/posts/your-slug.html</loc>
    <lastmod>2024-12-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
</url>
```

**Update blog.html lastmod:**

Find the blog.html entry and update its lastmod to match your new post date:

```xml
<url>
    <loc>https://sartajsyed.com/blog.html</loc>
    <lastmod>2024-12-15</lastmod> <!-- Update this -->
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
</url>
```

### 8. Configure Social Share URLs

The template includes placeholder social share URLs. These are automatically configured using the `[POST_SLUG]` placeholder, but verify they're correct after replacing placeholders.

**URLs should be:**
- Twitter: `https://twitter.com/intent/tweet?text=YOUR_TITLE&url=https://sartajsyed.com/blog/posts/your-slug.html`
- LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=https://sartajsyed.com/blog/posts/your-slug.html`
- Facebook: `https://www.facebook.com/sharer/sharer.php?u=https://sartajsyed.com/blog/posts/your-slug.html`
- Copy Link: Already functional via JavaScript

### 9. Testing Checklist

**Local Testing:**
- [ ] All internal links work
- [ ] Images load correctly
- [ ] Mobile responsive (test on phone or resize browser)
- [ ] Reading time is accurate
- [ ] Category badge matches content
- [ ] Social share buttons work
- [ ] Navigation works (back to blog, home, etc.)

**Meta Tag Validation:**
- [ ] Twitter Card: https://cards-dev.twitter.com/validator
- [ ] Facebook: https://developers.facebook.com/tools/debug/
- [ ] Rich Results: https://search.google.com/test/rich-results
- [ ] Mobile Friendly: https://search.google.com/test/mobile-friendly

**SEO Checks:**
- [ ] Title tag 50-60 characters
- [ ] Meta description 150-160 characters
- [ ] One H1 tag (automatically from template)
- [ ] H2/H3 hierarchy is logical
- [ ] Alt text on all images
- [ ] At least one internal link
- [ ] At least one external link

### 10. Publishing

1. **Commit to git**
   ```bash
   git add .
   git commit -m "Add blog post: [Post Title]"
   ```

2. **Push to production**
   ```bash
   git push
   ```

3. **Verify live**
   - Wait 2-5 minutes for deployment
   - Check https://sartajsyed.com/blog/posts/your-slug.html
   - Test on mobile device

4. **Share on social media**
   - Use the social share buttons on your own post
   - This validates they work and shares your content

---

## Content Guidelines

### Target Audience
- Mid-market company decision makers
- Technical teams evaluating AI tools
- AI consultants and implementers
- Developers building AI systems

### Technical Level
- Assume basic AI knowledge (LLMs, embeddings, etc.)
- Explain complex concepts simply
- Link to resources for deep technical dives
- Balance accessibility with expertise

### SEO Keywords to Target
- Primary: "AI implementation", "RAG systems", "AI consulting"
- Secondary: "Gemini workspace", "ChatGPT Enterprise", "workflow automation"
- Long-tail: "how to implement AI in sales team", "RAG system architecture"

### Word Count Targets
- **Case Studies**: 800-1200 words
- **Tutorials**: 1200-1800 words
- **Industry Insights**: 600-1000 words

Longer isn't always better - prioritize value and clarity.

---

## Common Mistakes to Avoid

1. **Forgetting to update sitemap.xml**
   - Search engines won't find your post quickly

2. **Using wrong image paths**
   - Post is in `/blog/posts/`, so images need `../../assets/images/blog/`

3. **Not testing social share buttons**
   - Broken share links hurt distribution

4. **Inconsistent category data-attribute**
   - Filter won't work on blog.html

5. **Missing alt text on images**
   - Bad for accessibility and SEO

6. **Not adding post to blog.html**
   - Post exists but isn't discoverable from blog index

7. **Copying template without replacing ALL placeholders**
   - Use Find All to verify no `[PLACEHOLDERS]` remain

---

## Maintenance & Updates

### Updating Existing Posts

1. Edit the post file
2. Update `[ISO_DATE]` in meta tags to current date (dateModified)
3. Update sitemap.xml lastmod for that post
4. Git commit with message: "Update: [Post Title]"

### Managing Old Content

**After 6 months:**
- Review analytics for popular posts
- Update outdated information
- Refresh examples and statistics
- Check all external links still work

**After 12 months:**
- Consider consolidating similar posts
- Archive or remove underperforming content
- Update featured images if needed

---

## Quick Reference: File Locations

```
/Users/sartajsyed/Documents/personal-portfolio-website/
├── blog.html                          # Update: Add post card here
├── blog/
│   ├── posts/
│   │   └── your-slug.html             # Create: Your new post
│   └── _templates/
│       ├── BLOG_POST_TEMPLATE.html    # Copy: Template file
│       └── POST_CREATION_GUIDE.md     # Read: This guide
├── sitemap.xml                        # Update: Add post URL
└── assets/images/blog/
    └── your-image.png                 # Create: Featured image
```

---

## Example: Complete Post Creation Flow

Here's a real example creating a case study post:

```bash
# 1. Copy template
cp blog/_templates/BLOG_POST_TEMPLATE.html blog/posts/gemini-sales-automation.html

# 2. Edit file and replace placeholders:
# [POST_TITLE] → "How We Cut Proposal Time from 3 Hours to 45 Minutes with Gemini"
# [POST_SLUG] → "gemini-sales-automation"
# [CATEGORY] → "Case Study"
# [READING_TIME] → "5"
# etc...

# 3. Create featured image
# (Use design tool to create 1200x630px image)
# Save as: assets/images/blog/gemini-sales-automation.png

# 4. Add card to blog.html
# (Edit blog.html, add new <article> at top of blog-grid)

# 5. Update sitemap.xml
# (Add new <url> entry for the post)

# 6. Test locally
# (Open in browser, test all links, verify mobile)

# 7. Validate
# (Check Twitter Card Validator, Rich Results Test)

# 8. Publish
git add .
git commit -m "Add blog post: Gemini sales automation case study"
git push

# 9. Share
# (Use social buttons on live post to share)
```

---

## Need Help?

**Common Issues:**

**Q: Images aren't loading**
- Check file path is `../../assets/images/blog/[filename].png`
- Verify image file exists in correct folder
- Check filename matches exactly (case-sensitive)

**Q: Category filter not working**
- Verify `data-category` on blog card matches filter buttons
- Check spelling: `case-study`, `tutorial`, `insight`
- Make sure JavaScript is enabled

**Q: Social share buttons not working**
- Ensure URLs have actual domain (sartajsyed.com)
- Check for typos in post slug
- Test with URL encoder for special characters

**Q: Post not showing on blog.html**
- Verify you added card to blog-grid
- Check it's inside the correct section
- Reload page with hard refresh (Ctrl+Shift+R)

---

## Tips for Success

1. **Write content first, then create post**
   - Draft in Google Docs or Notion
   - Copy to template when complete
   - Avoids placeholder confusion

2. **Use consistent terminology**
   - Match your services page language
   - Reinforce brand messaging
   - Build keyword consistency

3. **Internal linking strategy**
   - Link tutorials from case studies
   - Cross-reference related posts
   - Link to services/contact pages

4. **Batch create posts**
   - Write 3-4 posts at once
   - Publish weekly for consistency
   - Builds content library faster

5. **Track what works**
   - Note which posts get shared
   - Monitor time on page
   - Double down on successful formats

---

**Remember**: The goal is demonstrating expertise and attracting consulting clients. Every post should showcase your knowledge and build trust with potential customers.
