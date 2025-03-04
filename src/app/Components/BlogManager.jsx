"use client";

import { useState } from "react";

const BlogManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Resume Tips for Freshers", category: "Resume Tip" },
    {
      id: 2,
      title: "Top 5 Interview Questions",
      category: "Interview Preparation",
    },
    { id: 3, title: "Resume Formatting Tricks", category: "Resume Tip" },
  ]);

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleEdit = (blog) => {
    alert(`Editing blog: ${blog.title}`);
    // You can redirect to an edit page or populate a form for editing
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-gray-100 rounded-lg">
      <h2 className="text-center text-lg font-semibold text-teal-700 mb-4">
        Manage Existing Blogs
      </h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or category..."
          className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Blogs List */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-gray-700 mb-4">Blog List</h3>

        <div className="space-y-3">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div>
                  <p className="font-medium text-gray-800">{blog.title}</p>
                  <p className="text-sm text-gray-500">{blog.category}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-800 text-sm"
                    onClick={() => handleEdit(blog)}>
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 text-sm"
                    onClick={() => handleDelete(blog.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default BlogManager;
