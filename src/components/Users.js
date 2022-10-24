import { useState, useContext } from "react";
import { PostContext } from "../utils/contexts/PostContext";
import { ThemeContext } from "../utils/contexts/ThemeContext";
import Post from "./Post";

const User = () => {
  const { users } = useContext(PostContext);
  const { theme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const totalusers = users.length;
  const pageCount = Math.ceil(totalusers / usersPerPage);
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentusers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => setCurrentPage((pageNumber) => pageNumber + 1);

  const previousPage = () => setCurrentPage((pageNumber) => pageNumber - 1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalusers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <main className={`main ${theme}`}>
      <ul className="users">
        {currentusers.map((user, index) => {
          return (
            //style these section to what you want thats all
            //check in your console, u will see the user array,
            <div>
              <h1>{user.name.first}</h1>
            </div>
          );
        })}
      </ul>

      <div className="pagination">
        <button
          onClick={previousPage}
          className="pagination-btn"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <ul className="pages">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`pagination-btn num-btn ${
                  number === currentPage ? "active" : ""
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default User;
