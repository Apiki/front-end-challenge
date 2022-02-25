import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.css";

function SkeletonMain() {
  return (
    <>
      <div className="skeleton-home">
        <div className="skeleton-img">
          <Skeleton height={90} width={160} count={1} borderRadius={16} />
        </div>
        <div className="skeleton-main">
          <Skeleton
            className="skeleton-text"
            height={20}
            width={500}
            count={3}
          />
        </div>
      </div>

      <div className="skeleton-home">
        <div className="skeleton-img">
          <Skeleton height={90} width={160} count={1} borderRadius={16} />
        </div>
        <div className="skeleton-main">
          <Skeleton
            className="skeleton-text"
            height={20}
            width={500}
            count={3}
          />
        </div>
      </div>
    </>
  );
}

export default SkeletonMain;
