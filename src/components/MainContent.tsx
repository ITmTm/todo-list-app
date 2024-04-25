import React, { FC } from "react";
import SelectList from "./SelectList";

const MainContent: FC = () => {
		return (
				<div className="column is-9">
						<div className="box">
								<SelectList />
						</div>
				</div>
		);
}

export default MainContent;