"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
interface AccountMessageProps {
	width: number;
	height: number;
	profile_img: URL;
	username: string;
	last_message?: string;
	setSelectChat: Dispatch<SetStateAction<string>>;
}
function AccountMessage({
	width = 40,
	height = 40,
	profile_img,
	username,
	last_message,
	setSelectChat,
}: AccountMessageProps) {
	return (
		<>
			<div className="flex my-3 cursor-pointer items-center m-4 justify-between"
			onClick={() => {
				setSelectChat(username);
			}}>
				<div className="w-1/5">
					<Image
						priority={true}
						src={"/api" + profile_img}
						width={width}
						height={height}
						alt=""
						className="rounded-full "
					/>
				</div>

				<div className="w-4/5 flex-grow" onClick={() => null}>
					<p className="flex items-center mx-4 text-sm text-primaryText ">
						{username}
					</p>
					<div className="overflow-hidden overflow-ellipsis">
						<span
							className="items-center mx-4 text-sm overflow-hidden overflow-ellipsis"
							style={{ color: "rgb(168, 168, 168)" }}
						>
							{last_message}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default AccountMessage;
