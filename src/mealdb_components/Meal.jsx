
import { Card } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { useState } from "react";

const PAGE_SIZE = 12;

const Meal = ({error, loading, meals}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(meals.length / PAGE_SIZE);
  const displayedPage = Math.min(currentPage, Math.max(pageCount, 1));
  const visibleMeals = meals.slice(
    (displayedPage - 1) * PAGE_SIZE,
    displayedPage * PAGE_SIZE
  );

  return (

    <>
        <h1 className="text-center text-3xl py-5 font-extrabold">Latest Meal Category</h1>
        <div className="grid gap-2 px-5 py-10 bg-amber-50 grid-cols-3 justify-center">

            {
                loading && !error &&  <Spinner aria-label="Extra large spinner example" size="xl" />
            }

            {
                !error && !loading && visibleMeals.map(function(me){
                    return(
                        <Card
                            key={me.idIngredient || me.strIngredient}
                            className="max-w-sm"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={me.strThumb}
                            >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </Card>
                    )
                })
            }
            

        </div>

        {!error && !loading && pageCount > 1 && (
            <nav className="flex items-center justify-center gap-4 py-4" aria-label="Meal list pagination">
                <button
                    type="button"
                    className="rounded bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                    disabled={displayedPage === 1}
                >
                    Previous
                </button>
                <span aria-live="polite">
                    Page {displayedPage} of {pageCount}
                </span>
                <button
                    type="button"
                    className="rounded bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={() => setCurrentPage((page) => Math.min(page + 1, pageCount))}
                    disabled={displayedPage === pageCount}
                >
                    Next
                </button>
            </nav>
        )}
    </>
    
  )
}

export default Meal