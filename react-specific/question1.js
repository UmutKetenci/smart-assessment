// ASSESSMENT:
// You will be implementing a table with its content fetched from https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10
// You will use functional components and hooks
// And a simple table styling in question1.css
// An example UI of a working version is presented in question1.gif
//

// BONUS POINT: implement pagination feature with Previous-Next buttons
// _start and _limit are query parameters which you can use to fetch some of the items, which is called 'pagination'
// _limit is always 10 for our case, but _start parameter can be changed to fetch portions of that data

// SOLUTION:
// React and ReactDOM is already imported in index.html

/* *******IMPORTANT******* */
//I only used single page because I was not sure if I was allowed to use add any other page. If allowed, I can create the same app by seperating my code into different Component pages. Please let me know since I don't want to lose any points because of this design...

import { useEffect, useState } from "React"; // hooks to be used in the project.

function App() {
  const [data, setData] = useState(); //to store our fetched data.
  const [paginatedData, setPaginatedData] = useState(); //to store our paginated fetched data.
  const [page, setPage] = useState(0); // to store current page state.
  const [active, setActive] = useState(); // to store active button state.

  useEffect(() => {
    const getData = async () => {
      //async
      const response = await fetch(
        //We can use axios as well but here I used fetch to fetch data.
        "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=100" //I set limit to 100 because i wanted more data to be able to paginate.
      );
      const result = await response.json(); // It returns a promise which resolves with the result of parsing the body text as JSON.

      setData(result); //storing result in data
      paginate(result); //pagination of our data
    };
    const paginate = (data) => {
      const itemsPerPage = 10; //you can set this as your preference. I wanted 10 pages per page.
      const pages = Math.ceil(data.length / itemsPerPage); // making sure we can divide the pages appropriately using Math.ceil().
      const newPaginatedData = Array.from({ length: pages }, (_, index) => {
        //creating new data using Array.from with length of pages.
        const start = index * itemsPerPage; // starting from index= 0 * 10, 1*10,2*10,3*10... we are partitioning our data with the length of pages.
        return data.slice(start, start + itemsPerPage); //0-9,10-19,20-29...90-99
      });
      setPaginatedData(newPaginatedData); //storing paginated data
    };
    getData(); //invoke the async fetch function.
  }, []);
  console.log("Total pages: ", paginatedData?.length); //to test if pagination worked correctly. Result should be 10 here. You can omit this line.
  return (
    <>
      {paginatedData ? ( //Waiting for file to load
        <section className="app-container">
          <table className="main-table">
            <thead>
              <tr>
                {/* {Object.keys(data[0]).map((head, index) => {
                  return <th key={index}>{head}</th>;
                })} */}
                <th>ID</th>
                {/* Hard Coded headers because json file is actually userId,id,title,completed instead of id,userId,title,completed. If you want you can use the non hard coded file from above where i commented the code. */}
                <th>User ID</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData[page].map(
                /* mapping our paginated data according to the "page" state. Page is 0 by default */
                ({ id, userId, title, completed }, index) => {
                  /* deconstructring the data*/ //placing our data to the cells.
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{userId}</td>
                      <td>{title}</td>
                      <td>{completed ? "yes" : "no"}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          <p
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "600",
              marginTop: "1rem",
            }}
          >
            Page: {page} {/*Showing the page number. */}
          </p>
          <div className="btn-container">
            <button // Button for moving to previous page
              onClick={() => {
                if (page > 0) {
                  setPage(page - 1); // To previous page
                  setActive(page - 1); //Active button is colored differently than others.
                }
              }}
            >
              previous
            </button>
            {paginatedData.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  setPage(index);
                  setActive(index);
                }}
                className={active === index ? "active" : ""} //If active index is equal to current button add class "active".
              >
                {index}
              </button>
            ))}

            <button
              onClick={() => {
                // Button for moving to next page
                if (page < paginatedData.length - 1) {
                  setPage(page + 1); // To next page
                  setActive(page + 1); //Active button is colored differently than others.
                }
              }}
            >
              next
            </button>
          </div>
        </section>
      ) : (
        <p>Loading...</p> //Will show loading if data is not loaded.
      )}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
