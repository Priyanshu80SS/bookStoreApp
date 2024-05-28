import Cards from "./Cards";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstoreapi-omega.vercel.app/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-12">
            Our courses delve into the rich narratives of beloved storybooks,
            offering deep insights and engaging discussions to bring the pages
            to life.Join our entertaining sessions where we explore the best
            comedic books, ensuring laughter and learning go hand in hand.Dive
            into the world of sports literature with our courses, perfect for
            those who live and breathe sports, from inspiring biographies to
            thrilling sports fiction.
          </p>
          <Link to="/">
            <button className="btn bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300  mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-col-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
