/**
 * Blog Post Metadata Registry
 *
 * This file serves as a central registry for all blog posts on sartajsyed.com.
 * It's useful for:
 * - Tracking all published posts
 * - Quick reference for post details
 * - Future dynamic blog generation (if migrating to SSG)
 * - Managing related posts
 * - Analytics and reporting
 *
 * Usage: This is a reference file. For static HTML site, you'll manually
 * add post cards to blog.html. If you later migrate to a static site
 * generator, this data structure will be ready to use.
 */

const blogPosts = [
    {
        // Post 1: Case Study
        slug: 'ai-implementation-case-study-sales-team',
        title: 'How We Cut Proposal Time from 3 Hours to 45 Minutes with Gemini',
        category: 'case-study',
        categoryDisplay: 'Case Study',
        tags: ['Gemini', 'Sales Automation', 'ROI', 'Implementation'],
        publishDate: '2024-12-15',
        publishDateDisplay: 'Dec 15, 2024',
        isoDate: '2024-12-15T00:00:00Z',
        readingTime: 5,
        wordCount: 1200,
        excerpt: 'A detailed walkthrough of how we implemented Gemini for a 5-person sales team and achieved 80% daily usage in just 2 weeks. Real numbers, real ROI.',
        metaDescription: 'A detailed walkthrough of how we implemented Gemini for a 5-person sales team and achieved 80% daily usage in just 2 weeks. Real numbers, real ROI.',
        featuredImage: 'gemini-sales-team.png',
        altText: 'Gemini workspace setup for sales team',
        featured: true,
        url: '/blog/posts/ai-implementation-case-study-sales-team.html',
        canonicalUrl: 'https://sartajsyed.com/blog/posts/ai-implementation-case-study-sales-team.html'
    },
    {
        // Post 2: Tutorial
        slug: 'building-rag-systems-tutorial',
        title: 'Building a Production-Ready RAG System: A Step-by-Step Guide',
        category: 'tutorial',
        categoryDisplay: 'Tutorial',
        tags: ['RAG', 'LangChain', 'Vector Database', 'Tutorial'],
        publishDate: '2024-12-20',
        publishDateDisplay: 'Dec 20, 2024',
        isoDate: '2024-12-20T00:00:00Z',
        readingTime: 8,
        wordCount: 1800,
        excerpt: 'Learn how to build a production-ready RAG system from scratch. Covers vector databases, chunking strategies, hybrid search, and deployment best practices.',
        metaDescription: 'Learn how to build a production-ready RAG system from scratch. Covers vector databases, chunking strategies, hybrid search, and deployment best practices.',
        featuredImage: 'rag-system-architecture.png',
        altText: 'RAG system architecture diagram showing vector database and LLM integration',
        featured: false,
        url: '/blog/posts/building-rag-systems-tutorial.html',
        canonicalUrl: 'https://sartajsyed.com/blog/posts/building-rag-systems-tutorial.html'
    },
    {
        // Post 3: Industry Insight
        slug: 'future-of-ai-consulting-2025',
        title: 'The AI Consulting Shift: Why 2025 is About Implementation, Not Custom Builds',
        category: 'insight',
        categoryDisplay: 'Industry Insights',
        tags: ['AI Consulting', 'Industry Trends', 'Business Strategy'],
        publishDate: '2025-01-04',
        publishDateDisplay: 'Jan 4, 2025',
        isoDate: '2025-01-04T00:00:00Z',
        readingTime: 6,
        wordCount: 1400,
        excerpt: 'The AI consulting landscape is shifting from custom builds to implementation expertise. Here\'s why companies are paying for adoption help, not research.',
        metaDescription: 'The AI consulting landscape is shifting from custom builds to implementation expertise. Why companies are paying for adoption help, not research in 2025.',
        featuredImage: 'ai-consulting-2025.png',
        altText: 'AI consulting trends visualization showing shift from custom to implementation',
        featured: false,
        url: '/blog/posts/future-of-ai-consulting-2025.html',
        canonicalUrl: 'https://sartajsyed.com/blog/posts/future-of-ai-consulting-2025.html'
    }
    // Add new posts here as you create them
];

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all posts in a specific category
 * @param {string} category - 'case-study', 'tutorial', or 'insight'
 * @returns {Array} Array of post objects
 */
function getPostsByCategory(category) {
    return blogPosts.filter(post => post.category === category);
}

/**
 * Get the N most recent posts
 * @param {number} limit - Number of posts to return
 * @returns {Array} Array of post objects sorted by date (newest first)
 */
function getRecentPosts(limit = 3) {
    return blogPosts
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        .slice(0, limit);
}

/**
 * Get featured posts (for homepage or special sections)
 * @returns {Array} Array of featured post objects
 */
function getFeaturedPosts() {
    return blogPosts.filter(post => post.featured);
}

/**
 * Get related posts (same category, exclude current post)
 * @param {string} currentSlug - Slug of the current post
 * @param {string} category - Category to match
 * @param {number} limit - Number of related posts to return
 * @returns {Array} Array of related post objects
 */
function getRelatedPosts(currentSlug, category, limit = 2) {
    return blogPosts
        .filter(post => post.slug !== currentSlug && post.category === category)
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        .slice(0, limit);
}

/**
 * Get post by slug
 * @param {string} slug - Post slug
 * @returns {Object|null} Post object or null if not found
 */
function getPostBySlug(slug) {
    return blogPosts.find(post => post.slug === slug) || null;
}

/**
 * Get all unique tags across all posts
 * @returns {Array} Array of unique tag strings
 */
function getAllTags() {
    const allTags = blogPosts.flatMap(post => post.tags);
    return [...new Set(allTags)].sort();
}

/**
 * Get posts by tag
 * @param {string} tag - Tag to filter by
 * @returns {Array} Array of post objects containing the tag
 */
function getPostsByTag(tag) {
    return blogPosts.filter(post => post.tags.includes(tag));
}

/**
 * Get total reading time for all posts
 * @returns {number} Total minutes
 */
function getTotalReadingTime() {
    return blogPosts.reduce((total, post) => total + post.readingTime, 0);
}

/**
 * Get total word count for all posts
 * @returns {number} Total words
 */
function getTotalWordCount() {
    return blogPosts.reduce((total, post) => total + post.wordCount, 0);
}

/**
 * Get blog statistics
 * @returns {Object} Object containing blog stats
 */
function getBlogStats() {
    return {
        totalPosts: blogPosts.length,
        caseStudies: getPostsByCategory('case-study').length,
        tutorials: getPostsByCategory('tutorial').length,
        insights: getPostsByCategory('insight').length,
        totalReadingTime: getTotalReadingTime(),
        totalWords: getTotalWordCount(),
        uniqueTags: getAllTags().length,
        featuredPosts: getFeaturedPosts().length
    };
}

// ============================================================================
// Export (if using modules - not needed for static HTML site)
// ============================================================================

// For future use with build tools or Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        blogPosts,
        getPostsByCategory,
        getRecentPosts,
        getFeaturedPosts,
        getRelatedPosts,
        getPostBySlug,
        getAllTags,
        getPostsByTag,
        getTotalReadingTime,
        getTotalWordCount,
        getBlogStats
    };
}

// ============================================================================
// Usage Examples
// ============================================================================

/*

// Example 1: Get all case studies
const caseStudies = getPostsByCategory('case-study');
console.log(`Found ${caseStudies.length} case studies`);

// Example 2: Get 3 most recent posts for blog sidebar
const recent = getRecentPosts(3);
recent.forEach(post => {
    console.log(`${post.title} - ${post.publishDateDisplay}`);
});

// Example 3: Get related posts for current post page
const currentPost = 'building-rag-systems-tutorial';
const related = getRelatedPosts(currentPost, 'tutorial', 2);

// Example 4: Generate sitemap entries
blogPosts.forEach(post => {
    console.log(`
    <url>
        <loc>${post.canonicalUrl}</loc>
        <lastmod>${post.publishDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    `);
});

// Example 5: Blog statistics
const stats = getBlogStats();
console.log(`
    Total Posts: ${stats.totalPosts}
    Case Studies: ${stats.caseStudies}
    Tutorials: ${stats.tutorials}
    Insights: ${stats.insights}
    Total Reading Time: ${stats.totalReadingTime} minutes
`);

// Example 6: Get all posts with a specific tag
const ragPosts = getPostsByTag('RAG');
console.log(`Posts about RAG: ${ragPosts.length}`);

// Example 7: Get all unique tags
const tags = getAllTags();
console.log(`All tags: ${tags.join(', ')}`);

*/

// ============================================================================
// Maintenance Notes
// ============================================================================

/*

WHEN ADDING A NEW POST:
1. Copy the post object structure above
2. Fill in all fields
3. Add to the blogPosts array
4. Update blog.html with new post card
5. Update sitemap.xml with new post URL
6. Keep posts sorted by publishDate (newest first) for easier maintenance

FIELD DESCRIPTIONS:
- slug: URL-friendly version of title (lowercase, hyphens)
- title: Full post title (50-60 chars optimal)
- category: One of 'case-study', 'tutorial', 'insight'
- categoryDisplay: Human-readable category name
- tags: Array of relevant keywords (3-5 tags recommended)
- publishDate: YYYY-MM-DD format
- publishDateDisplay: Human-readable format (Mon DD, YYYY)
- isoDate: ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)
- readingTime: Minutes (word count ÷ 200, rounded)
- wordCount: Total words in article content
- excerpt: 1-2 sentence summary (~120-150 chars)
- metaDescription: SEO description (150-160 chars)
- featuredImage: Filename only (no path)
- altText: Image description for accessibility
- featured: Boolean (show in featured sections?)
- url: Relative URL path
- canonicalUrl: Full absolute URL

*/
