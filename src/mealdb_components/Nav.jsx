
import { NavLink } from "react-router";
const Nav = () => {

    return(
    <div className="pb-10 pt-3 px-10 flex flex-row justify-between align-center">
        <h1 className="text-xl text-blue-950">
            Mealer
        </h1>

    <div>
        <NavLink to="/"  className={({ isActive, isPending }) =>
          isActive
            ? "bg-blue-600 text-white px-3 py-2 rounded-md font-bold"
            : "text-slate-300 hover:text-white px-3 py-2"
        }
> Invento </NavLink>
<NavLink to="/meals"  className={({ isActive, isPending }) =>
                      isActive
                        ? "bg-blue-600 text-white px-3 py-2 rounded-md font-bold"
                        : "text-slate-300 hover:text-white px-3 py-2"
                    }
            > Meals </NavLink>
    </div>
    </div>
    )
}

export default Nav