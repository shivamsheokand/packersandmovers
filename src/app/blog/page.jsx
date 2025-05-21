import BlogCard from "../../components/BlogCard";

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Tips for a Successful Move",
    slug: "top-10-moving-tips",
    date: "May 20, 2025",
    excerpt:
      "Moving to a new home can be stressful, but with these expert tips, you can make your move smooth and efficient.",
    image: "https://source.unsplash.com/random/800x600/?moving",
  },
  {
    id: 2,
    title: "How to Pack Fragile Items",
    slug: "packing-fragile-items",
    date: "May 18, 2025",
    excerpt:
      "Learn professional techniques for safely packing and transporting your delicate items during a move.",
    image: "https://source.unsplash.com/random/800x600/?packing",
  },
  {
    id: 3,
    title: "The Ultimate Moving Checklist",
    slug: "moving-checklist",
    date: "May 15, 2025",
    excerpt:
      "Stay organized during your move with our comprehensive checklist that covers everything from planning to unpacking.",
    image: "https://source.unsplash.com/random/800x600/?checklist",
  },
];

export const metadata = {
  title: "Blog | Professional Packers and Movers",
  description:
    "Read our latest articles about moving tips, packing guides, and relocation advice.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          Stay updated with the latest moving tips, industry news, and helpful
          guides.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
