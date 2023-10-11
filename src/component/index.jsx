import React from "react";

const Test = () => {
  return (
    <div className="min-w-auto h-64 mx-20 my-5">
      <h2 className="text-2xl font-bold mb-5">The most powerful Books</h2>
      <div className="columns-4">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-boy-is-read-in-a-large-pile-of-books-image_2524774.jpg"
          className="h-auto rounded-2xl hover:shadow-lg"
          alt="book"
        />
        <p>&emsp;
          A book is a medium for recording information in the form of writing or
          images, typically composed of many pages bound together and protected
          by a cover. It can also be a handwritten or printed work of fiction or
          nonfiction, usually on sheets of paper fastened or bound together
          within covers.
        </p>
      </div>
      <p className="mt-5">What are the parts of a book?</p>
      <p className="text-sm">What are the parts of a book?</p>
    </div>
  );
};

export default Test;
