import { Skeleton } from "@mui/material";
import { FeedbackItem } from "../../pages/Profile/feedback/feedback.styled";

const FeedbackCardLoader = () => {
	return (
		<FeedbackItem>
			<Skeleton
				style={{ borderRadius: "50%" }}
				variant="circle"
				width="50px"
				height={50}
			/>
			<Skeleton variant="rounded" width="25%" height={12} />
			<Skeleton variant="rounded" width="40%" height={10} />
			<Skeleton variant="rounded" width="25%" height={12} />
			<Skeleton variant="rounded" width="100%" height={35} />
			<div className="content">
				<div className="images">
					<Skeleton variant="rounded" width={40} height={40} />
					<Skeleton variant="rounded" width={40} height={40} />
					<Skeleton variant="rounded" width={40} height={40} />
					<Skeleton variant="rounded" width={40} height={40} />
				</div>
			</div>
			<div className="rating">
				<Skeleton variant="rounded" width={10} height={10} />
				<Skeleton variant="rounded" width={10} height={10} />
				<Skeleton variant="rounded" width={10} height={10} />
				<Skeleton variant="rounded" width={10} height={10} />
				<Skeleton variant="rounded" width={10} height={10} />
				<Skeleton variant="rounded" width={40} height={10} />
			</div>
		</FeedbackItem>
	);
};

export default FeedbackCardLoader;
