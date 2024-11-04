import Tabbutton from "./Tabbutton";

const Categories = () => {
    return (
        <div className="md:mt-10 mt-2 bg-white flex flex-col justify-center items-center">
            <h2 className="font-medium font-Poppins text-3xl mb-5">Genre of Books</h2>
            <div className="flex flex-wrap gap-4 px-6 py-3 w-fit rounded-md">
                <Tabbutton to='/books/fiction'>Fiction</Tabbutton>
                <Tabbutton to='/books/sci-fi'>Sci-Fi</Tabbutton>
                <Tabbutton to='/books/historical fiction'>Historical Fiction</Tabbutton>
                <Tabbutton to='/books/romance'>Romance</Tabbutton>
                <Tabbutton to='/books/mystery'>Mystery</Tabbutton>
                <Tabbutton to='/books/thriller'>Thriller</Tabbutton>
                <Tabbutton to='/books/programming'>Programming</Tabbutton>
                <Tabbutton to='/books/software engineering'>Software Engineering</Tabbutton>
            </div>
        </div>)
}
export default Categories;