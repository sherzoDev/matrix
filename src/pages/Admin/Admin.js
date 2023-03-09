import React from "react";
<<<<<<< HEAD

const Admin = () => {
  return <div className="admin"></div>;
};

export default Admin;
=======
import { NavLink, Route, Routes } from "react-router-dom";
import { Buyurtmalar } from "../../components/Buyurtmalar/Buyurtmalar";
import { Customers } from "../../components/Сustomers/Сustomers";
import { ToifalarCategory } from "../../components/Toifalar/Toifalar";
import {
	AdminWrapperStyled,
	AdminTabsWrapperStyled,
	AdmininnerStyled,
} from "./Admin.styled";
export const Admin = () => {
	return (
		<>
			<AdminWrapperStyled>
				<AdminTabsWrapperStyled>
					<NavLink
						className={({ isActive }) =>
							isActive ? "category-link category-link-active" : "category-link"
						}
						to='foundation'
					>
						Foundation
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "category-link category-link-active" : "category-link"
						}
						to='customers'
					>
						Mahsus taklif
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "category-link category-link-active" : "category-link"
						}
						to='toifalar'
					>
						Savollar
					</NavLink>
				
				</AdminTabsWrapperStyled>
				<AdmininnerStyled>
					<Routes>
						<Route path='foundation' element={<Buyurtmalar />} />
						<Route path='customers' element={<Customers />} />
						<Route path='toifalar' element={<ToifalarCategory />} />
					</Routes>
				</AdmininnerStyled>
			</AdminWrapperStyled>
		</>
	);
};
>>>>>>> 8cea4e69c2b2968549f2fa887c732c3310170690
