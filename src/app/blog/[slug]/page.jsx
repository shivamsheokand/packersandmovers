import Image from 'next/image';
import Link from 'next/link';

// This would typically come from a CMS or API
const blogPosts = {
  'top-10-moving-tips': {
    title: "Top 10 Tips for a Successful Move",
    date: "May 20, 2025",
    image: "https://source.unsplash.com/random/1200x600/?moving",
    content: `
      <h2>1. Start Early</h2>
      <p>Begin planning your move at least 8 weeks in advance. This gives you plenty of time to sort, pack, and organize everything properly.</p>

      <h2>2. Create a Moving Checklist</h2>
      <p>Stay organized by making a detailed checklist of everything that needs to be done before, during, and after the move.</p>

      <h2>3. Declutter Before Packing</h2>
      <p>Take the opportunity to sort through your belongings and get rid of items you no longer need. This will make packing and unpacking easier.</p>

      <h2>4. Pack Room by Room</h2>
      <p>Pack one room at a time and label boxes clearly with their contents and destination room. This makes unpacking much more manageable.</p>

      <h2>5. Keep Essential Items Separate</h2>
      <p>Pack a box of essential items you'll need immediately after moving, including toiletries, medications, and basic tools.</p>
    `,
  },
  // Add more blog posts here
};

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  return {
    title: `${post.title} | Professional Packers and Movers Blog`,
    description: post.excerpt || post.content.substring(0, 160),
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:text-blue-800">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-8">{post.date}</div>
        
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
